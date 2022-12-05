import React, { useState } from "react";
import HttpService from "../Service/HttpService";

export const GetRate = () => {

    const [shopId, setShopId] = useState("")
    const [allRate, setAllRate] = useState("")

    const formGet = async (e) => {
        e.preventDefault();
        const func = 'getRate'
        const params = [shopId]
        const rate = await HttpService.post('callfunc', {func, params, type: 'POST'})
        console.log(rate)
        setAllRate(rate)
    }

    return (
        <div>
            <h1>Показать рейтинг магазина</h1>
            <form onSubmit={formGet}>
                <div className="mb-3 w-25">
                    <label htmlFor="exampleInputEmail1" className="form-label">id магазина</label>
                    <input type="text" className="form-control" value={shopId} onChange={({target}) => setShopId(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />
            {<p>Рейтинг магазина: {allRate}</p>}
        </div>
    )
}
