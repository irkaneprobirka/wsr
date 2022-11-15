import React, {useState} from "react";
import RequestService from "../Service/RequestService";

export const SellerToBuyer = ({address}) =>{

    const btnSellerToBuyer = async (e) => {
        e.preventDefault();
        const sllrToBuyer = await RequestService.sellerToBuyer(address)
        console.log(sllrToBuyer)
    }

    return(
        <div>
            <h1> Переключиться на роль покупателя </h1>
            <button type="submit" onClick={btnSellerToBuyer} className="btn btn-primary">Переключиться</button>
        </div>
    )
}