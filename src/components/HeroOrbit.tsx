import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuratiton,
  spinDuratiton,
  shouldSpin = false,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuratiton?: string;
  shouldOrbit?: boolean;
  spinDuratiton?: string;
  shouldSpin?: boolean;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{ animationDuration: orbitDuratiton }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin")}
            style={{ animationDuration: spinDuratiton }}
          >
            <div
              className="inline-flex"
              style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
