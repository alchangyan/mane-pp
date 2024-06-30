import { useEffect, useState, type FC, type ReactNode } from "react";
import cn from "classnames";

import "./Section.scss";

interface SectionProps {
  children?: ReactNode;
  visible: boolean;
}

const Section: FC<SectionProps> = ({ children, visible }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
      setAnimate(visible);
  }, [visible]);

  return (
    <div
      className={cn("section", {
        visible,
        animate,
      })}
    >
      {children}
    </div>
  );
};

export default Section;
