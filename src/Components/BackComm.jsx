import React, { useState } from "react";
import RequestService from "../Service/RequestService";
import { ProviderContext } from "../Context/ProviderContext";
import { useContext } from "react";

export const BackComm = ({ address }) => {

    const [shopId, setShopId] = useState("")
    const [allComments, setAllComments] = useState([])
    const [error, setError] = useState("");

    const formBackComm = async (e) => {

        e.preventDefault();
        const allComms = await RequestService.backComm(shopId, address)
        if (allComms.length > 0) {
            console.log(allComms)
            setAllComments(allComms)
            setError("");
        } else {
            setError("Комментариев нет")
        }

    }

   
    return (
        <div>
            <h1>Показать комметарии</h1>
            <form onSubmit={formBackComm}>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">id магазина</label>
                    <input type="text" value={shopId} onChange={({ target }) => setShopId(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />
            {error && <h3 style={{ color: "#000" }}>{error}</h3>}
            {
                allComments.length > 0 && !error && (
                    <div>
                        {
                            <div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">id Пользователя</th>
                                            <th scope="col">Текст</th>
                                            <th scope="col">Балл</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                            {allComments.map(({parent, text, point}, idx) => (
                                            <tr>
                                                <th scope="row">{parent}</th>
                                                <td>{text}</td>
                                                <td>{point}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                )
            }
        </div>
    )
}