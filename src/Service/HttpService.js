class HttpService {

    url = 'http://192.168.2.104:4000/'

    async get(path) {
        return await (await fetch(this.url + path, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })).json()
    }

    async post(path, body) {
        return await (await fetch(this.url + path, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
        })).json()
}

}
export default new HttpService();