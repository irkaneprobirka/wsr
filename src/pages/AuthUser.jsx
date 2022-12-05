import React, {useState, useContext} from "react";
import RequestService from "../Service/RequestService";
import { useNavigate } from "react-router-dom";
import { ProviderContext } from "../Context/ProviderContext";

export const AuthUser = () => {

    const navigate = useNavigate();
    const {logIn} = useContext(ProviderContext);

    const [address, setAddress] = useState("");
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

        const formSubmitHandler = async (e) => {

            e.preventDefault();
            const data = await RequestService.auth(login, password, address);
            console.log(data)
            logIn(data['login'], data['fio'], data['wallet'], data['role'], data['balance'], data['shopId'], data['tempRole']);

            navigate("/PersonalArea")

        }
    return(
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={formSubmitHandler}>

                    <div className="form-group w-25">
                        <label htmlFor="exampleInputPassword1">Логин</label>
                        <input type="text" value={login} onChange={({target}) => setLogin(target.value)} className="form-control" id="exampleInputPassword1"/>
                    </div>

                    <div className="form-group w-25">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" value={password} onChange={({target}) => setPassword(target.value)} className="form-control" id="exampleInputPassword"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Отправить</button>
            </form>
        </div>
    )

}