// import CardResults from "./CardResults"
import { useRouter } from 'next/router'

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
    disableButton
    } : any) => { 
        const router = useRouter()
        const handeClick = () => {
            router.push('/')
        }
    return ( 
        <>  
            {show ?
            (
                <div className='resultCards'>
                    <h3 >Gracias por tu particación</h3>
                    <h5 >Nos pondremos al contácto contigo</h5>
                    <button className='buttonDisable' onClick={handeClick}>Terminar</button>
                </div>
            ) : (
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
                                    <button disabled={disableButton} className="buttonDisable"  type="submit" >Terminar</button>
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