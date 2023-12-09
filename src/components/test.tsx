"use client";
import React, { useRef, useState } from "react";

function ContentEditableComponent() {
  const editableRef = useRef(null);
  const [jsonOutput, setJsonOutput] = useState({});

  const parseElement = (element) => {
    var obj = {
      type: element.nodeType === 3 ? "text" : "element",
      tag: element.tagName ? element.tagName.toLowerCase() : null,
      content: element.nodeType === 3 ? element.textContent : null,
      attributes: {},
      children: [],
    };

    if (element.attributes) {
      for (var i = 0; i < element.attributes.length; i++) {
        var attr = element.attributes[i];
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
      const json = parseElement(root);
      setJsonOutput(json);
    }
  };

  return (
    <div>
      <div
        ref={editableRef}
        contentEditable
        style={{
          border: "1px solid black",
          minHeight: "100px",
          padding: "10px",
        }}
      >
        Edit this content
      </div>
      <button onClick={convertToJSON}>Convert to JSON</button>
      <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
    </div>
  );
}

export default ContentEditableComponent;
