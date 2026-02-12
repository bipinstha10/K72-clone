import { useRef, useContext } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavbarContext } from "../../context/NavbarContext";

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);
  console.log(navOpen);

  const gsapAnimation = () => {
    const tl = gsap.timeline();

    tl.set(".fullscreennav", {
      display: "block",
    });
    tl.to(
      ".stairing",
      {
        delay: 0.2,
        height: "100%",
        stagger: {
          amount: -0.3,
        },
      },
      "<",
    );
    tl.to(
      ".link",
      {
        opacity: 1,
        rotateX: 0,
        stagger: {
          amount: 0.3,
        },
      },
      "<",
    );
    tl.to(
      ".navlink",
      {
        opacity: 1,
      },
      "<",
    );
    tl.fromTo(
      ".navTriggerer",
      { x: 150 },
      {
        x: 0,
        duration: 0.5,
      },
      "<",
    );
  };

  const gsapAnimationReverse = () => {
    const tl = gsap.timeline();

    tl.to(".navTriggerer", {
      x: 150,
      duration: 0.5,
    });
    tl.to(
      ".link",
      {
        opacity: 0,
        rotateX: 90,
        stagger: {
          amount: 0.1,
        },
      },
      "<",
    );
    tl.to(
      ".navlink",
      {
        opacity: 0,
      },
      "<",
    );
    tl.to(
      ".stairing",
      {
        height: 0,
        stagger: {
          amount: 0.1,
        },
      },
      "<",
    );
    tl.set(".fullscreennav", {
      display: "none",
    });
  };

  useGSAP(() => {
    if (navOpen) {
      gsapAnimation();
    } else {
      gsapAnimationReverse();
    }
  }, [navOpen]);

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav text-white h-screen w-full absolute z-50 overflow-hidden"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinkRef} className="relative">
        <div className="navlink flex w-full p-2 items-start justify-between">
          <div className="p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="navTriggerer h-30  w-30 relative cursor-pointer"
          >
            <div className="h-40 w-1 absolute -rotate-45 origin-top bg-[#d3fd50]"></div>
            <div className="h-40 w-1 absolute right-0 rotate-45 origin-top bg-[#d3fd50]"></div>
          </div>
        </div>
        <div className="py-30">
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
              Projects
            </h1>
            <div className="moveLink absolute top-0 flex">
              <div className="moveX flex items-center bg-[#d3fd50] text-black">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center bg-[#d3fd50] text-black">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
              Agence
            </h1>
            <div className="moveLink absolute top-0 flex">
              <div className="moveX flex items-center bg-[#d3fd50] text-black">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center bg-[#d3fd50] text-black">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
              Contact
            </h1>
            <div className="moveLink absolute top-0 flex">
              <div className="moveX flex items-center bg-[#d3fd50] text-black">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center bg-[#d3fd50] text-black">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-y-1 border-white">
            <h1 className="font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
              Blouge
            </h1>
            <div className="moveLink absolute top-0 flex">
              <div className="moveX flex items-center bg-[#d3fd50] text-black">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center bg-[#d3fd50] text-black">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-10">
                  Pour Tout voir
                </h2>
                <img
                  className="h-32 w-80 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
