import { type FC, useContext } from "react";

import PageContext from "../../store/page";
import Section from "../Section";
import "./StageExp.scss";

const data = [
  [
    {
      title: "Young Artist Opera Program",
      date: "01.09.2021 - Present",
      content:
        "Performing as a soloist I have given numerous concerts across various cities in Armenia",
    },
    {
      title: "Altlerchenfelder church in Vienna",
      date: "26.05.2018",
      content: "“Jesus Christ Superstar”",
    },
    {
      title: "Musikverein Golden Hall Vienna",
      date: "05.03.2018",
      content: "Concert with Richard Wagner Conservatory Chor",
    },
  ],
  [
    {
      title: "Dorabella in Das OFF Theater (+opera company) Vienna",
      date: "25.11.2018, 27.11.2018",
      content: "W.A. Mozart “Cosi fan tutte”",
    },
    {
      title: "Das OFF Theater in Vienna",
      date: "29.04.2018",
      content: "G. Puccini “Gianni Schicchi-La Ciesca”",
    },
    {
      title: "Richard Wagner Conservatory",
      date: "02.02.2017 - 21.05.2021",
      content: "Twice a year Class Concert",
    },
  ],
];

const StageExp: FC = () => {
  const page = useContext(PageContext)[0];

  return (
    <Section visible={page === "stageExp"}>
      <div className="stageExpWrapper">
        <div className="info-block">
          {data[0].map(({ title, date, content }, i) => (
            <div className="info-entity left" key={i}>
              <div className="heading">{title}</div>
              <div className="date">{date}</div>
              <div className="content">{content}</div>
            </div>
          ))}
        </div>
        <div className="image" />
        <div className="info-block">
          {data[1].map(({ title, date, content }, i) => (
            <div className="info-entity" key={i}>
              <div className="heading">{title}</div>
              <div className="date">{date}</div>
              <div className="content">{content}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default StageExp;
