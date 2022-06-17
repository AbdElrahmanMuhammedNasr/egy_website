import React from "react";

import serviceimg from '../assets/slider/2.jpg'

export default function Service() {

    const [service, setService] = React.useState([1, 1, 1, 1, 1, 1])

    return (
        <div style={{ backgroundColor: '#f5f3f3' }}>

            <br />
            <br />
            <div className="container" >
                <div class="d-flex justify-content-center">

                    <h2>SERVICES</h2>

                </div>

                <div className="row">

                    {
                        service.map((e) => {
                            return (
                                <div class="col-6 col-md-4 ">
                                    <div class="bg-white shadow round  text-center" style={{ marginBottom: '20px', padding: '10px' }}>
                                        <img src={serviceimg} class="card-img-top round-top" alt="offer" />
                                
                                        <hr />
                                        <h5 class="text-capitalize">web application</h5>
                                        <p class="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni deserunt provident cum
                                            similique vitae incidunt, iste labore ipsum eligendi fugit.</p>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>

        </div>
    )

}