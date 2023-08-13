import EAMovie from "./EAMovie.tsx";

type MovieListProps = {
    movies: Movie[]
}
export default function EAMovieList({movies}: MovieListProps) {
    
    
    return (
        <div>
            <h2 className={"mb-4 text-2xl tracking-wide"}>Recommended for you</h2>
            <ul className={"grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center"}>
                {movies.map(m => (
                    <EAMovie isLarge={false} movie={m} key={m.title} />
                ))}
            </ul>
        </div>
        
    )
}