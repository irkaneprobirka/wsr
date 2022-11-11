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
            logIn(data[0]['login'], data[0]['name'], data[0]['wallet'], data[0]['role'], data[0]['balance'], data[0]['shopId'], data[0]['tempRole']);

            navigate("/PersonalArea")

        }
    return(
        <div>
            <form onSubmit={formSubmitHandler}>

                    <div className="form-group w-25">
                        <label htmlFor="exampleInputPassword1">login</label>
                        <input type="text" value={login} onChange={({target}) => setLogin(target.value)} className="form-control" id="exampleInputPassword1"/>
                    </div>

                    <div className="form-group w-25">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={password} onChange={({target}) => setPassword(target.value)} className="form-control" id="exampleInputPassword"/>
                    </div>

                    <div className="form-group w-25">
                        <label htmlFor="exampleInputEmail1">address</label>
                        <input type="text" value={address} onChange={({target}) => setAddress(target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}