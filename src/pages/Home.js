import React from "react";
import Slider from "../components/Slider";
import bitmap2 from "../assets/Bitmap2.png";
import bitmap3 from "../assets/Bitmap3.png";
import bitmap4 from "../assets/Bitmap4.png";
import bitmap5 from "../assets/Bitmap5.png";
import bitmap6 from "../assets/Bitmap6.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${Bitmap})` }}
      className="w-full h-[900px] z-0"
    >
      <Slider />
      <div className="flex flex-col md:flex-row items-center justify-center h-[40rem]">
        <div className="h-full w-full md:w-1/2">
          <img className="h-full w-full" src={bitmap2} alt="bitmap2" />
        </div>
        <div className="h-full w-full md:w-1/2 p-4 md:px-16 flex flex-col items-start justify-center space-y-2">
          <p className="uppercase text-[#D4B254] text-xs tracking-[3px]">
            Quality Craftmanship from build to delivery
          </p>
          <p className="font-semibold text-3xl text-[#222222]">
            Discover the beauty of a handmade kitchen
          </p>
          <p className="text-xs py-4 text-[#777777] leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
            feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
            eu pharetra tincidunt, mauris purus ultrices.
          </p>
          <button className="uppercase rounded-[30px] bg-[#D4B254] space-x-3 py-3 px-12 text-xs my-4 text-[#fff]">
            Order now
          </button>
        </div>
      </div>
      <div className="bg-[#EEEEEE]">
        <div className="px-4 md:container md:px-[230px] my-8 py-16 md:py-24 text-center">
          <p className="uppercase text-[#D4B254] text-xs tracking-[3px]">
            What Our Customers Say{" "}
          </p>
          <p className="font-semibold text-3xl text-[#222222]">
            Over 35 years experience designing handmade kitchens{" "}
          </p>
          <p className="text-xs py-4 text-[#777777] leading-loose">
            Since my first contact I have received a very high level of customer
            service and advice with my kitchen plans. Ben responded very quickly
            to all of my emails and delivery of the kitchen was as planned.
          </p>
          <button className="uppercase rounded-[30px] bg-[#D4B254] space-x-3 py-3 px-12 text-xs my-4 text-[#fff]">
            Frequently Asked Questions
          </button>
        </div>
      </div>
      <div className="p-8">
        <p className="text-[#222222] text-center font-semibold text-3xl p-5">
          Customer Gallery
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="w-[19rem]">
            <img className="w-full" src={bitmap3} alt="g1" />
          </div>
          <div className="w-[19rem]">
            <img className="w-full" src={bitmap4} alt="g2" />
          </div>
          <div className="w-[19rem]">
            <img className="w-full" src={bitmap5} alt="g3" />
          </div>
          <div className="w-[19rem]">
            <img className="w-full" src={bitmap6} alt="g4" />
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <button className="uppercase rounded-[30px] bg-[#D4B254] space-x-3 py-3 px-12 text-xs my-4 text-[#fff]">
            View More
          </button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
