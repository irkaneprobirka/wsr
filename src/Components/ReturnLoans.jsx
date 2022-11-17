import React, {useState} from "react";
import { useEffect } from "react";
import RequestService from "../Service/RequestService";

export const ReturnLoans = ({address}) => {

    const [loans, setLoans] = useState([])

    useEffect(() => {
        (async () => {
            const allLoans = await RequestService.returnLoans(address)
            console.log(allLoans)
            setLoans(allLoans)
        })()
    }, [address])

    return(
        <div>
            <h1>Список запросов на долг</h1>
            <table className="table w-50">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                    </tr>
                </thead>
                <tbody>
                    {loans?.map((el, idx) => (
                        <tr key={idx}>
                            <th scope="row">{el}</th>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}