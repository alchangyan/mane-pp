import { type FC, useContext } from "react";

import PageContext from "../../store/page";
import Section from "../Section";
import "./Contacts.scss";

const Contacts: FC = () => {
  const page = useContext(PageContext)[0];

  return (
    <Section visible={page === 'contacts'}>
      <div className="wrapper">
        Contacts
      </div>
    </Section>
  );
};

export default Contacts;
