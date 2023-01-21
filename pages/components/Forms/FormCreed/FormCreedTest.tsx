import { useState, useEffect } from "react";
const FormCreedTest = () => { 
    
    const [data, setData] = useState({
        dataInterSearch1: Number(),
        dataInterSearch2: Number(),
        dataInterSearch3: Number(),
        dataInterSearch4: Number(),
        dataInterSearch5: Number(),
        dataInterSearch6: Number(),
        dataInterSearch7: Number(),
        dataInterSearch8: Number(),
        dataInterSearch9: Number(),
        dataInterSearch10: Number(),
        dataInterPerfection1: Number(),
        dataInterPerfection2: Number(),
        dataInterPerfection3: Number(),
        dataInterPerfection4: Number(),
        dataInterPerfection5: Number(),
        dataInterPerfection6: Number(),
        dataInterPerfection7: Number(),
        dataInterPerfection8: Number(),
        dataInterPerfection9: Number(),
        dataInterPerfection10: Number(),
        dataInterCondemnation1: Number(),
        dataInterCondemnation2: Number(),
        dataInterCondemnation3: Number(),
        dataInterCondemnation4: Number(),
        dataInterCondemnation5: Number(),
        dataInterCondemnation6: Number(),
        dataInterCondemnation7: Number(),
        dataInterCondemnation8: Number(),
        dataInterCondemnation9: Number(),
        dataInterCondemnation10: Number(),
        dataInterBTF1: Number(),
        dataInterBTF2: Number(),
        dataInterBTF3: Number(),
        dataInterBTF4: Number(),
        dataInterBTF5: Number(),
        dataInterBTF6: Number(),
        dataInterBTF7: Number(),
        dataInterBTF8: Number(),
        dataInterBTF9: Number(),
        dataInterBTF10: Number(),
        dataInterVictimization1: Number(),
        dataInterVictimization2: Number(),
        dataInterVictimization3: Number(),
        dataInterVictimization4: Number(),
        dataInterVictimization5: Number(),
        dataInterVictimization6: Number(),
        dataInterVictimization7: Number(),
        dataInterVictimization8: Number(),
        dataInterVictimization9: Number(),
        dataInterVictimization10: Number(),
        dataInterAnxious1: Number(),
        dataInterAnxious2: Number(),
        dataInterAnxious3: Number(),
        dataInterAnxious4: Number(),
        dataInterAnxious5: Number(),
        dataInterAnxious6: Number(),
        dataInterAnxious7: Number(),
        dataInterAnxious8: Number(),
        dataInterAnxious9: Number(),
        dataInterAnxious10: Number(),
        dataInterAvoidant1: Number(),
        dataInterAvoidant2: Number(),
        dataInterAvoidant3: Number(),
        dataInterAvoidant4: Number(),
        dataInterAvoidant5: Number(),
        dataInterAvoidant6: Number(),
        dataInterAvoidant7: Number(),
        dataInterAvoidant8: Number(),
        dataInterAvoidant9: Number(),
        dataInterAvoidant10: Number(),
        dataInterInsecure1: Number(),
        dataInterInsecure2: Number(),
        dataInterInsecure3: Number(),
        dataInterInsecure4: Number(),
        dataInterInsecure5: Number(),
        dataInterInsecure6: Number(),
        dataInterInsecure7: Number(),
        dataInterInsecure8: Number(),
        dataInterInsecure9: Number(),
        dataInterInsecure10: Number(),
        dataInterPast1: Number(),
        dataInterPast2: Number(),
        dataInterPast3: Number(),
        dataInterPast4: Number(),
        dataInterPast5: Number(),
        dataInterPast6: Number(),
        dataInterPast7: Number(),
        dataInterPast8: Number(),
        dataInterPast9: Number(),
        dataInterPast10: Number(),
        dataInterProcrastination1: Number(),
        dataInterProcrastination2: Number(),
        dataInterProcrastination3: Number(),
        dataInterProcrastination4: Number(),
        dataInterProcrastination5: Number(),
        dataInterProcrastination6: Number(),
        dataInterProcrastination7: Number(),
        dataInterProcrastination8: Number(),
        dataInterProcrastination9: Number(),
        dataInterProcrastination10: Number(),

    })

    const dataInterSearch = Object.values(
        data.dataInterSearch1+data.dataInterSearch2+data.dataInterSearch3+data.dataInterSearch4+data.dataInterSearch5+data.dataInterSearch6+data.dataInterSearch7+data.dataInterSearch8+data.dataInterSearch9+data.dataInterSearch10
        )

    const dataInterPerfection = Object.values(
        data.dataInterPerfection1+data.dataInterPerfection2+data.dataInterPerfection3+data.dataInterPerfection4+data.dataInterPerfection5+data.dataInterPerfection6+data.dataInterPerfection7+data.dataInterPerfection8+data.dataInterPerfection9+data.dataInterPerfection10
        )
    
    const dataInterCondemnation = Object.values(
        data.dataInterCondemnation1+data.dataInterCondemnation2+data.dataInterCondemnation3+data.dataInterCondemnation4+data.dataInterCondemnation5+data.dataInterCondemnation6+data.dataInterCondemnation7+data.dataInterCondemnation8+data.dataInterCondemnation9+data.dataInterCondemnation10
        )

    const dataInterBTF = Object.values(
        data.dataInterBTF1+data.dataInterBTF2+data.dataInterBTF3+data.dataInterBTF4+data.dataInterBTF5+data.dataInterBTF6+data.dataInterBTF7+data.dataInterBTF8+data.dataInterBTF9+data.dataInterBTF10
        )
    
    const dataInterVictimization = Object.values(
        data.dataInterVictimization1+data.dataInterVictimization2+data.dataInterVictimization3+data.dataInterVictimization4+data.dataInterVictimization5+data.dataInterVictimization6+data.dataInterVictimization7+data.dataInterVictimization8+data.dataInterVictimization9+data.dataInterVictimization10
        )
    
    const dataInterAnxious = Object.values(
        data.dataInterAnxious1+data.dataInterAnxious2+data.dataInterAnxious3+data.dataInterAnxious4+data.dataInterAnxious5+data.dataInterAnxious6+data.dataInterAnxious7+data.dataInterAnxious8+data.dataInterAnxious9+data.dataInterAnxious10
        )

    const dataInterAvoidant = Object.values(
        data.dataInterAvoidant1+data.dataInterAvoidant2+data.dataInterAvoidant3+data.dataInterAvoidant4+data.dataInterAvoidant5+data.dataInterAvoidant6+data.dataInterAvoidant7+data.dataInterAvoidant8+data.dataInterAvoidant9+data.dataInterAvoidant10
        )

    const dataInterInsecure = Object.values(
        data.dataInterInsecure1+data.dataInterInsecure2+data.dataInterInsecure3+data.dataInterInsecure4+data.dataInterInsecure5+data.dataInterInsecure6+data.dataInterInsecure7+data.dataInterInsecure8+data.dataInterInsecure9+data.dataInterInsecure10
        )

    const dataInterPast = Object.values(
        data.dataInterPast1+data.dataInterPast2+data.dataInterPast3+data.dataInterPast4+data.dataInterPast5+data.dataInterPast6+data.dataInterPast7+data.dataInterPast8+data.dataInterPast9+data.dataInterPast10
        )

    const dataInterProcrastination = Object.values(
        data.dataInterProcrastination1+data.dataInterProcrastination2+data.dataInterProcrastination3+data.dataInterProcrastination4+data.dataInterProcrastination5+data.dataInterProcrastination6+data.dataInterProcrastination7+data.dataInterProcrastination8+data.dataInterProcrastination9+data.dataInterProcrastination10
        )

    const sumDataInterSearch = dataInterSearch.reduce<number>((acc, num) => {return acc + Number(num)}, 0)
    
    const sumDataInterPerfection = dataInterPerfection.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterCondemnation = dataInterCondemnation.reduce<number>((acc, num) => {return acc + Number(num)}, 0)
        
    const sumdataInterBTF = dataInterBTF.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterVictimization = dataInterVictimization.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterAnxious = dataInterAnxious.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterAvoidant = dataInterAvoidant.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterInsecure = dataInterInsecure.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterPast = dataInterPast.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterProcrastination = dataInterProcrastination.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const handleChangeData = (e: React.ChangeEvent<any>) =>{
        setData({
            ...data,
            [e.target.name]: (e.target.value)
        })
    }

    const handleSubmit = (e: React.ChangeEvent<any>) =>{e.preventDefault()
        if(data){
            console.log('el formulario se ha enviado')
            console.log(sumDataInterSearch)
            console.log(sumDataInterPerfection)
            console.log(sumdataInterCondemnation)
            console.log(sumdataInterBTF)
            console.log(sumdataInterVictimization)
            console.log(sumdataInterAnxious)
            console.log(sumdataInterAvoidant)
            console.log(sumdataInterInsecure)
            console.log(sumdataInterPast)
            console.log(sumdataInterProcrastination)
            
        } else {
            console.log('Hay preguntas sin responder, complete el formulario')
        } 
    }

    return ( 
        <>    
            <form onSubmit= {handleSubmit} name="FormCreedTest" action=""  className="FormCreedTest">

                <div>
                    <h1>Interpretacion 1.- BUSQUEDA DE APROBACIÓN Y RECONOCIMIENTO</h1>
                    <p>Para un adulto es absolutamente necesario tener el cariño y la aprobación de sus semejantes, familia y amigos.</p>
                    
                    <fieldset id="dataInterSearch1">
                    <legend> 1.- Para mí es importante recibir la aprobación de los demás. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch1" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch1" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch2">
                    <legend>  2.- Odio equivocarme en algo. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch2" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch2" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch3">
                    <legend> 3.- La gente que se equivoca, logra lo que se merece.  </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch3" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch3" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch4">
                    <legend> 4.- Generalmente acepto los acontecimientos con filosofía.. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterSearch4" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterSearch4" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch5">
                    <legend>  5.- Si una persona quiere, puede ser feliz en casi cualquier circunstancia. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterSearch5" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterSearch5" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch6">
                    <legend> 6.- Temo a las cosas que, a menudo, me resultan objeto de preocupación. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch6" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch6" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch7">
                    <legend> 7.- Normalmente aplazo las decisiones importantes. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch7" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch7" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch8">
                    <legend> 8.- Todo el mundo necesita de alguien a quién recurrir en busca de ayuda y consejo. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch8" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch8" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch9">
                    <legend> 9.- “Una cebra no puede cambiar sus rayas”.  </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch9" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch9" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch10">
                    <legend> 10.- Prefiero sobre todas las cosas pasar el tiempo libre de una forma tranquila. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch10" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch10" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                </div>

                <div>
                    <h1>Interpretacion 2.- PERFECCIONISTA</h1>
                    <p>Debe ser indefectiblemente competente y casi perfecto en todo lo que emprende.</p>
                    
                    <fieldset id="dataInterPerfection1">
                    <legend> 11.- Me gusta que los demás me respeten, pero yo no tengo porque respetar a nadie. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection1" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection1" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection2">
                    <legend>  12.- Evito las cosas que no puedo hacer bien. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterPerfection2" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterPerfection2" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection3">
                    <legend> 13.- Hay demasiadas personas malas que escapan del castigo del infierno. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterPerfection3" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterPerfection3" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection4">
                    <legend> 14.- Las frustraciones no me distorsionan. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection4" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection4" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection5">
                    <legend>  15.- A la gente no le trastornan los acontecimientos sino la imagen que tiene de ellos. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection5" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection5" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection6">
                    <legend> 16.- Me producen poca ansiedad los peligros inesperados o los acontecimientos futuros. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection6" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection6" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection7">
                    <legend> 17.- Trato de afrontar los trabajos fastidiosos y hacerlos cuanto antes. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection7" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection7" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection8">
                    <legend> 18.- En las decisiones importantes, consulto con una autoridad al respecto. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterPerfection8" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterPerfection8" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection9">
                    <legend> 19.- Es casi imposible superar la influencia del pasado.  </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterPerfection9" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterPerfection9" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection10">
                    <legend> 20.- Me gusta disponer de muchos recursos. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection10" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection10" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                </div>

                <div>
                    <h1>Interpretacion 3.- CONDENACIÓN</h1>
                    <p>Ciertas personas son malas, viles y perversas y deberían ser castigadas.</p>
                    
                    <fieldset id="dataInterCondemnation1">
                    <legend> 1.- Para mí es importante recibir la aprobación de los demás. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation1" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation1" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation2">
                    <legend>  2.- Odio equivocarme en algo. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation2" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation2" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation3">
                    <legend> 3.- La gente que se equivoca, logra lo que se merece.  </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation3" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation3" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation4">
                    <legend> 4.- Generalmente acepto los acontecimientos con filosofía.. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterCondemnation4" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterCondemnation4" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation5">
                    <legend>  5.- Si una persona quiere, puede ser feliz en casi cualquier circunstancia. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterCondemnation5" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterCondemnation5" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation6">
                    <legend> 6.- Temo a las cosas que, a menudo, me resultan objeto de preocupación. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation6" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation6" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation7">
                    <legend> 7.- Normalmente aplazo las decisiones importantes. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation7" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation7" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation8">
                    <legend> 8.- Todo el mundo necesita de alguien a quién recurrir en busca de ayuda y consejo. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation8" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation8" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation9">
                    <legend> 9.- “Una cebra no puede cambiar sus rayas”.  </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation9" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation9" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation10">
                    <legend> 10.- Prefiero sobre todas las cosas pasar el tiempo libre de una forma tranquila. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation10" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation10" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                </div>



                <label htmlFor="">
                    <button type="submit" placeholder="terminar" name="terminar" id=""/>
                </label>
            </form>   
        </>
    )
}

export default FormCreedTest