import React, {useState} from "react";
import RequestService from "../Service/RequestService";

export const SendRequest = () => {

    const [shopId, setShopId] = useState("");
    
    const [address, setAddress] = useState("");

    const formSendRequest = async (e) =>{
        e.preventDefault();
        const a  = await RequestService.sendRequest(shopId, address)
        console.log(a)
    }

    // const btnAdminToBuyer = async (e) =>{
    //     e.preventDefault();
    //     const b = await RequestService.adminToBuyer(address)
    //     console.log(b)
    // }

    return (
        <div>
        <div>
            <h1>Send request</h1>
            <form onSubmit={formSendRequest}>

            <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">Address</label>
                    <input type="text" value = {address} onChange={({target})=> setAddress(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">Shop Id</label>
                    <input type="text" value = {shopId} onChange={({target})=> setShopId(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <button type="submit" className="btn btn-primary" >Повысить роль</button>
                
                <button type="submit" className="btn btn-primary" >Понизить роль</button>
            </form>
            <br />
        </div>

        </div>
    )
}