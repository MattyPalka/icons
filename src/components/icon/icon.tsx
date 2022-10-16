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

/**
 *
 * @param icon string key icon name
 * @param className string classes for styling
 * @param rotate optional number rotation of the icon
 * @returns Icon react component
 */
export const Icon = ({ icon, className, rotate, color, ...rest }: Props) => {
  return (
    <div
      className={classnames("flex items-center justify-center", className)}
      aria-label={icon}
      role="img"
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      {...rest}
    >
      <Suspense fallback={<div />}>
        {createElement(icons[icon], { className: "w-full h-full" })}
      </Suspense>
    </div>
  );
};
