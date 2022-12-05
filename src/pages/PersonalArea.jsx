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
import { AddComm } from "../Components/AddComm";
import { BackComm } from "../Components/BackComm";
import { AddAnswer } from "../Components/AddAnswer";
import { BackAnswer } from "../Components/BackAnswer";
import { LikeComm } from "../Components/LikeComm";
import { DislikeComm } from "../Components/DislikeComm";
import { LikeAnswer } from "../Components/LikeAnswer";
import { DislikeAnswer } from "../Components/DislikeAnswer";
import { GiveLoan } from "../Components/GiveLoan";
import { ReturnLoans } from "../Components/ReturnLoans";
import { RequestLoan } from "../Components/RequestLoan";
import { CreateProduct } from "../Components/CreateProduct";
import { GetProducts } from "../Components/GetProducts";
import { GetRate } from "../Components/GetRate";
import { RequestDelivery } from "../Components/RequestDelivery";
import { GetDelivery } from "../Components/GetDelivery";
import { AcceptPrice } from "../Components/AcceptPrice";
import { AcceptDelivery } from "../Components/AcceptDelivery";
import { OrderProduct } from "../Components/OrderProduct";
import { GetMyDelivery } from "../GetMyDelivery";
import { CancelOrder } from "../Components/CancelOrder";
import { ReturnProduct } from "../Components/ReturnProduct";
import { CheckReturn } from "../Components/CheckReturn";
import { AcceptOrder } from "../Components/AcceptOrder";

export const PersonalArea = () => {

    const { userData: { _login, _name, _address, _role, _shopId, _tempRole, _balance } } = useContext(ProviderContext);

    const [address, setAddress] = useState("");

    return (

        <div>
            <center>
                {(_tempRole != 0 || _role != 0) ? (
                    <p> Ваш логин: {_login}<br />
                        Вашe имя: {_name}<br />
                        Ваш адрес: {_address}<br />
                        Ваша роль: {_role}<br />
                        Ваш баланс: {_balance}<br />
                        Ваш номер магазина: {_shopId}<br />
                        Временная роль: {_tempRole}<br />
                    </p>) : (
                    <div>
                        <BackComm address={_address} /><br />
                    </div>)}
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

                                <AddComm address={_address} />

                                <BackComm address={_address} /><br />

                                <AddAnswer address={_address} />

                                <BackAnswer address={_address} />
                                
                                <OrderProduct />

                                <CancelOrder />

                                <ReturnProduct />

                            </div>
                        ) : (_tempRole == 1 && _role == 2) ? (
                            <div>
                                <BuyerToSeller address={_address} />

                                <SendRequest address={_address} />

                                <AddComm address={_address} />

                                <BackComm address={_address} /><br />

                                <AddAnswer address={_address} />

                                <BackAnswer address={_address} />

                                <OrderProduct />

                                <CancelOrder />

                                <ReturnProduct />
                            </div>
                        ) :(_role ==1 || _tempRole == 1 ) ? 
                        (
                            <div>
                                
                                <SendRequest address={_address} />

                                <AddComm address={_address} />

                                <BackComm address={_address} /><br />

                                <AddAnswer address={_address} />

                                <OrderProduct />

                                <CancelOrder />

                                <ReturnProduct />

                            </div>

                        ) : (_tempRole == 2) ? (
                            <div>
                                <SellerToBuyer address={_address} />

                                <SendRequest address={_address} />

                                <AddComm address={_address} />

                                <BackComm address={_address} /><br />

                                <AddAnswer address={_address} />

                                <AcceptOrder/>
                            </div>
                        ) : (_role == 5) ? (
                            <div>
                                <GiveLoan address={_address} />

                                <ReturnLoans address={_address} />
                            </div>
                        ) : (_role == 6) ? (
                            <div>
                                <RequestLoan address={_address} />

                                <GetProducts />

                                <RequestDelivery />

                                <GetMyDelivery />

                                <AcceptPrice />
                            </div>
                        ) : (_role == 4 || _tempRole == 4) ? (

                            <CreateProduct />

                        ) : (
                        <div>

                            {/* <AddComm address={_address} />

                            <SendRequest address={_address} /> */}

                            <BackComm address={_address} /><br />
{/* 
                            <AddAnswer address={_address} /> */}

                            <BackAnswer address={_address} />
{/* 
                            <LikeComm address={_address} />

                            <DislikeComm address={_address} />

                            <LikeAnswer address={_address} />

                            <DislikeAnswer address={_address} />

                            <GetProducts /> */}

                            <GetRate />

                            {/* <RequestDelivery />

                            <GetDelivery />

                            <GetMyDelivery />

                            <AcceptPrice />

                            <CancelOrder />

                            <ReturnProduct />

                            <AcceptDelivery />

                            <OrderProduct />

                            <AcceptOrder/> */}
                        </div>
                    )
                }
            </center>
        </div>

    )
}