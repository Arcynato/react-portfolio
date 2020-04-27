import React, { Component } from 'react';
import axios from 'axios';

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {}
        }

        this.getBlogItem = this.getBlogItem.bind(this);
    }

    getBlogItem() {
        axios.get(`https://jameshostetter.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`)
        .then(response => {
            console.log("getBlogItem", response);
            this.setState({
                blogItem: response.data.portfolio_blog
            })
        })
        .catch(error => {
            console.log("getBlogItem error", error);
        })
    }

    componentDidMount() {
        this.getBlogItem();
    }

    render() {
        return (
            <div>
                content
            </div>
        )
    }
}