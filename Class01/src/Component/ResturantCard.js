import {resturantURL} from './utills/constant'
const ResturantCard = ({resData})=>{
    return (
        <div className='rest-card'>
           
            <img src={resturantURL+resData.info.cloudinaryImageId} alt="food-item"/>
            <h3>{resData.info.name}</h3>
            <h4> ⭐{resData.info.avgRatingString} stars • {resData.info.sla.deliveryTime} mins </h4>
            <p>{resData.info.cuisines.join(' ,')}</p>

        </div>
    )
}

export default ResturantCard;