import React from "react";
import partnerimg from '../assets/clients/01.png'

export default function Partner() {

    const [partner, setPartner] = React.useState([1, 1, 1, 1, 1, 1])

    return (
        <div class="clients py-5">
            <div class="container py-5" id="cls">
                <h3 class="text-center text-uppercase">Our Awesome Partener</h3>


                <div class="owl-carousel owl-theme mt-5" id="demo"></div>


                <div class="owl-carousel owl-theme mt-5 owl-loaded owl-drag">


                    <div class="row">

                        {
                            partner.map((e) => {
                                return (
                                    <div class="col-sm-3">
                                        <img class="img-fluid hvr-grow" src={partnerimg} />
                                    </div>

                                )
                            })
                        }

                    </div>
                </div>

            </div>


        </div>
    )
}