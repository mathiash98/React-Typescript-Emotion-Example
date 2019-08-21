import React, { useEffect, useState } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './App.css';

import movieAPI, { IQuery } from './api/movieAPI';
import FilterForm from './components/FilterForm';
import MovieModal from './components/MovieModal';

import { MainContainer } from './styledComponents/theme';

const App: React.FC = () => {
  const [ state, setState ] = useState({
    loading: false,
    errror: false
  });
  const [ selectedMovie, setSelectedMovie ] = useState<string | undefined>();
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    // Load movies when page loads
    setState((current) => ({...current, loading: true}));
    findMovies({});
  }, []);
  
  /**
   * Find movies based on query
   * Saves them to movies using setMovies state
   * @param {IQuery} query
   */
  function findMovies(query: IQuery): void {
    movieAPI.search(query)
    .then(data => {
      setState((current) => ({...current, loading: false}));
      setMovies(data);

    })
    .catch(err => {
      setState((current) => ({...current, loading: false, error: err}));
    });
  };

  /**
   * When user clicks a row, set selected movie to the row's id
   * This will trigger modal with movie details opening
   */
  const onRowClick = (state: any, rowInfo: any) => {
    return {
      onClick: (e: Event) => {
        setSelectedMovie(rowInfo.original.Movie_ID);
      }
    }
  }

  /**
   * Close movie modal
   */
  const closeMovieModal = () => {
    setSelectedMovie(undefined);
  }

  return (
    <>
      {selectedMovie && <MovieModal imdbID={selectedMovie} closeModal={closeMovieModal}/>} 
      <MainContainer>
        <FilterForm onUpdate={findMovies}></FilterForm>
        <ReactTable
          data={movies}
          columns={[
            {
              Header: "Title",
              accessor: "Movie_Title"
            }, {
              Header: "Rating",
              accessor: "Rating"
            }, {
              Header: "Runtime",
              accessor: "Runtime"
            }, {
              Header: "Year",
              accessor: "YR_Released"
            }, {
              Header: "imdbID",
              accessor: "Movie_ID"
            }
          ]}
          defaultSorted={[
            {
              id: "Rating",
              desc: true
            }
          ]}
          getTrProps={onRowClick}
          defaultPageSize={15}
        />
      </MainContainer>
    </>
  );
}

export default App;
