import React from 'react';
import styled from 'styled-components';
import Navmenu from './nav-menu';

const Nav = styled.nav` 
    height: 64px;
    line-height: 64px;
    width:100%;
    background-color:orange;
    .nav-wrapper{
        position: relative;
        height: 100%;
        ul{
            float:left;
            margin: 0;
            li{
                float: left;
                padding: 0;
                list-style:none;
                a{
                    padding:10px 10px;
                }
            }
        }
    }
`
let Navbar = (props) => {
    let menu = [
        {title:'Home', link:'home.html'},
        {title:'Produtos', link:'produto.html'},
        {title:'Sobre', link:'sobre.html'},
        {title:'Contato', link:'contato.html'},
    ];

    return(
        <Nav>
            <div className="nav-wrapper">
                <a href="logo.html">{props.logo}</a>
                <Navmenu menu={menu}/>
            </div>
        </Nav>
    )
};

export default Navbar;


