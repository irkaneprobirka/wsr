import React, {useState} from "react";
import RequestService from "../Service/RequestService";

export const TakeRequest = ({address}) => {

    const [index, setIndex] = useState("")
    const [solut, setSolut] = useState("")

    const formTakeRequest = async(e) => {
        e.preventDefault();
        const takeReq = await RequestService.takeRequest(index, solut, address)
        console.log(takeReq)
}
    return(
        <div>
            <h1>Принять/отклонить запрос</h1>
            <form onSubmit={formTakeRequest}>
                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">ID</label>
                    <input type="text" value = {index} onChange={({target})=> setIndex(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" value = {solut} onClick={({target}) => setSolut(1)}className="btn btn-success">Принять запрос</button>
                <button type="submit" className="btn btn-danger">Отклонить запрос</button>
            </form>
            <br />
        </div>
    )
}