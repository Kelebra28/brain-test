import { useState } from "react"

const Test2 = () => { 
    
    const [data, setData] = useState({
        question1: '',
        question2: ''
    });

    const handleChangeData = (e: React.ChangeEvent<any>) =>{
        setData({
            ...data,
            question1 : e.target.value,
            question2 : e.target.value 
        })
    }
    
    console.log(data)
    
    return ( 
        <>    
            <form name="Form1" action="" /* onSubmit={} */ className="form1">
        
                <div>
                    <h2> 1.- Para mí es importante recibir la aprobación de los demás. </h2>
                    <input type="radio" id="yes" name="data" value={1} onChange={handleChangeData} />
                    <label>Si</label>
                    <input type="radio" id="no" name="data" value={0} onChange={handleChangeData} />
                    <label>No</label>
                </div>
 
                <div>
                    <h2> 2.- Odio equivocarme en algo.  </h2>
                    <input type="radio" id="afirmacion" name="data" value={1} onChange={handleChangeData} />
                    <label htmlFor="">Si</label>
                    <input type="radio" id="negacion" name="data" value={0} onChange={handleChangeData} />
                    <label htmlFor="">No</label>
                </div>

                <div>
                    <h2> 3.- La gente que se equivoca, logra lo que se merece.  </h2>
                    <input type="radio" id="afirmacion" name="data" value={1} onChange={handleChangeData} />
                    <label htmlFor="">Si</label>
                    <input type="radio" id="negacion" name="data" value={0} onChange={handleChangeData} />
                    <label htmlFor="">No</label>
                </div>
                         
            </form>
        </>
    )
}
export default Test2