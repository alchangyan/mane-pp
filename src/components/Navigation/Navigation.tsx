import { ReactElement, useContext, type FC, type MouseEvent } from "react";
import cn from "classnames";

import {
  FaHome,
  FaMicrophoneAlt,
  FaGraduationCap,
  FaRegAddressCard,
} from "react-icons/fa";
import PageContext from "../../store/page";

import "./Navigation.scss";

interface NavItemData {
  id: Pages;
  icon: ReactElement;
}

const navIcons: NavItemData[] = [
  {
    id: "home",
    icon: <FaHome />,
  },
  {
    id: "stageExp",
    icon: <FaMicrophoneAlt />,
  },
  {
    id: "education",
    icon: <FaGraduationCap />,
  },
  {
    id: "contacts",
    icon: <FaRegAddressCard />,
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
      {navIcons.map(({ id, icon }) => (
        <div
          key={id}
          className={cn("button", {
            active: page === id,
          })}
          data-id={id}
          onClick={handleChange}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
