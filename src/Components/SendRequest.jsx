import React, {useState} from "react";
import RequestService from "../Service/RequestService";

export const SendRequest = ({address}) => {

    const [shopId, setShopId] = useState("");
    
    const formSendRequest = async (e) =>{

        e.preventDefault();
        const a  = await RequestService.sendRequest(shopId, address)
        console.log(a)
    }


    return (
        <div>
            <h1>Отправить запрос</h1>
            <form onSubmit={formSendRequest}>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">Shop Id</label>
                    <input type="text" value = {shopId} onChange={({target})=> setShopId(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <button type="submit" className="btn btn-primary" >Отправить запрос</button>
            </form>
            <br />
        </div>
    )
}