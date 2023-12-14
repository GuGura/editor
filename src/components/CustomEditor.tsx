"use client";
import React, { useEffect, useRef } from "react";
import { BLOCK_LIST, JsonElement } from "@/constant/editor";
import useConvertToJSON from "@/hook/useConvertToJSON";

function CustomEditor() {
  const editableRef = useRef<JsonElement>(null);
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

  function buttonHandler(tag: string) {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    const current = editableRef.current;
    if (!(current && current.contains(range.commonAncestorContainer))) {
      return;
    }
    const selectedText = range.toString();
    let container = range.commonAncestorContainer;
    if (container.nodeType !== Node.ELEMENT_NODE) {
      container = container.parentNode;
      console.log("container::", container);
      console.log(
        "container.nodeType !== Node.ELEMENT_NODE::",
        container.nodeType,
      );
    }
    if (container instanceof Element) {
      const containerTag = container.tagName.toLowerCase();
      console.log("containerTag::", containerTag);
    }
    if (BLOCK_LIST.includes(tag.toLowerCase())) {
    } else {
    }

    const styledText = `<${tag}>${selectedText}</${tag}>`;

    console.log("range::", range);
    console.log(
      "commonAncestorContainer::",
      range.commonAncestorContainer.nodeType,
    );
    console.log(
      "commonAncestorContainer::",
      range?.commonAncestorContainer["tagName"],
    );
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
      <button onClick={() => buttonHandler("strong")}>클릭 Strong</button>
      <button onClick={() => buttonHandler("h1")}>클릭 h1</button>
      <button onClick={convertToJSON}>Convert to JSON</button>
      <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
    </div>
  );
}

export default CustomEditor;
