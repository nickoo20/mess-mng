import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import GoInsideButton from "./GoInsideButton";
import AnimatedButton from "./AnimatedButton";
const HostelCard = ({ title, content }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-3/4 mr-[38px]">
      <div className="mt-20 ">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className=" h-[480px] bg-zinc-950 bg-opacity-50 border-black border-4 text-black rounded-xl"
            >
              <div className="h-56  flex justify-center items-center rounded-t-xl  lg:pt-6">
                <img
                  src={d.img1}
                  alt=""
                  className="h-[200px]  lg:h-[250px] w-[200px] lg:w-[300px] object-bottom rounded-3xl rounded-t-none border-4 border-black "
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 pt-0 lg:p-4">
                <p className="text-[20px]  xl:text-[28px] pt-[-20px] lg:pt-3 text-orange-400 font-mono font-semibold">
                  {d.name}
                </p>

                <Link to={`/dashboard/${d.link}`}>
                  <GoInsideButton>Proceed</GoInsideButton>
                </Link>

                <Link to={`/dashboard/${d.link}/expense`}>
                  <AnimatedButton className="">Expenses</AnimatedButton>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    link: "hostel3",
    name: `Hostel1`,
    img: `/assets/tandon.jpeg1`,
    about: `Lorem ipsum dolor  elit, 
        sed do  aliqua.`,
  },

  {
    link: "hostel4",
    name: `Hostel2`,
    img: `/assets/tandon.jpeg1`,
    about: `Lorem ipsum dolor sit amet, consectetur.`,
  },

  {
    link: "hostel2",
    name: `Hostel3`,
    img: `/assets/tandon.jpeg1`,
    about: `Lorem ipsum dolor sit amet, consectetur.`,
  },

  {
    link: "hostel1",
    name: `Hostel4`,
    img: `/assets/tandon.jpeg1`,
    about: `Lorem ipsum dolor sit amet, consectetur .`,
  },
];

export default HostelCard;
