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

    getAllPost = () => {
        axios.get('http://localhost:3700/api/posts')
            .then(res => {
                this.setState({
                    posts: res.data,
                    postsSearched: true
                })
            })
    }

    render() {
        if (!this.state.postsSearched) {
            this.getAllPost();
        }
        return (
            <React.Fragment>
                <Header />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-8 p-3">
                            <main>
                                <div className="card shadow">
                                    <div className="card-header card-header-main">
                                        <h2 className="card-title mb-1">Last posts</h2>
                                    </div>
                                    <div className="card-body card-body-main">
                                        {
                                            this.state.posts.map((post, i) => {
                                                return (<Post key={i} post={post} />)
                                            })
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
                <Footer />
            </React.Fragment>
        )
    }
}

export default Index;