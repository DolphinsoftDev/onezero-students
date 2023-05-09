import React, { useState } from "react";
import IconButton from "../Ui/IconButton";
import leftArrow from "../../assets/icons/arrow-left-white.svg";
import phone from "../../assets/icons/phone.svg";
import call from "../../assets/icons/call.svg";
import QrDialog from "../QrDialog/QrDialog";
import oneZeroLogo from "../../assets/onezero-logo-black.svg";

import {
  MIN_DESKTOP_WIDTH,
  ONEZERO_DISPATCH_PHONE_NUMBER,
} from "../../constants/constants";
import { openAppStore } from "../../utils/openAppStore";
import { isDispatchOpen } from "../../utils/onezeroDispatch";
type Props = {
  className?: string;
};

export default function StickyFooter({ className }: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleClick() {
    if (window.screen.width >= MIN_DESKTOP_WIDTH) {
      setIsDialogOpen(true);
      return;
    }
    openAppStore();
  }
  function handleCall() {
    window.open(`tel:${ONEZERO_DISPATCH_PHONE_NUMBER}`);
  }
  const isOpen = isDispatchOpen();
  const isVisibleStyle = isOpen ? "flex" : "hidden";
  const isVisibleContainerStyle = isOpen
    ? "justify-between"
    : "justify-center md:justify-between";
  return (
    <>
      <div
        className={`sticky bottom-0 flex w-full items-center justify-center px-5 py-[1.125rem] md:justify-between  z-50 bg-white  md:py-[1.125rem] drop-shadow-re md:px-[2.5rem]  md:top-0 ${isVisibleContainerStyle} ${className}`}
      >
        <IconButton
          onClick={handleClick}
          className="self-center text-white bg-blue rounded-3xl py-3 px-6 w-fit font-Digibank-Medium text-base leading-[1.2rem]"
          iconPosition="end"
          text={
            <p>
              תתקדמו לחשבון{" "}
              <span className="font-Digibank-Apparat-Book">Zero</span>
            </p>
          }
          icon={
            <img
              src={leftArrow}
              className="w-4 h-4 align-baseline"
              alt="חץ שמאלה"
            />
          }
        />
        <button
          onClick={handleCall}
          className={`p-0  flex-col items-center gap-2 font-Digibank-Regular text-[0.63rem] leading-none md:leading-3 md:flex-row-reverse md:text-base md:gap-4 ${isVisibleStyle}`}
        >
          <img className="w-[1.375rem] h-[1.375rem]" src={phone} />
          שיחה עם נציג
        </button>
        <img
          className="hidden md:block relative bottom-2 self-end object-contain w-40 h-[1.875rem] "
          src={oneZeroLogo}
          alt="לוגו"
        />

        {/* <img className="md:hidden" src={call} alt="שיחה עם נציג" /> */}
      </div>
      <QrDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
