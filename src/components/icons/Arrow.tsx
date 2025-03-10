const Arrow = ({
  width = 16,
  height = 16,
  stroke = "currentColor",
  classNames,
}: {
  width?: number;
  height?: number;
  stroke?: string;
  classNames?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classNames}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
};

export default Arrow;
