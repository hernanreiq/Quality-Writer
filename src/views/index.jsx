import React, { Component } from "react";
import Footer from "./partials/footer";
import Aside from "./partials/aside";
import Post from "./partials/post";

class Index extends Component {
    state = {
        post: [
            {
                title: "Nueva serie en Sabroso Play",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in quaerat unde necessitatibus deleniti quod, placeat, tenetur illo velit, blanditiis suscipit modi qui. Similique quo quam, vel autem reiciendis asperiores.",
                url: '/post/',
                url_tag: '/cinema',
                tag: 'Cinema',
                time: '2 hours ago'
            },
            {
                title: "Hernan subió otro proyecto más al portafolio",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in quaerat unde necessitatibus deleniti quod, placeat, tenetur illo velit, blanditiis suscipit modi qui. Similique quo quam, vel autem reiciendis asperiores.",
                url: '/post/',
                url_tag: '/technology',
                tag: 'Technology',
                time: '7 minutes ago'
            },
            {
                title: "Joven Dominicano de 22 años busca trabajo como Desarrollador y Diseñador Web",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in quaerat unde necessitatibus deleniti quod, placeat, tenetur illo velit, blanditiis suscipit modi qui. Similique quo quam, vel autem reiciendis asperiores.",
                url: '/post/',
                url_tag: '/business',
                tag: 'Business',
                time: 'Just now'
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
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
                                            this.state.post.map((article, i) => {
                                                return (
                                                    <Post
                                                        key={i}
                                                        post_title={article.title}
                                                        post_content={article.content}
                                                        post_url={article.url}
                                                        post_tag_url={article.url_tag}
                                                        post_tag={article.tag}
                                                        post_time={article.time}
                                                    />
                                                )
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
                <div className="orange-division"></div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Index;