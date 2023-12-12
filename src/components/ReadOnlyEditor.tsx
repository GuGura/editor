"use client";
import React, { useEffect, useRef, useState } from "react";

interface JsonElement {
  type: "element";
  tag: "div";
  content?: any;
  attributes?: { [key: string]: string };
  children?: JsonNode[];
}

interface JsonText {
  type: "text";
  content: string;
}

type JsonNode = JsonElement | JsonText;

interface MyContentEditableComponentProps {
  defaultJson?: JsonNode;
}
const ReadOnlyEditor: React.FC<MyContentEditableComponentProps> = ({
  defaultJson,
}) => {
  const editableRef = useRef<HTMLDivElement>(null);

  const renderContent = (json: JsonNode): Node => {
    if (json?.type === "text") {
      return document.createTextNode(json.content);
    } else {
      const element = document.createElement(json?.tag);
      if (json?.attributes) {
        Object.keys(json?.attributes).forEach((key) => {
          element.setAttribute(key, json.attributes[key]);
        });
      }
      if (json?.children) {
        json.children.forEach((child) => {
          element.appendChild(renderContent(child));
        });
      }
      return element;
    }
  };

  useEffect(() => {
    if (!!editableRef.current) {
      const root = editableRef.current;
      if (!!root.children?.length) {
        const initialContent = renderContent(defaultJson);
        editableRef.current.innerHTML = ""; // 기존 내용을 지웁니다.
        editableRef.current.appendChild(initialContent);
      } else {
        const p = document.createElement("p");
        p.innerHTML = "<br/>";
        root.appendChild(p);
      }
    }
  }, [defaultJson]);

  return (
    <div
      ref={editableRef}
      contentEditable={false}
      spellCheck={true}
      suppressContentEditableWarning={true}
      style={{ border: "1px solid black", minHeight: "100px", padding: "10px" }}
    >
      {!editableRef.current?.children.length && (
        <div className={"loading loading-spinner"} />
      )}
      {/* contentEditable 내용이 여기에 표시됩니다 */}
      OnlyRead
    </div>
  );
};

export default ReadOnlyEditor;
