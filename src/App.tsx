import EANavBar from "./components/EANavBar.tsx";
import EASearch from "./components/EASearch.tsx";
import EAMovieList from "./components/EAMovieList.tsx";
import data from "./data.json"
import {useEffect, useState} from "react";


function App() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [query, setQuery] = useState<string>("")
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

    function handleSearch(q: string) {
        setQuery(q)
    }
    
    
    useEffect(() => {
        setFilteredMovies(query === "" ? [] 
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
            <main className={"mr-4 ml-4 mt-8 grid justify-center"}>
                <EASearch onQuery={handleSearch}
                          query={query}/>
                <EAMovieList movies={filteredMovies.length > 0 ? filteredMovies : movies}/>
            </main>

        </>
    )
}

export default App
