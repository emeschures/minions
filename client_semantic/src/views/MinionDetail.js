import React from 'react'
import httpClient from '../httpClient.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Form, FormGroup, Label, Input } from 'reactstrap'

class MinionDetail extends React.Component {

    state = {
        minion: null,
        modalOpen: false
    }
    
    handleEditClick() {
        this.setState({
            modalOpen: true
        })
    }
    
    componentDidMount() {
        httpClient.getMinion(this.props.match.params.id).then((serverResponse) => {
            this.setState({
                minion: serverResponse.data
            })
        })
    }

    handleDeleteClick() {
        httpClient.deleteMinion(this.props.match.params.id).then((serverResponse) => {
            this.props.history.push('/minions')
        })
    }

    handleEditFormSubmit(evt) {
        evt.preventDefault()
        const { name, imageUrl } = this.refs
        const minionFormFields = {
            name: name.refs.name.value,
            imageUrl: imageUrl.refs.imageUrl.value
        }

        httpClient.updateMinion(this.props.match.params.id, minionFormFields).then((serverResponse) => {
            this.setState({
                modalOpen: false,
                minion: serverResponse.data.minion
            })
        })
    }
    
    render() {
        const { minion, modalOpen } = this.state
        console.log(minion)
        if(!minion) return <h1>Loading...</h1>
        return (
            <div className="MinionDetail" style={ {textAlign: 'center'} }>
                <h1>{minion.name}</h1>
                <img src={minion.imageUrl} alt={minion.name} />
                <div>
                    <Button onClick={this.handleEditClick.bind(this)}color="primary">Edit</Button>
                </div>

                <Modal isOpen={modalOpen}>
                <ModalHeader>Edit Minion</ModalHeader>
                    <Form onSubmit={this.handleEditFormSubmit.bind(this)} >
                        <ModalBody>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input defaultValue={minion.name} ref="name" innerRef="name" type="text" id="name" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="imageUrl">ImageUrl</Label>
                                <Input defaultValue={minion.imageUrl} ref="imageUrl" innerRef="imageUrl" type="text" id="imageUrl" />
                            </FormGroup>

                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="info">Update</Button>
                            <Button type="button" onClick={this.handleDeleteClick.bind(this)} color="danger">Delete</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            
            </div>
        )
    }
}

export default MinionDetail