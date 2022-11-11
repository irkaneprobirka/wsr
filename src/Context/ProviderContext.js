import React, {useState, createContext} from "react";

export const ProviderContext = React.createContext({});

export const ProviderContextWrapper = ({children}) => {
    const initUserValues = {
        _login: "",
        _name: "",
        _address: "",
        _role: "",
        _balance: "",
        _shopId: "",
        _tempRole: "",
        _city: "",
        _employees: "",
        _id: "",
        _wallet: ""
    }

    const [userData, setUserData] = useState(initUserValues);

    const logIn = (_login, _name, _address, _role, _balance, _shopId, _tempRole) => {

        setUserData({
            _login,
            _name,
            _address,
            _role,
            _balance,
            _shopId,
            _tempRole
        })
    }
    
    const logout = () => {
        setUserData(initUserValues)
    }


    const providerValue = {
        logIn,
        userData,
        logout
    };

    return(
        <ProviderContext.Provider value={providerValue}>
            {children}
        </ProviderContext.Provider>
    )

}
