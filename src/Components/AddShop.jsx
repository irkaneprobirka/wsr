import React, {useState} from "react";
import RequestService from "../Service/RequestService";


export const AddShop = ({ address }) => {

    const [city, setCity] = useState("");
    const [shopAddress, setShopAddress] = useState("");

            
    const formAddShop = async (e) => {

        e.preventDefault();
        const addShop = await RequestService.addShop(shopAddress, city, address)
        console.log(addShop)

    }

    return (
        <div>
            <h1>Добавление магазина</h1>
            <form onSubmit={formAddShop}>
                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">address</label>
                    <input type="text" value = {shopAddress} onChange={({target})=> setShopAddress(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">city</label>
                    <input type="text" value = {city} onChange={({target})=> setCity(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br />
        </div>
    )
}