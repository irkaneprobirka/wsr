import React, {useState} from "react";
import RequestService from "../Service/RequestService";


export const BackAnswer = ({address}) => {

    const [parent, setParent] = useState("")
    const [answer, setAnswer] = useState([])


    const formBackAnswer = async(e) => {

        e.preventDefault();
        const allAnswer = await RequestService.BackAnswer(parent, address)
        console.log(allAnswer)
    }

    return(
        <div>
         <h1>Показать ответы комметарии</h1>
            <form onSubmit={formBackAnswer}>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">id магазина</label>
                    <input type="text" value={parent} onChange={({ target }) => setParent(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />
        </div>
    )
}