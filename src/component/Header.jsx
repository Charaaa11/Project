import React, { useContext, useState } from "react";
import { Context } from "../App";
import { useAuth as currentuser } from "./Data/Firebase";
import { logout } from "./Data/Firebase";
import { Link } from "react-router-dom";

function Header() {
  const [ShowAuthBlock, setShowAuthBlock] = useContext(Context);
  const [dropdownshow, setdropdownshow] = useState(false);
  const currentUser = currentuser();
  async function LogOutHandler() {
    try {
      await logout();
    } catch {
      alert("Error!");
    }
  }
  return (
    <header>
      <div className="center">
        <div className="left">
          <Link to={"/"}>
            <img src="/icons/brand-icon.svg" alt="" />
            <h2>Gurmanius</h2>
          </Link>
        </div>
        <div className="right">
          <nav>
            <ul>
              <li>
                <img src="/icons/review.svg" alt="" />
                <span>
                  <Link to={"Application"}>Apply</Link>{" "}
                </span>
              </li>
              <li>
                <img src="/icons/review.svg" alt="" />
                <span>Review</span>
              </li>
              <li>
                <img src="/icons/trips.svg" alt="" />
                <span>
                  <Link to={"Trips"}>Trips</Link>{" "}
                </span>
              </li>
              <li>
                <img src="/icons/gift-shop.svg" alt="" />
                <span>Gifts</span>
              </li>
              <li className="Sign_in">
                {currentUser?.email.charAt(0) ? (
                  <>
                    <button
                      className="PFP"
                      onClick={() => setdropdownshow(!dropdownshow)}
                    >
                      <span>{currentUser?.email.charAt(0)}</span>
                    </button>
                    <ul
                      className={
                        dropdownshow ? "PFP_DropDown Active" : "PFP_DropDown"
                      }
                    >
                      <li>View Profile</li>
                      <li>Account info</li>
                      <li>Bookings</li>
                      <li>
                        <button
                          onClick={() => {
                            LogOutHandler();
                          }}
                        >
                          Sign out
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <button onClick={() => setShowAuthBlock(true)}>
                    Sign in
                  </button>
                )}
              </li>
              <li>
                <img src="/icons/cart.svg" alt="" />
                <span>Cart</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
