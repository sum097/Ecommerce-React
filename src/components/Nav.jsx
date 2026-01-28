import React, { useState } from "react";
import NavBar from "./ui/NavBar";
import Menu from "./ui/Menu";
import Cart from "./ui/Cart";

const Nav = () => {

  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <NavBar setCartOpen={setCartOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
    </>
  );
};

export default Nav;
