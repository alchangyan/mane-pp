import { type FC, useContext } from "react";
import PageContext from "../../store/page";

import Section from "../Section";
import "./Education.scss";

const Education: FC = () => {
  const page = useContext(PageContext)[0];

  return (
    <Section visible={page === 'education'}>
      <div className="wrapper">
        Education
      </div>
    </Section>
  );
};

export default Education;
