import { useState } from "react"

const test1 = () => { 
    
    const [resp, setResp] = useState('');
    
    return ( 
    <>    
        <form name="Formulario 1" action="" /* onSubmit={} */ className="formulario1">
        
        <div>
        <h2> 1.- Para mí es importante recibir la aprobación de los demás. </h2>
            <input type="radio" id="afirmacion" name="resp" value={1} onChange={(e) => setResp(e.target.value) } />
            <label htmlFor="">Si</label>

            <input type="radio" id="negacion" name="resp" value={0} onChange={(e) => setResp(e.target.value) } />
            <label htmlFor="">No</label>
        </div>

        <div>
        <h2> 2.- Odio equivocarme en algo.  </h2>
            <input type="radio" id="afirmacion" name="resp" value={1} onChange={(e) => setResp(e.target.value) } />
            <label htmlFor="">Si</label>

            <input type="radio" id="negacion" name="resp" value={0} onChange={(e) => setResp(e.target.value) } />
            <label htmlFor="">No</label>
        </div>       
        </form>
    </>
    )
}