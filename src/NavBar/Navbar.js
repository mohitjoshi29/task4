import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <div className='container'>
                {/* <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6'> */}
                        <nav class="navbar navbar-expand-lg bg-primary text-white">
                            <div class="container-fluid">
                                <h2 style={{ color: 'white' }}>Navbar</h2>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav" >
                                        <li class="nav-item" style={{ marginLeft: '50px' }}>
                                            <h4><Link to='/' style={{ color: 'white', border: 'none' }}>Add User</Link></h4>
                                        </li>
                                        <li class="nav-item" style={{ marginLeft: '50px' }}>
                                            <h4><Link to='/user_data' style={{ color: 'white', border: 'none' }}>User Data</Link></h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                {/* </div>
            </div> */}
        </>
    )
}
