import EAMovie from "./EAMovie.tsx";

type MovieListProps = {
    movies: Movie[]
}
export default function EAMovieList({movies}: MovieListProps) {
    
    
    return (
        <>
            {/*<h2>Recommended for you</h2>*/}
            <ul className={"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center"}>
                {movies.map(m => (
                    <EAMovie movie={m} key={m.title} />
                ))}
            </ul>
        </>
        
    )
}