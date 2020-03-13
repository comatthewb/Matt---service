import React from "react";

const RelatedItemDescription = ({ description }) => {
  return (
    <div className="recommended-item-description-parent">
      <p className="recommended-item-description">{description}</p>
    </div>
  );
};
export default RelatedItemDescription;
