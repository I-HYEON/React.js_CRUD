import {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmpListing = () => {
    const [empData, setEmpData] = useState(null)
    const navigate = useNavigate()

    const LoadDetail = (empid) => {
        navigate('/employee/detail/'+empid)
    }
    const LoadEdit = (empid) => {
        navigate('/employee/edit/'+empid)
    }
    const DeleteFunction = (empid) => {
        if (window.confirm('Are you sure you want to delete?')){
            fetch("http://localhost:8000/employee/"+empid,{
                method: 'DELETE'
            }).then((res)=>{
            alert('Removed Successfully')
            window.location.reload();
        }).catch((err)=>{
            console.log('실패다,,,',err.message)
        })
        }
    }

    useEffect(()=> {
        fetch("http://localhost:8000/employee").then((res)=>{
            return res.json();
        }).then((res)=>{
            // console.log(res)
            setEmpData(res)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])
    return (
        <div className='container'>
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className='divbtn'>
                    <Link to="employee/create" className='btn btn-success'>Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empData && empData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <a onClick={()=>{LoadEdit(item.id)}} className="btn btn-success">Edit</a>
                                        <a onClick={()=>{DeleteFunction(item.id)}} className="btn btn-danger">Delete</a>
                                        <a onClick={()=>{LoadDetail(item.id)}} className="btn btn-primary">Detail</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
 
export default EmpListing;