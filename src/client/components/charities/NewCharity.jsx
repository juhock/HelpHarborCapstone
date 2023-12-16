import { useState, useEffect } from "react";
import { useCreateCharityMutation } from "./charitiesSlice";
import { useParams, useNavigate } from "react-router";
import logo2 from "../../assets/logo2.png";
import "./NewCharity.css";

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
    <main className="newAllDetails">
      <div className="newCharityDetails">
        <img src={logo2} alt="default logo" className="newImageDetails" />
        <div>
          <h2 className="newTitleDetails">Title</h2>
          <h3 className="newDescriptionDetails">Description</h3>
          <h3 className="newEmailDetails">📧 Email</h3>
          <h3 className="newPhoneDetails">📞 Phone</h3>
          <h3 className="newAddressDetails">📍 Address</h3>
          <h3 className="newCategoryDetails">Donation Category</h3>
        </div>
      </div>
      <div className="newFormContainer">
        <form onSubmit={onCreate} className="newFormDetails">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="newInputDetails"
          ></input>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="newInputDetails"
          ></input>
          <input
            type="text"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="newInputDetails"
          ></input>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newInputDetails"
          ></input>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="newInputDetails"
          ></input>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="newInputDetails"
          ></input>
          <select
            name="category"
            value={category}
            onChange={(e) => handleCategoryChange(e)}
            className="newInputDetails"
            id="newCategoryBox"
          >
            <option>Please Select A Category</option>
            <option>food</option>
            <option>clothes</option>
            <option>furniture</option>
          </select>
          <button className="createButton">Create</button>
        </form>
      </div>
    </main>
  );
}
