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
                    // console.log(res.data);

                }
            }).catch(e => {
                // setSuccess(false)
            })

    }, [])

    return (
        <div className="py-5" style={{ backgroundColor: '#f5f3f3' }}>

            <div className='container' >
                <div className="row">
                    <div className="col" >
                        <img src={aboutImg} style={{ borderRadius: '10px' }} />

                    </div>
                    <div className="col">

                        <h5 style={{
                            marginBottom: '0.5rem',
                            fontWeight: '500',
                            lineHeight: '1.2'

                        }}>ABOUT US</h5>

                        {
                            about == null ? <p>loading</p> :
                             <p className='text-muted ' style={{ fontSize: '18px', lineHeight: '200%', }}>{about}</p>

                        }




                    </div>
                </div>
            </div>
        </div>

    )
}