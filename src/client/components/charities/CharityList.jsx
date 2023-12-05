// import { useState } from 'react';
import CharityCard from './CharityCard';
import { useGetCharitiesQuery } from '../charities/charitiesSlice';

export default function CharityList() {
  const { data } = useGetCharitiesQuery();

  return (
    <>
      <h1>List of Charities</h1>
      <ul>
        {data?.map((charity) => (
          <CharityCard key={charity.id} charity={charity} />
        ))}
      </ul>
      {/* Create Charity feature.... if arthur is nice */}
    </>
  );
}
