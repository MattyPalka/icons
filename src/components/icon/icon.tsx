import classnames from "classnames";
import type { HTMLAttributes } from "react";
import { createElement, Suspense } from "react";

import { icons } from "./icons";

export type IconName = keyof typeof icons;

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  // These props make styling component easier than creating new classes
  rotate?: number;
}

export const Icon = ({ icon, className, rotate, color, ...rest }: Props) => {
  return (
    <div
      className={classnames("flex items-center justify-center", className)}
      role="presentation"
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      {...rest}
    >
      <span>
        <Suspense fallback={<div />}>{createElement(icons[icon])}</Suspense>
      </span>
    </div>
  );
};
