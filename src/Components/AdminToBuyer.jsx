import React, {useState} from "react";
import RequestService from "../Service/RequestService";

export const AdminToBuyer = ({address}) => {

    const btnAdminToByuer = async (e) => {
        e.preventDefault();
        const admToBuyer = await RequestService.adminToBuyer(address)
        console.log(admToBuyer)
    }

    return (
        <div>
            <h1> Переключиться на роль покупателя </h1>
            <button type="submit" onClick={btnAdminToByuer} className="btn btn-primary">Переключиться</button>
        </div>
    )
}