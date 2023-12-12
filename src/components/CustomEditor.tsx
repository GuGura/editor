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
  tag: string | null;
  content: string | null;
  attributes?: { [key: string]: string };
  children: [];
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

  const parseElement = (element: HTMLDivElement) => {
    let obj: BaseProps = {
      type: element.nodeType === 3 ? "text" : "element",
      tag: element.tagName ? element.tagName.toLowerCase() : null,
      content: element.nodeType === 3 ? element.textContent : null,
      attributes: {},
      children: [],
    };
    if (element.attributes) {
      for (var i = 0; i < element.attributes.length; i++) {
        let attr = element.attributes[i];
        obj.attributes[attr.name] = attr.value;
      }
    }
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
      <button onClick={convertToJSON}>Convert to JSON</button>
      <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
    </div>
  );
}

export default CustomEditor;
