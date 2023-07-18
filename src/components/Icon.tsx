import { iconPaths } from "@/iconPaths";
import React, { HTMLAttributes } from "react";
interface IconProps {
  icon: keyof typeof iconPaths;
  size?: string;
  color: string;
}

const attrs: HTMLAttributes<SVGElement> = {};

export const Icon: React.FC<IconProps> = (props) => {
  const iconPath = iconPaths[props.icon];
  const iconMarkup = { __html: iconPath };

  if (props.size) {
    attrs.style = {
      width: props.size,
      height: props.size,
    } as React.CSSProperties;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      aria-hidden="true"
      stroke={props.color}
      fill={props.color}
      {...attrs}
    >
      <g dangerouslySetInnerHTML={iconMarkup} />
    </svg>
  );
};
