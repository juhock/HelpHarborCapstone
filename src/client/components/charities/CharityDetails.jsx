import { useParams, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  useGetCharityQuery,
  useDeleteCharityMutation,
  useUpdateCharityMutation
} from './charitiesSlice';
import { selectToken, useGetUserAccountQuery } from '../login/authslice.js';
import './CharityDetails.css';

export default function CharityDetails() {
  //these two variables will grab a single charity from the api!!!
  const { id } = useParams();
  const { data: charity, isLoading: charityLoading } = useGetCharityQuery(id);
  const { data: me, isLoading: meLoading } = useGetUserAccountQuery();
  const [deleteCharity] = useDeleteCharityMutation();
  const [updateCharity] = useUpdateCharityMutation();

  //useNavigate be chillin here
  const navigate = useNavigate();

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

    navigate('/charities');
  };

  /** Update a charity */
  const onUpdate = async (evt) => {
    evt.preventDefault();
    updateCharity({
      id,
      title,
      description,
      email,
      image,
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
    <div className='tester'>
      <main className='allDetails'>
        <div className='charityDetails'>
          <img
            src={charity.image}
            alt={`Logo for ${charity.title}`}
            className='imageDetails'
          />
          <div className='textDetails'>
            <h2 id='titleDetails'>{charity.title}</h2>
            <h3 id='descriptionDetails'>{charity.description}</h3>
            <h4 id='emailDetails'>{charity.email}</h4>
            <h4 id='phoneDetails'>{charity.phone}</h4>
            <h4 id='addressDetails'>{charity.address}</h4>
            <h5 id='categoryDetails'>{charity.category}</h5>
          </div>
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
            <textarea
              type='text'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='inputDetails'
            ></textarea>
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
              <option>food</option>
              <option>clothes</option>
              <option>furniture</option>
            </select>
            <div id='buttonContainer'>
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
          <p></p>
        )}
      </main>
    </div>
  );
}
