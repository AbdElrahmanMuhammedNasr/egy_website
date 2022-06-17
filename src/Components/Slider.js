import React from "react";
import img1 from '../assets/slider/1.jpg'
import img2 from '../assets/slider/1.jpg'
import img3 from '../assets/slider/1.jpg'

export default function Slider() {

    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{}}>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={img1} alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First</h5>
                            <p>kkflkglfkglfkglfkglfk</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={img2} alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First</h5>
                            <p>kkflkglfkglfkglfkglfk</p>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={img3} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First</h5>
                            <p>kkflkglfkglfkglfkglfk</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </>
    )
}