import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import "./Testimonials.css";

const slideData = [
  {
    name: "Taylor Swift",
    src: "https://images.unsplash.com/photo-1528045252873-2bf37023d58b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Brock Wegner",
    src: "https://images.unsplash.com/photo-1631761320198-4bc79af9029b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Mark Bishop",
    src: "https://images.unsplash.com/photo-1631701119265-33ca2b80d00d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Anna Oliinyk",
    src: "https://images.unsplash.com/photo-1588676478262-3d48b5a0c60e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Taylor Swift",
    src: "https://images.unsplash.com/photo-1528045252873-2bf37023d58b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Brock Wegner",
    src: "https://images.unsplash.com/photo-1631761320198-4bc79af9029b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Mark Bishop",
    src: "https://images.unsplash.com/photo-1631701119265-33ca2b80d00d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Anna Oliinyk",
    src: "https://images.unsplash.com/photo-1588676478262-3d48b5a0c60e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
          <h2>{card.name}</h2> <p>lorem ipsum</p>
        </div>
        <div className="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet expedita iusto sequi sapiente Lorem ipsum dolor sit amet.</div>
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
