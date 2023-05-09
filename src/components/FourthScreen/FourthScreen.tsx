import React, { useState } from "react";
import IconButton from "../Ui/IconButton";
import leftArrow from "../../assets/icons/arrow-left.svg";
import QrDialog from "../QrDialog/QrDialog";
import { MIN_DESKTOP_WIDTH } from "../../constants/constants";
import { openAppStore } from "../../utils/openAppStore";
type Props = {};

// TODO: Fix height of text not 100% center
export default function FourthScreen({}: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleClick() {
    if (window.screen.width >= MIN_DESKTOP_WIDTH) {
      setIsDialogOpen(true);
      return;
    }
    openAppStore();
  }

  return (
    <div className="bg-blue flex flex-col gap-7 pb-12 pt-[4.815rem] px-5  text-center text-white items-center md:pb-[6.75rem] md:pt-[5.625rem]">
      <h2 className="font-Digibank-Regular text-[1.5rem] leading-tight md:leading-[1.1] md:text-[2.5rem]">
        כמה דקות ויש לך חשבון{" "}
        <span className="font-Digibank-Apparat-Book">Zero</span>
        <br />
        חשבון הבנק המשתלם ביותר
      </h2>

      <IconButton
        onClick={handleClick}
        iconPosition="end"
        icon={
          <img
            src={leftArrow}
            className="w-4 h-4 align-baseline"
            alt="חץ שמאלה"
          />
        }
        className="bg-white text-blue font-Digibank-Medium md:text-base leading-[1.1875rem]"
        text={
          <p>
            תתקדמו לחשבון{" "}
            <span className="font-Digibank-Apparat-Book">Zero</span>
          </p>
        }
      ></IconButton>
      <QrDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  );
}
