import {mensajeria} from "../../mensajero"

const Contacto = () => {
    const { mensajero4 } = mensajeria
    return (
        <div>
            <h2>Contacto : {mensajero4[0].cargo}</h2>
            <hr />

        </div>
    )
}

export default Contacto