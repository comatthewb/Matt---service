import React from "react";

const RelatedItem = ({ image }) => {
  return (
    <div className="recommended-item-container">
      <img height="70" width="70" src={image} />
    </div>
  );
};
export default RelatedItem;
