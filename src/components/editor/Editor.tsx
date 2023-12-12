"use client";
import React, { useRef } from "react";

export default function Editor() {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className={"min-h-[395px]"}
      contentEditable={true}
      spellCheck={true}
      suppressContentEditableWarning={true}
      onFocus={(e) => {
        const element = e.target.children[0];
        if (!element) {
          // p 태그를 e.target.children[0]자리에 추가해주고 입력시 p태그에 입력되도록 한다.
          const p = document.createElement("p");
          p.innerHTML = "<br/>";
          e.target.appendChild(p);
          // p.focus();
        }
      }}
    ></div>
  );
}
