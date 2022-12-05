import React, { useState, useEffect } from "react";
import HttpService from "../Service/HttpService";


export const ReturnProduct = () => {


    const [orderId, setOrderId] = useState("")
    const [login, setLogin] = useState("")
    const [shopId, setShopId] = useState("")

    const formCancel = async (e) => {

        e.preventDefault();
        const func = 'returnProduct'
        const params = [orderId, shopId,  login]
        const cancel = await HttpService.post('callfunc', { func, params, type: "POST" })
        console.log(cancel)
        
    }
    return (
        <div>

            <h1>Подать запрос на возврат товара</h1>
            <form onSubmit={formCancel}>

                <div className="mb-3 w-25">
                    <label htmlFor="exampleInputEmail1" className="form-label">id заказа</label>
                    <input type="text" className="form-control" value={orderId} onChange={({ target }) => setOrderId(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 w-25">
                    <label htmlFor="exampleInputEmail1" className="form-label">id магазина</label>
                    <input type="text" className="form-control" value={shopId} onChange={({ target }) => setShopId(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 w-25">
                    <label htmlFor="exampleInputEmail1" className="form-label">Логин</label>
                    <input type="text" className="form-control" value={login} onChange={({ target }) => setLogin(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
            </form><br />
        </div>
    )
}