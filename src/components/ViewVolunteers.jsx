import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar';

const ViewVolunteers = () => {

    const [vdata, changeDate] = useState([]);

    const fetchData = () => {
        axios.post("http://localhost:3000/view-volunteer", vdata).then(
            (response) => {
                changeDate(response.data)
            }).catch(
                (err) => {
                    console.error("Error fetching entries: ", err)
                }
            )
    }

    useEffect(
        () => {
            fetchData();
        }, []
    )

    return (
        <div>

            <NavigationBar />
            <div className="container mt-5">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-header bg-success text-white py-3">
                        <h4 className="mb-0 text-center">
                            NSS Volunteer List
                        </h4>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-hover table-bordered align-middle text-center">

                                <thead className="table-success">
                                    <tr>
                                        <th>Volunteer ID</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>DOB</th>
                                        <th>Gender</th>
                                        <th>Blood Group</th>
                                        <th>Department</th>
                                        <th>Year</th>
                                        <th>Camp</th>
                                        <th>Hours</th>
                                        <th>Address</th>
                                        <th>Unit No.</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {vdata.map((value, index) => (
                                        <tr key={index}>

                                            <td className="fw-semibold">
                                                {value.volunteerId}
                                            </td>

                                            <td>{value.fullName}</td>

                                            <td>
                                                <span className="text-primary">
                                                    {value.email}
                                                </span>
                                            </td>

                                            <td>{value.phone}</td>

                                            <td>{value.dob}</td>

                                            <td>
                                                <span className="badge bg-secondary">
                                                    {value.gender}
                                                </span>
                                            </td>

                                            <td>
                                                <span className="badge bg-danger">
                                                    {value.bloodGroup}
                                                </span>
                                            </td>

                                            <td>{value.dept}</td>

                                            <td>
                                                <span className="badge bg-info text-dark">
                                                    {value.yos}
                                                </span>
                                            </td>

                                            <td>{value.campName}</td>

                                            <td>
                                                <span className="badge bg-success">
                                                    {value.hoursComp} hrs
                                                </span>
                                            </td>

                                            <td>{value.address}</td>

                                            <td>{value.unitNo}</td>

                                        </tr>
                                    ))}
                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewVolunteers