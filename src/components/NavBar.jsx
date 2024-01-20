import React from 'react';

const toggleMenu = (e) => {
  const { name, value } = e.target;
  //alert("Animo Pal! " + e)
  const menu = document.getElementById("menu")
  menu.classList.toggle("overlay-menu--is-open")
  //setForm({...form, [name]: value})
}

const Navbar = () => {
  return (
    <div>
      <div className="front">

        <div className="products-shopping-symbol-dot"><span className="dot"></span></div>
        <div className="products-shopping-symbol" id="button-toggle-menu" onClick={toggleMenu}><span className="material-symbols-outlined">shopping_bag</span></div>
        <div className="front-navi">
          <a href=""><button className="front-navi-button">INICIO</button></a>
          <button className="front-navi-button">NOVEDADES</button>
          <button className="front-navi-button">BLOG</button>
        </div>

      </div>
      <section className="overlay-menu" id="menu">
        <div className="overlay-menu-exit"><span className="material-symbols-outlined overlay-menu-exit-symbol" onClick={toggleMenu}>
            close
            </span></div>
        <div className="overlay-menu-container">
            <div className="overlay-menu-top">
                <div className="overlay-menu-title">SHOPPING CART</div>
            </div>
                <ul id="cart" className="overlay-menu-items">
                    
                </ul>
            <div className="overlay-menu-total">Total: $<span id="total">0.00</span></div>
        </div>
    </section>
    </div>

  )
}

export default Navbar