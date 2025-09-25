import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center text-white">
      <div className="text-[9.5vw]  flex justify-center items-center uppercase leading-[9.5vw]">
        L'étincelle
      </div>
      <div className="text-[9.5vw]  flex justify-center items-center uppercase leading-[9.5vw]">
        qui
        <div className="h-[8vw] w-[16vw] rounded-full overflow-hidden -mt-5">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw]  flex justify-center items-center uppercase leading-[9.5vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
