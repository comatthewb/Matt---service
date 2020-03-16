import React, { Component } from "react";
import axios from "axios";
import RelatedItem from "./components/RelatedItem";
import RelatedItemDescription from "./components/RelatedItemDescription";

class RelatedItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesURL: [
        "https://cdn.shopify.com/s/files/1/0068/3370/0916/products/pirate-canon-life-size-replica-2_1024x1024.jpg?v=1571279010",
        "https://dygtyjqp7pi0m.cloudfront.net/i/35395/30473232_1.jpg?v=8D5E45EB7E218E0",
        "https://images-na.ssl-images-amazon.com/images/I/71JeDEZd4YL._AC_SL1500_.jpg",
        "https://www.outfit4events.com/runtime/cache/images/redesignProductFull/hs64144-01.JPG",
        "https://flagsinternational.com/wp-content/uploads/2018/02/jolly-roger1b_1_1.jpeg",
        "https://i5.walmartimages.com/asr/1dfc522a-c3df-405d-bdc2-cd6d9ac78768_1.11be8f15868a2b57db233a2b03c5fa18.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
      ],
      description: [
        "cannon",
        "sail",
        "wheel",
        "flintlock",
        "jolly roger",
        "hook"
      ]
    };
  }

  render() {
    return (
      <div className="other-customers-parent-div">
        <div>
          <h1>
            <span>OTHER CUSTOMERS ALSO VIEWED</span>
          </h1>
          <div>
            {this.state.imagesURL.map((singleImage, index) => {
              const description = this.state.description[index];
              return (
                <div key={index} className="item-description-parent">
                  <RelatedItem image={singleImage} />
                  <RelatedItemDescription description={description} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedItems;
