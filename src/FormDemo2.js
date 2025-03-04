import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import alertify from 'alertifyjs';


export default class FormDemo2 extends Component {
    state = { email: "", password: "", city: "", description: "" }

    handleChange = event => { //kendimiz oluşturduk
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value }) //form için form attribute name & value
    }

    handleSubmit = event => {
        event.preventDefault(); //sayfanın kendini yenilemesini önler
        alertify.success(this.state.email + "added to database!", 2);//2 sn kalır
        alertify.success(this.state.password + "added to database!", 2);//2 sn kalır
        alertify.success(this.state.city + "added to database!", 2);//2 sn kalır
        alertify.success(this.state.description + "added to database!", 2);//2 sn kalır
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter email'
                            onChange={this.handleChange}
                        >
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Enter password'
                            onChange={this.handleChange}
                        >
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            placeholder='description'
                            onChange={this.handleChange}
                        >
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input
                            type="select"
                            name="city"
                            id="city"
                            onChange={this.handleChange}>
                            <option>Ankara</option>
                            <option>Eskişehir</option>
                            <option>Bursa</option>
                            <option>Istanbul</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        )
    }
}
