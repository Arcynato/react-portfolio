import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }
    
    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} item={item} />;
        });
    }

    getPortfolioItems() {
        axios.get('https://jameshostetter.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }

    componentDidMount() {
        this.getPortfolioItems();

    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter('construction')}>IT Support</button>
                <button className="btn" onClick={() => this.handleFilter('help_desk')}>Internet Help Desk</button>
                <button className="btn" onClick={() => this.handleFilter('cable_technician')}>Cable Installation Technician</button>

                {this.portfolioItems()}
            </div>
        )
    }
}