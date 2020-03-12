import React from "react";

const RelatedItemDescription = ({ description }) => {
  console.log(description);
  return (
    <div className="recommended-item-description-parent">
      <p className="recommended-item-description">{description}</p>
    </div>
  );
};
export default RelatedItemDescription;
