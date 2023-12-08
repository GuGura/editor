import React, { forwardRef } from "react";
import { cn } from "@/lib/twmarge";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
};

const Contents = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className } = props;
  return (
    <div ref={ref} className={cn(`flex bg-red-600`, className)}>
      {children}
    </div>
  );
});

Contents.displayName = "Contents";

export default Contents;
