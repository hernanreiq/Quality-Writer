import React from "react";

function Footer(){
    return(
        <React.Fragment>
            <div className="orange-division"></div>
            <footer>
                <div className="container p-4 text-center">
                    <p className="mb-0">Development and Web Design by: <a href="https://bit.ly/hernanreiq" target="_blank" rel="noreferrer" className="text-primary text-decoration-none">Hernan.Reiq</a></p>
                    <p className="mb-0">All rights reserved &copy;.</p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;