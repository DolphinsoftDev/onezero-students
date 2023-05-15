import React from "react";
import checked from "../../assets/checked.svg";

type Props = {
  text: string;
};

export default function IconParagraph({ text }: Props) {
  return (
    <p className="flex  gap-2 font-Digibank-Regular text-xl md:text-[1.625rem] 3xl:text-3xl">
      <img className="w-3 mb-1.5 md:w-3 3xl:w-4  " src={checked} alt="וי" />
      {text}
    </p>
  );
}
