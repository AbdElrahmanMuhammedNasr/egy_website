import React from "react";
import axios from 'axios'


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
        <div className="py-5" style={{ backgroundColor: '#f5f3f3' }}>


            <br />
            <br />
            <div className="container" >
                <div class="d-flex justify-content-center">
                    <h2>SERVICES</h2>
                </div>
                {
                    service == null ?
                        <div class="spinner-border" role="status">
                        </div> : <div className="row">

                            {
                                service.map((e) => {
                                    return (
                                        <div class="col-sm-12 col-md-6 col-lg-4 ">
                                            <div class="bg-white shadow round  text-center" style={{ marginBottom: '20px', padding: '10px' }}>
                                                <img src={url+e.image} class="card-img-top round-top" alt="offer" style={{height:'200px'}} />

                                                <hr />
                                                <h5 class="text-capitalize">{e.name}</h5>
                                                <p class="text-md">{e.subtitle}</p>
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