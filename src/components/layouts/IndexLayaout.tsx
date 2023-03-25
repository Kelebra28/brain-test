import { useRouter } from 'next/router'

const IndexLayaout = () => {
    const router = useRouter()
    return (
        <div className='indexLayaout'>
            <h1>TEST DE CREENCIAS</h1>
            <h3> INSTRUCCIONES PARA RESPONDER AL CUESTIONARIO </h3>
            <ul>
                <li>No hay límite de tiempo para contestar al Cuestionario.</li>
                <li>No hay respuestas correctas o erróneas. Será útil en la medida que sea sincero/a en sus respuestas.</li>
                <li>No es necesario que piense mucho rato en cada ítem.</li>
                <li>Si está más de acuerdo que en desacuerdo con el ítem señale la casilla SI, si, por el contrario, está más en desacuerdo que de acuerdo, señale la casilla NO.</li>
                <li>Asegúrese de que contesta lo que usted realmente piensa, no lo que cree que debería pensar.</li>
                <li>Conteste a todos los ítems.</li>
            </ul>
            <button onClick={() => router.push('/test')}>Proceder con el test</button>
        </div>
    )
}

export default IndexLayaout