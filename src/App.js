import React, {useState, useContext} from 'react';
import RequestService from './Service/RequestService';
import {useNavigate} from "react-router-dom";
import { ProviderContext } from './Context/ProviderContext';

function App() {

  const navigate = useNavigate();
  // const {logIn} = useContext(ProviderContext);

  const [name, setName] = useState("")
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")

  const formSubmitHandler = async(e) => {
    e.preventDefault();
    await RequestService.register(login, name, password, address)
    navigate("/AuthUser")


  }


  return (
    <div>
        <form onSubmit={formSubmitHandler}>

          
                <div className="form-group w-25">
                    <label htmlFor="exampleInputPassword1">login</label>
                    <input type="text" value={login} onChange={({target}) => setLogin(target.value)} className="form-control" id="exampleInputPassword1"/>
                </div>

                <div className="form-group w-25">
                    <label htmlFor="exampleInputPassword1">name</label>
                    <input type="text" value={name} onChange={({target})=> setName(target.value)} className="form-control" id="exampleInputPassword1"/>
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
  );
}

export default App;
