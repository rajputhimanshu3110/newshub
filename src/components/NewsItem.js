import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, data, ImgUrl, url, author, date,source } = this.props;
        return (
            <div className="card border-danger">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:"1"}}>
                    {source}
                    <span class="visually-hidden">unread messages</span>
                </span>
                <img src={ImgUrl} className="card-img-top" alt={title} />
                <div className="card-body border-danger">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle text-muted py-1">Author : {author ? author : 'Unknown'}</h6>
                    <h6 className="card-subtitle text-muted">Date : {new Date(date).toLocaleString()}</h6>

                    <p className="card-text">{data}</p>
                    <a href={url} target='_blank' className="btn btn-primary btn-sm">Full News</a>
                </div>

            </div>
        )
    }
}

export default NewsItem
