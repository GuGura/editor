"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  BLOCK_LIST,
  JsonElement,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_LINK,
  MARK_LIST,
  MARK_NORMAL,
  MARK_UNDERLINE,
} from "@/constant/editor";
import useConvertToJSON from "@/hook/useConvertToJSON";

function CustomEditor() {
  const editableRef = useRef<JsonElement>(null);
  const [log, setLog] = useState("");
  const { convertToJSON, jsonOutput } = useConvertToJSON(editableRef);

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
  function blockHandler(tag: string) {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    const current = editableRef.current;
    if (!(current && current.contains(range.commonAncestorContainer))) {
      return;
    }
  }
  function findParentNode(selection: Selection) {
    let isParentNode = false;
    let container: Node | ParentNode | null =
      selection.getRangeAt(0).startContainer;

    // 텍스트 노드인 경우, 부모 요소를 찾는다.
    if (container.nodeType === Node.TEXT_NODE) {
      container = container.parentNode;
      isParentNode = true;
    }

    return { container, isParentNode }; // 이것이 부모 노드입니다.
  }
  function markHandler(tag: string) {
    let log = "";
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const { container: parentContainer, isParentNode } =
      findParentNode(selection);

    const range = selection.getRangeAt(0);
    log += `0. range: ${range}\n`;
    const current = editableRef.current;
    if (!(current && current.contains(range.commonAncestorContainer))) {
      return;
    }
    if (MARK_LIST.includes(tag)) {
      // 1. 현재 커서가 있는 위치의 부모 태그를 찾는다.
      // 2. 현재 선택한 텍스트를 감싸는 태그를 찾는다.
      let style;
      const selectedText = range.toString();
      log += `1. selectedText: ${selectedText}\n`;

      let container: ParentNode | null =
        range.commonAncestorContainer as Element;
      log += `2. container: ${!!container}\n`;

      if (container.nodeType === Node.TEXT_NODE) {
        log += `3. container.nodeType: ${container.nodeType}\n`;
        container = container.parentNode;
      }

      log += `4. container.nodeType === Node.TEXT_NODE (${container})\n`;

      const computedStyle = window.getComputedStyle(container);

      const isBold = computedStyle.fontWeight === "700";
      if (container instanceof Element) {
        const containerTag = container.tagName.toLowerCase();
        log += `5.containerTag: ${containerTag}`;
      }
      let nodeElement;
      switch (tag) {
        case MARK_BOLD:
          if (isBold) {
            nodeElement = document.createTextNode(selectedText);
          } else {
            nodeElement = document.createElement("span");
            nodeElement.innerHTML = selectedText;
            nodeElement.style.fontWeight = "700";
          }
          break;
        case MARK_NORMAL:
          break;
        case MARK_LINK:
          break;
        case MARK_ITALIC:
          break;
        case MARK_UNDERLINE:
          break;
        case MARK_CODE:
          break;
      }
      // mark-bold
      // mark-code
      // mark-underlined
      // mark-link
      // mark-italic

      // const styledText = `<${tag}>${selectedText}</${tag}>`;
      console.log("range::", range);
      range.deleteContents();
      console.log("cloneContents::", range.cloneContents());
      console.log("range::", range);
      if (!!nodeElement) {
        range.insertNode(nodeElement);
      }
      // const domParser = new DOMParser().parseFromString(styledText, "text/html")
      //   .body.firstChild;
      // if (domParser) {
      //   range.insertNode(domParser);
      // }
      setLog(log);
    }
  }

  // if (container instanceof Element) {
  //   const containerTag = container.tagName.toLowerCase();
  //   console.log("containerTag::", containerTag);
  // }
  // if (BLOCK_LIST.includes(tag.toLowerCase())) {
  // } else {
  // }
  //
  // const styledText = `<${tag}>${selectedText}</${tag}>`;
  //
  // console.log("range::", range);
  // console.log(
  //   "commonAncestorContainer::",
  //   range.commonAncestorContainer.nodeType,
  // );
  // console.log(
  //   "commonAncestorContainer::",
  //   range?.commonAncestorContainer["tagName"],
  // );
  // console.log("selectedText::", selectedText);
  // console.log("styledText::", styledText);
  //
  // range.deleteContents();
  // range.insertNode(
  //   new DOMParser().parseFromString(styledText, "text/html").body.firstChild,
  // );

  return (
    <div>
      <div className={"flex flex-col whitespace-pre-wrap bg-gray-200"}>
        {log}
      </div>
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
      ></div>
      <button onClick={() => markHandler(MARK_BOLD)}>클릭 Strong</button>
      <button onClick={() => markHandler("h1")}>클릭 h1</button>
      <button onClick={convertToJSON}>Convert to JSON</button>
      <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
    </div>
  );
}

export default CustomEditor;
