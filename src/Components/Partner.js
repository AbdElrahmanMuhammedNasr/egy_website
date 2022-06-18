import React from "react";
import axios from 'axios'

export default function Partner() {
    const url = axios.defaults.baseURL;

    const [partner, setPartner] = React.useState(null)

    React.useEffect(() => {
        axios.get('partner/get-partners')
            .then(res => {
                if (res.status == 200) {
                    setPartner(res.data);
                    // console.log(res.data);

                }
            }).catch(e => {
                // setSuccess(false)
            })

    }, [])

    return (
        <div class="clients py-5">
            <div class="container py-5" id="cls">
                <h3 class="text-center text-uppercase">Our Awesome Partener</h3>


                <div class="owl-carousel owl-theme mt-5" id="demo"></div>


                <div class="owl-carousel owl-theme mt-5 owl-loaded owl-drag">
                    {
                        partner == null ?
                            <div class="spinner-border" role="status"></div>
                            : <div class="row">

                                {
                                    partner.map((e) => {
                                        return (
                                            <div class="col-sm-6 col-lg-3">
                                                <img class="img-fluid hvr-grow" src={url+e.image} />
                                            </div>

                                        )
                                    })
                                }

                            </div>
                    }



                </div>

            </div>


        </div>
    )
}