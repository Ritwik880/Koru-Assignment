import React from 'react'

const Landing = () => {
    return (
        <section className="landing">
            <div className="row container">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h1 className='landingHead'>Welcome to iData</h1>
                    <p className='landingPara'>Here you will find list users comming from json file</p>
                    <button className='landingBtn'>Get started</button>

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="img">
                        <img src='/landing.png' alt="landingImage" className='landingImage' width={500} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing