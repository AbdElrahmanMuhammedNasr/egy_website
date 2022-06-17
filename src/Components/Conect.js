import React from "react";
import logo from '../assets/logo.png'

export default function Conect() {

    return (
        <div style={{ backgroundColor: '#f5f3f3' }}>
            <div class="bg-gray py-5 center-sm border-top" id="contact">
                <div class="container py-5">
                    <h3 class="text-dark text-uppercase text-center">get in touch</h3>
                    <div class="row mt-5">
                        <div class="col-sm-6 my-3"><img class="img-fluid" src={logo} alt="egyprosoft" width="100" id="brand" />
                            <p class="text-dark mb-3 text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus omnis
                                repellendus nisi amet modi nulla rem doloremque officiis ex, unde.</p>
                            <p class="text-dark text-md"><i class="flaticon-placeholder mr-1"></i>Lorem ipsum dolor sit amet.</p>
                            <p class="text-dark text-md"><a class="text-dark" href="mailto:info@egyprosoft.com"><i class="flaticon-email mr-1"></i>info@egyprosoft.com</a></p>
                            <p class="text-dark text-md"><a class="text-dark" href="tel:0111111111"><i class="flaticon-telephone-call mr-1"></i>(+02) 0111 111 111</a></p>
                            {/* <div class="social-media"><a class="facebook mx-1 rounded" href="https://www.facebook.com/egyprosoft" target="_blank"><svg class="svg-inline--fa fa-facebook-f fa-w-9" aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" data-fa-i2svg=""><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg><!-- <i class="fab fa-facebook-f"></i> --></a><a class="twitter mx-1 rounded" href="#"><svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><!-- <i class="fab fa-twitter"></i> --></a><a class="linkedin mx-1 rounded" href="#"><svg class="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"></path></svg><!-- <i class="fab fa-linkedin-in"></i> --></a></div> */}
                        </div>
                        <div class="col-sm-6 my-3">
                            <div class="bg-white shadow-sm text-center p-3 p-md-5">
                                <div action="#" method="post">
                                    <input class="form-control rounded-0 my-3" type="text" name="name" placeholder="Name" />
                                    <input class="form-control rounded-0 my-3" type="email" name="email" placeholder="Email" />
                                    <input class="form-control rounded-0 my-3" type="phone" name="phone" placeholder="phone" />
                                    <textarea class="form-control rounded-0 my-3" rows="5" name="message" placeholder="Message"></textarea>
                                    <button class="btn btn-primary btn-block rounded-0 hvr-icon-pop" type="submit" name="submit-btn">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}