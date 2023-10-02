import Title from "../elements/Title";
const Discografia = () => {
    return (
        <div className="container my-5 bg-dark">
            <div className="row">
                <Title text={"Discografía de Estudio"}/>
                <div className="col-md-8">
                    <ul>
                        <li>The Piper at the Gates of Dawn (1967)</li>
                        <li>A Saucerful of Secrets (1968)</li>
                        <li>More (1969)</li>
                        <li>Ummagumma (1969)</li>
                        <li>Atom Heart Mother (1970)</li>
                        <li>Meddle (1971)</li>
                        <li>Obscured by Clouds (1972)</li>
                        <li>The Dark Side of the Moon (1973)</li>
                        <li>Wish You Were Here (1975)</li>
                        <li>Animals (1977)</li>
                        <li>The Wall (1979)</li>
                        <li>The Final Cut (1983)</li>
                        <li>A Momentary Lapse of Reason (1987)</li>
                        <li>The Division Bell (1994)</li>
                        <li>The Endless River (2014)</li>
                    </ul>    
                </div>
                <div className="col-md-4">
                    <img src="https://i.redd.it/vcnst5tuydt61.png" alt="Banda Pink Floyd" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}
export default Discografia;