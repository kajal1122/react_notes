import { allResturantDetailsURL } from "./utills/constant";
import ResturantCard from "./ResturantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";

/* 
    # using useEffect , we will get list of resturants and set it in local state 

*/

const Body = ()=>{
    const [listOfResturants , setListOfResturants]= useState([]);
    const [serachText, setSearchText] = useState("");
    const showTopRatedResturants = ()=>{
        let newResturantList = listOfResturants.filter(rest => rest.info.avgRating >= 4);
        console.log(newResturantList)
        setListOfResturants(newResturantList);
    }

    const fetchData = async()=>{
        const data = await fetch(allResturantDetailsURL);
        const jsonData = await data.json();
        const result = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfResturants(result);
        console.log('result', result)

    }
    
    useEffect(()=>{
        fetchData();
        

    }, []);

    const handleSearchTextChange = (e)=>{
        const serachTxt = e.target.value;
        setSearchText(serachTxt);
        

    }
    const handleSearchBtnClick = ()=>{
        const newListOfResturants = listOfResturants.filter(rest => rest.info.name.toLowerCase().includes(serachText.toLowerCase()));
        console.log(newListOfResturants)
        setListOfResturants(newListOfResturants);
        console.log('ioio',listOfResturants)

    }



    if(listOfResturants.length < 1){
        return(
            <Shimmer/>
        )
    }
    return(
        <div className='body'>
            <div className='serach-bar'>
                <input type='text' placeholder='search for resturants and foods' value={serachText} onChange={(e)=>handleSearchTextChange(e)}/>
                <button onClick={handleSearchBtnClick} style={{padding:"10px"}}>Search</button>
                <button onClick={showTopRatedResturants} style={{padding:"10px"}}>Top Rated Resturant</button>
                
            </div>
            <div className='res-container'>
              
               {listOfResturants.map(resData=> <ResturantCard  key={resData.info.id} resData={resData} />)}
             

            </div>

        </div>
    
     )

}

export default Body ;