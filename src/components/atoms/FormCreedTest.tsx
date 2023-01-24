import CardResults from "./CardResults"

import questions from "../../data/constant"

const FormCreedTest = ({ 
    handleSubmit, 
    handleChangeData, 
    show,
    sumDataInterSearch,
    sumDataInterPerfection,
    sumdataInterCondemnation,
    sumdataInterBTF,
    sumdataInterVictimization,
    sumdataInterAnxious,
    sumdataInterAvoidant,
    sumdataInterInsecure,
    sumdataInterPast,
    sumdataInterProcrastination
    } : any) => { 
    

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
            {show&& 
            (<CardResults 
                sumDataInterSearch={sumDataInterSearch}
                sumDataInterPerfection={sumDataInterPerfection}
                sumdataInterCondemnation={sumdataInterCondemnation}
                sumdataInterBTF={sumdataInterBTF}
                sumdataInterVictimization={sumdataInterVictimization}
                sumdataInterAnxious={sumdataInterAnxious}
                sumdataInterAvoidant={sumdataInterAvoidant}
                sumdataInterInsecure={sumdataInterInsecure}
                sumdataInterPast={sumdataInterPast}
                sumdataInterProcrastination={sumdataInterProcrastination}
            />)}
        </>
    )
}

export default FormCreedTest