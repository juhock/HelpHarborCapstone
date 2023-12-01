import { useParams } from "react-router";
import React, { useState } from 'react';
import { useGetCharityQuery, useDeleteCharityMutation, useUpdateCharityMutation } from "./charitiesSlice";

// this component will show a full page of the charity that was clicked on.
// if it doesn't work its Yingshi's fault

export default function CharityDetails(){
    //these two variables will grab a single charity from the api!!!
    const { id } = useParams();
    const { data: charity, isLoading } = useGetCharityQuery(id);
    
    const [deleteCharity] = useDeleteCharityMutation();
    const [updateCharity] = useUpdateCharityMutation(); 

    /**Fetch updates from user input */
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [categories, setCategories] = useState([]);
    const [userId, setUserId] = useState("");

    /** Delete a charity */
    const onDelete = async (evt) => {
        evt.preventDefault();
        deleteCharity(id);
    }

    /** Update a charity */
    const onUpdate = async (evt) => {
        evt.preventDefault();
        updateCharity({id, title, description, email, phone, address, categories:[categories], userId});
    }
 
    return isLoading ? (
        <p>LOADING LOADING LOADING LOADING</p>
    ) : (
        <>
        <main>
            <img src={charity.image} />
            <h2>{charity.title}</h2>
            <h3>{charity.description}</h3>
            <h3>{charity.email}</h3>
            <h3>{charity.phone}</h3>
            <h3>{charity.address}</h3>
            <form onSubmit={onUpdate}>
                <input 
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value) }
                ></input>
                <input 
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value) }
                ></input>
                <input 
                    type="text"
                    placeholder="Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value) }
                ></input>
                <input 
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value) }
                ></input>
                <input 
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value) }
                ></input>
                <input 
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value) }
                ></input>
                <input 
                    type="text"
                    placeholder="Categories"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value) }
                ></input>
                <input 
                    type="text"
                    placeholder="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value) }
                ></input>
                <button>Update</button>
                <button onClick={onDelete} aria-label="delete">Delete</button>                
            </form> 
        </main>
        </>
    )
}