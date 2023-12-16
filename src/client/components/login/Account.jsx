import { React } from "react";
import { useGetUserAccountQuery } from "./authslice";
import { useGetCharitiesQuery } from "../charities/charitiesSlice";
import { useDispatch } from "react-redux";
import "./Account.css";
import { logout } from "./authslice";
import { useNavigate } from "react-router";
import CharityCard from "../charities/CharityCard";

export default function AccountPage() {
  const { data: charities, isLoading: charitiesLoading } =
    useGetCharitiesQuery();
  const { data: me, isLoading } = useGetUserAccountQuery();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(me);
  console.log("charities from account page: ", charities);

  const logoutFunction = () => {
    dispatch(logout());
    navigate("/");
  };

  return isLoading || !me ? (
    <p>Your Account is Loading</p>
  ) : (
    <section>
      <div className="accountBackground">
        <div className="accountInfo">
          <div className="textAccount">
            <h2>Account Information:</h2>
            <h3>Username: {me.username}</h3>
            <h3>User ID: {me.id}</h3>
          </div>
          <button onClick={logoutFunction} className="logout">
            Logout
          </button>
        </div>

        <div id="postsContainer">
          <h2>My posts: </h2>
          <div id="allMyPosts">
            {charities
              ?.filter((charity) => charity.userId === me.id)
              .map((charity) => (
                <CharityCard key={charity.id} charity={charity} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
