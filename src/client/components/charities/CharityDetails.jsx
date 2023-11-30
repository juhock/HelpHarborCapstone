import { useParams } from "react-router";
import { useGetCharityQuery } from "./charitiesSlice"

//this component will show a full page of the charity that was clicked on. if it doesn't work its Yingshi's fault


export default function CharityDetails(){
    //thesetwo variables will grab a single charity from the api!!!
    const { id } = useParams();
    const { data: charity, isLoading } = useGetCharityQuery(id);
   


    return isLoading ? (
        <p>LOADING LOADING LOADING LOADING</p>
    ) : (
        <>
        <main>
            <img src={charity.image} />
            <h2>{charity.title}</h2>
            <h3>{charity.descripton}</h3>
            <h3>{charity.email}</h3>
            <h3>{charity.phone}</h3>
            <h3>{charity.address}</h3>
            AY AY AY im on vaction love my occupation
        </main>
        </>
    )
}