import React,{useState} from "react";
import RequestService from "../Service/RequestService";

export const DislikeAnswer = ({address}) => {

    const [parent, setParent] = useState("")
    const [answerId, setAnswerId] = useState("")

    const formDislikeAnswer = async (e) => {

        e.preventDefault();
        const allDislikes = await RequestService.dislikeAnswer(parent, answerId, address)
        console.log(allDislikes)

    }

    return(
        <div>
            <h1>Дизлайкнуть ответ</h1>
            <form onSubmit={formDislikeAnswer}>
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