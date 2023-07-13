//@ts-nocheck
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      msq_r(function () {
        var pixel_settings = {
          setting_api_key: "462-716ad1-bef",
          setting_debug: true,
          setting_wait4async: true,
          setting_ignore_cookies: false,
          setting_retry_load_Interval: 400,
          setting_delay_load: 5,
          setting_disable_autorun: true,
        };
        let isSuccessfullyReplaced = [];
        const msq_pixel = new MSQ(pixel_settings);
          msq_pixel.referrer_replace_selector_link_tel(
            "#onezeroCallButton",
            "073-7823322",
            "*",
            "073-7823322"
          )
        isSuccessfullyReplaced.push(
          msq_pixel.referrer_replace_selector_link_tel(
            "#onezeroCallButton",
            "073-7794171",
            "google",
            "073-7794171"
          )
        );

        // var msq_pixel = new MSQ(pixel_settings);
        isSuccessfullyReplaced.push(
          msq_pixel.referrer_replace_selector_link_tel(
            "#onezeroCallButton",
            "073-7819560",
            "facebook",
            "073-7819560"
          )
        );
        // var msq_pixel = new MSQ(pixel_settings);

        isSuccessfullyReplaced.push(
          msq_pixel.referrer_replace_selector_link_tel(
            "#onezeroCallButton",
            "073-7823737",
            "discovery",
            "073-7823737"
          )
        );
        // var msq_pixel = new MSQ(pixel_settings);

        isSuccessfullyReplaced.push(
          msq_pixel.referrer_replace_selector_link_tel(
            "#onezeroCallButton",
            "073-7842629",
            "pmax",
            "073-7842629"
          )
        );
        // var msq_pixel = new MSQ(pixel_settings);

        isSuccessfullyReplaced.push(
          msq_pixel.referrer_replace_selector_link_tel(
            "#onezeroCallButton",
            "073-7824960",
            "cpc",
            "073-7824960"
          )
        );

        if (isSuccessfullyReplaced.some((value) => value) || counter === 2) {
          clearInterval(interval);
        }
        msq_pixel.push("__ga4_tid", "G-SGHQKQ4T4S");
        msq_pixel.process();
        counter++;
      });
      function msq_r(f) {
        /in/.test(document.readyState)
          ? setTimeout("msq_r(" + f + ")", 9)
          : f();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
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
        <a
          onClick={handleCall}
          id="onezeroCallButton"
          className={`md:hidden onezeroCallButton p-0  flex-col items-center gap-2 font-Digibank-Regular text-[0.63rem] leading-none md:leading-3 md:flex-row-reverse md:text-base md:gap-4 ${isVisibleStyle}`}
          href={`tel:${ONEZERO_DISPATCH_PHONE_NUMBER}`}
        >
          <img className="w-[1.375rem] h-[1.375rem]" src={phone} />
          שיחה עם נציג
        </a>
        <p className="hidden md:block text-base font-Digibank-Regular text-neutral-700">
          6121*
        </p>
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
