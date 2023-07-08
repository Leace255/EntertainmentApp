import {PropsWithChildren} from "react";

type Props = {
    color?: string,
    colorWhenHovered?: string,
}
export default function EAButton({children}: PropsWithChildren<Props>): React.ReactNode {
    return (
        <button className={"flex"} type={"button"}>
            {children}
        </button>
    )
}
