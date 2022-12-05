import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import HttpService from "./Service/HttpService";


export const GetMyDelivery = ( ) => {

    const [shops, setShops] = useState([]          )

    const formGet = async (e) => {

        e.preventDefault();
        const func = 'getMyDelivery'
        const params = [shops]
        const myDel = await HttpService.post('callfunc', { func, params, type: "GET" })
        console.log(myDel)
        setShops(myDel)
    }
    return (
        <div>

            <h1>Отследить сумму доставки</h1>
            <form onSubmit={formGet}>

                <div className="mb-3 w-25">
                    <label htmlFor="exampleInputEmail1" className="form-label">id магазина</label>
                    <input type="text" className="form-control" value={shops} onChange={({ target }) => setShops(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />
            {<p>{shops.price}</p>}

        </div>
    )
}