import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {title: "Fluor", category: "IT Support", slug: "fluor" },
                {title: "Charter", category: "Internet Help Desk", slug: "charter" },
                {title: "CUI", category: "Cable Installation Technician", slug: "cui" }
            ]
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
            return <PortfolioItem title={item.title} url={'google.com'} slug={item.slug} />;
        });
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('IT Support')}>IT Support</button>
                <button onClick={() => this.handleFilter('Internet Help Desk')}>Internet Help Desk</button>
                <button onClick={() => this.handleFilter('Cable Installation Technician')}>Cable Installation Technician</button>

                {this.portfolioItems()}
            </div>
        )
    }
}