import axios from 'axios'
const httpClient = axios.create()

httpClient.getAllMinions = function() {
    return this({ method: 'get', url: '/api/minions' })
}

httpClient.createMinion = function(fields) {
    return this({ method: 'post', url: '/api/minions/', data: fields })
}

httpClient.getMinion = function(id) {
    return this({ method: 'get', url: `/api/minions/${id}` })
}

httpClient.deleteMinion = function(id) {
    return this({ method: 'delete', url: `/api/minions/${id}` })
}

httpClient.updateMinion = function(id, fields) {
    return this({ method: 'patch', url: `/api/minions/${id}`, data: fields })
}

export default httpClient