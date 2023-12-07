// import { useState } from 'react';
import CharityCard from "./CharityCard";
import { useGetCharitiesQuery } from "../charities/charitiesSlice";
import './CharityList.css';

export default function CharityList() {
  const { data } = useGetCharitiesQuery();

  return (
    <div className="charityList">
      <h1>List of Charities</h1>
      <ul>
        {data?.map((charity) => (
          <CharityCard key={charity.id} charity={charity} />
        ))}
      </ul>
    </div>
  );
}

