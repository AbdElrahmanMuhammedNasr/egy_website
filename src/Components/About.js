import React from "react";

import about from '../assets/about-bg.jpg'
export default function About() {

    return (
        <div style={{ backgroundColor: '#f5f3f3' , padding:'50px 0px'}}>

            <div className='container' >
                <div className="row">
                    <div className="col" >
                        <img src={about} style={{ borderRadius: '10px' }} />

                    </div>
                    <div className="col">

                        <h5>ABOUT US</h5>
                        <p className='text-muted ' style={{ fontSize: '18px', lineHeight: '210%', }}>
                            poribus ea, aut ipsa, blanditiis voluptates n
                            isi quo, nulla, laborum aperiam error. Fugiat en
                            im mollitia deleniti voluptatum reprehenderit nisi
                            nemo temporibus voluptatem, accusamus dolorum quibusda
                            m debitis, harum est qui amet magni illo nihil illum in
                            facere praesentium. Ex assumenda iure quasi tempore ne
                            mo tenetur in, explicabo dolore obcaecati magni illum
                            reprehenderit dolores error mollitia recusandae beatae nisi. Debitis enim ipsam
                            cupiditate, fuga omnis excepturi accusamus, suscipit a, nemo facilis ad, facere alias. Ab sint repudian
                        </p>


                    </div>
                </div>
            </div>
        </div>

    )
}