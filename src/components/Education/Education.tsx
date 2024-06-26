import { type FC, useContext } from "react";
import cn from "classnames";

import PageContext from "../../store/page";
import Section from "../Section";
import "./Education.scss";

const data = [
  {
    date: "2022 • Present",
    content: [
      "Soloist of “Young Artist Opera Program” Yerevan.",
      "Private classes with opera singer KS Olivera Miljakovic.",
      "Private classes with director of “Young Artist Opera Program” - Levon Javadyan.",
    ],
  },
  {
    date: "2017 • 2021",
    content:
      "Solo singing at Richard Wagner Conservatory for music and dramatic art",
  },
  {
    date: "2015 • 2021",
    content:
      "Private classes with opera singer Marine Khachatryan (Olivera Miljakovic’s student)",
  },
  {
    date: "2012 • 2014",
    content: "Classical singing at Yerevan State Conservatory of Komitas",
  },
  {
    date: "2001 • 2009",
    content: "Vocal and Piano Classes at “P.I. Tchaikovsky” music school in Yerevan",
  },
];

const Education: FC = () => {
  const page = useContext(PageContext)[0];

  return (
    <Section visible={page === "education"}>
      <div className="educationWrapper">
        {data.map(({ date, content }, index) => (
          <div
            key={index}
            className={cn("education-entity", {
              right: index % 2 === 1,
            })}
          >
            <div className="date">{date}</div>
            <div className="content">
              {typeof content === "string" ? (
                <span>{content}</span>
              ) : (
                <ul>
                  {content.map((contentEntity, i) => (
                    <li key={i}>{contentEntity}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
