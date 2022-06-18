import React, { useState } from "react";
// import '../Css/style.css'
import { NavLink } from "react-router-dom";

import logo from '../assets/logo.png'

export default function NavBar() {

    const [pages, setPages] = useState([
        { name: 'Home', link: '/home', },
        { name: 'About', link: '/about', },
        { name: 'Offer', link: '/offer', },
        { name: 'Services', link: '/service', },
        { name: 'Project', link: '/project', },
        { name: 'Testmonials', link: '/testmonials', },
        { name: 'Partner', link: '/partner', },
    ])

    return (
        <div style={{ width: '100%', margin: 'auto', position: 'fixed', zIndex: '1' }}>
            <nav class="navbar navbar-expand-lg navbar-dark navbar-light bg-light  d-flex justify-content-around">
                <a className="navbar-brand ps-3" style={{ color: 'black' }}>
                    <img style={{ width: '8%' }} src={logo} />
                </a>

                <div class="collapse navbar-collapse" id="navbarNav">
                    {/* <ul class="navbar-nav">
                        {
                            pages.map((e) => {
                                return (
                                    <NavLink className="nav-link" style={{ color: 'gray' }} to={e.link} activeClassName>
                                        {e.name}
                                    </NavLink>
                                );
                            })
                        }

                    </ul> */}

                    {/* <button type="button" class="btn btn-primary " style={{marginLeft:'50px'}}>Join</button> */}

                </div>

            </nav>


        </div>
    );
}