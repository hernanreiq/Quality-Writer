import React, { Component } from "react";
import axios from "axios";
import DataSearched from './data_searched';

class Search extends Component {
    state = {
        posts: [],
        error: true,
        searched: false
    }

    searchRef = React.createRef();

    searchPost = (e) => {
        e.preventDefault();
        var search = this.searchRef.current.value;
        if (search === '') {
            this.resetSearch();
        } else {
            axios.get('http://localhost:3700/api/post?search=' + search)
                .then(res => {
                    this.setState({
                        posts: res.data,
                        searched: true,
                        error: false
                    })
                })
                .catch(err => {
                    this.setState({
                        searched: true,
                        error: true
                    })
                })
        }
    }

    resetSearch = () => {
        this.setState({
            posts: [],
            error: true,
            searched: false
        });
        this.searchRef.current.value = '';
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-5">
                            <div className="card shadow">
                                <div className="card-header bg-primary text-center">
                                    <h2 className="card-title mb-1">Search a post</h2>
                                </div>
                                <div className="card-body">
                                    <form id="search-post" autoComplete="off" onSubmit={this.searchPost}>
                                        <div className="form-group mb-0">
                                            <input onChange={this.searchPost} placeholder="Search by title, description or topic" name="search" ref={this.searchRef} type="text" className="form-control" required autoFocus />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <button type="reset" form="search-post" onClick={this.resetSearch} className="btn btn-info w-100 my-2 shadow">Reset</button>
                                    <button type="submit" form="search-post" className="btn btn-success w-100 my-2 shadow">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 my-5">
                            <div className="card shadow">
                                <div className="card-header bg-primary text-center">
                                    <h2 className="card-title mb-1">Results</h2>
                                </div>
                                <div className="card-body">
                                    {this.state.error === false && this.state.searched && this.state.posts.length > 0 &&
                                        this.state.posts.map((post, i) => {
                                            return (
                                                <DataSearched
                                                    key={i}
                                                    index={i}
                                                    title={post.title}
                                                    topic={post.topic}
                                                    id={post._id}
                                                />
                                            )
                                        })
                                    }
                                    {this.state.error === false && this.state.searched && this.state.posts.length === 0 &&
                                        <h3 className="my-2 text-center">The searched post does not exist</h3>
                                    }
                                    {this.state.error === true && this.state.searched === false &&
                                        <h3 className="my-2 text-center">You must perform a search</h3>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Search;