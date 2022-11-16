import React, {useState} from "react";
import RequestService from "../Service/RequestService";

export const AddComm = ({address}) => {

    const [text, setText] = useState("")
    const [shopId, setShopId] = useState("")
    const [point, setPoint] = useState("")


    const formAddComm = async (e) => {

        e.preventDefault();
        const allComm = await RequestService.addComm(text, shopId, point, address)
        console.log(allComm)
    }

    return (
        <div>
            <h1>Добавить комметарий</h1>
            <form onSubmit={formAddComm}>
                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">Текст комментария</label>
                    <input type="text" value = {text} onChange={({target})=> setText(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">id магазина</label>
                    <input type="text" value = {shopId} onChange={({target})=> setShopId(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">Балл</label>
                    <input type="text" value = {point} onChange={({target})=> setPoint(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />
        </div>
    )
}