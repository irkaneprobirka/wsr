import React, {useState} from "react";
import RequestService from "../Service/RequestService";


export const SetAdmin = ({address}) => {
  
    const [userAddress, setUserAddress] = useState("");
    
    const formSetAdmins = async (e) => {

        e.preventDefault();
        const AdminSet = await RequestService.setAdmin(userAddress, address)
        console.log(AdminSet)

    }
      
    return (
        <div>

            <h1>Назначить администратором</h1>

            <form onSubmit={formSetAdmins}>
                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">Адрес</label>
                    <input type="text" value = {userAddress} onChange={({target})=> setUserAddress(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />

        </div>
    )
}