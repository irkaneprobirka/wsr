import React, { useState } from "react";
import RequestService from "../Service/RequestService";


export const BackAnswer = ({ address }) => {

    const [parent, setParent] = useState("")
    const [answer, setAnswer] = useState([])
    const [error, setError] = useState("")


    const formBackAnswer = async (e) => {

        e.preventDefault();
        const allAnswer = await RequestService.backAnswers(parent, address)
        if (allAnswer.length > 0){
            console.log(allAnswer)
            setAnswer(allAnswer)
            setError("")
        }else{
            setError("Ответов на комментарий нет")
        }
    }

    return (
        <div>
            <h1>Показать ответы комметарии</h1>
            <form onSubmit={formBackAnswer}>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputEmail1">id комментария</label>
                    <input type="text" value={parent} onChange={({ target }) => setParent(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br />
            {error && <h3>{error}</h3>}
            {
                answer.length > 0 && !error && (
                    <div>
                        {
                            <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">id комментария</th>
                                    <th scope="col">логин комментатора</th>
                                    <th scope="col">текст</th>
                                    <th scope="col">лайк</th>
                                    <th scope="col">дизлайк</th>
                                </tr>
                            </thead>
                            <tbody>

                                {answer.map(({id, parent, userLogin, text, likes, dislikes}, idx) => (
                                <tr>
                                    <th scope="row">{id}</th>
                                    <td>{parent}</td>
                                    <td>{userLogin}</td>
                                    <td>{text}</td>
                                    <td>{likes}</td>
                                    <td>{dislikes}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        }
                    </div>
                )
            }
        </div>
    )
}