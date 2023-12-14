import { useState, useEffect } from 'react';
import { useCreateCharityMutation } from './charitiesSlice';
import { useParams, useNavigate } from 'react-router';
import logo2 from "../../assets/logo2.png"
import './NewCharity.css'




/**Form for creating a new charity */
export default function NewCharity() {
  const { id } = useParams();
  const { data: charity, isLoading } = useCreateCharityMutation(id);
  const navigate = useNavigate();

  const [createCharity] = useCreateCharityMutation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");

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

  /** Function to trigger  */
  const onCreate = async (e) => {
    e.preventDefault();

    createCharity({
      title,
      description,
      image,
      email,
      phone,
      address,
      category,
    });

    navigate("/charities");
  };

  const handleCategoryChange = (evt) => {
    evt.preventDefault();
    setCategory(evt.target.value);
  };

  return (
    
      <main className='allDetails'>
        <div className="charityDetails">

          <img
           src={logo2}
           alt='default logo'
           className="imageDetails"
           />

           <h2 className="titleDetails">Here is where the title will display</h2>
           <h3 className="descriptionDetails">Here is where the description will display</h3>
           <h3 className="emailDetails">📧 Here is where the email will display</h3>
           <h3 className="phoneDetails">📞 Here is where the phone number will display</h3>
           <h3 className="addressDetails">📍 Here is where the address will display</h3>
           <h3 className="categoryDetails">Here is where the donation category displays</h3>
        </div>
        <div className="formContainer">
        <form onSubmit={onCreate} className="formDetails">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="inputDetails"
          ></input>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="inputDetails"
          ></input>
          <input
            type="text"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="inputDetails"
          ></input>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputDetails"
          ></input>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="inputDetails"
          ></input>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="inputDetails"
          ></input>
          <select
          name='category'
          value={category}
          onChange={(e) => handleCategoryChange(e)}
          className="inputDetails"
          id="categoryBox"
          >
            <option>Please Select A Category</option>
            <option>Food</option>
            <option>Clothes</option>
            <option>Furniture</option>
          </select>
          <button className="createButton">Create</button>
        </form>
        </div>
      </main>
    
  );
}
