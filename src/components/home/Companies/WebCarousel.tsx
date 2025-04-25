import cn from "@/utils";
import { remToPx } from "@/utils";
import { useGSAP } from "@gsap/react";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { ICompany } from ".";
import gsap from "gsap";

const WebCarousel = ({
  companies,
  activeCompany,
  setActiveCompany,
  isAnimating,
  setIsAnimating,
}: {
  companies: ICompany[];
  activeCompany?: number;
  setActiveCompany: Dispatch<SetStateAction<number | undefined>>;
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (activeCompany !== undefined) {
        const currentEl = document.querySelector(`.c_item[data-active="true"]`);
        const activeEl = document.querySelector(
          `.c_item[data-id="${activeCompany}"]`
        );

        const animDur = 0.8;

        const containerWidth = containerRef.current?.clientWidth;

        document.querySelectorAll(".c_item").forEach((el, i) => {
          const indexDiff = Math.abs(i - activeCompany);

          if (i < activeCompany) {
            gsap.to(el, {
              translateX: `-${remToPx(indexDiff * 5) + indexDiff * 20}px`,
              ease: "power2.inOut",
              duration: animDur,
            });
          }

          if (i === activeCompany) {
            gsap.to(el, {
              translateX: 0,
              ease: "power2.inOut",
              duration: animDur,
            });
          }

          if (i > activeCompany) {
            gsap.to(el, {
              translateX: `${
                (containerWidth || 0) +
                remToPx((indexDiff - 1) * 5) +
                indexDiff * 20
              }px`,
              ease: "power2.inOut",
              duration: animDur,
            });
          }
        });

        gsap.to(activeEl, {
          duration: animDur,
          ease: "power2.inOut",
          width: `${containerWidth}px`,
          onComplete: () => {
            const video: HTMLVideoElement | undefined | null =
              activeEl?.querySelector(".c_item_video");
            if (video) {
              video.play();
            }
          },
        });

        if (activeEl?.querySelector(".c_item_overlay")) {
          gsap.to(activeEl?.querySelector(".c_item_overlay"), {
            duration: animDur,
            ease: "power2.inOut",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "3rem",
          });

          gsap.to(activeEl?.querySelector(".c_item_title"), {
            duration: 0.2,
            ease: "none",
            opacity: 1,
            delay: animDur - 0.2,
          });

          gsap.to(activeEl?.querySelector(".c_item_content"), {
            duration: 0.2,
            ease: "none",
            opacity: 1,
            delay: animDur - 0.2,
          });
        }

        if (currentEl) {
          gsap.to(currentEl, {
            duration: animDur,
            ease: "power2.inOut",
            width: "5rem",
            onStart: () => {
              const video: HTMLVideoElement | null =
                currentEl?.querySelector(".c_item_video");
              if (video) {
                video.pause();
              }
            },
            onComplete: () => {
              setIsAnimating(false);
            },
          });

          const overlay: HTMLDivElement | null =
            currentEl?.querySelector(".c_item_overlay");

          gsap.to(overlay, {
            duration: animDur,
            ease: "power2.inOut",
            backgroundColor: "rgba(255,255,255,0.85)",
            onComplete: () => {
              overlay!.style!.padding = "0";
            },
          });

          gsap.to(currentEl?.querySelector(".c_item_title"), {
            duration: 0.2,
            ease: "none",
            opacity: 0,
          });

          gsap.to(currentEl?.querySelector(".c_item_content"), {
            duration: 0.2,
            ease: "none",
            opacity: 0,
          });
        }

        activeEl?.setAttribute("data-active", "true");
        currentEl?.setAttribute("data-active", "false");
      }
    },
    {
      dependencies: [activeCompany],
      scope: containerRef,
    }
  );

  useEffect(() => {
    const initialActiveCompany = companies.findIndex(
      (company) => company.isActive
    );
    if (initialActiveCompany !== -1) {
      setActiveCompany(initialActiveCompany);
    }
  }, []);

  return (
    <div className="flex w-full h-[70vh] mt-16">
      <div ref={containerRef} className="relative w-full h-full">
        {companies.map((company, index) => (
          <div
            onClick={() => {
              if (index !== activeCompany && !isAnimating) {
                setIsAnimating(true);
                setActiveCompany(index);
              }
            }}
            key={index}
            data-id={index}
            style={{
              transform: `translateX(${
                index === 0 ? 0 : `calc(${index * 5}rem + ${index * 20}px)`
              })`,
            }}
            className={cn(
              "c_item absolute top-0 left-0 flex w-20 min-w-20 h-full",
              {
                "cursor-pointer": index !== activeCompany,
              }
            )}
          >
            <div className="absolute c_item_overlay company z-10 top-0 min-w-20 left-0 w-full h-full bg-white/85 p-12 justify-between flex flex-col">
              <div className="opacity-0 c_item_title  flex items-center w-max gap-x-2">
                {company.logo ? (
                  company.logo
                ) : (
                  <>
                    {/* <Image
                      src={TTLogo}
                      alt={company.name}
                      width={50}
                      height={50}
                    /> */}
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
              <div className="opacity-0 c_item_content flex w-full border items-center justify-between text-white border-white py-14 px-16">
                <div className="flex flex-col items-center">
                  <h6 className="text-8xl flex items-center font-bold ml-3">
                    <span>{company.metric.value}</span>{" "}
                    <span className="font-medium text-5xl ml-1">
                      {company.metric.suffix}
                    </span>
                  </h6>
                  <span className="font-medium mt-1">
                    {company.metric.description}
                  </span>
                </div>
                <p className="text-lg font-medium max-w-2/3">
                  {company.description}
                </p>
              </div>
            </div>
            <video
              muted
              playsInline
              loop
              poster={company.videoPoster}
              data-video={company.name}
              preload="none"
              autoPlay={false}
              data-video-playback="desktop-only"
              className="c_item_video object-cover absolute top-0 left-0 w-full h-full"
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
        ))}
      </div>
    </div>
  );
};

export default WebCarousel;
