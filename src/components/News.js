import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            articles: [],
            totalResults: 0,
            page: 1
        }
        document.title = `${this.props.category.toUpperCase()} - NewsHub`
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.page}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults })

    }
    HandleNext = async () => {
        await this.setState({ page: this.state.page + 1, loading: true, articles: [] })
        this.componentDidMount()


    }
    HandlePrevious = async () => {
        await this.setState({ page: this.state.page - 1, loading: true, articles: [] })
        this.componentDidMount()
    }
    render() {
        return (
            <div className='container-sm my-3'>
                <h3 className=''>Top {this.props.category.toUpperCase()} Headlines</h3>
                <hr />

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 p-3" key={element.url}>
                            <NewsItem title={element.title} data={element.description} ImgUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>

                    })
                    }

                </div>
                {this.state.loading && <Spinner />}
                <div className='d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} className="btn btn-sm btn-dark" onClick={this.HandlePrevious}>&larr; Previous</button>
                    <button disabled={Math.ceil(this.state.totalResults / 21) === this.state.page} className="btn btn-sm btn-dark" onClick={this.HandleNext} >Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
