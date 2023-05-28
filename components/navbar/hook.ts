import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const useCloseMenuOnRouteChange = (
  setToggleMode: Dispatch<SetStateAction<boolean>>
) => {
  const { events } = useRouter()

  useEffect(() => {
    const closeMenu = () => setToggleMode(false)
    events.on('routeChangeComplete', closeMenu)
    return () => {
      events.off('routeChangeComplete', closeMenu)
    }
  }, [events, setToggleMode])
}

const DELAY = 500

export const useDelayInNavbar = (mobileTablate: boolean) => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setShowLoader(false)
      },
      !mobileTablate ? DELAY : 0
    )

    return () => clearTimeout(timer)
  }, [mobileTablate])

  return showLoader
}
