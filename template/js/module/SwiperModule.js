export default function SwiperModule() {
  function functionSlider(element, customizeOption, typePagi) {
    const swiperSlider = document.querySelectorAll(element);
    if (swiperSlider) {
      swiperSlider.forEach((item) => {
        const swiper = item.querySelector(".swiper");
        const pagi = item.querySelector(".swiper-pagination");
        const next = item.querySelector(".swiper-next");
        const prev = item.querySelector(".swiper-prev");
        if (!typePagi) {
          typePagi = "bullets";
        }
        var slide = new Swiper(swiper, {
          watchSlidesProgress: true,
          pagination: {
            el: pagi,
            type: typePagi,
            clickable: true,
          },
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          fadeEffect: {
            crossFade: true,
          },
          ...customizeOption,
        });
      });
    }
  }

  functionSlider(".element", {
    speed: 1200,
    autoplay: {
      delay: 2600,
    },
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    effect: "slide",
  });
  functionSlider(".program-slider", {
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    effect: "fade",
  });
  functionSlider(".slideSw", {
    speed: 1200,
    autoplay: {
      delay: 2600,
    },
    slidesPerView: "auto",
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    effect: "slide",
  });
  const hser_sw = new Swiper(".beneSlider .swiper", {
    slidesPerView: 3,
    speed: 1200,
    slidesPerColumn: 2,
    pagination: {
      el: ".beneSlider .swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      550: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
  });

  //   const prodt_silder = document.querySelectorAll(".prdsSlider");
  //   if (prodt_silder) {
  //     prodt_silder.forEach((item, i) => {
  //       const swiperMain = item.querySelector(".prdsMainSw .swiper");
  //       const swiperThumb = item.querySelector(".prdsThumbSw .swiper");

  //       const itemImg = new Swiper(swiperThumb, {
  //         speed: 1200,
  //         slidesPerView: "auto",
  //         grabCursor: true,
  //         loop: false,
  //         initialSlide: 0,
  //       });
  //       //
  //       const itemMain = new Swiper(swiperMain, {
  //         speed: 1200,
  //         slidesPerView: "auto",
  //         effect: "fade",
  //         loop: false,
  //         navigation: {
  //           nextEl: ".prds-control .swiper-next",
  //           prevEl: ".prds-control .swiper-prev",
  //         },
  //         initialSlide: 0,
  //         fadeEffect: {
  //           crossFade: true,
  //         },
  //         grabCursor: true,
  //         thumbs: {
  //           swiper: itemImg,
  //         },
  //       });
  //     });
  //     //
  //   }
}
