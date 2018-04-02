import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import httpClient from '../httpClient.js'

class NewMinion extends React.Component {

    handleFormSubmit(evt) {
        evt.preventDefault()
        console.log("Submitting Form...")
        const { name, imageUrl } = this.refs
        const minionFormFields = {
            name: name.refs.name.value,
            imageUrl: imageUrl.refs.imageUrl.value
        }

        if(!minionFormFields.imageUrl) delete minionFormFields.imageUrl

        httpClient.createMinion(minionFormFields).then((serverResponse) => {
            console.log(serverResponse.data)
            this.props.history.push('/minions')
        })
    } 

    render() {
        console.log(this.props)
        return (
            <div className="NewMinion">
                <h1>Add New Minion</h1>
               
            </div>
        )
    }
}

export default NewMinion