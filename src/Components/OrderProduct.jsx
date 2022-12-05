import React, { useState } from "react";
import HttpService from "../Service/HttpService";

export const OrderProduct = () => {

    const [login, setLogin] = useState("")
    const [shopId, setShopId] = useState("")
    const [title, setTitle] = useState("")
    const [count, setCount] = useState("")

    const formOrder = async (e) => {
        e.preventDefault()
        const func = 'orderProduct'
        const params = [login, shopId, title, count]
        const allOrder = await HttpService.post('callfunc', { func, params, type: "POST" })
        console.log(allOrder)
    }


    return (
        <div>
            <h1>Заказ товара</h1>
            <form class="w-25"onSubmit={formOrder}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">логин</label>
                    <input type="text" value={login} onChange={({target}) => setLogin(target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">id магазина</label>
                    <input type="text" value={shopId} onChange={({target}) => setShopId(target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Название товара</label>
                    <input type="text" value={title} onChange={({target}) => setTitle(target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Количество</label>
                    <input type="text" value={count} onChange={({target}) => setCount(target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}