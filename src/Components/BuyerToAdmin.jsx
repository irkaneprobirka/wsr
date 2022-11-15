import React, {useState} from "react";
import RequestService from "../Service/RequestService";

export const BuyerToAdmin = ({address}) => {

    const btnBuyerToAdmin = async (e)=> {
        e.preventDefault();
        const brToaAdmin = await RequestService.buyerToAdmin(address)
        console.log(brToaAdmin)
    }

    return (
        <div>
            <h1> Переключиться на роль администратора </h1>
            <button type="submit" onClick={btnBuyerToAdmin} className="btn btn-primary">Переключиться</button>
        </div>
    )
}