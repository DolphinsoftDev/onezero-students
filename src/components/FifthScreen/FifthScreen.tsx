import React, { CSSProperties, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Controller, Pagination, Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import Link from "../Ui/Link";
import galleryOne from "../../assets/mobile-imgs/gallery-one.png";
import galleryOnePlus from "../../assets/mobile-imgs/gallery-one-plus.png";
import galleryZero from "../../assets/mobile-imgs/gallery-zero.png";
type Props = {};

function SlideHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[2.84rem] mb-5 md:leading-none md:mb-[2.8125rem] font-Digibank-Apparat-Book">
      {children}
    </h2>
  );
}
function SlideParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-[1.375rem] font-Digibank-Regular">
      {children}
    </p>
  );
}

function SlideCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div
      className="flex flex-col justify-end text-start text-white w-full rounded-[10px] bg-no-repeat  bg-center bg-cover py-6 px-[1.15rem] h-[25rem] md:w-[21rem]	"
      style={style}
    >
      {children}
    </div>
  );
}
const slideFooterStyle =
  "text-xl text-right font-Digibank-Regular text-darkGrey p-3";

const activeButtonStyle = "text-white bg-black";
export default function FifthScreen({}: Props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>();
  function handleGalleryButtonClick(index: number) {
    setActiveSlideIndex(index);
    swiperInstance?.slideTo(index);
  }
  return (
    <div className="flex flex-col items-center justify-center place-content-center py-14 px-0 gap-8 text-center">
      <h2 className="font-Digibank-Medium  text-2xl leading-7 md:text-[2.5rem] md:leading-4">
        המסלולים שלנו
      </h2>
      <Link href="https://www.onezerobank.com/plans/" className="md:text-2xl">
        לפירוט המסלולים המלא
      </Link>

      <div className="hidden md:flex justify-between lg:w-11/12 xl:w-5/6 3xl:w-4/6">
        <div>
          <SlideCard style={{ backgroundImage: `url(${galleryOne})` }}>
            <SlideHeader>One</SlideHeader>
            <SlideParagraph>
              בנקאות פרטית עם מנהלי כספים אישיים,
              <br />
              מענה אנושי 24/6, פטור מורחב מעמלות
              <br />
              ומסחר משתלם בניירות ערך.
            </SlideParagraph>
          </SlideCard>
          <div className="text-right px-3 my-3">
            <h3 className="text-xl leading-5 font-Digibank-Medium font-semibold  text-darkGrey">
              חודשיים התנסות
            </h3>
            <p className={`${slideFooterStyle} px-0 py-0`}>
              לאחר מכן ₪49 / לחודש בסיום התקופה{" "}
            </p>
          </div>
        </div>
        <div>
          <SlideCard style={{ backgroundImage: `url(${galleryZero})` }}>
            <SlideHeader>Zero</SlideHeader>
            <SlideParagraph>
              ללא תשלום חודשי
              <br />
              קבוע, ללא עמלות עו״ש ודמי כרטיס.
              <br />
              <br />
            </SlideParagraph>
          </SlideCard>
        </div>
        <div>
          <SlideCard style={{ backgroundImage: `url(${galleryOnePlus})` }}>
            <SlideHeader>+One</SlideHeader>
            <SlideParagraph>
              כל מה שמציע One, פלוס מגוון שירותי <br />
              ייעוץ פיננסי, חבילת ניירות ערך משתלמת,
              <br />
              מענה אנושי 24/6 ופטור מורחב מעמלות.
            </SlideParagraph>
          </SlideCard>
          <p className={slideFooterStyle}>₪119 / לחודש</p>
        </div>
      </div>

      <div className="flex gap-8 font-Digibank-Apparat-Book text-base md:hidden ">
        <button
          onClick={() => {
            handleGalleryButtonClick(0);
          }}
          className={`px-4 py-2 rounded-[3rem] ${
            activeSlideIndex === 0 && activeButtonStyle
          }`}
        >
          One
        </button>
        <button
          onClick={() => {
            handleGalleryButtonClick(1);
          }}
          className={`px-4 py-2 rounded-[3rem] ${
            activeSlideIndex === 1 && activeButtonStyle
          }`}
        >
          Zero
        </button>
        <button
          onClick={() => {
            handleGalleryButtonClick(3);
          }}
          className={`px-4 py-2 rounded-[3rem] ${
            activeSlideIndex === 2 && activeButtonStyle
          }`}
        >
          +One
        </button>
      </div>

      <Swiper
        pagination={{
          enabled: true,
          bulletActiveClass: "swiper-pagination-bullet-active bg-black",
        }}
        modules={[Pagination, Controller]}
        className="w-11/12 h-[31rem] md:hidden"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        controller={{ control: swiperInstance }}
        onSwiper={(swiper) => {
          swiper.slideTo(1);
          setActiveSlideIndex(1);
          setSwiperInstance(swiper);
        }}
      >
        <SwiperSlide>
          <SlideCard style={{ backgroundImage: `url(${galleryOne})` }}>
            <SlideHeader>One</SlideHeader>
            <SlideParagraph>
              בנקאות פרטית עם מנהלי כספים אישיים,
              <br />
              מענה אנושי 24/6, פטור מורחב מעמלות
              <br />
              ומסחר משתלם בניירות ערך.
            </SlideParagraph>
          </SlideCard>
          <div className="text-right px-3 my-3">
            <h3 className="text-xl leading-5 font-Digibank-Medium font-semibold  text-darkGrey">
              חודשיים התנסות
            </h3>
            <p className={`${slideFooterStyle} px-0 py-0`}>
              ₪49 / לחודש בסיום התקופה
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard style={{ backgroundImage: `url(${galleryZero})` }}>
            <SlideHeader>Zero</SlideHeader>
            <SlideParagraph>
              ללא תשלום חודשי קבוע,
              <br />
              ללא עמלות עו״ש ודמי כרטיס.
            </SlideParagraph>
          </SlideCard>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard style={{ backgroundImage: `url(${galleryOnePlus})` }}>
            <SlideHeader>+One</SlideHeader>
            <SlideParagraph>
              כל מה שמציע One, פלוס מגוון שירותי ייעוץ
              <br />
              פיננסי, חבילת ניירות ערך משתלמת, מענה
              <br />
              אנושי 24/6 ופטור מורחב מעמלות.
            </SlideParagraph>
          </SlideCard>
          <p className={slideFooterStyle}>₪119 / לחודש</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
