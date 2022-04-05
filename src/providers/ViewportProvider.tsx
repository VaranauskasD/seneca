import * as React from 'react'

export const ViewportContext = React.createContext({
  width: 0,
  height: 0,
  isDesktop: false,
})

export const ViewportProvider = (props: { children?: React.ReactNode }) => {
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const [isDesktop, setIsDesktop] = React.useState(false)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    window.innerWidth > 900 ? setIsDesktop(true) : setIsDesktop(false)
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <ViewportContext.Provider value={{ width, height, isDesktop }}>
      {props.children}
    </ViewportContext.Provider>
  )
}

export const useViewport = () => {
  const { width, height, isDesktop } = React.useContext(ViewportContext)
  return { width, height, isDesktop }
}

export default ViewportProvider
