import React, { useState, useContext } from "react";
import { AddShop } from "../Components/AddShop";
import { DeleteShop } from "../Components/DeleteShop";
import { ProviderContext } from "../Context/ProviderContext";
// import RequestService from "../Service/RequestService";
import { ChangeRole } from "../Components/ChangeRole";
import { SetAdmin } from "../Components/SetAdmin";
import { SendRequest } from "../Components/SendRequest";
import { ShopReturn } from "../Components/ShopReturn";
import { AdminReturn } from "../Components/AdminReturn";
import { RequestReturn } from "../Components/RequestReturn";
import { TakeRequest } from "../Components/TakeRequest";
import { AdminToBuyer } from "../Components/AdminToBuyer";
import { BuyerToAdmin } from "../Components/BuyerToAdmin";
import { SellerToBuyer } from "../Components/SellerToBuyer";
import { BuyerToSeller } from "../Components/BuyerToSeller";

export const PersonalArea = () => {

    const { userData: { _login, _name, _address, _role, _shopId, _tempRole, _balance } } = useContext(ProviderContext);

    const [address, setAddress] = useState("");

    return (

        <div>
            <center>
                <p> Ваш логин: {_login}<br />
                    Вашe имя: {_name}<br />
                    Ваш адрес: {_address}<br />
                    Ваша роль: {_role}<br />
                    Ваш баланс: {_balance}<br />
                    Ваш номер магазина: {_shopId}<br />
                    Временная роль: {_tempRole}
                </p>
                {
                    (_tempRole == 3) ? (
                        <div>
                            <AdminToBuyer address={_address} />

                            <ChangeRole address={_address} />

                            <SetAdmin address={_address} />

                            <AddShop address={_address} />

                            <DeleteShop address={_address} />

                            <ShopReturn address={_address} />

                            <AdminReturn address={_address} />

                            <RequestReturn address={_address} />

                            <TakeRequest address={_address} />

                        </div>) : (_tempRole == 1 && _role == 3) ? (
                        
                        <div>
                            <BuyerToAdmin address={_address} />

                            <SendRequest address={_address} />
                        </div>
                    ) : (_tempRole == 1 && _role == 2) ? (
                        <div>
                            <BuyerToSeller address={_address}/>
                        </div>
                    ) : (_tempRole == 2)?(
                        <div>
                            <SellerToBuyer address={_address}/>
                        </div>
                    ) :(
                        <SendRequest address={_address} />
                    )
                }
            </center>
        </div>

    )
}