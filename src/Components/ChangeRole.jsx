import React, {useState} from "react";
import RequestService from "../Service/RequestService";


export const ChangeRole = ({address}) => {

    const [userAddress, setUserAddress] = useState("");
    const [role, setRole] = useState("");
    
    
     const formChangeRole = async (e) => {
    
        e.preventDefault();
        const changeRole = await RequestService.changeRole(userAddress, address, role)
        console.log(changeRole)
    
    }
        
    return (
        <div>
            <h1>Смена роли</h1>
            <form onSubmit={formChangeRole}>
                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">address</label>
                    <input type="text" value = {userAddress} onChange={({target})=> setUserAddress(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">role</label>
                    <input type="text" value = {role} onChange={({target})=> setRole(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />
        </div>
    )
}