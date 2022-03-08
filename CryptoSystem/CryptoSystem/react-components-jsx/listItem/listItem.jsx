const ListItem = (props) => {
    const listItem=React.useRef()

    React.useEffect(function(){
        props.passRefUpward(listItem, props.id)
    })

    return (
        <div className="listitem"
            ref={listItem}
            // style={{
            //     width:`${props.unSelectedSize}px`, 
            //     height:`${props.unSelectedSize}px`
            //     }}
            styel={{
                width:"fit-content"
            }}
        >

            <img className="image" 
                src={props.img} 
                alt={`nft for ${props.nft_name}`}
                onDragStart={(e) => e.preventDefault()}
            /> 
            <div className="bottom">
                <span className="collection_name">{props.collection_name}</span>
                <div className="price">
                    <span className="count">{props.count}</span><span> NFTs for </span>    
                    <span className="currency">{props.currency} </span>
                    <span className="number">{props.price}</span>
                </div>
                
                            
            </div>

        </div>
    )
}

export default ListItem