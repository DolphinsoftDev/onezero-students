import React from "react";
import oneZeroLogo from "../../assets/onezero-logo.svg";
import oneZeroLogoBlack from "../../assets/onezero-logo-black.svg";
import IconParagraph from "./IconParagraph";
import firstScreenIllustration from "../../assets/firstscreen-illustration.png";
import firstScreenIllustrationDesktop from "../../assets/firstscreen-illustration-desktop.png";

type Props = {};

export default function FirstScreen({}: Props) {
  return (
    <>
      <div className="relative bg-blue w-full h-full flex flex-col gap-[2.88rem] text-white p-5 px-6 pb-12  md:gap-0 md:flex-row md:justify-between md:px-20 md:pt-[5rem] 1xl:pt-[8.325rem]  1xl:pb-[6rem] md:items-stretch">
        <img
          className="self-end object-contain w-26 h-[1.4rem] mt-2 md:mt-0  md:w-30 md:h-7 md:hidden"
          src={oneZeroLogo}
          alt="לוגו"
        />
        <img
          className="hidden md:flex self-end object-contain w-40 h-8 absolute left-20 z-10 top-10"
          src={oneZeroLogoBlack}
          alt="לוגו"
        />
        <div className="md:flex md:my-6 md:gap-[9.125rem] md:justify-between ">
          <div className="flex flex-col gap-4 md:gap-0 font-Digibank-Regular">
            <h2 className="text-3xl md:text-[3.375rem] md:leading-[1.06] md:whitespace-nowrap 3xl:text-6xl ">
            סטודנטים? עדיין בבנק
              <br />
              של אבא ואמא?
            </h2>
            <p className="font-Digibank-Regular text-xl  md:text-[1.6875rem]  md:mt-12 3xl:text-3xl">
              מתקדמים לחשבון{" "}
              <span className="font-Digibank-Apparat-Book">Zero</span>
            </p>
            <div>
              <IconParagraph text="0 עמלות עו״ש" />
              <IconParagraph text="0 דמי כרטיס" />
              <IconParagraph text="שירות 24/6" />
            </div>

            <p className="text-[0.5rem] md:text-base font-Digibank-Regular md:relative top-16">
              בקרב עמלות העו״ש הנפוצות, בכפוף לתעריפון ולתנאי הבנק
            </p>
          </div>
        </div>

        {/* <div
          className="hidden absolute md:flex w-[50vw] top-0 left-0 h-full 2xl:w-[45vw]"
          style={{
            backgroundImage: `url(${firstScreenIllustrationDesktop})`,
            backgroundSize: "100% 101%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        /> */}

        <img
          className="hidden absolute md:flex w-[50vw] top-0 left-0 h-full 1xl:w-[48.125rem]"
          src={firstScreenIllustrationDesktop}
          alt="המחשה מסך ראשון"
        />
      </div>
      <img
        className="w-full  md:hidden"
        src={firstScreenIllustration}
        alt="המחשה מסך ראשון"
      />
    </>
  );
}
