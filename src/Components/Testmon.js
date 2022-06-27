import React from "react";
import Testimg from '../assets/testimonials-bg.jpg'
import axios from 'axios'

import '../Css/style.css'

export default function Testmon() {
    const url = axios.defaults.baseURL;

    const [testimonials, setTestimonials] = React.useState(null)

    React.useEffect(() => {
        axios.get('testmon/get-testmons')
            .then(res => {
                if (res.status == 200) {
                    setTestimonials(res.data);
                    // console.log(res.data);

                }
            }).catch(e => {
                // setSuccess(false)
            })

    }, [])



    return (
        <div class="testimonials" id="testmonials" style={{ background: 'url(' + Testimg + ') center fixed', backgroundSize: 'cover' }}>
            <div class="overlay py-5">
                <div class="container py-5">
                    <h3 class="text-center text-uppercase text-light ">Testimonials</h3>

                    {
                        testimonials == null ?
                            <div class="spinner-border" role="status"></div>
                            :
                            <div  className="my-2 scro" style={{ overflow: 'auto', whiteSpace: 'nowrap' }} >

                                {
                                    testimonials.map((e) => {
                                        return (
                                            <div class="owl-item cloned p-3" style={{ width: '450px', marginTop: '20px', display: 'inline-block',}}>
                                                <div class="bg-light p-3 rounded text-center ">
                                                    <img src={url + e.image} class="img-fluid rounded-circle mx-auto mb-3" style={{ height: '100px', width: '100px' }} />
                                                    <div  style={{ overflow: 'hidden' }}>
                                                        <p style={{}} class="text-muted">{e.subtitle}</p>
                                                        <p class="text-sm mt-3">{e.name}</p>

                                                    </div>



                                                </div>
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