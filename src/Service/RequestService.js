import Web3 from "web3";
import abi from "./abi.json";

class RequestService {

    web3 = new Web3("http://localhost:8545")
    contract = new this.web3.eth.Contract(abi, "0x5FbDB2315678afecb367f032d93F642f64180aa3")

    async register(_login, _name, _password, _address) {
        try{
            return await this.contract.methods.register(_login, _name, _password).send({from: _address}) 
        }catch(e){
            console.log('User alredy created')
        }
    }

    async auth(_login, _password, _address) {
        try {
            return await this.contract.methods.auth(_login, _password).call({from: _address})
        } catch(e) {
            console.log("Wrong pair of login and password")
        }
    }

    async addShop(_shopAddress, _city, _address){

        try {
            return await this.contract.methods.addShop(_shopAddress, _city).send({from: _address})
        } catch(e) {
            console.log(e);
            console.log("Shop not add")
        }
    }

    async deleteShop(_shopId, _address){
        
        try {
            return await this.contract.methods.deleteShop(_shopId).send({from: _address})
        } catch(e) {
            console.log(e)
            console.log("Shop not delete")
        }
    }

    
    async setAdmin(_userAddress,_address){
                
        try {
            return await this.contract.methods.setAdmin(_userAddress).send({from: _address})
        } catch(e) {
            console.log(e)
        }
    }

    
    async returnAdmins(_address){
        try{
            return await this.contract.methods.returnAdmins().call({from: _address})
        }catch(e){
            console.log(e)
            console.log('admins not return')
        }
    }

    async shopreturn(_address){
        try{
            return await this.contract.methods.shopreturn().call({from: _address})
        }catch(e){
            console.log(e)
            console.log('Shop not found')
        }
    }
    
    async returnRequest(_address){
        try{
            return await this.contract.methods.returnRequest().call({from: _address})   
        }catch(e){
            console.log(e)
            console.log('request not return')
        }
    }

    async emplreturn(_id, _address){
        return await this.contract.methods.emplereturn(_id).call({from: _address})
    }

    async changeRole(_userAddress, _address, _role){
        try{
            return await this.contract.methods.changeRole(_userAddress, _role).send({from: _address})
        }catch(e){
            // console.log('Request not send')
            console.log(e)
        }
    }

    async sendRequest(_shopId, _address){
        try{
            return await this.contract.methods.sendRequest(_shopId).send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async takeRequest(_index, _solut, _address){
         try{
            return await this.contract.methods.takeRequest(_index, _solut).send({from: _address})
        }catch(e){
            console.log(e)
        }
    }


    async adminToBuyer(_address){
        try{
            return await this.contract.methods.adminToBuyer().send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async buyerToAdmin(_address){
        try{
            return await this.contract.methods.buyerToAdmin().send({from: _address})
        }catch(e){
            console.log(e)
        }
    }
    
    async sellerToBuyer(_address){
        try{
            return await this.contract.methods.sellerToBuyer().send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async buyerToSeller(_address){
        try{
            return await this.contract.methods.buyerToSeller().send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async addComm(_text, _shopId, _point, _address){
        try{
            return await this.contract.methods.addComm(_text, _shopId, _point).send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async addAnswer(_parent, _shopId, _text, _address){
        try{
            return await this.contract.methods.addAnswer(_parent, _shopId, _text).send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async backComms(_shopId, _address){
        try{
            return await this.contract.methods.backComms(_shopId).call({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async backAnswers(_parent, _address){
        try{
            return await this.contract.methods.backAnswers(_parent).call({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async likeComm(_shopId, _commId, _address){
        try{
            return await this.contract.methods.likeComm(_shopId, _commId).send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async dislikeComm(_shopId, _commId, _address){
        try{
            return await this.contract.methods.dislikeComm(_shopId, _commId).send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async likeAnswer(_parent, _answerId, _address){
        try{
            return await this.contract.methods.likeAnswer(_parent, _answerId).send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async dislikeAnswer(_parent, _answerId, _address){
        try{
            return await this.contract.methods.dislikeAnswer(_parent, _answerId).send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async giveLoan(_index, _solut, _address){
        try{
            return await this.contract.methods.giveLoan(_index, _solut).send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async requestLoan(_address){

        try{
            return await this.contract.methods.requestLoan().send({from: _address})
        }catch(e){
            console.log(e)
        }
    }

    async returnLoans(_address){
        try{
            return await this.contract.methods.returnLoans().call({from: _address})
        }catch(e){
            console.log(e)
        }
    }
    
}

export default new RequestService();