import React, { Component } from "react";
import Header from './partials/header';
import Footer from "./partials/footer";
import Aside from "./partials/aside";
import Post from "./partials/post";
import axios from "axios";

class Index extends Component {
    state = {
        posts: [],
        postsSearched: false
    }

    getPost = (api, bool) => {
        axios({
            method: 'GET',
            url: api,
            responseType: 'json'
        }).then((res) => {
            this.setState({
                posts: res.data,
                postsSearched: bool
            })
        })
    }
    
    updateComponent = () => {
        if (!this.state.postsSearched) {
            if (this.props.topic === 'all') {
                this.getPost('http://localhost:3700/api/posts', true);
            } else if (this.props.topic !== 'all') {
                this.getPost('http://localhost:3700/api/post/' + this.props.topic, false);
            }
        }
    }

    componentDidMount() {
        this.updateComponent();
    }

    componentDidUpdate() {
        if(this.state.postsSearched){
            this.getPost('http://localhost:3700/api/posts');
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-8 p-3">
                            <main>
                                <div className="card shadow">
                                    <div className="card-header card-header-main">
                                        <h2 className="card-title mb-1 title-posts">
                                            {this.props.topic !== "all" ? this.props.topic : 'LAST POSTS'}
                                        </h2>
                                    </div>
                                    <div className="card-body card-body-main">
                                        {this.state.posts.length > 0 &&
                                            this.state.posts.map((post, i) => {
                                                return (<Post key={i} post={post} />)
                                            })
                                        }
                                        {this.state.posts.length === 0 &&
                                            <h3 className="my-2 text-center">There is no post</h3>
                                        }
                                    </div>
                                </div>
                            </main>
                        </div>
                        <div className="col-md-4 p-3">
                            <Aside />
                        </div>
                    </div>
                </div>
                {this.state.posts.length > 2 &&
                    <Footer />
                }
            </React.Fragment>
        )
    }
}

export default Index;