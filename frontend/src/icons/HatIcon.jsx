const HatIcon = ({ className, onClick, color = "#9b9b9b" }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.99995 19.8263C3.99994 19.8262 3.99994 19.826 3.99994 19.8258V15.6838C4.01453 15.6734 4.02979 15.6627 4.04573 15.6517C4.76974 15.1528 6.98022 14 11.9999 14C17.0197 14 19.2301 15.1528 19.9542 15.6517C19.9701 15.6627 19.9853 15.6734 19.9999 15.6838V19.8258C19.9999 19.826 19.9999 19.8262 19.9999 19.8263C19.9994 19.8276 19.9979 19.8309 19.9943 19.8362C19.9832 19.8526 19.9554 19.8825 19.9044 19.9096C19.7876 19.9716 19.6906 19.9533 19.6565 19.935C17.9975 19.0414 15.3472 18 11.9999 18C8.65269 18 6.00242 19.0414 4.34339 19.935C4.30931 19.9533 4.21231 19.9716 4.09546 19.9096C4.04449 19.8825 4.01673 19.8526 4.00557 19.8362C4.00201 19.8309 4.00048 19.8276 3.99995 19.8263ZM20.4825 13.6339C20.2904 13.5291 20.0743 13.4214 19.8319 13.3137L17.6278 6.33422C19.1277 7.42335 20.1859 9.09847 20.4526 11.0542L20.6995 12.8649C20.7388 13.1527 20.6519 13.4269 20.4825 13.6339ZM13.9999 3.01281C18.2874 3.24073 21.8481 6.48508 22.4343 10.784L22.6812 12.5947C22.8042 13.4966 22.5146 14.3475 21.9684 14.9729C21.9892 15.0538 21.9999 15.1375 21.9999 15.2222V19.8258C21.9999 20.7045 21.4504 21.3533 20.8419 21.6762C20.238 21.9967 19.4262 22.0826 18.7081 21.6958C17.2525 20.9118 14.9288 20 11.9999 20C9.0711 20 6.74741 20.9118 5.2918 21.6958C4.5737 22.0826 3.76187 21.9967 3.15794 21.6762C2.54949 21.3533 1.99994 20.7045 1.99994 19.8258V15.2222C1.99994 15.1375 2.0107 15.0538 2.03153 14.9729C1.48528 14.3475 1.19569 13.4966 1.31869 12.5947L1.5656 10.784C2.15181 6.48508 5.71247 3.24073 10 3.01281C9.99997 3.00855 9.99994 3.00428 9.99994 3C9.99994 2.44772 10.4477 2 10.9999 2H11.9999H12.9999C13.5522 2 13.9999 2.44772 13.9999 3C13.9999 3.00428 13.9999 3.00855 13.9999 3.01281ZM6.37204 6.33422L4.168 13.3137C3.92561 13.4214 3.70944 13.5291 3.51742 13.6339C3.34796 13.4269 3.2611 13.1527 3.30035 12.8649L3.54726 11.0542C3.81395 9.09847 4.87215 7.42335 6.37204 6.33422ZM6.50581 12.5522L8.37412 6.63592C8.60951 5.89052 9.25758 5.35058 10.0332 5.25362L11.7519 5.03879C11.9166 5.0182 12.0833 5.0182 12.248 5.03879L13.9667 5.25362C14.7423 5.35058 15.3904 5.89052 15.6258 6.63591L17.4941 12.5522C16.1023 12.2292 14.3031 12 11.9999 12C9.69678 12 7.89759 12.2292 6.50581 12.5522ZM3.99972 19.8258C3.9997 19.8257 3.9997 19.8257 3.99973 19.8258L3.99972 19.8258Z"
        fill={color}
      />
    </svg>
  );
};

export default HatIcon;
