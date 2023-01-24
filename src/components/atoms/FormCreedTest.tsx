import { useState, useEffect } from "react";
const FormCreedTest = ({handleSubmit, handleChangeData} : any) => { 
    

    return ( 
        <>    
            <form onSubmit= {handleSubmit} name="FormCreedTest" action=""  className="FormCreedTest">

                <div>
                {/* APROBACIÓN Y RECONOCIMIENTO  */}
                    <fieldset id="dataInterSearch1">
                    <legend>1.- Para mí es importante recibir la aprobación de los demás. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch1" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch1" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch2">
                    <legend>2.- Odio equivocarme en algo. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch2" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch2" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch3">
                    <legend>3.- La gente que se equivoca, logra lo que se merece.  </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch3" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch3" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch4">
                    <legend>4.- Generalmente acepto los acontecimientos con filosofía.. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterSearch4" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterSearch4" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch5">
                    <legend>5.- Si una persona quiere, puede ser feliz en casi cualquier circunstancia. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterSearch5" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterSearch5" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch6">
                    <legend>6.- Temo a las cosas que, a menudo, me resultan objeto de preocupación. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch6" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch6" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch7">
                    <legend>7.- Normalmente aplazo las decisiones importantes. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch7" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch7" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch8">
                    <legend>8.- Todo el mundo necesita de alguien a quién recurrir en busca de ayuda y consejo. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch8" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch8" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch9">
                    <legend>9.- “Una cebra no puede cambiar sus rayas”.  </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch9" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch9" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterSearch10">
                    <legend>10.- Prefiero sobre todas las cosas pasar el tiempo libre de una forma tranquila. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterSearch10" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterSearch10" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                </div>
                {/* PERFECCIONISTA */}
                <div>                    
                    <fieldset id="dataInterPerfection1">
                    <legend>11.- Me gusta que los demás me respeten, pero yo no tengo porque respetar a nadie.</legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection1" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection1" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection2">
                    <legend>12.- Evito las cosas que no puedo hacer bien.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterPerfection2" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterPerfection2" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection3">
                    <legend>13.- Hay demasiadas personas malas que escapan del castigo del infierno.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterPerfection3" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterPerfection3" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection4">
                    <legend>14.- Las frustraciones no me distorsionan.</legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection4" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection4" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection5">
                    <legend>15.- A la gente no le trastornan los acontecimientos sino la imagen que tiene de ellos.</legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection5" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection5" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection6">
                    <legend>16.- Me producen poca ansiedad los peligros inesperados o los acontecimientos futuros.</legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection6" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection6" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection7">
                    <legend>17.- Trato de afrontar los trabajos fastidiosos y hacerlos cuanto antes.</legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection7" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection7" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection8">
                    <legend>18.- En las decisiones importantes, consulto con una autoridad al respecto.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterPerfection8" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterPerfection8" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection9">
                    <legend>19.- Es casi imposible superar la influencia del pasado.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterPerfection9" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterPerfection9" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterPerfection10">
                    <legend>20.- Me gusta disponer de muchos recursos.</legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterPerfection10" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterPerfection10" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                </div>
                {/* CONDENACIÓN  */}
                <div>
                    <fieldset id="dataInterCondemnation1">
                    <legend> 21.- Quiero gustar a todo el mundo.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation1" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation1" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation2">
                    <legend>22.- No me gusta competir en actividades en las que los demás son mejores que yo.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation2" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation2" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation3">
                    <legend>23.-  Aquellos que se equivocan merecen cargar con la culpa.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation3" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation3" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation4">
                    <legend>24.- Las cosas deberían ser distintas a como son. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterCondemnation4" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterCondemnation4" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation5">
                    <legend>25.- Yo provoco mi propio mal humor.</legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataInterCondemnation5" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataInterCondemnation5" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation6">
                    <legend>26.-  A menudo, no puedo quitarme algún asunto de la cabeza.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation6" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation6" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation7">
                    <legend> 27.- Evito enfrentarme a los problemas.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation7" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation7" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation8">
                    <legend>28.- Todo el mundo necesita tener fuera de si mismo una fuente de energía.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation8" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation8" value={0} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation9">
                    <legend>29.- Solo porque una vez algo afecto tu vida de forma importante, no quiere decir que tenga que ser igual en el futuro.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation9" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation9" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                    <fieldset id="dataInterCondemnation10">
                    <legend>30.- Me siento mas satisfecho cuando tengo muchas cosas que hacer</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterCondemnation10" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterCondemnation10" value={1} onChange={handleChangeData} required/> No
                    </label>
                    </fieldset>

                </div>
                {/* BTF */}

                <div>
                <fieldset id="dataInterBTF1">
                    <legend>31.- Puedo gustarme a mi mismo aun cuando no guste a los demás.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterBTF1" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterBTF1" value={1} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataInterBTF2">
                    <legend>32.- Me gustaría triunfar en algo, pero no pienso que deba hacerlo.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterBTF2" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterBTF2" value={1} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataInterBTF3">
                    <legend>33.- La inmoralidad debería castigarse severamente</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterBTF3" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterBTF3" value={0} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>
                
                <fieldset id="dataInterBTF4">
                    <legend>34.- A menudo me siento trastornado por situaciones que no me gustan.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterBTF4" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterBTF4" value={0} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>
                  
                <fieldset id="dataInterBTF5">
                    <legend>35.- Las personas desgraciadas, normalmente, se deben este estado a si mismas.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterBTF5" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterBTF5" value={1} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>
                  
                <fieldset id="dataInterBTF6">
                    <legend>36.- No me preocupo por no poder evitar que algo ocurra.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterBTF6" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterBTF6" value={1} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>
                  
                <fieldset id="dataInterBTF7">
                    <legend>37.- Normalmente tomo las decisiones tan pronto como puedo.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterBTF7" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterBTF7" value={1} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>
                  
                <fieldset id="dataInterBTF8">
                    <legend>38.- Hay determinadas personas de las que dependo mucho</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterBTF8" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterBTF8" value={0} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>
                  
                <fieldset id="dataInterBTF9">
                    <legend>39.- La gente sobrevalora la influencia del pasado.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterBTF9" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterBTF9" value={1} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>
                  
                <fieldset id="dataInterBTF10">
                    <legend>40.- Lo que mas me divierte es realizar algún proyecto creativo.</legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataInterBTF10" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataInterBTF10" value={1} onChange={handleChangeData} required/> No
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