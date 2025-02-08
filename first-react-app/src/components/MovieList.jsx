//     return (
//         <div className="MoviesList componentBox">
//             <ul>
//                 { movies.map(movie => (
//                     <li>{movie.title}</li>
//                 )) }
//             </ul>  
//         </div>
//     );   
// }

    // const movieItems = movies.map(movie => (
    //     <li key={movie.id}>{movie.title}</li>
    // ))

    // return (
    //     <div className="MoviesList componentBox">
    //         <ul>{ movieItems }</ul>
    //     </div>
    // )

// function MoviesList() {
//     const movies = [
//         {   
//             id: 1,
//             title: "Roman Holiday",
//             year: 1953,
//             synopsis: "A princess sneaks away from her embassy to explore the city on her own.",
//             starring: "Audrey Hepburn and Gregory Peck",
//         },
    
//         {   
//             id: 2,
//             title: "Summertime",
//             year: 1955,
//             synopsis: "An American school teacher arrives in Venice fulfilling a life-long dream.",
//             starring: "Katherine Hepburn",
//         },
    
//         {   
//             id: 3,
//             title: "The Philadelphia Story",
//             year: 1940,
//             synopsis: "A Philadelphia socialite must decide whom she truly loves.",
//             starring: "Carey Grant, Katherine Hepburn and James Stewart",
//         },
//     ];

//     function Movie({title, year, synopsis, starring}) {
//         return (
//             <li>
//                 <h3>{title}</h3> 
//                 <span>({year})</span>
//                 <div>{starring}</div>
//                 <div>{synopsis}</div>
                       
//             </li>
//         )
//     }

//     let newMovies = [...currentMovies]

//     const [currentMovies, setCurrentMovies] = useState(movies)

//     const handleReverseMovies = () => {
//         // 1. clone original to avoid mutation
//         let newMovies = [...currentMovies];
//         // 2. modify clone
//         newMovies.reverse();
//         // 3. set updated clone in state
//         setCurrentMovies(newMovies);
//     }

//     // remove an item from an array using filter to create a new array without removed item.
//     const handleDeleteMovie = (idToDelete) => {
//         const filteredMovies = currentMovies.filter(movie => movie.id  !== idToDelete)
//         setCurrentMovies(filteredMovies)
//     }

    // add a new item to an array or object using spread to clone original then adding in new item.
    // let newMovies = [...currentMovies, {
    //     id: 4, title: "To Catch a Thief", year: 1955,
    //     synopsis: "A retired cat burglar has to save his reformed reputation.",
    //     starring: "Carey Grant and Grace Kelly",
    // }]

    // replace/update an item from an array using filter to create a new array without the removed item.
    // let updatedSynopsis1 = 'A princess falls in love while roaming the city.';
    // let newMovies = currentMovies.map(movie => movie.id === 1 ? {...movie, synopsis: updatedSynopsis1} : movie);

    // sort/reverse an array cloning the original first.
    // let newMovies = [...currentMovies];
    // newMovies.reverse();
    // newMovies.sort();

    // const movieItems = currentMovies.map((movie) => (
    //     <Movie
    //     key={movie.id}
    //     title={movie.title}
    //     year={movie.year}
    //     starring={movie.starring}
    //     synopsis={movie.synopsis}
    //     />
    // ))

// function Movie({title, year, synopsis, starring}) {
//     return (
//         <li>
//             <h3>{title}</h3> 
//             <span>({year})</span>
//             <div>{starring}</div>
//             <div>{synopsis}</div>
                   
//         </li>
//     )
// }

//     const movieItems = currentMovies.map((movie) => (
//         <Movie
//         key={movie.id}
//         title={movie.title}
//         year={movie.year}
//         starring={movie.starring}
//         synopsis={movie.synopsis}
//         />
//     ))

//     return (
//         <div className="MoviesList componentBox">
//             <ul>
//                 { movieItems }
//             </ul>
//             <button onClick={handleReverseMovies}>Reverse List</button>
//             <button onClick={() => handleDeleteMovie(2)}>Delete Movie #2</button>
//         </div>
//     )
// } 

// ****REACT BASICS - FORMS - SLIDE 79****

import React, {useState} from 'react'
import AddMovieForm from './AddMovieForm';

function MoviesList() {
    const [currentMovies, setCurrentMovies] = useState ([
        {   
            id: 1,
            title: "Roman Holiday",
            year: 1953,
            synopsis: "A princess sneaks away from her embassy to explore the city on her own.",
            starring: "Audrey Hepburn and Gregory Peck",
        },
    
        {   
            id: 2,
            title: "Summertime",
            year: 1955,
            synopsis: "An American school teacher arrives in Venice fulfilling a life-long dream.",
            starring: "Katherine Hepburn",
        },
    
        {   
            id: 3,
            title: "The Philadelphia Story",
            year: 1940,
            synopsis: "A Philadelphia socialite must decide whom she truly loves.",
            starring: "Carey Grant, Katherine Hepburn and James Stewart",
        },
    ]);

    const handleReverseMovies = () => {
        const newMovies = [...currentMovies].reverse();
        setCurrentMovies(newMovies);
    };

    const handleDeleteMovie = (idToDelete) => {
        const filteredMovies = currentMovies.filter(
            (movie) => movie.id !== idToDelete
        );
        setCurrentMovies(filteredMovies);
    };

    const handleAddMovie = (newMovie) => {
        newMovie.id = currentMovies.length + 1;
        setCurrentMovies([...currentMovies, newMovie]);
};

function Movie({title, year, synopsis, starring}) {
    return (
        <li>
            <h3>{title}</h3> 
            <span>({year})</span>
            <div>{starring}</div>
            <div>{synopsis}</div>   
        </li>
    );
}

    const movieItems = currentMovies.map((movie) => (
        <Movie
        key={movie.id}
        title={movie.title}
        year={movie.year}
        starring={movie.starring}
        synopsis={movie.synopsis}
        />
    ));

    return (
        <div className="MoviesList componentBox">
            <ul>{movieItems}</ul>
            <button onClick={handleReverseMovies}>Reverse List</button>
            <button onClick={() => handleDeleteMovie(2)}>
                Delete Movie with ID 2
            </button>
            <AddMovieForm onAddMovie={handleAddMovie} />
        </div>
    );    
}      

export default MoviesList

       
