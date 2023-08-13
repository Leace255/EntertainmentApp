import EANavBar from "./components/EANavBar.tsx";
import EASearch from "./components/EASearch.tsx";
import EAMovieList from "./components/EAMovieList.tsx";
import data from "./data.json"
import {useEffect, useMemo, useState} from "react";
import EATrendingList from "./components/EATrendingList.tsx";


function App() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [query, setQuery] = useState<string>("")
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
    const nonTrendingMovies = useMemo(() => movies.filter(m => !m.isTrending), [movies])
    const trendingMovies = useMemo(() => movies.filter(m => m.isTrending),[movies])
   
    function handleSearch(q: string) {
        setQuery(q)
    }
    console.log(trendingMovies)
    
    useEffect(() => {
        setFilteredMovies(query === "" ? nonTrendingMovies 
            : movies.filter(m => m.title.toLowerCase().includes(query.toLowerCase())) )
    }, [query])

    useEffect(() => {
        (async () => {
            const newData = await JSON.parse(data)
            setMovies(newData.movies)
        })();

    }, [setMovies])
    console.log()
    return (
        <>
            <EANavBar/>
            <main className={"m-8 gap-6 grid"}>
                <EASearch onQuery={handleSearch}
                          query={query}/>
                {query === "" ? <EATrendingList movies={trendingMovies}/> : ""}
                <EAMovieList movies={filteredMovies.length > 0 ? filteredMovies : nonTrendingMovies}/>
            </main>

        </>
    )
}

export default App
