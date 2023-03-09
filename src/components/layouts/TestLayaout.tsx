import { useState, useEffect } from 'react'
import { connectApi } from '../../../api/services'
import FormCreedTest from '../atoms/FormCreedTest'

const TestLayaout = () => {

    const [data, setData] = useState({
        dataInterSearch1: Number(),
        dataInterSearch2: Number(),
        dataInterSearch3: Number(),
        dataInterSearch4: Number(),
        dataInterSearch5: Number(),
        dataInterSearch6: Number(),
        dataInterSearch7: Number(),
        dataInterSearch8: Number(),
        dataInterSearch9: Number(),
        dataInterSearch10: Number(),
        dataInterPerfection1: Number(),
        dataInterPerfection2: Number(),
        dataInterPerfection3: Number(),
        dataInterPerfection4: Number(),
        dataInterPerfection5: Number(),
        dataInterPerfection6: Number(),
        dataInterPerfection7: Number(),
        dataInterPerfection8: Number(),
        dataInterPerfection9: Number(),
        dataInterPerfection10: Number(),
        dataInterCondemnation1: Number(),
        dataInterCondemnation2: Number(),
        dataInterCondemnation3: Number(),
        dataInterCondemnation4: Number(),
        dataInterCondemnation5: Number(),
        dataInterCondemnation6: Number(),
        dataInterCondemnation7: Number(),
        dataInterCondemnation8: Number(),
        dataInterCondemnation9: Number(),
        dataInterCondemnation10: Number(),
        dataInterBTF1: Number(),
        dataInterBTF2: Number(),
        dataInterBTF3: Number(),
        dataInterBTF4: Number(),
        dataInterBTF5: Number(),
        dataInterBTF6: Number(),
        dataInterBTF7: Number(),
        dataInterBTF8: Number(),
        dataInterBTF9: Number(),
        dataInterBTF10: Number(),
        dataInterVictimization1: Number(),
        dataInterVictimization2: Number(),
        dataInterVictimization3: Number(),
        dataInterVictimization4: Number(),
        dataInterVictimization5: Number(),
        dataInterVictimization6: Number(),
        dataInterVictimization7: Number(),
        dataInterVictimization8: Number(),
        dataInterVictimization9: Number(),
        dataInterVictimization10: Number(),
        dataInterAnxious1: Number(),
        dataInterAnxious2: Number(),
        dataInterAnxious3: Number(),
        dataInterAnxious4: Number(),
        dataInterAnxious5: Number(),
        dataInterAnxious6: Number(),
        dataInterAnxious7: Number(),
        dataInterAnxious8: Number(),
        dataInterAnxious9: Number(),
        dataInterAnxious10: Number(),
        dataInterAvoidant1: Number(),
        dataInterAvoidant2: Number(),
        dataInterAvoidant3: Number(),
        dataInterAvoidant4: Number(),
        dataInterAvoidant5: Number(),
        dataInterAvoidant6: Number(),
        dataInterAvoidant7: Number(),
        dataInterAvoidant8: Number(),
        dataInterAvoidant9: Number(),
        dataInterAvoidant10: Number(),
        dataInterInsecure1: Number(),
        dataInterInsecure2: Number(),
        dataInterInsecure3: Number(),
        dataInterInsecure4: Number(),
        dataInterInsecure5: Number(),
        dataInterInsecure6: Number(),
        dataInterInsecure7: Number(),
        dataInterInsecure8: Number(),
        dataInterInsecure9: Number(),
        dataInterInsecure10: Number(),
        dataInterPast1: Number(),
        dataInterPast2: Number(),
        dataInterPast3: Number(),
        dataInterPast4: Number(),
        dataInterPast5: Number(),
        dataInterPast6: Number(),
        dataInterPast7: Number(),
        dataInterPast8: Number(),
        dataInterPast9: Number(),
        dataInterPast10: Number(),
        dataInterProcrastination1: Number(),
        dataInterProcrastination2: Number(),
        dataInterProcrastination3: Number(),
        dataInterProcrastination4: Number(),
        dataInterProcrastination5: Number(),
        dataInterProcrastination6: Number(),
        dataInterProcrastination7: Number(),
        dataInterProcrastination8: Number(),
        dataInterProcrastination9: Number(),
        dataInterProcrastination10: Number(),

    })
    const [show, setShow] = useState(false)

    const [error, setError] = useState(false)

    const dataInterSearch = Object.values(
        data.dataInterSearch1+data.dataInterSearch2+data.dataInterSearch3+data.dataInterSearch4+data.dataInterSearch5+data.dataInterSearch6+data.dataInterSearch7+data.dataInterSearch8+data.dataInterSearch9+data.dataInterSearch10
        )

    const dataInterPerfection = Object.values(
        data.dataInterPerfection1+data.dataInterPerfection2+data.dataInterPerfection3+data.dataInterPerfection4+data.dataInterPerfection5+data.dataInterPerfection6+data.dataInterPerfection7+data.dataInterPerfection8+data.dataInterPerfection9+data.dataInterPerfection10
        )
    
    const dataInterCondemnation = Object.values(
        data.dataInterCondemnation1+data.dataInterCondemnation2+data.dataInterCondemnation3+data.dataInterCondemnation4+data.dataInterCondemnation5+data.dataInterCondemnation6+data.dataInterCondemnation7+data.dataInterCondemnation8+data.dataInterCondemnation9+data.dataInterCondemnation10
        )

    const dataInterBTF = Object.values(
        data.dataInterBTF1+data.dataInterBTF2+data.dataInterBTF3+data.dataInterBTF4+data.dataInterBTF5+data.dataInterBTF6+data.dataInterBTF7+data.dataInterBTF8+data.dataInterBTF9+data.dataInterBTF10
        )
    
    const dataInterVictimization = Object.values(
        data.dataInterVictimization1+data.dataInterVictimization2+data.dataInterVictimization3+data.dataInterVictimization4+data.dataInterVictimization5+data.dataInterVictimization6+data.dataInterVictimization7+data.dataInterVictimization8+data.dataInterVictimization9+data.dataInterVictimization10
        )
    
    const dataInterAnxious = Object.values(
        data.dataInterAnxious1+data.dataInterAnxious2+data.dataInterAnxious3+data.dataInterAnxious4+data.dataInterAnxious5+data.dataInterAnxious6+data.dataInterAnxious7+data.dataInterAnxious8+data.dataInterAnxious9+data.dataInterAnxious10
        )

    const dataInterAvoidant = Object.values(
        data.dataInterAvoidant1+data.dataInterAvoidant2+data.dataInterAvoidant3+data.dataInterAvoidant4+data.dataInterAvoidant5+data.dataInterAvoidant6+data.dataInterAvoidant7+data.dataInterAvoidant8+data.dataInterAvoidant9+data.dataInterAvoidant10
        )

    const dataInterInsecure = Object.values(
        data.dataInterInsecure1+data.dataInterInsecure2+data.dataInterInsecure3+data.dataInterInsecure4+data.dataInterInsecure5+data.dataInterInsecure6+data.dataInterInsecure7+data.dataInterInsecure8+data.dataInterInsecure9+data.dataInterInsecure10
        )

    const dataInterPast = Object.values(
        data.dataInterPast1+data.dataInterPast2+data.dataInterPast3+data.dataInterPast4+data.dataInterPast5+data.dataInterPast6+data.dataInterPast7+data.dataInterPast8+data.dataInterPast9+data.dataInterPast10
        )

    const dataInterProcrastination = Object.values(
        data.dataInterProcrastination1+data.dataInterProcrastination2+data.dataInterProcrastination3+data.dataInterProcrastination4+data.dataInterProcrastination5+data.dataInterProcrastination6+data.dataInterProcrastination7+data.dataInterProcrastination8+data.dataInterProcrastination9+data.dataInterProcrastination10
        )

    const sumDataInterSearch = dataInterSearch.reduce<number>((acc, num) => {return acc + Number(num)}, 0)
    
    const sumDataInterPerfection = dataInterPerfection.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterCondemnation = dataInterCondemnation.reduce<number>((acc, num) => {return acc + Number(num)}, 0)
        
    const sumdataInterBTF = dataInterBTF.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterVictimization = dataInterVictimization.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterAnxious = dataInterAnxious.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterAvoidant = dataInterAvoidant.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterInsecure = dataInterInsecure.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterPast = dataInterPast.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const sumdataInterProcrastination = dataInterProcrastination.reduce<number>((acc, num) => {return acc + Number(num)}, 0)

    const handleChangeData = (e: React.ChangeEvent<any>) =>{
        setData({
            ...data,
            [e.target.name]: (e.target.value)
        })
    }

    const handleSubmit = (e: React.ChangeEvent<any>) =>{e.preventDefault()
        setShow(true)
    }
    
    const connectApiResponse = async () => {
        try {
            const response = await connectApi()
            console.log(response.data)
        }catch{
            setError(true)
        }
    }

    useEffect(() => {
    }, [data])

    // useEffect(() => {
    //     connectApiResponse()
    // }, [])
    return(
        <FormCreedTest 
            handleSubmit={handleSubmit}
            handleChangeData={handleChangeData}
            show={show}
            error={error}
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
        />
    )
}

export default TestLayaout