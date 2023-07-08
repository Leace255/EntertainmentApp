import EAButton from "./EAButton.tsx";

export default function EANavBar() {
    // @ts-ignore
    return (
        <header className={"bg-secondary shadow-lg shadow-gray-950"}>
            <nav className={"p-4 justify-between items-center flex"}>
                <span className={"fill-accent"}>
                    <svg  xmlns="http://www.w3.org/2000/svg"
                         width={"2em"}
                         height={"2em"}
                         viewBox="0 0 512 512">
                        <path d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40l-104 104H512zM294.1 32H201.9l-1 1L73.9 160h92.1l1-1 127-127zM64 32C28.7 32 0 60.7 0 96v64H6.1l1-1 127-127H64zM512 192H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192z"/>
                    </svg>
                </span>
                <ul className={"flex gap-6 fill-gray-500"}>
                    <li className={"hover:fill-gray-300"}>
                        <EAButton>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512"
                                 width={"1.5em"}
                                 height={"1.5em"}>
                                <path d="M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM444 240H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM444 480H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z"/>
                            </svg>
                        </EAButton>
                    </li>
                    <li className={"hover:fill-gray-300"}>
                        <EAButton>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width={"1.5em"}
                                 height={"1.5em"}
                                 viewBox="0 0 512 512">
                                <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"/>
                            </svg>
                        </EAButton>
                    </li>
                    <li className={"hover:fill-gray-300"}>
                        <EAButton>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width={"1.5em"}
                                 height={"1.5em"}
                                 viewBox="0 0 640 512">
                                <path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                            </svg>
                        </EAButton>
                    </li>
                    <li className={"hover:fill-gray-300"}>
                        <EAButton>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width={"1.5em"}
                                 height={"1.5em"}
                                 viewBox="0 0 384 512">
                                <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                            </svg>
                        </EAButton>
                    </li>
                </ul>
                <span className={"fill-icon rounded-full border-2 overflow-hidden"}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width={"2em"}
                         height={"2em"}
                         viewBox="0 0 448 512">
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                    </svg>
                </span>
            </nav>
        </header>
    )
}