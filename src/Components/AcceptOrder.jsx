import React, {useState} from "react";
import HttpService from "../Service/HttpService";


export const AcceptOrder = () => {

    const [solute, setSolute] = useState("")
    const [shopId, setShopId] = useState("")
    const [orderId, setOrderId] = useState("")

    const formAccept = async (e) => {

        e.preventDefault();
        const func = 'acceptOrder'
        const params = [solute, orderId, shopId]
        const allAccept = await HttpService.post('callfunc', { func, params, type: "POST" })
        console.log(allAccept)
    }
    return (
            <div>
                <h1>Подтведить/отклонить заказ</h1>
                <form onSubmit={formAccept}>

                    <div className="mb-3 w-25">
                        <label htmlFor="exampleInputEmail1" className="form-label">Принять / отклонить (1 или 0 )</label>
                        <input type="text" className="form-control" value={solute} onChange={({ target }) => setSolute(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 w-25">
                        <label htmlFor="exampleInputEmail1" className="form-label">id заказа</label>
                        <input type="text" className="form-control" value={orderId} onChange={({ target }) => setOrderId(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 w-25">
                        <label htmlFor="exampleInputEmail1" className="form-label">id магазина</label>
                        <input type="text" className="form-control" value={shopId} onChange={({ target }) => setShopId(target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form><br />

            </div>)
}