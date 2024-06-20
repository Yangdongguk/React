import { CSSProperties } from "react";

const LargeButton = () => {
  const buttonStyle: CSSProperties = {
    backgroundColor: "black",
    padding: "10px 20px",
    borderRadius: "8px",
    color: "white",
  };
  return (
    <>
      <button style={buttonStyle}>버튼</button>
    </>
  );
};
export default LargeButton;
