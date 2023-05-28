import Aos from 'aos'
import 'aos/dist/aos.css'
import { FunctionComponent, useEffect } from 'react'
export const AosInit: FunctionComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return <></>
}
