import React, {useState} from "react";
import RequestService from "../Service/RequestService";


export const DeleteShop = ({ address }) => {

    const [shopId, setShopId] = useState("");


            
    const formDeleteShop = async (e) => {
        e.preventDefault();
        await RequestService.deleteShop(shopId, address)
    }

    return (
        <div>
            <h1>Удаление магазина</h1>
            <form onSubmit={formDeleteShop}>

            <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">id</label>
                    <input type="text" value = {shopId} onChange={({target})=> setShopId(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />
        </div>
    )
}