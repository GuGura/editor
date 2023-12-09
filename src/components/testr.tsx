"use client";
import React, { useEffect, useRef } from "react";

function MyContentEditableComponent({ jsonData }) {
  const contentEditableRef = useRef(null);

  const renderContent = (json) => {
    if (json.type === "text") {
      return document.createTextNode(json.content);
    } else {
      const element = document.createElement(json.tag);
      if (json.content) {
        element.textContent = json.content;
      }
      if (json.children) {
        json.children.forEach((child) => {
          element.appendChild(renderContent(child));
        });
      }
      return element;
    }
  };

  useEffect(() => {
    if (contentEditableRef.current) {
      const htmlContent = renderContent(jsonData);
      contentEditableRef.current.innerHTML = ""; // 기존 내용을 지웁니다.
      contentEditableRef.current.appendChild(htmlContent);
    }
  }, [jsonData]); // jsonData가 변경될 때마다 이 코드가 실행됩니다.

  return (
    <div
      ref={contentEditableRef}
      contentEditable
      style={{ border: "1px solid black", minHeight: "100px", padding: "10px" }}
    >
      {/* contentEditable 내용이 여기에 표시됩니다 */}
    </div>
  );
}

export default MyContentEditableComponent;
