import {resturantURL} from './utills/constant'
const ResturantCard = ({resData})=>{
    return (
        <div className='rest-card'>
           
            <img src={resturantURL+resData.info.cloudinaryImageId} alt="food-item"/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.avgRatingString} stars • {resData.info.deliveryTime} mins </h4>
            <h4>{resData.info.cuisines.join(' ,')}</h4>

        </div>
    )
}

export default ResturantCard;