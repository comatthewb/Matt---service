import React, { Component } from "react";
import axios from "axios";
import RelatedItem from "./components/RelatedItem";
import RelatedItemDescription from "./components/RelatedItemDescription";

class RelatedItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesURL: [
        "C:/Users/dchen/FullStackTodo/client/public/images/pirate-canon-life-size-replica-2_1024x1024.jpg",
        "C:/Users/dchen/FullStackTodo/client/public/images/sail.png",
        "C:/Users/dchen/FullStackTodo/client/public/images/wheel.jpg",
        "C:/Users/dchen/FullStackTodo/client/public/images/flintlock.jpg",
        "C:/Users/dchen/FullStackTodo/client/public/images/flag.png",
        "C:/Users/dchen/FullStackTodo/client/public/images/hook.jpg"
      ],
      description: [
        "Dorman Window Lift Motor 741-578",
        "Duralast Platinum Battery H7-AGM Group Size 94R 850 CCA",
        "STP Cabin Air Filter CAF1816P",
        "Bosch Envision 26in Beam Wiper Blade",
        "Bosch Icon 26in Beam Wiper Blade",
        "XtraVision Fog Light/Headlight Bulb H11XV-2"
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
              console.log(singleImage);
              const description = this.state.description[index];
              return (
                <div className="item-description-parent">
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
