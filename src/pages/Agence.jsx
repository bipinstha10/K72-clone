import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "/images/agence_img1.jpg",
    "/images/agence_img2.jpg",
    "/images/agence_img3.jpg",
    "/images/agence_img4.jpg",
    "/images/agence_img5.jpg",
    "/images/agence_img6.jpg",
    "/images/agence_img7.jpg",
    "/images/agence_img8.jpg",
    "/images/agence_img9.jpg",
    "/images/agence_img10.jpg",
    "/images/agence_img11.jpg",
    "/images/agence_img12.jpg",
    "/images/agence_img13.jpg",
    "/images/agence_img14.jpg",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: false,
        start: "top 28%",
        end: "top -70%",
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }

          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden rounded-2xl h-[20vw] w-[15vw] top-96 left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
          />
        </div>
        <div className="relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre
              créativité. On reste humbles et on dit non aux gros egos, même le
              vôtre. Une marque est vivante. Elle a des valeurs, une
              personnalité, une histoire. Si on oublie ça, on peut faire de bons
              chiffres à court terme, mais on la tue à long terme. C’est pour ça
              qu’on s’engage à donner de la perspective, pour bâtir des marques
              influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen"></div>
    </div>
  );
};

export default Agence;
