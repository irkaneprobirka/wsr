import React, {useState} from "react";
import RequestService from "../Service/RequestService";

export const BuyerToSeller = ({address}) => {

    const btnBuyerToSeller = async (e) => {
        e.preventDefault();
        const brToSeller = await RequestService.buyerToSeller(address)
        console.log(brToSeller)
    }

    return (
        <div>
           <h1> Переключиться на роль продавца </h1>
            <button type="submit" onClick={btnBuyerToSeller} className="btn btn-primary">Переключиться</button>
        </div>
    )
}