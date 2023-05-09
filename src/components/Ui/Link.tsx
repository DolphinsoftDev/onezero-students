import React from "react";

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & { className?: string };

export default function Link({ children, className, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className={`font-Digibank-Regular text-darkGrey underline decoration-solid cursor-pointer	${className}`}
    >
      {children}
    </a>
  );
}
