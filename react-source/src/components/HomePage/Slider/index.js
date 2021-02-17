import { useEffect } from "react";
import SliderItem from "./SliderItem";
import $ from 'jquery';
import Swiper from 'swiper/dist/js/swiper';

// Swiper và jQuery đã xoá trong file plugin.js của theme. 
// Hai thư viện này sẽ dùng bằng npm thay vì dùng trong file plugin.js

const dataSlide = [
  {
    id: 20,
    url: 'images/slider/bg2.jpg',
    title: 'Every Next Level of Your Life Will Demand a Different You',
    categories: [
      {
        id: 1,
        label: 'Popular'
      }
    ],
    author: {
      id: 1,
      name: 'Admin Jackson'
    }
  },
  {
    id: 30,
    url: 'images/slider/bg1.jpg',
    title: 'The creation of beauty is art to break rules and barriers',
    categories: [
      {
        id: 2,
        label: 'Technology'
      }
    ],
    author: {
      id: 1,
      name: 'Admin Jackson'
    }
  }
]

export default function Slider() {

  useEffect(() => {
    window.addEventListener('resize', function handler() {
      var bodyheight = $(this).height();
      $("#mt_banner").height(bodyheight);
    })
  }, [])

  useEffect(() => {
    // main.js
    var interleaveOffset = 0.5;
    var swiperOptions = {
      loop: true,
      speed: 3000,
      grabCursor: true,
      watchSlidesProgress: true,
      mousewheelControl: true,
      keyboardControl: true,
      // autoplay: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {
        delay: 3000,
      },
      fadeEffect: {
        crossFade: true
      },
      on: {
        progress: function () {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress;
            var innerOffset = swiper.width * interleaveOffset;
            var innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-inner").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function () {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function (speed) {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        }
      }
    };
    
    new Swiper(".swiper-container", swiperOptions);
  }, [])

  return (
    <section id="mt_banner">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            dataSlide.map(item => {
              return <SliderItem data={item} key={item.id} />
            })
          }
        </div>
        <div className="swiper-button-next swiper-button-white" />
        <div className="swiper-button-prev swiper-button-white" />
      </div>
    </section>
  )
}