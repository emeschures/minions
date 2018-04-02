import axios from 'axios'
const httpClient = axios.create()

httpClient.getAllMinions = function() {
    return this({ method: 'get', url: '/api/minions' })
}

httpClient.createMinion = function(fields) {
    return this({ method: 'post', url: '/api/minions/', data: fields })
}

export default httpClient

