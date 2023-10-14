import Title from "../elements/Title";

const Inicio = () => {
    return (
        <div className="container my-5 bg-dark">
            <div className="row">
                <Title text={"Inicio"}/>
                <div className="col-md-8">
                    <p>Pink Floyd, una banda icónica del rock, ha dejado una huella perdurable en la historia de la música. Su estilo único y su enfoque innovador han cautivado a millones de fans en todo el mundo. Con su fusión de rock progresivo, elementos psicodélicos y letras introspectivas, Pink Floyd ha creado paisajes sonoros inmersivos y emocionalmente poderosos. Su legado se destaca por álbumes emblemáticos como 'The Dark Side of the Moon', 'Wish You Were Here' y 'The Wall'. A lo largo de su carrera, han llevado a los espectadores en un viaje visual y auditivo con sus legendarios conciertos y espectáculos en vivo. Pink Floyd sigue siendo una influencia duradera en la música y su música continúa resonando en las generaciones actuales y futuras.</p>
                    <p>Formada en Londres en 1965, la banda ha sido liderada por una alineación talentosa que incluye a Roger Waters, David Gilmour, Richard Wright, Nick Mason y el miembro fundador Syd Barrett. Cada uno de estos músicos ha dejado una marca significativa en el sonido y la identidad de Pink Floyd.</p>
                    <p>Con su fusión de rock progresivo, elementos psicodélicos y letras introspectivas, Pink Floyd ha creado paisajes sonoros inmersivos y emocionalmente poderosos. Su habilidad para combinar guitarras melódicas, teclados atmosféricos, ritmos distintivos y letras poéticas ha dado lugar a obras maestras musicales.</p>
                </div>
                <div className="col-md-4">
                    <img src="https://media.artsper.com/artwork/1021356_1_m.jpg" alt="Banda Pink Floyd" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}
export default Inicio;