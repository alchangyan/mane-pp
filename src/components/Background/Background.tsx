import { useContext, type FC } from "react";
import cn from 'classnames'
import "./Background.scss";
import PageContext from "../../store/page";

const Background: FC = () => {
  const page = useContext(PageContext)[0];
  
  return (
    <div className={cn("background", {
      [page]: true
    })}>
      <div className="yellow" />
    </div>
  );
};

export default Background;
