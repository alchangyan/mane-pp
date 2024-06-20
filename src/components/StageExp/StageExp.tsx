import { type FC, useContext } from "react";

import PageContext from "../../store/page";
import Section from "../Section";
import "./StageExp.scss";

const StageExp: FC = () => {
  const page = useContext(PageContext)[0];

  return (
    <Section visible={page === 'stageExp'}>
      <div className="wrapper">
        stage exp
      </div>
    </Section>
  );
};

export default StageExp;
