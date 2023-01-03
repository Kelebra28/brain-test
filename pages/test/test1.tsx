import { useState, useEffect } from "react";
const Test1 = () => { 
    
    // const [data, setData] = useState({
    //     dataQ1: '',
    //     dataQ2: '',
    //     dataQ3: ''
    // });

    const [data, setData] = useState({
        dataQ1: (Number),
        dataQ2: (Number),
        dataQ3: (Number)
    });

    const testvalues = Object.values(data);

    // const sumdata = testvalues.reduce((sumdata, dataQ1)=> sumdata + dataQ1, 0);
    // const sumdata = ()=> {
    //    const root =  testvalues.map(Math.sqrt)
    // }
        // testvalues.map)
    const sumdata = testvalues.reduce<number>((acc, actualNum) => {
        // console.log(acc)
        // console.log(actualNum)
        return actualNum 
    }, 0)
    
//     const sumdata = (accumulator, curr) => accumulator + curr;
// console.log(arr.reduce(reducer));


    const handleChangeData = (e: React.ChangeEvent<any>) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e: React.ChangeEvent<any>) =>{

        if(data){
            e.preventDefault();
            alert('el formulario se ha enviado')
            // console.log(data);
            console.log(sumdata);
        } else {
            alert('Hay preguntas sin responder, complete el formulario')
        }
    }

    return ( 
        <>    
            <form onSubmit= {handleSubmit} name="Form1" action=""  className="Form1">

                <fieldset id="dataQ1">
                    <legend> 1.- Para mí es importante recibir la aprobación de los demás. </legend>
                    <label>
                        <input type="radio" id="ansYes" name="dataQ1" value={1} onChange={handleChangeData} /> Si
                    </label>
                    <label >
                        <input type="radio" id="ansNo" name="dataQ1" value={0} onChange={handleChangeData} /> No
                    </label>
                </fieldset>

                <fieldset id="dataQ2">
                    <legend>  2.- Odio equivocarme en algo. </legend>
                    <label>
                        <input type="radio" id="ansYes" name="dataQ2" value={1} onChange={handleChangeData} /> Si
                    </label>
                    <label >
                        <input type="radio" id="ansNo" name="dataQ2" value={0} onChange={handleChangeData} /> No
                    </label>
                </fieldset>

                <fieldset id="dataQ3">
                    <legend> 3.- La gente que se equivoca, logra lo que se merece.  </legend>
                    <label>
                        <input type="radio" id="ansYes" name="dataQ3" value={1} onChange={handleChangeData} /> Si
                    </label>
                    <label >
                        <input type="radio" id="ansNo" name="dataQ3" value={0} onChange={handleChangeData} /> No
                    </label>
                </fieldset>

                <label htmlFor="">
                    <input type="submit" name="" id="" />
                </label>
            </form>   
        </>
    )
}

export default Test1