"use client";
import React, { useEffect, useRef, useState } from "react";

type JsonElement = {
  type: "element";
  tag: "div";
  content?: any;
  attributes?: { [key: string]: string };
  children?: JsonElement[];
} & HTMLElement;

interface BaseProps {
  type: "element" | "text";
  tag: string | undefined;
  content: string | null;
  attributes: { [key: string]: string };
  children: BaseProps[];
}
function CustomEditor() {
  const editableRef = useRef<JsonElement>(null);
  const [jsonOutput, setJsonOutput] = useState({});

  useEffect(() => {
    if (!!editableRef.current) {
      const root = editableRef.current;
      if (!root.children?.length) {
        const p = document.createElement("p");
        p.innerHTML = "<br/>";
        root.appendChild(p);
      }
    }
  }, []);

  const parseElement = (element: ChildNode) => {
    // DOM 노드의 타입을 체크하기 위해 nodeType property 사용
    // nodeType === 1 -> element  nodeType === 3 -> text
    let obj: BaseProps = {
      type: element.nodeType === 3 ? "text" : "element",
      tag:
        element instanceof HTMLElement
          ? element.tagName.toLowerCase()
          : undefined,
      content: element.nodeType === 3 ? element.textContent : null,
      attributes: {},
      children: [],
    };

    // 1. 처음 들어온 값은 document.createElement("div")로 들어온 값이기에 attr 없음
    if (element instanceof HTMLElement && element.attributes) {
      for (let i = 0; i < element.attributes.length; i++) {
        let attr = element.attributes[i];
        obj.attributes[attr.name] = attr.value;
      }
    }

    // 2. 재귀적 깊이 우선 탐색(depth-first search) 실행
    // 만약 자식 element에 자식이 있다면 해당 element를 끝까지 반복시키고 다음 element로 넘어간다.
    // 크롤링도 같은 기법으로 작성된다.
    element.childNodes.forEach((child) => {
      obj.children.push(parseElement(child));
    });
    return obj;
  };

  const convertToJSON = () => {
    if (editableRef.current) {
      const root = document.createElement("div");
      root.innerHTML = editableRef.current.innerHTML;
      console.log(root);
      const json = parseElement(root);
      setJsonOutput(json);
    }
  };

  function buttonHandler(tag) {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    const styledText = `<${tag}>${selectedText}</${tag}>`;

    console.log("range::", range);
    console.log("selectedText::", selectedText);
    console.log("styledText::", styledText);

    range.deleteContents();
    range.insertNode(
      new DOMParser().parseFromString(styledText, "text/html").body.firstChild,
    );
  }

  return (
    <div>
      <div
        ref={editableRef as any}
        spellCheck={true}
        suppressContentEditableWarning={true}
        contentEditable
        style={{
          border: "1px solid black",
          minHeight: "100px",
          padding: "10px",
        }}
        onInput={(e) => {
          console.log("onInput", e.currentTarget);
        }}
      ></div>
      <button onClick={() => buttonHandler("strong")}>클릭</button>
      <button onClick={convertToJSON}>Convert to JSON</button>
      <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
    </div>
  );
}

export default CustomEditor;
