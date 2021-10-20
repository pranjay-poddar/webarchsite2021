import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import "./Testimonials.css";

const slideData = [
  {
    name: "Parth Hingorani",
    src: require("../../files/testimonials/parth.jpg").default,
    batch: "(Batch-2019)",
    text: "Here's the one thing that I want to say: If you're motivated enough, the opportunities are endless."
  },
  {
    name: "Punit Gupta",
    src: require("../../files/testimonials/punit.jpg").default,
    batch: "(Batch-2015)",
    text: "Webarch is the perfect place to nurture your interests in Tech. It helped me develop my skills in frontend, backend and even Devops."
  },
  {
    name: "Vaanya Gupta",
    src: require("../../files/testimonials/vaanya.jpg").default,
    batch: "(Batch-2018)",
    text: "My four years here taught me so much and as we became seniors, we tried our best to give our juniors the same culture and legacy! It was the best, warmest and most professional club I ever worked at."
  },
  {
    name: "Rohan Anand",
    src: require("../../files/testimonials/rohan.jpg").default,
    batch: "(Batch-2018)",
    text: "Webarch is an excellent place where I was able to cultivate my technical skills to have me ready for the future."
  },
  {
    name: "Aayush Chaurasia",
    src: require("../../files/testimonials/ayus.jpg").default,
    batch: "(Batch-2017)",
    text: "A truly wonderful personal and professional experience. One place which motivates the members to learn technical skills in their areas of interest and practice their knowledge."
  },
  {
    name: "Anshul Sahni",
    src: require("../../files/testimonials/anshul.jpeg").default,
    batch: "(Batch-2016)",
    text: "The lessons learnt and teachings taken from Webarch are something which one cannot forget for his whole life no matter how far the person will go, once a Webarchian, always a Webarchian."
  },
  {
    name: "Mohit Gupta",
    src: require("../../files/testimonials/mohit.jpg").default,
    batch: "(Batch-2019)",
    text: "The only work place in SRM where you can become passionate about being a team player. You'll be guided by the best brains and at some point in time you shall pass on the knowledge."
  },
];
const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={card.src} alt="" />
      </div>
      <div className="card-body">
        <div className="name">
          <h2>{card.name}</h2> <p>{card.batch}</p>
        </div>
        <div className="quote">{card.text}</div>
      </div>
    </div>
  );
};
const Testimonials = ({alt}) => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselIndex]);

  return (
    <div className={alt ? "container-testimonials alt" : "container-testimonials"}>
      <Flickity flickityRef={(c) => (flkty = c)} options={{ initialIndex: 2 }}>
        {slideData.map((card, i) => {
          return <Card card={card} key={i} />;
        })}
      </Flickity>
    </div>
  );
};

export default Testimonials;
