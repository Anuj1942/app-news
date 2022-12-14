import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, url, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left: "90%", zIndex: "1"}}>
                           {source}
                        </span>
                    <img src={!imageUrl ? "https://www.deccanherald.com/sites/dh/files/articleimages/2022/06/21/ikea-dh-file-photo-1-1119991-1655794708.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem