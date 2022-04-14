class Fetch {
    constructor(url) {
        this.url = url;
    }

    async get(endpoint, filter) {
        const token = localStorage.getItem('token');
        fetch(`${this.url}/${endpoint}`, {
            method: 'GET',
            
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: null
        })
    }

    async post(endpoint, data) {
        const token = localStorage.getItem('token');

        console.log(token, 'token');
    
        const response  = await fetch(`${this.url}/${endpoint}`, {
            method: 'POST',
            
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async delete() {

    }

    async put() {

    }

    async request(endpoint, method, headers, data) {
        const resp = await fetch(`${this.url}/${endpoint}`, {
            headers: {
                method,
                ...headers,
            }
        })

        return resp;
    }


}

export default Fetch;