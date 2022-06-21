import React from "react";
import uuid from "react-uuid";
import axios from 'axios'

import Carousel from 'react-bootstrap/Carousel';
import '../Css/style.css'


export default function Offer() {
    const url = axios.defaults.baseURL;


    const [offer, setOffer] = React.useState(null)



    React.useEffect(() => {
        axios.get('offer/get-offers')
            .then(res => {
                if (res.status == 200) {
                    setOffer(res.data);

                }
            }).catch(e => {
                // setSuccess(false)
            })

    }, [])


    const [show, setShow] = React.useState(false)
    const [index, setIndex] = React.useState(null)


    const styleTran = {
        transform: 'translate3d(-683px, 0px, 0px)',
        transition: 'all 0.25s ease 0s',
        width: '1606px',
        paddingLeft: '5px',
        paddingRight: '5px'
    }


    const speed = {
        transition: '-webkit-transform 0.5s ease',
        transition: 'transform 0.5s ease',
        transition: 'transform 0.5s ease, -webkit-transform 0.5s ease'
    }



    const [indexC, setIndexC] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndexC(selectedIndex);
    };

    const offerTetails = (e) => {

        return (

            <div class="modal-dialog modal-lg offerDetails" style={{ maxWidth: '100%' }}>
                <div class="modal-content round">
                    <div class="modal-header">
                        <h5 class="modal-title" style={{fontWeight:"bold"}} className="text-dark">{e.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={(event) => setShow(false)}>×</span>
                        </button>
                    </div>

                    <div class="modal-body">

                        <div class="offer bg-wihte " id="orderProduct">
                            <div class="row">
                                <div class="col-md-6">



                                    {/* <Carousel activeIndex={indexC} onSelect={handleSelect}> */}
                                    <Carousel indicators={false} prevLabel={''} nextLabel={''} activeIndex={indexC} onSelect={handleSelect}>

                                        {
                                            e.images.map((image) => {
                                                return (
                                                    <Carousel.Item>
                                                        <img
                                                            className="d-block w-100 round"
                                                            src={url + image}
                                                            // alt={item.alt}
                                                            style={{ height: '25rem' }}
                                                        />

                                                    </Carousel.Item>
                                                )
                                            })
                                        }
                                    </Carousel>


                                    <hr />
                                    <p class="card-text text-success"><span class="text-muted mr-2">Offer Expire Date:</span>{e.exDate.split('T')[0]}</p>
                                </div>
                                <div class="col-md-6">
                                    <h1 class="text-dark">{e.title}</h1>
                                    <h3 class="card-text text-success"><del class="text-muted mr-2">{e.oldPrice} EGP</del>{e.newPrice} EGP</h3>
                                    <hr />
                                    <p class="text-muted">{e.subtitle}</p>
                                </div>
                            </div>
                        </div>


                        {/* <div class="container my-2" style={{ display: 'none' }} id="orderForm">
                <div action="#" method="post">
                    <input class="form-control rounded-0 my-3" type="text" name="name" placeholder="Name" />
                    <input class="form-control rounded-0 my-3" type="email" name="email" placeholder="Email" />
                    <input class="form-control rounded-0 my-3" type="phone" name="phone" placeholder="phone" />
                    <textarea class="form-control rounded-0 my-3" rows="5" name="Short message" placeholder="Message"></textarea>
                    <button class="btn btn-primary btn-block rounded-0 hvr-icon-pop" type="submit" name="submit-btn">Order</button>
                </div>
            </div> */}
                    </div>

                    {/* <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-outline-primary" onclick="orderNow()" id="orderBTN" data-default="true">Order Now</button>
        </div> */}
                </div>
            </div>

        )
    }

    const showDetails = (event, i) => {
        setIndex(i)
        setShow(true)

    }




    return (
        <div className="py-5 " style={{width:'85%', margin:'auto'}}>



            <div class="d-flex justify-content-center">

                <h2><span class="card-text text-success">BEST </span> OFFERS</h2>

            </div>

            {
                offer == null ? <div class="spinner-border" role="status">  </div> :
                 <div className="row">

                    {
                        offer.map((e, i) => {
                            return (
                                <>
                                    <div class="col-sm-6 col-lg-4  my-3 ">
                                        <div class="card border-0 shadow round hvr-float">
                                            <div class="project">
                                                <img src={url + e.images[0]} class="card-img-top round-top" alt="offer" style={{ height: '250px' }} />

                                                <div class="project-opts round-top">
                                                    <div>
                                                        <button type="button" class="mr-3 hvr-grow bg-transparent border-0 text-white clickable" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                            <i class="flaticon-maximize-1"></i>
                                                            <span onClick={(event) => showDetails(event, i)}>Quick View</span>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <a href="offer.html" class="text-dark">
                                                    <h5>{e.title}</h5>
                                                </a>
                                                <hr />

                                                <p class="card-text text-success"><span class="text-muted mr-2">Offer:</span>
                                                    <del class="text-muted mr-2">{e.oldPrice} EGP</del>  {e.newPrice} EGP
                                                    {/* <span>( {e.newPrice / e.oldPrice * 100}% )</span> */}
                                                </p>
                                                <p class="card-text text-success"><span class="text-muted mr-2">Offer Expire Date:</span>{e.exDate.split('T')[0]}</p>
                                            </div>
                                        </div>

                                    </div>
                                    {
                                        (i == index && show) ? offerTetails(e) : null

                                    }
                                </>

                            )
                        })
                    }


                </div>
            }






        </div>
    )

}