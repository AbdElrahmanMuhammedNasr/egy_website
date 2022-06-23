import React from "react";
import axios from 'axios'
import aboutImg from '../assets/about-bg.jpg'

export default function About() {

    const [about, setAbout] = React.useState(null);


    React.useEffect(() => {
        axios.get('about/get-about')
            .then(res => {
                if (res.status == 200) {
                    setAbout(res.data.title);

                }
            }).catch(e => {
                // setSuccess(false)
            })

    }, [])

    return (
        <div id="about" className="" style={{ backgroundColor: '#f5f3f3', paddingTop:'60px',paddingBottom:'60px' }}>

            <div className='container' >
                <div className="row">
                    <div className="col" >
                        <img src={aboutImg} style={{ borderRadius: '10px',marginBottom:'20px' }} />

                    </div>
                    <div className="col">

                        <h5 style={{
                            marginBottom: '0.5rem',
                            fontWeight: '500',
                            lineHeight: '1.2'

                        }}>ABOUT US</h5>

                        {
                            about == null ? <div class="spinner-border" role="status"></div> :
                             <p className='text-muted my-5' style={{ fontSize: '18px' }}>{about}</p>

                        }




                    </div>  
                </div>
            </div>
        </div>

    )
}