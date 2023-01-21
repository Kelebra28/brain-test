import { useState, useEffect } from "react";
const Test1 = () => { 
    
    const [data, setData] = useState({
        dataQ1: Number(),
        dataQ2: Number(),
        dataQ3: Number(),
        dataQ4: Number(),
        dataQ5: Number(),
        dataQ6: Number()
    })

    // const [dataInterBusqueda, setdataInterBusqueda] = useState{

    // }
    
    const datainterpretation1 = Object.values(data.dataQ1+data.dataQ2+data.dataQ3);
    const datainterpretation2 = Object.values(data.dataQ4+data.dataQ5+data.dataQ6);

    const testvalues = Object.values(data);    

    const sumdata = testvalues.reduce<number>((acc, num) => {
        return acc + Number(num)
    }, 0)

    const sumdatainterpretation1 = datainterpretation1.reduce<number>((acc, num) => {
        return acc + Number(num)
    }, 0)
    const sumdatainterpretation2 = datainterpretation2.reduce<number>((acc, num) => {
        return acc + Number(num)
    }, 0)

    const handleChangeData = (e: React.ChangeEvent<any>) =>{
        setData({
            ...data,
            [e.target.name]: (e.target.value)
        })
    }

    const handleSubmit = (e: React.ChangeEvent<any>) =>{e.preventDefault();
        if(data){
            console.log('el formulario se ha enviado')
            // console.log(data);
            // console.log(testvalues)
            // console.log(sumdata);
            // console.log(datainterpretation1)
            // console.log(datainterpretation2)
            console.log(sumdatainterpretation1)
            console.log(sumdatainterpretation2)
            
        } else {
            console.log('Hay preguntas sin responder, complete el formulario')
        } 
    }

    return ( 
        <>    
            <form onSubmit= {handleSubmit} name="Form1" action=""  className="Form1">

                <fieldset id="dataQ1">
                    <legend> 1.- Para mí es importante recibir la aprobación de los demás. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataQ1" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataQ1" value={0} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ2">
                    <legend>  2.- Odio equivocarme en algo. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataQ2" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataQ2" value={0} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ3">
                    <legend> 3.- La gente que se equivoca, logra lo que se merece.  </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataQ3" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataQ3" value={0} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ4">
                    <legend> 4.- Generalmente acepto los acontecimientos con filosofía.. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataQ4" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataQ4" value={1} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ5">
                    <legend>  5.- Si una persona quiere, puede ser feliz en casi cualquier circunstancia. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="dataQ5" value={0} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="dataQ5" value={1} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ6">
                    <legend> 6.- Temo a las cosas que, a menudo, me resultan objeto de preocupación. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="dataQ6" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="dataQ6" value={0} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>

                <label htmlFor="">
                    <button type="submit" placeholder="terminar" name="terminar" id=""/>
                </label>
            </form>   
        </>
    )
}

export default Test1