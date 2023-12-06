import { useState } from 'react';
import { useCreateCharityMutation } from './charitiesSlice';
import '../login/Global.css';

/**Form for creating a new charity */
export default function NewCharity() {
  const [createCharity] = useCreateCharityMutation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [userId, setUserId] = useState(1);

  /** Function to trigger  */
  const onCreate = async (evt) => {
    evt.preventDefault();
    // Careful: what about "userId"?
    createCharity({ title, description, image, email, phone, address, userId });
  };

  return (
    <div className='global'>
      <p>The Form to create new post</p>
      <form onSubmit={onCreate}>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='Image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='userId'
          value={+userId}
          onChange={(e) => setUserId(e.target.value)}
        ></input>
        <button>New Post</button>
      </form>
    </div>
  );
}
