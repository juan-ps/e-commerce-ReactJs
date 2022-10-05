import Socials from "./design/Socials"

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content mb-0">
            <div className="items-center grid-flow-col">
                <p>Curso React Js - Coderhouse :: By Juan Pablo Sinkachkuk © 2022</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Socials />
            </div>
        </footer>
    )
}
export default Footer