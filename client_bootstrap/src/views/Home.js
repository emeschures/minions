import React from 'react'
import { Jumbotron, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
        <div className="Home">
            <Jumbotron>
                <h1 className="display-3">Welcome to MinionHub</h1>
                    <p className="lead">Have you ever spotted a Minion in its natural habitat? Here at MinionHub, our community-powered database provides open access to thousands of Minions, all one click away.</p>
                        <hr className="my-2" />
                    <p className="lead">
                    <Link to="/minions">
                    <Button color="primary">Sexy Minions This Way</Button>
                    </Link>
                    </p>
            </Jumbotron>
        </div>
        )
    }
}

export default Home