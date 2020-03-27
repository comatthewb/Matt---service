import React, { Component } from "react";
import axios from "axios";
import RelatedItem from "./components/RelatedItem";
import RelatedItemDescription from "./components/RelatedItemDescription";

class RelatedItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesURL: [],
      description: []
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8082/items")
      .then(response => {
        let randomItemsURL = [];
        let randomItemsName = [];
        while (randomItemsURL.length < 6) {
          let randomIndex = Math.floor(
            Math.random() * Math.floor(response.data.length)
          );
          console.log(response.data[randomIndex]);
          randomItemsURL.push(response.data[randomIndex].item_url);
          randomItemsName.push(response.data[randomIndex].item_name);
          response.data.splice(randomIndex, 1);
        }
        this.setState({
          imagesURL: [...randomItemsURL],
          description: [...randomItemsName]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  clickHandler() {
    console.log("this was clicked");
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
                  <RelatedItem
                    onClick={this.clickHandler}
                    image={singleImage}
                  />
                  <RelatedItemDescription
                    onClick={this.clickHandler}
                    description={description}
                  />
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
