import React from "react";
import NeoBaseButton from "../NeoBaseButton";

const styles = (props) => ({
  root: {
    width: "20px",
    height: "25px"
  }
});

function NeoButtonIcon(props) {
  console.log(props);
  return (
    <NeoBaseButton height={props.height} width={props.width}>
      {React.cloneElement(props.children, { style: styles(props).root })}
    </NeoBaseButton>
  );
}

export default NeoButtonIcon;
