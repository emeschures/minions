import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import httpClient from '../httpClient.js'
import Minions from './Minions.js';

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
                <Form onSubmit={this.handleFormSubmit.bind(this)}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input ref="name" innerRef="name" type="text" id="name" />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="imageUrl">ImageUrl</Label>
                        <Input ref="imageUrl" innerRef="imageUrl" type="text" id="imageUrl" />
                    </FormGroup>

                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default NewMinion