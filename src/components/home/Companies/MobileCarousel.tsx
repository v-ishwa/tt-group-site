import React from "react";
import { ICompany } from ".";
import { useKeenSlider } from "keen-slider/react";

const MobileCarousel = ({ companies }: { companies: ICompany[] }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1,
        },
      },
    },
    slideChanged: (e) => {
      const prevVideo: HTMLVideoElement | null = document.querySelector(
        `.com_video[data-videostatus="playing"]`
      );
      if (prevVideo) {
        prevVideo.setAttribute("data-videostatus", "paused");
        prevVideo.pause();
      }

      const video: HTMLVideoElement | null = document.querySelector(
        `.com_video[data-videoid="${e.track.details.rel}"]`
      );
      if (video) {
        video.setAttribute("data-videostatus", "playing");

        video.setAttribute("playsinline", "true");
        video.muted = true;
        video.play();
      }
    },
  });

  return (
    <div className="flex w-full flex-col h-[400px] lg:px-0">
      <div ref={sliderRef} className="keen-slider mt-10 h-full w-full lg:mt-16">
        {companies?.map((company, i) => (
          <div
            key={company.name}
            className={"flex w-full h-full keen-slider__slide"}
          >
            <div className="flex w-full h-full relative">
              <div className="company absolute  top-0 z-20 left-0 w-full h-full bg-black/50 p-5 lg:p-12 justify-between flex flex-col">
                <div className="flex items-center w-max gap-x-2">
                  {company.logo ? (
                    company.logo
                  ) : (
                    <>
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-brand"
                          d="M13.2551 15.2232L9.72624 18.752H4.73242L13.2551 10.2294L13.2551 15.2232Z"
                        />
                        <path
                          className="fill-brand"
                          d="M18.9644 14.9064L15.0169 18.8132L15.0169 6.29154L18.9644 2.34399V14.9064Z"
                        />
                        <path
                          className="fill-brand"
                          d="M17.553 0.8479L13.6351 4.76572L0.982422 4.76572L4.90024 0.8479L17.553 0.8479Z"
                        />
                        <path
                          className="fill-brand"
                          d="M9.48363 6.52905L0.969055 15.0436L0.969055 10.1712L4.61123 6.52905L9.48363 6.52905Z"
                        />
                      </svg>
                      <h2 className="text-brand text-3xl font-bold ml-3">
                        {company.name}
                      </h2>
                    </>
                  )}
                </div>
                <div className="flex w-full border items-center justify-between text-white border-white py-4">
                  <div className="flex flex-col pl-3">
                    <h6 className="text-3xl flex items-center font-bold">
                      <span>{company.metric.value}</span>{" "}
                      <span className="font-medium text-lg">
                        {company.metric.suffix}
                      </span>
                    </h6>
                    <span className="text-xs mt-1">
                      {company.metric.description}
                    </span>
                  </div>
                  <p className="text-sm font-medium line-clamp-4 max-w-2/3">
                    {company.description}
                  </p>
                </div>
              </div>
              <video
                muted
                playsInline
                loop
                controls={false}
                poster={company.videoPoster}
                data-video={company.name}
                preload="none"
                autoPlay
                data-videoid={i}
                data-videostatus="paused"
                className="object-cover com_video z-10 absolute top-0 left-0 w-full h-full"
              >
                <source
                  data-src={company.src}
                  type="video/webm"
                  src={company.src}
                />
                <source
                  data-src={company.mp4Src}
                  type="video/mp4"
                  src={company.mp4Src}
                />
              </video>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex gap-x-5 text-white">
          <div
            onClick={() => {
              instanceRef.current?.prev();
            }}
            className="bg-neutral-800 w-12 cursor-pointer h-12 flex justify-center items-center"
          >
            <svg
              width="26"
              height="23"
              viewBox="0 0 26 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7916 22.6328C11.063 22.883 11.4218 23.0166 11.7907 23.0046C12.1596 22.9926 12.509 22.8361 12.7635 22.5688C13.018 22.3015 13.1572 21.9448 13.1511 21.5758C13.145 21.2067 12.994 20.8549 12.7308 20.5962L5.05048 13.2872L24.271 12.9517C24.6439 12.9452 24.9989 12.7908 25.258 12.5225C25.5171 12.2543 25.659 11.894 25.6525 11.5211C25.646 11.1482 25.4916 10.7932 25.2233 10.5341C24.955 10.275 24.5948 10.1331 24.2219 10.1396L5.00983 10.475L12.4221 2.91245C12.6761 2.64469 12.8147 2.2878 12.808 1.91876C12.8012 1.54973 12.6496 1.19815 12.386 0.939889C12.1223 0.681622 11.7676 0.537376 11.3985 0.538279C11.0294 0.53918 10.6755 0.685157 10.4131 0.944709L0.843707 10.7066C0.680767 10.873 0.552517 11.0702 0.466409 11.2866C0.380302 11.5029 0.338053 11.7343 0.342117 11.9671C0.346182 12.2 0.396479 12.4297 0.490086 12.643C0.583693 12.8562 0.718744 13.0488 0.887393 13.2094L10.7916 22.6328Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            onClick={() => {
              instanceRef.current?.next();
            }}
            className="bg-neutral-800 w-12 cursor-pointer h-12 flex justify-center items-center"
          >
            <svg
              width="26"
              height="23"
              viewBox="0 0 26 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3974 0.89128C15.1305 0.636348 14.774 0.496572 14.405 0.502112C14.0359 0.507651 13.6839 0.658064 13.4247 0.920892C13.1656 1.18372 13.0202 1.53789 13.0198 1.90699C13.0195 2.27608 13.1643 2.6305 13.423 2.89378L20.9746 10.3357L1.75113 10.3357C1.37817 10.3357 1.02049 10.4838 0.756765 10.7475C0.493042 11.0113 0.344883 11.3689 0.344883 11.7419C0.344883 12.1149 0.493042 12.4726 0.756765 12.7363C1.02049 13 1.37817 13.1482 1.75113 13.1482L20.9661 13.1482L13.423 20.5802C13.1643 20.8435 13.0195 21.1979 13.0198 21.567C13.0202 21.9361 13.1656 22.2902 13.4247 22.5531C13.6839 22.8159 14.0359 22.9663 14.405 22.9719C14.774 22.9774 15.1305 22.8376 15.3974 22.5827L25.1357 12.9892C25.3015 12.8257 25.4332 12.6309 25.523 12.416C25.6129 12.2012 25.6592 11.9706 25.6592 11.7377C25.6592 11.5048 25.6129 11.2742 25.523 11.0594C25.4332 10.8445 25.3015 10.6497 25.1357 10.4861L15.3974 0.89128Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
