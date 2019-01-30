import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MovieLists.css';
class Movies extends Component {
    render() {

        const MovieLists = this.props.listOfMovies;
        const movieListSorted = MovieLists.sort((a, b) => a.rating - b.rating).reverse();
        const movieListItem = movieListSorted.slice(0, 10).map((a, i) =>
            <tr key={a.id}>
                <td>{i + 1}</td>
                <td>{a.title}</td>
                <td>{a.year}</td>
                <td>{a.rating}</td>
            </tr>
        );
        return (
            <div className="container">
                <div className="row">
                    <table className="table table-striped">
                        <caption>Top 10 Movie Names</caption>
                        <thead>
                            <tr>
                                <th>number</th>
                                <th>Movie Name</th>
                                <th>Year</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movieListItem}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listOfMovies: state
    }
}

export default connect(mapStateToProps)(Movies);