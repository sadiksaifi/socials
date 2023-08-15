"use client"

import { FC, ReactNode } from "react"
import { Toaster } from "react-hot-toast"

interface IProviderProps {
  children: ReactNode
}

const Provider: FC<IProviderProps> = ({ children }) => {
  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      {children}
    </>
  )
}

export default Provider
