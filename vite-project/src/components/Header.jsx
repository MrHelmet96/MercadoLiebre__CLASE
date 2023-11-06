import React from "react";
import logo from '..assets/logo-mercado-liebre.svg';
import {FaHandHoldingUsd} from 'react-icons/Fa';
import {PiMagnifyingGlassLight} from 'react-icons/Pi';
import '../styles.css'

export default function Header() {

    return(
        <header className="header">
            <figure>
                <img src={logo} alt="mercado liebre" />
            </figure>
            <form>
                <input type="text" />
                <PiMagnifyingGlassLight />
            </form>
            <FaHandHoldingUsd/>
            <p>Pagá en cuotas y sin tarjeta de crédito</p>
        </header>
    )
}