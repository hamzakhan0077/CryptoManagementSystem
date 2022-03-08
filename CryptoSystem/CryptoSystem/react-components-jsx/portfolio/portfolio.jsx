import List from "../list/list.js"
import ListItem from "../listItem/listItem.js"
import { MY_API_KEY } from '../config.js';

const Portfolio = () => {

    const [topList, setTopList] = React.useState();
    const [hotList, setHotList] = React.useState();

    fetch("https://rarible-data-scraper.p.rapidapi.com/top_collection/7/25", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rarible-data-scraper.p.rapidapi.com",
            "x-rapidapi-key": MY_API_KEY
        }
        
    })
    // read the data in json file
    .then(response => response.json())
    .then(response => {

        let api_response = response.list;
        setTopList(<List title={"Top Collection"}
                unSelectedSize={240}
                selectedSize={300}
                columnGapPx={24}
                key={api_response.key}>
                    {getTopNFTs(api_response)}
            </List>)
    })
    .catch(err => {
        console.error(err);
    });
    
    

    const getTopNFTs = (api_response) => {
        return api_response.map( function (collection) {
            return <ListItem
                url = {collection.url}
                img = {collection.pic}
                collection_name = {collection.name}
                price = {collection.sum}
                count = {collection.count}
                currency = {collection.currency}
                id = {collection.key}
                key = {collection.key}
                />
        })
    }

    const getHotNFTs = (api_response) => {
        return api_response.map( function (collection) {
            return <ListItem
                url = {"https://rarible.com/"+collection.shortUrl}
                img = {collection.pic}
                collection_name = {collection.name}
                price = {collection.sum}
                count = {collection.count}
                currency = {collection.currency}
                id = {collection.key}
                key = {collection.key}
                />
        })
    }

    fetch("https://rarible-data-scraper.p.rapidapi.com/hot_collection", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rarible-data-scraper.p.rapidapi.com",
            "x-rapidapi-key": MY_API_KEY
        }
        
    })
    // read the data in json file
    .then(response => response.json())
    .then(response => {

        let api_response = response.list;
        setHotList(<List title={"Trending Collection"}
                unSelectedSize={240}
                selectedSize={300}
                columnGapPx={24}
                key={api_response.key}>
                    {getHotNFTs(api_response)}
            </List>)
    })
    .catch(err => {
        console.error(err);
    });

    return (        
        <section className="portfolio">
            {topList}
            {hotList}
        </section>
    )
}
ReactDOM.render(React.createElement(Portfolio), document.querySelector("#pricetable"))