import type { FC, ReactNode } from "react";
import cn from "classnames";

import "./Section.scss";

interface SectionProps {
  children?: ReactNode;
  visible: boolean;
}

const Section: FC<SectionProps> = ({ children, visible }) => {
  return (
    <div
      className={cn("section", {
        visible,
      })}
    >
      {children}
    </div>
  );
};

export default Section;
