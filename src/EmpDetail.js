import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
    const {empid} = useParams();

    const [empdata, empdatachange] = useState();

    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid).then((res)=>{
            return res.json();
        }).then((res)=>{
            // console.log('성공했다면',res)
            empdatachange(res)
        }).catch((err)=>{
            // console.log('실패다,,,',err.message)
        })
    },[])

    return (
        <div className="card">
          <div className="card-title">
            {empdata && <h1>{empdata.id}'s Detail</h1>}
          </div>
          <div className="card-body">
            {empdata && <ul>
                <li>name:{empdata.name}</li>
                <li>email:{empdata.email}</li>
                <li>phone:{empdata.phone}</li>
            </ul>}
            <Link to="/" className="btn btn-danger">Back</Link>
          </div>
        </div>
    
    );
}
 
export default EmpDetail;