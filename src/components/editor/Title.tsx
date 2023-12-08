"use client";

import Contents from "@/components/Layout/Contents";
import Row from "@/components/Layout/Row";
import Button from "@/components/PrimitiveUI/Button";

export function Title() {
  return (
    <Contents
      className={"min-h-[450px] w-full border border-grayscale bg-primary"}
    >
      <Row className={"flex gap-[20px]"}>
        <Button className={"border border-grayscale"}>저장</Button>
        <Button className={"border border-grayscale"}>저장</Button>
        <Button className={"border border-grayscale"}>저장</Button>
        <Button className={"border border-grayscale"}>저장</Button>
      </Row>
    </Contents>
  );
}
