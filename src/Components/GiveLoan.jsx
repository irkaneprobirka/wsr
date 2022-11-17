import React, {useState} from "react";
import RequestService from "../Service/RequestService";


export const GiveLoan = ({address}) => {


    const [index, setIndex] = useState("")
    const [solut, setSolut] = useState("")

    const formGiveLoan = async (e) => {

        e.preventDefault()
        const allLoan = await RequestService.giveLoan(index, solut, address)
        console.log(allLoan)
    }

    return(
        <div>
            <h1>Выдать долг</h1>
            <form onSubmit={formGiveLoan}>
            <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">ID магазина</label>
                    <input type="text" value = {index} onChange={({target})=> setIndex(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" value = {solut} onClick={({target}) => setSolut(1)}className="btn btn-success">Принять запрос</button>
                <button type="submit" className="btn btn-danger">Отклонить запрос</button>
            </form>
            <br />
        </div>
    )
}