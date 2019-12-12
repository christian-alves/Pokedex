import React from 'react';

function Header() {
    return(
        <div className="container">
        <nav className="navcenter">
            <div>
                <h1>Temos que pegar</h1>
            </div>
        </nav>
        <div className="hamburgerright">
            <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" 
            alt="hamburgericon"/>
        </div>
        </div>
    );
}


export default Header;