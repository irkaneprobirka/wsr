import React, { useState } from "react";
import { useEffect } from "react";
import RequestService from "../Service/RequestService";

export const RequestReturn = ({ address }) => {

    const [requests, setRequests] = useState([])

    useEffect(() => {
        (async () => {
            const allRequests = await RequestService.returnRequest(address)
            console.log(allRequests)
            setRequests(allRequests)
        })()
    }, [address])


    return (
        <div>
            <h1>Список запросов</h1><br />
            <table className="table w-50">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Номер магазина</th>
                        <th scope="col">Адрес пользователя</th>
                    </tr>
                </thead>
                <tbody>

                    {requests?.map(({ id, shopId, userAddress }, idx) => {
                        if (id != 0) return (
                            <tr key={idx}>
                                <th scope="row">{id}</th>
                                <td>{shopId}</td>
                                <td>{userAddress}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}