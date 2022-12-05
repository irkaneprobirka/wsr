import React, { useState } from "react";
import HttpService from "../Service/HttpService";


export const RequestDelivery = () => {

    const [shopId, setShopId] = useState("")
    const [title, setTitle] = useState("")
    const [count, setCount] = useState("")

    const formDel = async (e) => {
        e.preventDefault();
        const func = 'requestDelivery'
        const params = [ shopId, title, count]
        const del = await HttpService.post('callfunc', {func, params, type: "POST"})
        console.log(del)
    }
    return (
        <div>
            <h1>Сделать заказ товара</h1>
            <form onSubmit={formDel}>
                <div className="mb-3 w-25">
                    <label htmlFor="exampleInputEmail1" className="form-label">id магазина</label>
                    <input type="text" className="form-control" value={shopId} onChange={({ target }) => setShopId(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 w-25">
                    <label htmlFor="exampleInputEmail1" className="form-label">Название товара</label>
                    <input type="text" className="form-control" value={title} onChange={({ target }) => setTitle(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 w-25">
                    <label htmlFor="exampleInputEmail1" className="form-label">Количество</label>
                    <input type="text" className="form-control" value={count} onChange={({ target }) => setCount(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />

        </div>
    )
}