import Title from "../elements/Title";
const Integrantes = () => {
    return (
        <div className="container my-5 bg-dark">
            <div className="row">
                <Title text={"Integrantes"}/>
                <div className="col-md-8">
                    <ul>
                        <li>Syd Barrett: Miembro fundador de Pink Floyd, contribuyó con su talento como vocalista, guitarrista y compositor durante los primeros años de la banda.</li>
                        <li>Roger Waters: Bajista, vocalista y principal letrista de Pink Floyd. Waters ha sido una fuerza creativa importante en la banda, aportando letras introspectivas y conceptuales.</li>
                        <li>David Gilmour: Guitarrista principal y vocalista. Se unió a Pink Floyd en sus primeros años y fue clave en el desarrollo del sonido distintivo de la banda.</li>
                        <li>Richard Wright: Tecladista y vocalista. Wright también fue uno de los miembros fundadores de Pink Floyd y contribuyó con su talento musical y creatividad en la composición.</li>
                        <li>Nick Mason: Baterista y único miembro presente en todas las formaciones de Pink Floyd. Su estilo de batería único ha sido parte integral del sonido de la banda. </li>
                    </ul>    
                </div>
                <div className="col-md-4">
                    <img src="https://i.pinimg.com/originals/e5/0e/c8/e50ec8f35c7a08ec2bf399c35f7bb996.jpg" alt="Banda Pink Floyd" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}
export default Integrantes;