import { useState } from "react"

const Test1 = () => { 
    
    const [data, setData] = useState({
        question1: ''
    })
    

    const handleChangeData = (e: React.ChangeEvent<any>) => {
        setData({
            ...data,
            question1: e.target.value
        })
    }

    console.log(data)
    return ( 
        <>    
            <form name="Formulario 1" action=""  className="formulario1">
                <div>
                    <h2> 1.- Para mí es importante recibir la aprobación de los demás. </h2>
                    <input type="radio" id="afirmacion" name="resp" value={1} onChange={handleChangeData} />
                    <label htmlFor="">Si</label>
                    <input type="radio" id="negacion" name="resp" value={0} onChange={handleChangeData} />
                    <label htmlFor="">No</label>
                </div>

                <div>
                    <h2> 2.- Odio equivocarme en algo.  </h2>
                    <input type="radio" id="afirmacion" name="resp" value={1} onChange={handleChangeData} />
                    <label htmlFor="">Si</label>
                    <input type="radio" id="negacion" name="resp" value={0} onChange={handleChangeData} />
                    <label htmlFor="">No</label>
                </div>       
            </form>
        </>
    )
}

export default Test1