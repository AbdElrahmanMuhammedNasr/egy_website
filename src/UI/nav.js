import React, { useState } from "react";
// import '../Css/style.css'
import { Link, NavLink } from "react-router-dom";

import logo from '../assets/logo.png'

export default function NavBar() {

    const [pages, setPages] = useState([
        { name: 'Home', link: '#home', },
        { name: 'About', link: '#about', },
        { name: 'Offer', link: '#offer', },
        { name: 'Services', link: '#service', },
        { name: 'Project', link: '#projects', },
        { name: 'Testmonials', link: '#testmonials', },
        { name: 'Partner', link: '#partner', },
    ])

    return (
        <div style={{ position: '', zIndex: '1', backgroundColor: '#0865b4', opacity: '' }}>
            <nav style={{ width: '80%', margin: 'auto' }} class="navbar navbar-expand-lg navbar-dark   d-flex justify-content-around">
                <Link className="navbar-brand ps-3" style={{ color: 'black' }} to={"/"}>
                    <img style={{ width: '10%' }} src={logo} />
                </Link>

              

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {
                            pages.map((e) => {
                                return (
                                    <a class="nav-link scroll" style={{ color: 'white' }} href={e.link}>{e.name}</a>

                                );
                            })
                        }


                    </ul>


                </div>

                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

            </nav>


        </div>
    );
}