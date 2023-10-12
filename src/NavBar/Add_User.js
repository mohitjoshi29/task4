import React, { useEffect, useState } from 'react'
import './Add_User.css'
import User_Data from './User_Data';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Add_User() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cont, setCont] = useState('');
    const [pass, setPass] = useState('');
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState({});

    const naviate = useNavigate();

    // *******validations starts here**********//
    const validateForm = () => {
        var nm = /^[A-Za-z]+$/;   //name validation...
        var pw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$/;  //password validation...
        const newErrors = {};
        if (!name) {
            newErrors.name = 'Name is required';
        }
        else if (!name.match(nm)) {
            newErrors.name = "name is not valid";
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!email.includes('@') || !email.includes('.')) {
            newErrors.email = 'Invalid email format';
        }
        if (!cont) {
            newErrors.cont = 'Contact is required';
        } else if (cont.length !== 10) {
            newErrors.cont = 'Contact must be 10 digits';
        }
        if (!pass) {
            newErrors.pass = 'Password is required';
        } else if (pass.length < 8 || pass.length > 15) {
            newErrors.pass = 'Password length must be between 8 and 15 characters';
        } else if (!pass.match(pw)) {
            newErrors.pass="invalid password... Hint= (?=.*a-zA-Z)";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // *******validations end here**********//



    const SubmitValue = (event) => {
        event.preventDefault()
        // console.log(nameVal, emailVal, contVal, passVal)
        if (validateForm()) {
            var newData = { name: name, email: email, contact: cont, password: pass }
            const localData = localStorage.getItem("dataKey");
            const newLocalData = localData ? JSON.parse(localData) : [];
            //         newLocalData.push(newData)

            const existingData = [...newLocalData, newData];
            // setData((prev) => [...prev, newData]);
            setData(existingData);
            // console.log(data);
            // console.log(`user`)
            localStorage.setItem('dataKey', JSON.stringify(existingData));
            naviate("/user_data")
        }
    }
    // useEffect(() => {
    //   }, [data]);
    // useEffect((e)=>{
    //     // e.preventDefault();
    //     var newData={name:name,email:email,password:pass,contact:cont}
    //     setData((prev)=>[...prev,data])  
    //     console.log(data);
    // },[])
    return (
        <>
            <div className='container' id='contn-form' style={{ height: 'auto', }}>
                <div className='container'>
                    <br />
                    <div>
                        <h1 className='h1 text-primary' style={{ fontFamily: 'Arial' }}>Add User</h1>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <label htmlFor='Name'>Name</label>
                            <input type="text" id='name' value={name} class="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} aria-label="Name" />
                            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <label htmlFor='Email'>Email</label>
                            <input type="email" id='email' value={email} class="form-control" placeholder="email" aria-label="Email" onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <label htmlFor='Password'>Password</label>
                            <input type="password" id='pass' value={pass} class="form-control" placeholder="Password" aria-label="Password" onChange={(e) => setPass(e.target.value)} />
                            {errors.pass && <p style={{ color: "red" }}>{errors.pass}</p>}
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <label htmlFor='Contact'>Contact</label>
                            <input type="number" id='cont' value={cont} class="form-control" placeholder="contact" aria-label="Contact" onChange={(e) => { setCont(e.target.value) }} />
                            {errors.cont && <p style={{ color: "red" }}>{errors.cont}</p>}
                        </div>
                    </div>
                    <br />
                    <br />
                    <button className='btn btn-primary form-control' onClick={SubmitValue}>Submit</button>
                    <br />
                    <br />
                </div>
            </div>
            {/* <br/> */}
            {/* ****************************************************88 */}
            {/* <br/>
            <User_Data fun={data}/>
            <table className='table'>
                    <thead className='thead'>
                        <tr>
                            <th>Sr.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {data.map((val,index) => {
                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.contact}</td>
                                    <td>{val.password}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>

                </table> */}

        </>
    )
}


