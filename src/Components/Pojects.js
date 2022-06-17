import React from "react";
import serviceimg from '../assets/slider/2.jpg'

export default function Project() {

    const [project, setProject] = React.useState([1, 1, 1, 1, 1, 1])

    const buttonStyle = {

        margin: '10px',
        border: '1px solid #888',
        backgroundColor: 'transparent',
        color: '#888',
        transition: 'all .5s ease-in-out'

    }
    const buttonStyleActive = {
        backgroundColor: '#333',
        color: '#fff',
        border: '1px solid #333',
        boxShadow: 'none !important',
    }


    return (
        <>
            <div className="Projects container py-5" id="projects">
                <h3 className="text-center text-uppercase">Our Popular Projects</h3>
                <div className="row py-5">

                    <div className="col-12 mb-5 text-center">
                        <button style={buttonStyle} className="btn round btn-shuffle active my-1" type="button" data-filter="all">All</button>
                        <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-a">Web App</button>
                        <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-b">Mobile App</button>
                        <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-c">CCTV</button>
                        <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-d">Network</button>
                        <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-e">Desktop App</button>
                        <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-f">Digital Marketing</button>
                    </div>


                    <div className="col-12 my-2">
                        <div className="projects container" >
                            <div className="row" >
                                {
                                    project.map((e) => {
                                        return (
                                            <div className="col-md-4 col-sm-6 my-3 mix category-a category-f" data-order="1" >
                                                <div className="py-3 project">
                                                    <img className="img-fluid rounded border" src={serviceimg} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}