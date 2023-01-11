import { useState, useEffect } from "react";
const Test1 = () => { 
    
    const [data, setData] = useState({
        dataQ1: null,
        dataQ2: null,
        dataQ3: null
    });

    const testvalues = Object.values(data);    

    const sumdata = testvalues.reduce<number>((acc, num) => {
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
            console.log(data);
            console.log(sumdata);
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
                        <input type="radio" id="ansYes" name="dataQ1" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansNo" name="dataQ1" value={0} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ2">
                    <legend>  2.- Odio equivocarme en algo. </legend>
                    <label>
                        <input type="radio" id="ansYes" name="dataQ2" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansNo" name="dataQ2" value={0} onChange={handleChangeData} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ3">
                    <legend> 3.- La gente que se equivoca, logra lo que se merece.  </legend>
                    <label>
                        <input type="radio" id="ansYes" name="dataQ3" value={1} onChange={handleChangeData} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansNo" name="dataQ3" value={0} onChange={handleChangeData} required/> No
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