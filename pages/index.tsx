import GeneralLaytaout from '../src/components/layouts/GeneralLayaout'
import IndexLayaout from '../src/components/layouts/IndexLayaout'
// import { useContext } from 'react'
// import { AppContext } from './_app'

const index = () => {
  // @ts-ignore
  //   const { isAuth, setIsAuth } = useContext(AppContext)

//   console.log('State Context', isAuth)
//   console.log( 'context set',setIsAuth)

  return(
    <GeneralLaytaout>
      <IndexLayaout/>
    </GeneralLaytaout>
  )

}
export default index
