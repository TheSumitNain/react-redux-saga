import React from "react";
import logo from "../images/cart.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1 className="logo">E-Comm</h1>
        </Link>

        <div className="search_box">
          <input type="text" placeholder="Search Product..."
          onChange={(e) => dispatch(productSearch(e.target.value))} />
        </div>

        <Link to="/cart">
          <div className="cart_div">
            <span>{result.length}</span>
            <img src={logo} alt="cart" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
