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

                }
            }).catch(e => {
                // setSuccess(false)
            })

    }, [])

    return (
        <div class="clients py-5" id="partner">
            <div class="container py-5" id="cls">
                <h3 class="text-center text-uppercase">Our Awesome Partener</h3>


                <div class="owl-carousel owl-theme mt-5" id="demo"></div>


                <div class="owl-carousel owl-theme mt-5 owl-loaded owl-drag">

                    {
                        partner == null ?
                            <div class="spinner-border" role="status"></div>
                            : <div class="row d-flex justify-content-center">

                                {
                                    partner.map((e) => {
                                        return (
                                            <img class="col-lg-3 img-fluid " style={{width:'50%'}} src={url + e.image} />

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