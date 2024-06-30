import { type FC, MouseEvent, useContext, useState } from "react";
import {
  FaSearchPlus,
  FaRegTimesCircle,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

import PageContext from "../../store/page";
import Section from "../Section";
import "./Gallery.scss";

import pic1 from "../../assets/images/duo.jpeg";
import pic2 from "../../assets/images/img1.jpeg";
import pic3 from "../../assets/images/img2.jpeg";
import pic4 from "../../assets/images/img3.jpeg";
import pic5 from "../../assets/images/img4.jpeg";
import pic6 from "../../assets/images/img5.jpeg";
import pic7 from "../../assets/images/loqsh.jpeg";
import pic8 from "../../assets/images/main-1.jpeg";
import pic9 from "../../assets/images/main-2.jpeg";
import pic11 from "../../assets/images/main-3.jpeg";
import pic12 from "../../assets/images/mane-main.jpeg";

const imgs = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic11,
  pic12,
];

const Gallery: FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const page = useContext(PageContext)[0];

  const handleOpenImage = (e: MouseEvent<HTMLDivElement>) => {
    const { imageId } = e.currentTarget.dataset;
    setSelectedImage(Number(imageId));
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const switchImage = (e: MouseEvent<HTMLDivElement>) => {
    const { dir } = e.currentTarget.dataset;
    let nextImage = 0;

    if (dir === "right") {
      nextImage = Number(selectedImage) + 1;

      if (nextImage > imgs.length - 1) {
        nextImage = 0;
      }
    } else {
      nextImage = Number(selectedImage) - 1;

      if (nextImage < 0) {
        nextImage = imgs.length - 1;
      }
    }

    setSelectedImage(nextImage);
  };

  return (
    <Section visible={page === "gallery"}>
      <div className="galleryWrapper">
        {imgs.map((img, i) => (
          <div
            key={i}
            data-image-id={i}
            className="image"
            style={{ backgroundImage: `url(${img})` }}
            onClick={handleOpenImage}
          >
            <FaSearchPlus />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="maximizedImageWrapper">
          <div
            className="switchImageButton"
            data-dir="left"
            onClick={switchImage}
          >
            <FaAngleLeft />
          </div>
          <img src={imgs[selectedImage]} alt="maximized" />
          <div
            className="switchImageButton"
            data-dir="right"
            onClick={switchImage}
          >
            <FaAngleRight />
          </div>
          <div className="closeButton" onClick={handleClose}>
            <FaRegTimesCircle />
          </div>
        </div>
      )}
    </Section>
  );
};

export default Gallery;
