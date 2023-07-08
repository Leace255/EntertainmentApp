import {useEffect, useRef} from "react";


type SearchProps = {
    query: string,
    onQuery: (query: string) => void
}
export default function EASearch({query, onQuery}: SearchProps) {
    const inputEL = useRef<HTMLInputElement>(null)
    
    useEffect(() =>{
        inputEL?.current?.focus()
    }, [])
    
    return (
        <div className={"relative"}>
            <i className={"absolute inset-y-0 flex pl-3 items-center pointer-events-none"}>
                <svg className={"fill-blue-200"}
                     xmlns="http://www.w3.org/2000/svg"
                     height="1.5em"
                     width={"1.5em"}
                     viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </i>
            
            <input className={"bg-inherit p-2 pl-12 w-full transition-shadow placeholder-gray-400/50 focus:outline-none rounded-full focus:ring-2 focus:ring-secondary"}
                   value={query}
                   onChange={e => onQuery(e.target.value)}
                   type="search"
                   aria-label={"Search for Movies or TV Series"}
                   placeholder={"Search for Movies or TV Series"}
            ref={inputEL}/>
        </div>
    
)
}