const Heart = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.84 2.61C20.3292 2.099 19.7228 1.69365 19.0554 1.41708C18.3879 1.14052 17.6725 0.998175 16.95 0.998175C16.2275 0.998175 15.5121 1.14052 14.8446 1.41708C14.1772 1.69365 13.5708 2.099 13.06 2.61L12 3.67L10.94 2.61C9.9083 1.57831 8.50903 0.998709 7.05 0.998709C5.59096 0.998709 4.19169 1.57831 3.16 2.61C2.1283 3.64169 1.54871 5.04097 1.54871 6.5C1.54871 7.95903 2.1283 9.35831 3.16 10.39L4.22 11.45L12 19.23L19.78 11.45L20.84 10.39C21.351 9.87924 21.7563 9.27281 22.0329 8.60536C22.3095 7.9379 22.4518 7.22249 22.4518 6.5C22.4518 5.77751 22.3095 5.0621 22.0329 4.39464C21.7563 3.72719 21.351 3.12076 20.84 2.61V2.61Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Heart;
