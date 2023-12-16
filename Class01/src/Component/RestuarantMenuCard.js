import React from 'react'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { menuImgURL, restaurantMenuInfoURL } from './utills/constant';
import { useParams } from 'react-router';
export const RestuarantMenuCard = () => {

    const [resMenu, setResMenu] = useState(null);
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenuData();
    },[])
    let itemCards = []
    const fetchMenuData = async ()=>{
        const data = await fetch(restaurantMenuInfoURL+resId);
        const jsonData = await data.json();
        console.log(jsonData)
        setResMenu(jsonData.data);
        //console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card);
        console.log('uiuiui',jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards);
        console.log('new',jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories)
        
    }
    if(resMenu === null)return <Shimmer/>;
    if (resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards){
        itemCards = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
        console.log('1st itemcard is not undefined');
        console.log(itemCards)
    }else{
        console.log('inside else ')
        itemCards = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0].itemCards;
    }
   
    const {name, cloudinaryImageId, cuisines, costForTwoMessage} = resMenu.cards[0].card.card.info;
    //const { itemCards } = (resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card) === undefined ? resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card : resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0];
    console.log(itemCards)
  return (
   
    <div className='menu-items'>
        <div className='res-info'>
            <h2>{name}</h2>
            <h4>{cuisines.join(" ,")} </h4>
            <h4>{costForTwoMessage} </h4>

        </div>
        <div>
            
                {itemCards.map(items => 
                    <div className='menu-item' key={items.card.info.id}>
                        <div className='menu-item-text'>
                        <h4>{items.card.info.name}</h4>
                        <h4>₹{items.card.info.price/100 || (items.card.info.variantsV2.pricingModels[0].price)/100}</h4>
                        <p>{items.card.info.description}</p>
                        </div>
                        <div className='menu-item-img'>
                        <img src={menuImgURL+items.card.info.imageId ? menuImgURL+items.card.info.imageId : null}/>
                        </div>
                    </div>
                )}
            
           
        </div>
      
      


    </div>
  )
}
