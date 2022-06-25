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
        <div style={{ position: 'fixed', zIndex: '4', backgroundColor: '#0865b4', opacity: '' }}>


            <nav style={{ width: '80%', margin: 'auto' }} class="navbar navbar-expand-lg navbar-dark   row">
                <Link className="navbar-brand ps-3 col-7" style={{ color: 'black' }} to={"/"}>
                    <img className="" style={{ width: '10%' }} src={logo} />
                    {/* <img className="d-block d-sm-none" style={{ width: '20%' }} src={logo} /> */}
                </Link>
                <button style={{ marginLeft: 'auto' }} class="navbar-toggler col" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse col" id="navbarNav">
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
            </nav>

        

        </div>
    );
}