import VirusAnti from "../styles/Antivirus";
import TopWeb from "../Components/header/head";
import NavMenu from "../Components/NavMenu/NavMenu";



export default function Antivirus() {
    return (
        <>
            <VirusAnti>
                <TopWeb />

                <main>
                    <NavMenu />
                </main>
                
            </VirusAnti>
        </>
    )
}