import React from "react";

import axios from 'axios'

export default function Project() {
    const url = axios.defaults.baseURL;

    const [project, setProject] = React.useState(null)
    const [operProj, setOperProj] = React.useState(project); //filter


    const [show, setShow] = React.useState(false)
    const [index, setIndex] = React.useState(null)


    React.useEffect(() => {
        axios.get('project/get-projects')
            .then(res => {
                if (res.status == 200) {
                    setProject(res.data);
                    setOperProj(res.data);

                }
            }).catch(e => {
                // setSuccess(false)
            })

    }, [])

    const buttonStyle = {

        margin: '10px',
        border: '1px solid #888',
        backgroundColor: 'transparent',
        color: '#888',
        transition: 'all .5s ease-in-out'

    }
    const buttonStyleActive = {
        backgroundColor: '#333',
        color: '#fff',
        border: '1px solid #333',
        boxShadow: 'none !important',
    }
    const speed = {
        transition: '-webkit-transform 0.5s ease',
        transition: 'transform 0.5s ease',
        transition: 'transform 0.5s ease, -webkit-transform 0.5s ease'
    }

    const projectTetails = (e) => {

        return (

            <div class="modal-dialog modal-lg offerDetails" style={{ maxWidth: '100%' }}>
                <div class="modal-content round">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">{e.name} -<span className="text-success">  {e.section}</span></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={(event) => setShow(false)}>×</span>
                        </button>
                    </div>

                    <div class="modal-body">

                        <div class="offer bg-wihte " id="orderProduct">
                            <div class="row" style={{ backgroundColor: " " }}>

                                {
                                    e.images.map((image) => {
                                        return (
                                            <div class="col-sm-4" >
                                                <img class="d-block w-100" src={url + image} alt="First slide" style={{ height: '30vh', borderRadius: '10px', marginBottom: '10px' }} />
                                            </div>
                                        )
                                    })
                                }


                            </div>
                            <hr />
                            <p class="card-text text-success">
                                <span class="text-muted"><a href={e.link} style={{ color: 'black' }}> Visit Website </a></span>
                            </p>
                        </div>



                    </div>


                </div>
            </div>

        )
    }

    const showDetails = (event, i) => {
        setIndex(i)
        setShow(true)

    }

    const filterProject = (event, type) => {


        if (type == 'all') {
            setOperProj([...project])
        } else if (type == 'web') {
            setOperProj([...project.filter((e) => e.section == type)])
        }
        else if (type == 'mobile') {
            setOperProj([...project.filter((e) => e.section == type)])
        }
        else if (type == 'network') {
            setOperProj([...project.filter((e) => e.section == type)])
        }else if (type == 'cctv') {
            setOperProj([...project.filter((e) => e.section == type)])
        }


    }

    return (
        <>

            <div className="Projects  py-5" id="projects" style={{ width: '85%', margin: 'auto' }}>
                <h3 className="text-center text-uppercase">Our Popular Projects</h3>
                <div className="row py-5">

                    <div className="col-12 mb-5 text-center">
                        <button style={buttonStyle} className="btn round btn-shuffle active my-1" type="button" data-filter="all" onClick={(event) => filterProject(event, 'all')}>All</button>
                        <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-a" onClick={(event) => filterProject(event, 'web')}>Web App</button>
                        <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-b" onClick={(event) => filterProject(event, 'mobile')}>Mobile App</button>
                        <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-c" onClick={(event) => filterProject(event, 'cctv')}>CCTV</button>
                        <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-d" onClick={(event) => filterProject(event, 'network')}>Network</button>
                        {/* <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-e" onClick={(event) => filterProject(event, 'all')}>Desktop App</button> */}
                        {/* <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-f" onClick={(event) => filterProject(event, 'all')}>Digital Marketing</button> */}
                    </div>


                    <div className="col-12 my-2" >
                        <div className="projects" >


                            {
                                operProj == null ?
                                    <div class="spinner-border" role="status"></div> :
                                    <div className="row" >
                                        {
                                            operProj.map((e, i) => {
                                                return (
                                                    <>

                                                        <div class="col-sm-4 my-3" onClick={(event) => showDetails(event, i)}>
                                                            <div class="card border-0 shadow round hvr-float">
                                                                <div class="project">
                                                                    <img src={url + e.images[0]} class="card-img-top round-top" alt="offer" style={{ height: '250px', cursor: 'pointer' }} />
                                                                </div>

                                                                {/* <div class="card-body">
                                                                    <a class="text-dark">
                                                                        <h5 className="text-muted">{e.name} </h5>
                                                                    </a>

                                                                </div> */}
                                                            </div>

                                                        </div>


                                                        {
                                                            (i == index && show) ? projectTetails(e) : null

                                                        }
                                                    </>
                                                )
                                            })
                                        }

                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}