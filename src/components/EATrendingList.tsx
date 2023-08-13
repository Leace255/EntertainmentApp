import EAMovie from "./EAMovie.tsx";

type MovieListProps = {
    movies: Movie[]
}
export default function EATrendingList({movies}: MovieListProps) {


    return (
        <div>
            <h2 className={"text-2xl mb-4 tracking-wide"}>Trending</h2>
            <ul className={"flex flex-nowrap whitespace-nowrap overflow-x-auto gap-3 first:ml-auto last:mr-auto"}>
                {movies.map(m => (
                    <EAMovie isLarge={true} movie={m} key={m.title} />
                ))}
            </ul>
        </div>

    )
}