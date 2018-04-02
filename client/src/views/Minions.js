import React from 'react'
import httpClient from '../httpClient.js'

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
                    return <img src={m.imageUrl} alt={m.name} key={m._id} />
                })}
            </div>
        )
    }
}

export default Minions