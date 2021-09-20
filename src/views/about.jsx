import React, { Component } from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";
import HernanPhoto from '../views/img/hernanreiq.jpg';

class About extends Component {
    state = {
        author: "https:/bit.ly/hernanreiq",
        dev: "https://github.com/hernanreiq/Quality-Writer"
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="container p-4">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 my-5">
                            <div className="card shadow">
                                <div className="card-header-main card-header">
                                    <h2 className="card-title mb-0">
                                        About this app
                                    </h2>
                                </div>
                                <img src={HernanPhoto} alt="Hernan Demorizi Ureña - GitHub: @hernanreiq" className="card-img-top" />
                                <div className="card-body text-justify">
                                    <p className="card-text">This web application was developed and designed by Hernan Demorizi Ureña.</p>
                                    <p className="card-text">You can see the code for this project on Hernan's (@hernanreiq) GitHub account.</p>
                                    <p className="card-text">You can also visit his portfolio of projects and skills where you will find a wide variety of work done by him from scratch.</p>
                                </div>
                                <div className="card-footer">
                                    <a href={this.state.author} target="_blank" rel="noreferrer" className="btn btn-primary w-100 my-2">Hernan's portfolio</a>
                                    <a href={this.state.dev} target="_blank" rel="noreferrer" className="btn btn-danger w-100 my-2">Code of this project</a>
                                    <a href="/home" className="btn btn-success w-100 my-2">Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default About;