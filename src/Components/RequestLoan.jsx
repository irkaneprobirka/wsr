import React, {useState} from "react";
import RequestService from "../Service/RequestService";

export const RequestLoan = ({address}) => {

    const btnClick = async (e) => {
        e.preventDefault();
        const allLoans = await RequestService.requestLoan(address)
        console.log(allLoans)
    }

    return(
        <div>
            <h1>Занять в долг</h1>
            <button type="submit" onClick={btnClick} className="btn btn-success">Отправить запрос</button>
        </div>
    )
    
}