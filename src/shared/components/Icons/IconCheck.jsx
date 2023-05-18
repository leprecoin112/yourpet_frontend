//change *stroke* to change color

const IconCheck = ({ className, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={className}
    >
      <path
        d="M20 7 9 18l-5-5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
    </svg>
  );
};

export default IconCheck;
