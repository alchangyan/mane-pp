import { ReactElement, useContext, type FC, type MouseEvent } from "react";
import cn from "classnames";

import {
  FaHome,
  FaMicrophoneAlt,
  FaGraduationCap,
  FaImages,
} from "react-icons/fa";
import PageContext from "../../store/page";

import "./Navigation.scss";

interface NavItemData {
  id: Pages;
  icon: ReactElement;
  tooltip: string;
}

const navIcons: NavItemData[] = [
  {
    id: "home",
    icon: <FaHome />,
    tooltip: "home"
  },
  {
    id: "stageExp",
    icon: <FaMicrophoneAlt />,
    tooltip: "stage experience"
  },
  {
    id: "education",
    icon: <FaGraduationCap />,
    tooltip: "education"
  },
  {
    id: "gallery",
    icon: <FaImages />,
    tooltip: "gallery"
  },
];

const Navigation: FC = () => {
  const [page, setPage] = useContext(PageContext);

  const handleChange = (e: MouseEvent<HTMLDivElement>) => {
    let { id } = e.currentTarget.dataset;

    if (id) {
      setPage(id as Pages);
    }
  };

  return (
    <div className="navigation">
      {navIcons.map(({ id, icon, tooltip }) => (
        <div
          key={id}
          className={cn("button", {
            active: page === id,
          })}
          data-id={id}
          onClick={handleChange}
        >
          {icon}
          <div className="tooltip">{tooltip}</div>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
