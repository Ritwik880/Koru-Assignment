import React from 'react'
import Table from './Table';

const Header = () => {

    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container">
                    <div className="nav">
                        <a className="navbar-brand" href="#">iData</a>
                        <div className="right">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Click here
                            </button>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-fullscreen">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Alets</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <Table />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" className="btn btn-primary">Ok</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header