import gsap from "gsap";

export const animatePin = () => {
  document.querySelectorAll(".pin").forEach((el) => {
    const pinFlagText = el.querySelector(".pin_flag_text");
    const pinFlagContent = el.querySelector(".pin_flag_content");
    const closeBtn = el.querySelector(".close_btn");

    el.addEventListener("click", () => {
      const status = el.getAttribute("data-status");

      if (status === "closed") {
        el.setAttribute("data-status", "open");

        gsap.to(el, {
          width: "200px",
          height: "120px",
          duration: 0.3,
          ease: "power2.out",
          rotate: "0deg",
          borderRadius: "0%",
          translateX: "0%",
          translateY: "0%",
          onComplete: () => {
            pinFlagText?.classList.remove("hidden");
            pinFlagContent?.classList.remove("hidden");
            closeBtn?.classList.remove("hidden");

            pinFlagText?.classList.add("flex");
            pinFlagContent?.classList.add("flex");
            closeBtn?.classList.add("flex");

            gsap.to([pinFlagText, pinFlagContent, closeBtn], {
              opacity: 1,
              duration: 0.1,
            });
          },
        });

        gsap.to(el.querySelector(".pin_flag"), {
          rotate: "0deg",
          duration: 0.1,
          borderRadius: "0%",
          ease: "power2.out",
        });
      }
    });

    el.querySelector(".close_btn")?.addEventListener("click", (ell) => {
      ell.stopPropagation();
      el.setAttribute("data-status", "closed");

      gsap.to([pinFlagText, pinFlagContent, closeBtn], {
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          pinFlagText?.classList.remove("flex");
          pinFlagContent?.classList.remove("flex");
          closeBtn?.classList.remove("flex");

          pinFlagText?.classList.add("hidden");
          pinFlagContent?.classList.add("hidden");
          closeBtn?.classList.add("hidden");

          gsap.to(el, {
            width: "30px",
            height: "30px",
            duration: 0.3,
            rotate: "-45deg",
            ease: "power2.out",
            borderRadius: "50% 50% 50% 0%",
          });

          gsap.to(el.querySelector(".pin_flag"), {
            rotate: "45deg",
            duration: 0.1,
            borderRadius: "1000%",
            ease: "power2.out",
          });
        },
      });
    });
  });
};
