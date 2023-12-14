// import { useState } from 'react';
import CharityCard from './CharityCard';
import { useGetCharitiesQuery } from '../charities/charitiesSlice';

export default function CharityList() {
  const { data } = useGetCharitiesQuery();

  return (
    <div className='entire-page'>
      <h1 className='bigHeaderList'>All Charities Needing Donations</h1>

      <li id='listAll'>
        {data?.map((charity) => (
          <CharityCard key={charity.id} charity={charity} />
        ))}
      </li>
    </div>
  );
}
