import React from "react";
import Testimg from '../assets/testimonials-bg.jpg'
import img1 from '../assets/slider/1.jpg'
import '../Css/style.css'

export default function Testmon() {
    const [testimonials, setTestimonials] = React.useState([1, 1, 1, 1, 1, 1])

    return (
        <div class="testimonials" style={{ background: 'url(' + Testimg + ') center fixed', backgroundSize: 'cover' }}>
            <div class="overlay py-5">
                <div class="container py-5">
                    <h3 class="text-center text-uppercase text-light ">Testimonials</h3>

                    <div className="row">



                        {
                            testimonials.map((e) => {
                                return (
                                    <div class="owl-item cloned col-6" style={{ width: '450px', marginTop: '20px' }}>
                                        <div class="bg-light p-3 rounded text-center ">
                                            <img src={img1} class="img-fluid rounded-circle mx-auto mb-3"  />
                                            <div>
                                                <q class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea at doloremque fugiat
                                                    neque voluptates est laborum temporibus ut sit soluta!</q>
                                                <p class="text-sm mt-3">Jhon Doe - CEO</p>

                                            </div>



                                        </div>
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