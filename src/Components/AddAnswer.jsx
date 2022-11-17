import React, {useState} from "react";
import RequestService from "../Service/RequestService";

export const AddAnswer = ({address}) => {

    const [parent, setParent] = useState("")
    const [shopId, setShopId] = useState("")
    const [text, setText] = useState("")

    const formAddAnswer = async(e) => {

        e.preventDefault();
        const allAnswer = await RequestService.addAnswer(parent, shopId, text, address)
        console.log(allAnswer)
    }

    return(
        <div>
            <h1>Добавить ответ на комметарий</h1>
            <form onSubmit={formAddAnswer}>
                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">Логин пользователя</label>
                    <input type="text" value = {parent} onChange={({target})=> setParent(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">id магазина</label>
                    <input type="text" value = {shopId} onChange={({target})=> setShopId(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">текст</label>
                    <input type="text" value = {text} onChange={({target})=> setText(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />
        </div>
    )
}
