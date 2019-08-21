import React, { useEffect, useState } from 'react';
import Img from './Img';

import { Modal, ModalHeader, CloseButton, DetailsList } from '../styledComponents/theme';

export interface IMovieModalProps {
    "imdbID": string,
    "closeModal": Function
}

export interface IOMDbAPI {
    "imdbID": string,
    "Title": string,
    "Year": string,
    "Rated": string,
    "Released": string,
    "Runtime": string,
    "Genre": string,
    "Director": string,
    "Writer": string,
    "Actors": string,
    "Plot": string,
    "Language": string,
    "Country": string,
    "Awards": string,
    "Poster": string,
    "Ratings": [{
        "Source": string,
        "Value": string
    }, {
        "Source": string,
        "Value": string
    }],
    "Metascore": string,
    "imdbRating": string,
    "imdbVotes": string,
    "Type": string,
    "DVD": string,
    "BoxOffice": string,
    "Production": string,
    "Website": string,
    "Response": string
}


export default function MovieModal(props: IMovieModalProps) {
    const [ loading, setLoading ] = useState(false);
    const [ movie, setMovie ] = useState<IOMDbAPI | undefined>();

    useEffect(() => {
        // Get movie details from OMDbAPI using imdb id
        setLoading(true);
        fetch("http://www.omdbapi.com/?apikey=fe96eb4b&i="+props.imdbID, {
            "method": "GET"
        })
        .then(res => res.json())
        .then((data) => {
            setMovie(data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err)
            setLoading(false);
        })
    }, [props.imdbID]);

    return (
        <Modal>
            <ModalHeader>
                <CloseButton aria-label="Close" onClick={() => props.closeModal()}><span aria-hidden="true">×</span></CloseButton>
            </ModalHeader>
            {(loading ? <><h1>Loading</h1></> : ( movie ? (
                <>
                    <div>
                        <h1>{movie.Title}</h1>

                        <DetailsList>
                            <li><b>Year: </b> {movie.Year}</li>
                            <li><b>Imdb Rating: </b> {movie.imdbRating}</li>
                            <li><b>Metascore: </b> {movie.Metascore}</li>
                            <li><b>Runtime: </b> {movie.Runtime}</li>
                            <li><b>Genre: </b> {movie.Genre}</li>
                            <li><b>Director: </b> {movie.Director}</li>
                            <li><b>Actors: </b> {movie.Actors}</li>
                            <li><b>Awards: </b> {movie.Awards}</li>
                        </DetailsList>
                    </div>
                    <Img src={movie.Poster}></Img>
                </>
            ) : ""
            ))}
        </Modal>
    );
}