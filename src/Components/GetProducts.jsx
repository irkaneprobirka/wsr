import React, { useState, useEffect } from "react";
import HttpService from "../Service/HttpService";


export const GetProducts = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            const func = 'getProducts'
            const params = []
            const getProduct = await HttpService.post('callfunc', {func, params, type: 'GET'})
            console.log(getProduct)
            setProducts(getProduct)
        })()
    }, [])

    return (
        <div>
            <h1>Список товаров</h1><br />
            <table className="table w-50">
                <thead>
                    <tr>
                        <th scope="col">Название</th>
                        <th scope="col">Производитель</th>
                        <th scope="col">Дата производства</th>
                        <th scope="col">Срок годности</th>
                        <th scope="col">Минимальная температура</th>
                        <th scope="col">Максимальная температура</th>
                        <th scope="col">Ед.изм</th>
                        <th scope="col">Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map(({ title, manufacturer, date, shelfLife, minTemperature, maxTemperature, izm, price }, idx) => (
                        <tr key={idx}>
                            <td scope="row">{title}</td>
                            <td>{manufacturer}</td>
                            <td>{date}</td>
                            <td>{shelfLife}</td>
                            <td>{minTemperature}</td>
                            <td>{maxTemperature}</td>
                            <td>{izm}</td>
                            <td>{price}</td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
        </div>
    )
}