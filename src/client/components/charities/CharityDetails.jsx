import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  useGetCharityQuery,
  useDeleteCharityMutation,
  useUpdateCharityMutation
} from './charitiesSlice';
import { selectToken, useGetUserAccountQuery } from '../login/authSlice.js';
import './CharityDetails.css';

export default function CharityDetails() {
    //these two variables will grab a single charity from the api!!!
    const token = useSelector(selectToken);
    const { id } = useParams();
    const { data: charity, isLoading: charityLoading } = useGetCharityQuery(id);
    const { data: me, isLoading: meLoading } = useGetUserAccountQuery();
    const [deleteCharity] = useDeleteCharityMutation();
    const [updateCharity] = useUpdateCharityMutation();

    console.log('charitydetails token: ', { token });
    console.log('charitydetails me account: ', { me });
    console.log('charity data itself: ', { charity }); 

    /**Fetch updates from user input */
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
      if (charity) {
        setTitle(charity.title);
        setDescription(charity.description);
        setImage(charity.image);
        setEmail(charity.email);
        setPhone(charity.phone);
        setAddress(charity.address);
        setCategory(charity.category);
      }
    }, [charity]);

    /** Delete a charity */
    const onDelete = async (evt) => {
      evt.preventDefault();
      deleteCharity(id);
    };

    /** Update a charity */
    const onUpdate = async (evt) => {
      evt.preventDefault();
      updateCharity({
        id,
        title,
        description,
        email,
        phone,
        address,
        category
      });
    };

    const handleCategoryChange = (evt) => {
      evt.preventDefault();
      setCategory(evt.target.value);
    };

    return charityLoading || !charity ? (
      <p>Charity is Loading</p>
    ) : (
      <>
        <main className='allDetails'>
          <div className='charityDetails'>
            <img
              src={charity.image}
              alt={`Logo for ${charity.title}`}
              className='imageDetails'
            />
            <h2 className='titleDetails'>{charity.title}</h2>
            <h3 className='descriptionDetails'>{charity.description}</h3>
            <h3 className='emailDetails'>{charity.email}</h3>
            <h3 className='phoneDetails'>{charity.phone}</h3>
            <h3 className='addressDetails'>{charity.address}</h3>
            <h3 className='categoryDetails'>{charity.category}</h3>
          </div>
          {charity.userId === me?.id ? (
            <form onSubmit={onUpdate} className='formDetails'>
              <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='inputDetails'
              ></input>
              <input
                type='text'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='inputDetails'
              ></input>
              <input
                type='text'
                placeholder='Image'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className='inputDetails'
              ></input>
              <input
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='inputDetails'
              ></input>
              <input
                type='text'
                placeholder='Phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='inputDetails'
              ></input>
              <input
                type='text'
                placeholder='Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='inputDetails'
              ></input>
              <select
                name='category'
                value={category}
                onChange={(e) => handleCategoryChange(e)}
                className='inputDetails'
                id='categoryBox'
              >
                <option>Food</option>
                <option>Clothes</option>
                <option>Furniture</option>
              </select>
              <div>
                <button className='updateButton'>Update</button>
                <button
                  onClick={onDelete}
                  aria-label='delete'
                  className='deleteButton'
                >
                  Delete
                </button>
              </div>
            </form>
          ) : (
            <p>Not your posts, no form</p>
          )}
        </main>
        ) : (<p>Nothing</p>)
      </>
    );
  }