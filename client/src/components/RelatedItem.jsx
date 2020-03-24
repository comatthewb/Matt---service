import React from "react";

const RelatedItem = (props) => {
  return (
    <div className="recommended-item-container">
      <img height="70" width="70" src={props.image} onClick={props.onClick} />
    </div>
  );
};
export default RelatedItem;
