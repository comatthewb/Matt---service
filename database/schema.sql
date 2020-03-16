DROP DATABASE IF EXISTS pirate_data;

CREATE DATABASE pirate_data;

USE pirate_data;

CREATE TABLE ArrtoZone_Inventory (
  itemID INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(255) NOT NULL,
  item_link VARCHAR (255) NOT NULL
  PRIMARY KEY(itemID)
);

INSERT INTO ArrtoZone_Inventory (item_name, item_url) VALUES ('treasure chest','https://www.theinteriorgallery.com/prod_images_blowup/treasurechest-03.jpg'), ('eye patch','https://www.factorydirectparty.com/p…images/catalog/product//U/S/UST1029/1/LARGE.jpg'), ('spyglass','https://images-na.ssl-images-amazon.com/images/I/71%2BQWi-ol1L._SL1500_.jpg'), ('barrels','https://img-new.cgtrader.com/items/113…s-pirate-style-3d-model-obj-3ds-dae-skp-mxs.jpg'), ('treasure map','https://images-na.ssl-images-amazon.com/images/I/71Pk17Mjg4L._AC_SL1010_.jpg'), ('cannon balls','https://dygtyjqp7pi0m.cloudfront.net/i/35395/30473232_1.jpg?v=8D5E45EB7E218E0'), ('parrot','https://partycity6.scene7.com/is/image/…_sq_?$_1000x1000_$&$product=PartyCity/175773_01'), ('dubloons','https://images-na.ssl-images-amazon.com/images/I/81qN%2BqeP91L._AC_SL1500_.jpg'), ('hat','https://www.heritagecostumes.com/images/products/2422.jpg'), ('sword','https://i.ebayimg.com/images/g/dfAAAOSwaAtcbn0Y/s-l1600.jpg'), ('compass','https://images-na.ssl-images-amazon.com/images/I/71pIgQwLamL._AC_UL1000_.jpg'), ('peg leg','https://atlas-content-cdn.pixelsquid.com/stock-images/pegleg-peg-leg-8JMDkdB-600.jpg'), ('boots','https://images-na.ssl-images-amazon.com/images/I/41jt0hx8axL._AC_.jpg'), ('coat','https://images-na.ssl-images-amazon.com/images/I/61FYmBlG2CL._UL1500_.jpg'), ('hoop earrings','https://partytimebr.com/pub/medi…e9c3970ab036de70892d86c6d221abfe/3/9/390108.jpg'), ('lantern','https://atlas-content-cdn.pixelsquid.c…tock-images/ship-candle-lantern-QJ3MaE2-600.jpg'), ('bandana','https://cdn.shopify.com/s/files/1/2075…llaTree_DeepRed_jpg_1024x1024.jpeg?v=1571710207'), ('anchor','https://i1.pngguru.com/preview/196/984/881/pirates-brown-pirate-anchor.jpg'), ('nautical rope','https://images-na.ssl-images-amazon.com/images/I/61d9vWyEYdL._AC_SL1001_.jpg'), ('rum bottles','https://img-new.cgtrader.com/items…710148e7/rum-pirate-bottle-3d-model-max-mat.jpg'), ('shirt','https://s3-eu-west-1.amazonaws.com/image…25aac1/c9bb6d36-39d8-4f15-852c-b2dc66963381.jpg'), ('pants','https://images-na.ssl-images-amazon.com/images/I/51xa9n2PnDL._UY550_.jpg'), ('anchor','https://cdn.shopify.com/s/files/1/0983/…heme_Party_Smooth_Finish_large.jpg?v=1454813169'), ('beer mug','https://contestimg.wish.com/api/webim…g?cache_buster=63aa99be201d3edcc48f12aad19a8383');

