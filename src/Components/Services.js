import React from "react";
import axios from 'axios'
import img from './1.png'


export default function Service() {
    const url = axios.defaults.baseURL;


    const [service, setService] = React.useState(null)

    React.useEffect(() => {
        axios.get('service/get-services')
            .then(res => {
                if (res.status == 200) {
                    setService(res.data);

                }
            }).catch(e => {
                // setSuccess(false)
            })

    }, [])


    return (
        <div className="py-5"  id="service" style={{ backgroundColor: '#f5f3f3' }}>

            <br />
            <div className="py-5" style={{ backgroundColor: '#f5f3f3', width: '85%', margin: 'auto' }} >
                <div class="d-flex justify-content-center">
                    <h2>SERVICES</h2>
                </div>



                <br />
                {
                    service == null ?
                        <div class="spinner-border" role="status">
                        </div> : <div className="row">

                            {
                                service.map((e) => {
                                    return (

                                        <div class="col-sm-12 col-md-6 col-lg-4  my-3">
                                            <div class="bg-white shadow round text-center service-item">
                                                <i class=" mb-3 hvr-bounce-in">
                                                    {/* <img src={img} class="card-img-top round-top" alt="offer" style={{ height: '200px', width: '150px' }} /> */}
                                                    <img src={url + e.image} class="card-img-top round-top" alt="offer" style={{ height: '200px', width: '150px' }} />

                                                </i>

                                                <h5 class="text-capitalize p-2">{e.name}</h5>
                                                <p class="text-md p-3">{e.subtitle}</p>
                                            </div>
                                        </div>


                                    )
                                })
                            }


                        </div>
                }


            </div>

        </div>
    )

}