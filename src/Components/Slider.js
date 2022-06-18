import React from "react";
import uuid from "react-uuid";
import axios from 'axios'

import Carousel from 'react-bootstrap/Carousel';


export default function Slider() {

    const url = axios.defaults.baseURL;

    const [slider, setSlider] = React.useState([]);


    React.useEffect(() => {
        axios.get('slider/get-sliders')
            .then(res => {
                if (res.status == 200) {
                    setSlider(res.data);
                    // console.log(res.data);

                }
            }).catch(e => {
                // setSuccess(false)
            })

    }, [])


    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    slider.map((e) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={url + e.image}
                                // alt={item.alt}
                                />
                                <Carousel.Caption>
                                    <h3>{e.title}</h3>
                                    <p>{e.subtitle}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>

            {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{}}>
                <div class="carousel-inner">

                    {
                        slider.map((e) => {
                            return (
                                <div  key={uuid()} class="carousel-item active">
                                    <img class="d-block w-100" src={img1} alt="First slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>{e.title}</h5>
                                        <p>{e.subtitle}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div> */}

        </>
    )
}