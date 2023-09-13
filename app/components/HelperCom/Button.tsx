import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="button">
      {/* <!-- background colors --> */}
      <div className="background-wrapper">
        <div className="background background-1"></div>
        <div className="background background-2"></div>
        <div className="background background-3"></div>
      </div>

      {/* <!-- black background and the text --> */}
      <div className="button-text">{text}</div>
    </button>
  );
};

export default Button;
