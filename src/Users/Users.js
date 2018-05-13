import React, { Component } from 'react';
import axios from 'axios';

export class Users extends React.Component {
    componentWillMount() {
        this.setState({ userItems: [] })
        axios.get('https://reqres.in/api/users').then(response => {
            // console.log(response);
            const userItems = response.data.data.map((user) =>
                <li onClick={this.userClicked} value={user.id} className="list-group-item">{user.first_name}</li>
            );
            this.setState({ userItems: userItems });
        });
    }

    userClicked = (e) => {
        const id = e.target.value;
        axios.get('https://reqres.in/api/users/' + id).then(response => {
            // console.log(response);
            const userData = response.data.data;
            const userTemplate = (
                <div className="card user-info">
                    <img className="card-img-top" src={userData.avatar} alt="Card image" width="200" height="200"/>
                    <div className="card-body">
                        <h4 className="card-title">{userData.first_name} {userData.last_name}</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            );
            this.setState({ userTemplate: userTemplate });
        });
    }

    render() {
        return <div className="d-flex">
            <div className="card">
                <div className="card-header">
                    Users
                </div>
                <div className="card-body">
                    <h2>Click on user to view details</h2>
                    <ul className="list-group">
                        {this.state.userItems}
                    </ul>
                </div>
            </div>
            {this.state.userTemplate}
        </div>
    }
}