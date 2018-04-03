import React from 'react'
import httpClient from '../httpClient.js'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import _ from 'lodash'
// import MinionDetail from './views/MinionDetail.js'


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
        const minionRows = _.chunk(this.state.minions, 3)
        const { minions } = this.state
            return (
                <div className="Minions">
                 <h2>Number of Minions: {minions.length}</h2>
                    {minionRows.map((row, i) => {
                        return (
                            <Row key={i}>
                                {row.map((m) => {
                                    return(
                                        <Col sm="6" key={m._id}> 
                                            <Link to={`/minions/${m._id}`}> 
                                                <img src={m.imageUrl} alt={m.name} height="200px" width="auto"/>
                                            </Link>
                                        </Col> 
                                    )     
                                })}
                            </Row>
                        )
                    })}
                   
                </div>
            )
    }
}

export default Minions