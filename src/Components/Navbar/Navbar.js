import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const [largeur, setLargeur] = useState(window.innerWidth);
    //  console.log(largeur);

    const BtnToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        window.addEventListener('resize', ChangeWidth)

        function ChangeWidth() {
            setLargeur(window.innerWidth)
        }
        return () => {
            window.removeEventListener('resize', ChangeWidth)
        }
    }, []);


    return (
        <nav>
            {(toggleMenu || largeur > 500) && (
                <ul className="liste">
                    <Link to="/">
                        <li className="items">Acueil</li>
                    </Link>
                    <Link to="/addArticle">
                        <li className="items">Ecrire</li>
                    </Link>
                    <Link to="/contact">
                        <li className="items">Contact</li>
                    </Link>
                </ul>
            )}
            <button onClick={BtnToggle} className="btn">BTN</button>
        </nav>
    );
}

export default Navbar;
