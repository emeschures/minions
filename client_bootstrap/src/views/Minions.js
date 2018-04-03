import React from 'react'
import httpClient from '../httpClient.js'
import { Link } from 'react-router-dom'

class Minions extends React.Component {

    state = {
        minions: []
    }

    componentDidMount() {
        httpClient.getAllMinions().then((serverResponse) => {
            this.setState({
                minions: serverResponse.data
            })
        })
    }

    render() {
        const { minions } = this.state
        return (
            <div className="Minions">
                <h2>Number of Minions: {minions.length}</h2>
                {minions.map((m) => {
                    return (
                    <Link key={m._id} to={`/minions/${m._id}`}>
                    <img src={m.imageUrl} alt={m.name} />
                    </Link>
                )
                })}
            </div>
        )
    }
}

export default Minions