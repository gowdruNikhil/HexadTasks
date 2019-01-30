import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MovieLists.css';
class Movies extends Component {

    state = {
        isButtonActive: false
    }

    toggleButton = () => {
        this.setState({
            isButtonActive: !this.state.isButtonActive
        })

    }

    render() {

        const MovieLists = this.props.listOfMovies;
        const movieListSorted = MovieLists.sort((a, b) => a.rating - b.rating);
        const sortingValue = this.state.isButtonActive ? movieListSorted : movieListSorted.reverse();
        const movieListItem = sortingValue.slice(0, 10).map((movie, i) =>
            <tr key={movie.id}>
                <td>{i + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.rating}</td>
                <td>
                    <button disabled={movie.rating === 0}
                        className="btn btn-danger"
                        onClick={() => this.props.onDecrementRating(movie.id)}>
                        Decrease -
                    </button>
                    <button
                        disabled={movie.rating >= 10}
                        className="btn btn-success"
                        onClick={() => this.props.onIncrementRating(movie.id)}>
                        Increate +
                    </button>
                </td>
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
                                <th onClick={this.toggleButton} style={{ cursor: 'pointer' }}>Rating <i className="fa fa-sort fa-1x"></i></th>
                                <th>Rate movie </th>
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

const mapDispatchToProps = dispatch => {
    return {
        onIncrementRating: (id) => dispatch({ type: 'INCREMENT', elementID: id }),
        onDecrementRating: (id) => dispatch({ type: 'DECREMENT', elementID: id })
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);