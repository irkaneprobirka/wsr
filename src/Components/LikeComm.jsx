import React,{useState} from "react";
import RequestService from "../Service/RequestService";


export const LikeComm = ({address}) => {

    const [shopId, setShopId] = useState("")
    const [commId, setCommId] = useState("")

    const fromLikeComm = async (e) => {

        e.preventDefault();
        const allLikes = await RequestService.likeComm(shopId, commId, address)
        console.log(e)
    }


    return(
        <div>
            <h1>Лайкнуть комментарий</h1>
            <form onSubmit={fromLikeComm}>
                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">id магазина</label>
                    <input type="text" value = {shopId} onChange={({target})=> setShopId(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">id комментария</label>
                    <input type="text" value = {commId} onChange={({target})=> setCommId(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />
        </div>
    )
}