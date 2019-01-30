import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MovieLists.css';

let randomizing;
class Movies extends Component {
    state = {
        isButtonActive: false
    }

    toggleButton = () => {
        this.setState({
            isButtonActive: !this.state.isButtonActive
        }, () => {
            this.state.isButtonActive ? this.handleStart() : this.handleStop();
        })

    }

    handleStart = () => {
        //alert('started');
        randomizing = setInterval(() => {
            //console.log("Hello");
            const idValue = Math.floor((Math.random() * 25) + 1);
            console.log(idValue);
            const ratingValue = Math.floor((Math.random() * 10) + 1);
            console.log(ratingValue);
            this.props.dispatch({ type: 'START', idValue, ratingValue });
        }, 1000);

    }

    handleStop = () => {
        //alert('stopped');
        clearInterval(randomizing);
    }

    render() {

        const MovieLists = this.props.listOfMovies;
        const movieListSorted = MovieLists.sort((a, b) => a.rating - b.rating).reverse();
        const movieListItem = movieListSorted.slice(0, 10).map((movie, i) =>
            <tr key={movie.id}>
                <td>{i + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.rating}</td>
            </tr>
        );
        return (
            <div className="container">

                <div className="row">
                    <div className="col-4">
                        <button onClick={this.toggleButton} className="btn btn-primary">
                            RANDOM RATING
                </button>
                    </div>

                    <table className="table table-striped">
                        <caption>Top 10 Movie Names</caption>
                        <thead>
                            <tr>
                                <th>number</th>
                                <th>Movie Name</th>
                                <th>Year</th>
                                <th>Rating</th>
                                {/* <th>Rate movie</th> */}
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

// const mapDispatchToProps = dispatch => {
//     return {
//         randomRatingStart: dispatch({ type: 'START' }),
//         //randomRatingStop: dispatch({ type: 'STOP' })
//     }

// }

export default connect(mapStateToProps)(Movies);