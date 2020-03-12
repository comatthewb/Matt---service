import React from "react";

const RelatedItem = ({ image }) => {
  console.log(image);
  return (
    <div className="recommended-item-container">
      <img
        height="70"
        width="70"
        src={image}
        alt="Dorman Window Lift Motor 741-578"
      />
    </div>
  );
};
export default RelatedItem;
