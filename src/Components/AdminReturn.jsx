import React, { useState} from "react";
import RequestService from "../Service/RequestService";
import {useEffect} from "react";

export const AdminReturn = ({ address }) => {

    const [admins, setAdmins] = useState([])

    useEffect(() => {
        (async () => {
            const allAdmins = await RequestService.returnAdmins(address)
            console.log(allAdmins)
            setAdmins(allAdmins)
        })()
    }, [address])

    return (
        <div>
            <h1>Список администраторов</h1>< br/>
            <table className="table w-50">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                    </tr>
                </thead>
                <tbody>
                    {admins?.map((el, idx) => (
                        <tr key={idx}>
                            <th scope="row">{el}</th>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}