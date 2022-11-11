import React , {useState, useContext} from "react";
import { AddShop } from "../Components/AddShop";
import { DeleteShop } from "../Components/DeleteShop";
import { ProviderContext } from "../Context/ProviderContext";
import RequestService from "../Service/RequestService";
import { ChangeRole } from "../Components/ChangeRole";
import { SetAdmin } from "../Components/SetAdmin";
import { SendRequest } from "../Components/SendRequest";
import { ShopReturn } from "../Components/ShopReturn";
import { AdminReturn } from "../Components/AdminReturn";

export const PersonalArea = ()  => {

const {userData} = useContext(ProviderContext);

const [address, setAddress] = useState("");


    return(

        <div>
            <center>
            <p>Ваш логин: {userData._login}<br/>
            Вашe имя: {userData._name}<br/>
            Ваш адрес: {userData._address}<br/>
            Ваша роль: {userData._role}<br/>
            Ваш баланс: {userData._balance}<br/>
            id shop: {userData._shopId}<br/>
            tempRole: {userData._tempRole}
            </p>
            {
                (userData._role == 3) ? (
            <div>
                <ChangeRole address={userData._address} />

                <SetAdmin address={userData._address} />

                <AddShop address={userData._address} />

                <DeleteShop address={userData._address} />

                <ShopReturn address={userData._address} />
                
                <AdminReturn address={userData._address} />
                
            </div>) :(
                <SendRequest address={userData._address} />
            )
            }
            </center>
        </div>

    )
}