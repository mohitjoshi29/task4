import React, { useState, useEffect } from 'react';
import './User_Data.css';
import { useNavigate } from 'react-router-dom';

export default function User_Data() {
    // const [items, setItems] = useState([]);
    // const name = '';
    // const email = '';
    // const contact = '';
    // const password = '';
    const userNavigt = useNavigate();

    const localStorageitems = JSON.parse(localStorage.getItem('dataKey'));
    useEffect(() => {
        // if (localStorageitems) {
        //     setItems(localStorageitems);
        //     // console.log(items);
        // }
    }, []);
    // const BackFunc=()=>{
    //     userNavigt("/add_user");
    // }
    const Partdata = (e) => {
        // e.target.index;
        console.log(e.target.key);
    }
    return (
        <>
            <div className='container'>
                <br />
                <h1 className='h1 text-primary' style={{ fontFamily: 'Arial' }}>User Data</h1>
                {/* <button type='submit' className='btn btn-primary' onClick={BackFunc}>Back to Add User</button> */}
                <br />
                <table class='table table-striped table-hover'>
                    <thead class='thead thead-primary'>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Password</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {localStorageitems.map((val, index) => {
                            return (
                                <tr key={index} >
                                    <td>{index}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.contact}</td>
                                    <td>{val.password}</td>
                                    <td>
                                        {/* <button type='submit' className='btn btn-primary'>Open</button> */}
                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => Partdata(e)}>
                                            Open
                                        </button>

                                        {/* <!-- Modal --> */}
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Particular Data</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <br />
                                                        <div class="row">
                                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                                <label htmlFor='Name'>Name</label>
                                                                <input type="text" id='name' value={val.name} name='name' class="form-control" placeholder="Name" aria-label="Name" />
                                                                {/* {errors.name && <p style={{ color: "red" }}>{errors.name}</p>} */}
                                                            </div>
                                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                                <label htmlFor='Email'>Email</label>
                                                                <input type="email" id='email' value={val.email} name='email' class="form-control" placeholder="email" aria-label="Email" />
                                                                {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div class="row">
                                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                                <label htmlFor='Password'>Password</label>
                                                                <input type="password" id='pass' value={val.password} name='password' class="form-control" placeholder="Password" aria-label="Password" />
                                                                {/* {errors.pass && <p style={{ color: "red" }}>{errors.pass}</p>} */}
                                                            </div>
                                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                                <label htmlFor='Contact'>Contact</label>
                                                                <input type="number" id='cont' value={val.contact} name='contact' class="form-control" placeholder="contact" aria-label="Contact" />
                                                                {/* {errors.cont && <p style={{ color: "red" }}>{errors.cont}</p>} */}
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                    {/* <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save changes</button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>

                </table>
            </div>

        </>
    )
}
