import { useState } from "react";
const FormCreed = () => { 
    
    const [data, setData] = useState({
        recognition: 0,
        perferctionist: 0,
        condenition: 0
    });

    const handleChangeData = (e:React.ChangeEvent<any>) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        }) 
    }

    // const testvalues = Object.values(data);    

    // const sumdata = testvalues.reduce<number>((acc, num) => {
    //     return acc + Number(num)
    // }, 0)

    // const handleChangeData = (e: React.ChangeEvent<any>) =>{
    //     setData({
    //         ...data,
    //         [e.target.name]: (e.target.value)
    //     })
    // }

    const handleSubmit = (e: React.ChangeEvent<any>) =>{e.preventDefault();
        if(data){
            console.log('el formulario se ha enviado')
            console.log(data);
            // console.log(sumdata);
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
                        <input type="radio" id="" name="recognition1" value={1} onChange={() => setData({
                            ...data,recognition:data.recognition+1
                            })} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="recognition1" value={0} onChange={() => setData({
                            ...data,recognition:data.recognition+0
                            })} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ2">
                    <legend>  2.- Odio equivocarme en algo. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="recognition2" value={1} onChange={() => setData({
                            ...data,recognition:data.recognition+1
                            })} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="recognition2" value={0} onChange={() => setData({
                            ...data,recognition:data.recognition+0
                            })} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ3">
                    <legend> 3.- La gente que se equivoca, logra lo que se merece.  </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="perferctionist1" value={1} onChange={() => setData({
                            ...data,perferctionist:data.perferctionist+1
                            })} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="perferctionist1" value={0} onChange={() => setData({
                            ...data,perferctionist:data.perferctionist+0
                            })} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ4">
                    <legend> 4.- Generalmente acepto los acontecimientos con filosofía.. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="perferctionist2" value={0} onChange={() => setData({
                            ...data,perferctionist:data.perferctionist+0
                            })} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="perferctionist2" value={1} onChange={() => setData({
                            ...data,perferctionist:data.perferctionist+1
                            })} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ5">
                    <legend>  5.- Si una persona quiere, puede ser feliz en casi cualquier circunstancia. </legend>
                    <label>
                        <input type="radio" id="ansBYes" name="condenition1" value={0} onChange={() => setData({
                            ...data,condenition:data.condenition+0
                            })} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansBNo" name="condenition1" value={1} onChange={() => setData({
                            ...data,condenition:data.condenition+1
                            })} required/> No
                    </label>
                </fieldset>

                <fieldset id="dataQ6">
                    <legend> 6.- Temo a las cosas que, a menudo, me resultan objeto de preocupación. </legend>
                    <label>
                        <input type="radio" id="ansAYes" name="condenition2" value={1} onChange={() => setData({
                            ...data,condenition:data.condenition+1
                            })} required/> Si
                    </label>
                    <label >
                        <input type="radio" id="ansANo" name="condenition2" value={0} onChange={() => setData({
                            ...data,condenition:data.condenition+0
                            })} required/> No
                    </label>
                </fieldset> 

                <label htmlFor="">
                    <button type="submit" placeholder="terminar" name="terminar" id=""/>
                </label>
            </form>   
        </>
    )
}



export default FormCreed