import CardResults from "./CardResults"

import questions from "../../data/constant"

const FormCreedTest = ({ handleSubmit, handleChangeData, show } : any) => { 
    

    return ( 
        <>    
            <form onSubmit= {handleSubmit} name="FormCreedTest" action=""  className="FormCreedTest">
                {questions?.map((question, key) => {
                    return (
                        <fieldset key={key} id={question.id}>
                            <legend>{question.question}</legend>
                            <label>
                                <input type="radio" name={question.id} value={question.valueA} onChange={handleChangeData} required/> Si
                            </label>
                            <label >
                                <input type="radio" name={question.id} value={question.valueB} onChange={handleChangeData} required/> No
                            </label>
                        </fieldset>
                )
                })}
                <label htmlFor="">
                    <button  type="submit" >Terminar</button>
                </label>
            </form>   
            {show&& (<CardResults/>)}
        </>
    )
}

export default FormCreedTest