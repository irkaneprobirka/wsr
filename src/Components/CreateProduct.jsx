import React, { useState } from "react";
import HttpService from "../Service/HttpService";

export const CreateProduct = () => {
    const [title, setTitle] = useState("")
    const [manufacturer, setManufacturer] = useState("")
    const [date, setDate] = useState("")
    const [shelfLife, setShelfLife] = useState("")
    const [minTemp, setMinTemp] = useState("")
    const [maxTemp, setMaxTemp] = useState("")
    const [izm, setIzm] = useState("")
    const [price, setPrice] = useState("")

    const formCreate = async (e) => {
        e.preventDefault();
        const func = 'createProduct'
        const params = [title, manufacturer, date, shelfLife, minTemp, maxTemp , izm, price]
        const product = await HttpService.post('callfunc', {func, params, type: 'POST'})
        console.log(product)
    }

    return (
        <div>
            <h1>Создание товара</h1>
            <form className="w-25" onSubmit={formCreate}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Название </label>
                    <input type="text" className="form-control" value={title} onChange={({target}) => setTitle(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Производитель</label>
                    <input type="text" value={manufacturer} onChange={({target}) => setManufacturer(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Дата</label>
                    <input type="text" value={date} onChange={({target}) => setDate(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Срок годности</label>
                    <input type="text" value={shelfLife} onChange={({target}) => setShelfLife(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Минимальная температура хранения</label>
                    <input type="text" value={minTemp} onChange={({target}) => setMinTemp(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Максимальная температура хранения</label>
                    <input type="text" value={maxTemp} onChange={({target}) => setMaxTemp(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Единица измерения</label>
                    <input type="text" value={izm} onChange={({target}) => setIzm(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Цена</label>
                    <input type="text" value={price} onChange={({target}) => setPrice(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
            </form><br />
        </div>
    )
}