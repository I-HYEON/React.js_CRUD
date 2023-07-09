import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

const EmpCreate = () => {

    const [id, idchange] = useState("")
    const [name, namechange] = useState("")
    const [email, emailchange] = useState("")
    const [phone, phonechange] = useState("")
    const [active, activechange] = useState(true)
    const [validation, valchange] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const empData = {name,email,phone,active}

        fetch("http://localhost:8000/employee",{
            method: "POST",
            headers:{"content-type": "application/json"},
            body:JSON.stringify(empData)
        }).then((res)=>{
            alert("Save successfully")
            // console.log("결과?",res)
            navigate("/")
        }).catch((err)=>{
            console.log("실패",err.message)
        })

    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-3">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h1>Employee Create</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Id</label>
                                            <input value={id} disabled="undisabled" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={(e)=>valchange(true)} onChange={(e)=>namechange(e.target.value)} className="form-control"/>
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={(e)=>emailchange(e.target.value)} className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={(e)=>phonechange(e.target.value)} className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input checked={active} onChange={(e)=>activechange(e.target.checked)} type="checkbox" className="form-check-input"/>
                                            <label className="form-check-label">Is Active</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default EmpCreate;