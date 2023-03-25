import CardResults from "./CardResults"

import questions from "../../data/constant"
import AnnonimousUser from './AnnonimousUser';

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
    sumdataInterProcrastination,
    data,
    disable,
    setUserInfo,
    userInfo,
    } : any) => { 
    

    return ( 
        <>  
            {show ?
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
            />) : (
                <form 
                onSubmit={handleSubmit}
                name="FormCreedTest" 
                className="formCreedTest"
                >
                    {
                        userInfo ? (
                            <AnnonimousUser 
                                setUserInfo={setUserInfo}
                                handleChangeUser={handleChangeData}
                                data={data}
                                disable={disable}
                            />
                        ) : 
                        (
                            <>
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
                            {!disable && (
                                <label className="buttonFinished">
                                    <button className="buttonDisable"  type="submit" >Terminar</button>
                                </label> )
                            }
                            </>
    
                        )
                    }
                </form> 
            )}
        </>
    )
}

export default FormCreedTest