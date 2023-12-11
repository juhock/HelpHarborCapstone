import { React } from 'react';
import { useParams } from 'react-router-dom'
import '../login/Global.css';
import { useGetCharitiesInCategoryQuery, useGetCharitiesQuery } from "../charities/charitiesSlice"
import CharityCard from '../charities/CharityCard';

export default function CategoryTemplate() {

  /** Use query to fetch data */
  const { category } = useParams();
  console.log("category: ", category);
  const { data, isLoading } = useGetCharitiesInCategoryQuery(category);
  console.log("charities from cat query: ", data);
  
  return isLoading || !data ? (
    <p>LOADING LOADING LOADING LOADING</p>
  ) : (
    <div className='global'>
      <h2>Charities that need {category}</h2>
      <div className="flex">
        {
            data?.map((charity)=>(
                <CharityCard key={charity.id} charity={charity}></CharityCard>
            ))    
        }
      </div>
    </div>
  ); 
}

/*   
const { data: charities, isLoading } = useGetCharitiesQuery();

  return isLoading || !charities ? (
    <p>LOADING LOADING LOADING LOADING</p>
  ) : (
    <div className='global'>
      <h2>Charities that need clothes</h2>
      <div className="flex">
        {
            charities?.filter((charity)=> charity.category === "Furniture").map((charity)=>(
                <CharityCard key={charity.id} charity={charity}></CharityCard>
            ))    
        }
      </div>
    </div>
  ); 
}
*/