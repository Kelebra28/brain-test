import Image from 'next/image'

import logotipo from '../../../utils/img/logotipo.png'
import sofa from '../../../utils/img/sofa.png'
import creencias from '../../../utils/img/creencias.png'

// import styles from '../../../styles/generalLayaout.css'

const GeneralLaytaout = ({ children } : any) => {


    return(
        <>
        <nav className='navBar'>
            <Image 
                src={logotipo} 
                alt="logotipo"
                width={100}
            />
            <Image
                src={sofa}
                alt="sofa"
                width={100}/>
        </nav>
        {children}
        <footer>
            <Image className='imgFooter' src={creencias} alt="creencias" />
        </footer>
        </>
    )

}

export default GeneralLaytaout