import React from "react";

import axios from 'axios'
import { Link } from "react-router-dom";
import img from '../assets/about-bg.jpg'
import Carousel from 'react-bootstrap/Carousel';


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


    const [validsection, setvalidsection] = React.useState([]);

    //  get sliders
    React.useEffect(() => {
        axios.get('section/get-section')
            .then(res => {
                if (res.status == 200) {
                    setvalidsection(res.data);
                }
            }).catch(e => {
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


    const [indexc, setIndexc] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndexc(selectedIndex);
    };


    const [select, setSelect] = React.useState(null);

    const projectTetails = () => {

        return (

            <>
                <div style={{ opacity: '0.6', backgroundColor: 'black', width: '100vw', height: '100vh', position: 'fixed', top: 0, bottom: 0, zIndex: '100' }}>
                </div>

                <div style={{ position: 'fixed', top: '1vh', bottom: '', left: '0', right: '0', zIndex: '200' }} className="container">


                    <span aria-hidden="true" onClick={(event) => setShow(false)}>
                        <i class="fa fa-window-close" aria-hidden="true" style={{ color: 'white', cursor: 'pointer' }}></i>
                    </span>



                    <Carousel indicators={false} prevLabel={''} nextLabel={''} activeIndex={indexc} onSelect={handleSelect}>
                        {
                            select.images.map((e) => {
                                return (
                                    <Carousel.Item>



                                        <img
                                            className="d-block w-100"
                                            src={url + e}
                                            style={{ height: '90vh', width: '80vw' }}
                                        // alt={item.alt}
                                        />
                                    </Carousel.Item>


                                )
                            })
                        }
                    </Carousel>
                </div>
            </>

        )
    }

    const showDetails = (event, i, e) => {
        setIndex(i)
        setShow(true)
        setSelect(e)

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
        } else if (type == 'cctv') {
            setOperProj([...project.filter((e) => e.section == type)])
        }


    }

    return (
        <>

            {
                show == true ? projectTetails() : null

            }

            <div id="projects" className="Projects  py-5" style={{ width: '85%', margin: 'auto' }}>
                <h3 className="text-center text-uppercase"><span class="card-text text-success">Popular</span> Projects</h3>
                <div className="row py-5">

                    <div className="col-12 mb-5 text-center">
                        <button style={buttonStyle} className="btn round btn-shuffle active my-1" type="button" data-filter="all" onClick={(event) => filterProject(event, 'all')}>All</button>


                        {

                            validsection.map((s) => {
                                return (
                                    <button style={buttonStyle} className="btn round btn-shuffle my-1" type="button" data-filter=".category-a" onClick={(event) => filterProject(event, s.name)}>{s.name}</button>

                                )
                            })

                        }

                    </div>


                    <div className="col-12 my-2" >
                        <div className="projects" >





                            {
                                operProj == null ?
                                    <div class="spinner-border" role="status"></div> :
                                    <div className="row" >
                                        {
                                            operProj.slice(0, 3).map((e, i) => {
                                                return (
                                                    <>

                                                        <div class="col-md-4 col-sm-6 my-3 mix category-b category-e" data-order="2">
                                                            <div class="py-3 project">
                                                                <img class="card-img-top round-top" src={url + e.images[0]} style={{ height: '250px', cursor: 'pointer' }} />
                                                                <div class="project-opts rounded">
                                                                    <div>
                                                                        <a class="mr-3 hvr-grow" data-fancybox="gallery" href={e.link} data-toggle="tooltip" data-placement="bottom" title="" data-original-title="View">
                                                                            <i class="fa fa-link"></i>

                                                                        </a>

                                                                        <a class="ml-3 hvr-grow" onClick={(event) => showDetails(event, i, e)} target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Open">
                                                                            <i class="fa fa-camera"></i>

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div class="col-sm-4 my-3" onClick={(event) => showDetails(event, i)}>
                                                            <div class="card border-0 shadow round hvr-float">
                                                                <div class="project">
                                                                    <img src={url + e.images[0]} class="card-img-top round-top" alt="offer" style={{ height: '250px', cursor: 'pointer' }} />
                                                                </div>
                                                            </div>

                                                        </div> */}


                                                        {/* {
                                                            (i == index && show) ? projectTetails(e) : null

                                                        } */}
                                                    </>
                                                )
                                            })
                                        }

                                    </div>
                            }


                        </div>
                    </div>
                </div>
                <div className="text-center text-uppercase">
                    <Link type="button" class="btn btn-success" to="/more-project">Show More Project</Link>
                </div>

            </div>
        </>
    )
}