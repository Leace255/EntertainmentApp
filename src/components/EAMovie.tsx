type MovieProps = {
    movie: Movie,
    isLarge: boolean
}

export default function EAMovie({movie, isLarge}: MovieProps){
    return (
        <li className={isLarge ? "w-7/12 flex-shrink-0" : "" + "max-h-80"}>
            <div className={"relative rounded-xl overflow-hidden mb-2"}>
                <img src={`src${isLarge ? movie.thumbnail.trending?.large.slice(1) : movie.thumbnail.regular.large.slice(1)}`}
                     alt=""/>
                {isLarge && <div className={"absolute bottom-4 left-6"}>
                    <p className={"flex gap-2 text-gray-400"}>
                        <span>{movie.year}</span>
                        &bull;
                        <span>{movie.category}</span>
                        &bull;
                        <span>{movie.rating}</span>
                    </p>
                    <p className={"text-gray-100/80 tracking-wide font-bold"}>
                        {movie.title}
                    </p>
                </div>}
            </div>
            {!isLarge && <div>
                <p className={"flex gap-2 text-gray-400/80"}>
                    <span>{movie.year}</span>
                    &bull;
                    <span>{movie.category}</span>
                    &bull;
                    <span>{movie.rating}</span>
                </p>
                <p className={"text-gray-100/80 tracking-wide font-bold"}>
                    {movie.title}
                </p>
            </div>}
        </li>
    )
}