const Star = ({ clip, fill }) => {
  const StarStyle = {
    height: "0.9rem",
    width: "10%",
    clipPath: `polygon(0% 0%, ${clip} 0%, ${clip} 100%, 0% 100%)`,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="77"
      height="71"
      viewBox="0 0 77 71"
      fill={fill}
      style={StarStyle}
    >
      <path d="M42.0865 2.94968L50.7442 19.6748C51.3462 20.838 52.5103 21.6441 53.8569 21.8303L73.217 24.5125C76.6084 24.9827 77.9614 28.9548 75.5083 31.234L61.4994 44.2526C60.5259 45.1578 60.0808 46.463 60.3114 47.7408L63.6178 66.1237C64.1975 69.3433 60.6524 71.798 57.6197 70.2791L40.3044 61.6005C39.1003 60.9975 37.6608 60.9975 36.4567 61.6005L19.1413 70.2791C16.1087 71.7995 12.5636 69.3433 13.1433 66.1237L16.4497 47.7408C16.6803 46.463 16.2352 45.1578 15.2616 44.2526L1.25276 31.234C-1.20027 28.9533 0.152739 24.9811 3.54408 24.5125L22.9042 21.8303C24.2508 21.6441 25.4148 20.838 26.0169 19.6748L34.6746 2.94968C36.1893 0.0201913 40.5702 0.0201913 42.0865 2.94968Z" />
    </svg>
  );
};

export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const portion = (rating - fullStars) * 100;
  const totalStars = 5;
  const remaining = totalStars - (fullStars + 1);
  console.log(remaining);

  return (
    <>
      <div style={{ position: "absolute", display: "flex", gap: "4px" }}>
        {[...Array(totalStars)].map((_, index) => (
          <Star clip="100%" fill="#E0E0E0" />
        ))}
      </div>
      <div style={{ position: "absolute", display: "flex", gap: "4px" }}>
        {[...Array(fullStars)].map((_, index) => (
          <Star clip="100%" fill="#FFFF00" />
        ))}
        {portion > 0 && <Star clip={portion + "%"} fill="#FFFF00" />}
        {[...Array(remaining)].map((_, index) => (
          <Star clip="100%" fill="#E0E0E0" />
        ))}
      </div>
    </>
  );
};
