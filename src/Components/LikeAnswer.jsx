import React, {useState} from "react";
import RequestService from "../Service/RequestService";


export const LikeAnswer = ({address}) => {

    const [parent, setParent] = useState("")
    const [answerId, setAnswerId] = useState("")

    const formLikeAnswer = async (e) => {

        e.preventDefault()
        const likeAnsw = await RequestService.likeAnswer(parent, answerId, address)
        console.log(likeAnsw)
    }

    return(
        <div>
            <h1>Лайкнуть ответ</h1>
            <form onSubmit={formLikeAnswer}>
                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">id комментария</label>
                    <input type="text" value = {parent} onChange={({target})=> setParent(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">id ответа</label>
                    <input type="text" value = {answerId} onChange={({target})=> setAnswerId(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />

        </div>
    )
}