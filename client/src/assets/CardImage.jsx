import { BlueStrip } from "./BlueStrip";

export const CardImage = (image) => {
  console.log(image.image);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1470"
        height="1009"
        viewBox="0 0 1470 1009"
        fill="none"
      >
        <defs>
          <clipPath id="starClip">
            <path
              d="M1468.73 818.197C895.363 621.704 610.909 1283.95 0 870.179V88.3693C-2.21681e-06 45.7441 48.3636 0 106.273 0H1344.64C1406.36 0 1452.18 21.8324 1470 81.6116L1468.73 818.197Z"
              fill="url(#imgPattern)"
            />
          </clipPath>
        </defs>
        <image
          href={`${image.image}`}
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          clip-path="url(#starClip)"
        />
      </svg>
      <BlueStrip />
    </>
  );
};
