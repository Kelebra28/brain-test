const CardResults = ({
    sumDataInterSearch,
    sumDataInterPerfection,
    sumdataInterCondemnation,
    sumdataInterBTF,
    sumdataInterVictimization,
    sumdataInterAnxious,
    sumdataInterAvoidant,
    sumdataInterInsecure,
    sumdataInterPast,
    sumdataInterProcrastination
    }: any) => {

    return(
        <>
            <ul>
                <li>{`BUSQUEDA DE APROBACIÓN Y RECONOCIMIENTO: ${sumDataInterSearch}`}</li>
                <li>{`PERFECCIONISTA: ${sumDataInterPerfection}`}</li>
                <li>{`CONDENACIÓN: ${ sumdataInterCondemnation}`}</li>
                <li>{`BTF: ${sumdataInterBTF}`}</li>
                <li>{`VICTIMIZACIÓN: ${sumdataInterVictimization}`}</li>
                <li>{`ANSIOSO: ${sumdataInterAnxious}`}</li>
                <li>{`EVITATIVO: ${sumdataInterAvoidant}`}</li>
                <li>{`DEPENDIENTE (INSEGURO): ${ sumdataInterInsecure}`}</li>
                <li>{`INFLUENCIA DEL PASADO: ${sumdataInterPast}`}</li>
                <li>{`PROCRASTINACIÓN: ${sumdataInterProcrastination}`}</li>
            </ul>
        </>
    )
}

export default CardResults
