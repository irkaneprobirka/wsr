
import React, { useState} from "react";
import RequestService from "../Service/RequestService";
import { useEffect } from "react";

export const ShopReturn = ({ address }) => {

    const [shops, setShops] = useState([])

    useEffect(() => {
        (async () => {
            const allShops = await RequestService.shopreturn(address);
            console.log(allShops)
            setShops(allShops)
        })()
    }, [address])

    return (
        <div>
            <h1>Список магазинов</h1><br />
            <table className="table w-50">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Город</th>
                        <th scope="col">emloyer</th>
                    </tr>
                </thead>
                <tbody>
                    {shops?.map(({id, city, wallet}, idx) => (
                        <tr key={idx}>
                            <th scope="row">{id}</th>
                            <td>{city}</td>
                            <td>{wallet}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}