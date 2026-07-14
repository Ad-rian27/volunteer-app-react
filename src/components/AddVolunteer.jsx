import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddVolunteer = () => {
    const [input, changeInput] = useState(
        {
            "volunteerId": "",
            "fullName": "",
            "email": "",
            "phone": "",
            "dob": "",
            "gender": "",
            "bloodGroup": "",
            "dept": "",
            "yos": "",
            "campName": "",
            "hoursComp": "",
            "address": "",
            "unitNo": ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add-volunteer", input).then(

            (response) => {
                console.log(response.data)
                alert("Volunteer added successfully!")
            }

        ).catch(
            (err) => (
                console.error("Error Adding Volunteer", err)
            )
        )
    }
    return (
        <div>

            <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Volunteer ID</label>
                                <input type="text" className="form-control" name='volunteerId' onChange={inputHandler} value={input.volunteerId} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Full Name</label>
                                <input type="text" className="form-control" name='fullName' onChange={inputHandler} value={input.fullName} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' onChange={inputHandler} value={input.email} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="tel" className="form-control" name='phone' onChange={inputHandler} value={input.phone} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" name='dob' onChange={inputHandler} value={input.dob} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="gender" onChange={inputHandler} value={input.gender} id="" className="form-control">
                                    <option value="">---Select an option---</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Blood Group</label>
                                <input type="text" className="form-control" name='bloodGroup' onChange={inputHandler} value={input.bloodGroup} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Department</label>
                                <select name="dept" onChange={inputHandler} value={input.dept} id="" className="form-control">
                                    <option value="">---Select an option---</option>
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                    <option value="BTech">BTech</option>
                                    <option value="BCA">BCA</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Year of Study</label>
                                <input type="text" className="form-control" name='yos' onChange={inputHandler} value={input.yos} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Camp Name</label>
                                <input type="text" className="form-control" name='campName' onChange={inputHandler} value={input.campName} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Hours Completed</label>
                                <input type="number" className="form-control" name='hoursComp' onChange={inputHandler} value={input.hoursComp} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="address"  id="" onChange={inputHandler} value={input.address} className="form-control"></textarea>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Unit Number</label>
                                <input type="text" className="form-control" name='unitNo' onChange={inputHandler} value={input.unitNo} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddVolunteer