import { useState } from "react";
import { BaseProps } from "@/constant/editor";

export default function useConvertToJSON(ref: any) {
  const [jsonOutput, setJsonOutput] = useState({});

  const convertToJSON = () => {
    if (ref.current) {
      const root = document.createElement("div");
      root.innerHTML = ref.current.innerHTML;
      console.log(root);
      const json = parseElement(root);
      setJsonOutput(json);
    }
  };
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

  return { convertToJSON, jsonOutput };
}
