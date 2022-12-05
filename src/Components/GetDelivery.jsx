import React, { useState, useEffect } from "react";
import HttpService from "../Service/HttpService";


export const GetDelivery = () => {


    const [del, setDel] = useState([])

    useEffect(() => {
        (async () => {
            const func = 'getDelivery'
            const params = []
            const getDel = await HttpService.post('callfunc', {func, params, type: "GET"})
            console.log(getDel)
            setDel(getDel)
        })()
    }, [])

    return (
        <div>
            <h1>Список запросов на доставку</h1><br />
            <table className="table w-75">
                <thead>
                    <tr>
                        <th scope="col">id магазина</th>
                        <th scope="col">Название</th>
                        <th scope="col">Количество</th>
                        <th scope="col">Статус</th>
                        <th scope="col">Цена</th>
                        <th scope="col">Температура при перевозке</th>
                    </tr>
                </thead>
                <tbody>
                    {del.map(({ title, count, price, status, shopId, deliveryTemperature }, idx) => (
                        <tr key={idx}>
                            <th scope="row">{shopId}</th>
                            <td>{title}</td>
                            <td>{count}</td> 
                            <td>{status ? "Подтвержден" : "Не подтвержден"}</td>
                            <td>{price}</td>
                            <td>{deliveryTemperature.map((el, idx) => (
                                <span key={idx}>{el} </span>
                            ))}</td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
        </div>
    )
}