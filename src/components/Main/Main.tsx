import { useContext, type FC } from "react";
import {
  FaArrowRight,
  FaInstagram,
  FaTelegramPlane,
  FaRegEnvelopeOpen  ,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

import Section from "../Section";
import PageContext from "../../store/page";
import "./Main.scss";

const Main: FC = () => {
  const [page, setPage] = useContext(PageContext);

  const handlePageChange = () => {
    setPage("stageExp");
  };

  return (
    <Section visible={page === "home"}>
      <div className="mainWrapper">
        <div className="image" />
        <div className="content-wrapper">
          <div className="content">
            <h1>Mane Baghdasaryan</h1>
            <div className="subtitle">Soprano singer</div>
            <div className="contacts">
              <div className="item">
                <a
                  href="https://www.instagram.com/mane_721/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://t.me/Mane211"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaTelegramPlane />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://www.facebook.com/mane.baghdasaryan.5"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaFacebookF />
                </a>
              </div>
              <div className="item">
                <a href="mailto:mane.baghdasaryan21@gmail.com">
                  <FaRegEnvelopeOpen   />
                </a>
              </div>
            </div>
            <p>
              I am a professional opera singer who began my career in 2012. My
              formal education in music commenced at the Yerevan State
              Conservatory of Komitas, and I furthered my studies at the Richard
              Wagner Conservatory in Vienna. Currently, I am a soloist in the
              "Young Artist Opera Program” in Yerevan.
            </p>
            <div className="button" onClick={handlePageChange}>
              <div>MORE ABOUT ME</div>
              <div>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Main;
