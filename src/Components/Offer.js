import React from "react";

import offerimg from '../assets/slider/1.jpg'

export default function Offer() {

    const [offer, setOffer] = React.useState([1, 1, 1, 1, 1, 1])

    return (
        <div className="container">
            <div class="d-flex justify-content-center">

                <h2>BEST OFFERS</h2>

            </div>

            <div className="row">

                {
                    offer.map((e) => {
                        return (
                            <div class="col-sm-4 my-3">
                                <div class="card border-0 shadow round hvr-float">
                                    <div class="project">
                                        <img src={offerimg} class="card-img-top round-top" alt="offer" />
                                        <div class="project-opts round-top">
                                            <div>
                                                <button type="button" class="mr-3 hvr-grow bg-transparent border-0 text-white clickable" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="flaticon-maximize-1"></i><span>
                                                    Quick View</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <a href="offer.html" class="text-dark">
                                            <h5>CCTV Best Offer</h5>
                                        </a>
                                        <hr />

                                        <p class="card-text text-success"><del class="text-muted mr-2">50$</del>30$</p>
                                        <p class="card-text text-success"><del class="text-muted mr-2">Offer Expire Date</del>2022-8-10</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }


            </div>

        </div>
    )

}