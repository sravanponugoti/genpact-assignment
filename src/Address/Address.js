import React, { Component } from 'react';

const COUNTRIES = {
    "India": {
        "Karnataka": {
            "Bengaluru": ["RR Nagar", "Majestic"]
        },
        "Telangana": {
            "Hyderabad": ["Dilsukhnagar", "Kukatpally"]
        }
    },
    "US": {
        "Texas": {
            "Kingsville": ["4th Avenue", "5th Avenue"]
        },
        "California": {
            "SanJose": ["Church street"]
        }
    }
}

export class Address extends React.Component {
    constructor() {
        super();
        this.state = {
            country: '',
            state: '',
            city: '',
            areas: [],
            countryItems: [],
            stateItems: [],
            cityItems: [],
            areaItems: []
        }
    }

    componentWillMount() {
        let countries = Object.keys(COUNTRIES);
        let countryItems = countries.map((country) =>
            <option key={country}>{country}</option>
        );
        this.setState({ countryItems: countryItems });
    }

    countryChange = (e) => {
        this.setState({ country: e.target.value });
        if (!e.target.value) {
            this.setState({
                state: '',
                city: '',
                areas: [],
                stateItems: [],
                cityItems: [],
                areaItems: []
            });
            return;
        }
        let states = Object.keys(COUNTRIES[e.target.value]);
        let stateItems = states.map((state) =>
            <option key={state}>{state}</option>
        );
        this.setState({ stateItems: stateItems });
    }

    stateChange = (e) => {
        this.setState({ state: e.target.value });
        if (!e.target.value) {
            this.setState({
                city: '',
                areas: [],
                cityItems: [],
                areaItems: []
            });
            return;
        }
        let cities = Object.keys(COUNTRIES[this.state.country][e.target.value]);
        let cityItems = cities.map((city) =>
            <option key={city}>{city}</option>
        );
        this.setState({ cityItems: cityItems });
    }

    cityChange = (e) => {
        this.setState({ city: e.target.value });
        if (!e.target.value) {
            this.setState({
                areas: [],
                areaItems: []
            });
            return;
        }
        let areas = COUNTRIES[this.state.country][this.state.state][e.target.value];
        let areaItems = areas.map((area) =>
            <option value={area}>{area}</option>
        );
        this.setState({ areaItems: areaItems });
    }

    areasChange = (e) => {
        const areas = this.state.areas;
        if (!areas.includes(e.target.value)) {
            areas.push(e.target.value)
            this.setState({ areas: areas });
        }

    }

    reset = () => {
        this.setState({
            country: '',
            state: '',
            city: '',
            areas: [],
            stateItems: [],
            cityItems: [],
            areaItems: []
        });
    }

    render() {
        return <div className="d-flex">
            <div className="card">
                <div className="card-header">
                    Address Input
                </div>
                <div className="card-body">
                    <div className="d-flex flex-row">
                        <div className="address-item">
                            <h5 className="card-title">Country</h5>
                            <select className="form-control" value={this.state.country} onChange={this.countryChange}>
                                <option value="">Select</option>
                                {this.state.countryItems}
                            </select>
                        </div>
                        <div className="address-item">
                            <h5 className="card-title">State</h5>
                            <select className="form-control" value={this.state.state} onChange={this.stateChange}>
                                <option value="">Select</option>
                                {this.state.stateItems}
                            </select>
                        </div>
                        <div className="address-item">
                            <h5 className="card-title">City</h5>
                            <select className="form-control" value={this.state.city} onChange={this.cityChange}>
                                <option value="">Select</option>
                                {this.state.cityItems}
                            </select>
                        </div>
                        <div className="address-item">
                            <h5 className="card-title">Areas</h5>
                            <select className="form-control" value={this.state.areas} multiple name="areas" onChange={this.areasChange}>
                                <option value="">Select</option>
                                {this.state.areaItems}
                            </select>
                        </div>
                    </div>

                    <a href="#" className="btn btn-primary" onClick={this.reset}>Reset</a>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    Address Output
                </div>
                <div className="card-body">
                    <table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Areas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.country}</td>
                                <td>{this.state.state}</td>
                                <td>{this.state.city}</td>
                                <td>{this.state.areas}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>;
    }
}
