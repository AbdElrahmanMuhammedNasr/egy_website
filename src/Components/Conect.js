import React from "react";
import logo from '../assets/logo.png'
import '../Css/style.css'

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
                        
                            <a href="#" type="button" class="btn" style={{backgroundColor:'#3B5998',width:'50px',margin:"0px 10px"}}><i style={{color:'white'}} class="fab fa-facebook-f "></i></a>
                            <a href="#" type="button" class="btn" style={{backgroundColor:'#55ACEE',width:'50px',margin:"0px 10px"}}><i style={{color:'white'}} class="fab fa-twitter"></i></a>
                            <a href="#" type="button" class="btn" style={{backgroundColor:'#dd4b39',width:'50px',margin:"0px 10px"}}><i style={{color:'white'}} class="fab fa-google"></i></a>

                        </div>
                        <div class="col-sm-6 my-3">
                            {/* <div class="bg-white shadow-sm text-center p-3 p-md-5">

                              

                                <div action="#" method="post">
                                    <input class="form-control rounded-0 my-3" type="text" name="name" placeholder="Name" />
                                    <input class="form-control rounded-0 my-3" type="email" name="email" placeholder="Email" />
                                    <input class="form-control rounded-0 my-3" type="phone" name="phone" placeholder="phone" />
                                    <textarea class="form-control rounded-0 my-3" rows="5" name="message" placeholder="Message"></textarea>
                                    <button class="btn btn-primary btn-block rounded-0 hvr-icon-pop" type="submit" name="submit-btn">Send</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}