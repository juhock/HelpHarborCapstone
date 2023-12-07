import { React } from 'react';
import { useNavigate, useParams } from 'react-router';
import '../login/Global.css';
import { useGetCharitiesInCategoryQuery } from "../charities/charitiesSlice"
import CharityCard from '../charities/CharityCard';

export default function Clothes() {
  const category = useParams();
  const { data: charities, isLoading } = useGetCharitiesInCategoryQuery(category);

  return (
    <div className='global'>
      <h2>Charities that need clothes</h2>
      <div>
        {
            charities?.map((charity)=>{
                <CharityCard key={charity.id} charity={charity}></CharityCard>
            }) 
        }
      </div>
    </div>
  );
}
