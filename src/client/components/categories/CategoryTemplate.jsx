import { React } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCharitiesInCategoryQuery } from '../charities/charitiesSlice';
import CharityCard from '../charities/CharityCard';

import '../charities/CharityCard.css';

export default function CategoryTemplate() {
  /** Use query to fetch data */
  const { category } = useParams();
  const { data, isLoading } = useGetCharitiesInCategoryQuery(category);

  return isLoading || !data ? (
    <p>LOADING LOADING LOADING LOADING</p>
  ) : (
    <div className='entire-page'>
      <h2 className='capitalize'>Charities Needing {category}</h2>
      <div className='flex'>
        {data?.map((charity) => (
          <CharityCard key={charity.id} charity={charity}></CharityCard>
        ))}
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
