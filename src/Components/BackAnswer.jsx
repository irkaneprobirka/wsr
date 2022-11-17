import React, { useState } from "react";
import RequestService from "../Service/RequestService";


export const BackAnswer = ({ address }) => {

    const [parent, setParent] = useState("")
    const [answer, setAnswer] = useState([])


    const formBackAnswer = async (e) => {

        e.preventDefault();
        const allAnswer = await RequestService.backAnswer(parent, address)
        console.log(allAnswer)
    }

    return (
        <div>
            <h1>Показать ответы комметарии</h1>
            <form onSubmit={formBackAnswer}>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">id магазина</label>
                    <input type="text" value={parent} onChange={({ target }) => setParent(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        </div>
    )
}