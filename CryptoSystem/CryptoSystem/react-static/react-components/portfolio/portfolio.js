import List from "../list/list.js";
import ListItem from "../listItem/listItem.js";

const Portfolio = () => {
  // const list = <List>title={"title"} 
  //     unSelectedSize={240} 
  //     selectedSize={300} 
  //     columnGapPx={24}
  //     <ListItem 
  //                 img={"https://picsum.photos/200/200"} 
  //                 nft_name={""}
  //                 owner={"owner"}
  //             />
  //             <ListItem 
  //                 img={"https://picsum.photos/200/200"} 
  //                 nft_name={"nft name"}
  //                 owner={"owner"}
  //             />
  // </List>
  let nftCollections = [{
    key: 0,
    name: "monkeys",
    items: [{
      key: 0,
      name: 'the nft name',
      owner: "the owner name",
      imageUrl: 'https://picsum.photos/200/200',
      price: "€32"
    }]
  }];

  const getNFTs = nftCollection => {
    return nftCollection.items.map(function (nft) {
      return /*#__PURE__*/React.createElement(ListItem, {
        img: nft.imageUrl,
        nft_name: nft.name,
        owner: nft.owner,
        price: nft.price,
        id: nft.key,
        key: nft.key
      });
    });
  };

  const list = nftCollections.map(function (nftCollection) {
    return /*#__PURE__*/React.createElement(List, {
      title: nftCollection.name,
      unSelectedSize: 240,
      selectedSize: 300,
      columnGapPx: 24,
      key: nftCollection.key
    }, getNFTs(nftCollection));
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "portfolio"
  }, list);
};

ReactDOM.render(React.createElement(Portfolio), document.querySelector("#pricetable"));