import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLE = ['btn-primary','btn-outline']
const SIZES = ['btn-medium', 'btn-large'];


export const Button = ({children, type, onClick, buttonStyle, buttonSize}) =>{
    const checkBtnStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0] //add style to button, if button doesnt have style then apply the first index from style array to button
    const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] 

    return (
        <Link to="/" className="btn-mobile">
            <button className= {`btn ${checkBtnStyle} ${checkBtnSize}`} onClick = {onclick} type = {type}>
                {children}
            </button>
        </Link>
    )
}
