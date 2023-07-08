type MovieProps = {
    movie: Movie
}

export default function EAMovie({movie}: MovieProps){
    return (
        <li className={"p-3 max-w-fit"}>
            <div className={"rounded-xl overflow-hidden w-full mb-2"}>
                <img src={`src${movie.thumbnail.regular.medium.slice(1)}`}
                     alt=""/>
            </div>
            <div className={""}>
                <p className={"flex gap-2 text-gray-400/80"}>
                    <span>{movie.year}</span> 
                    &bull; 
                    <span>{movie.category}</span>
                    &bull;
                    <span>{movie.rating}</span>
                </p>
                <p className={"text-gray-300/80 tracking-wide font-bold"}>
                    {movie.title}
                </p>
            </div>
        </li>
    )
}