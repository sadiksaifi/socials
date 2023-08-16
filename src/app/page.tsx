"use client"

import { FC } from "react"
import Button from "@/component/ui/Button"
import { signOut } from "next-auth/react"

interface IHomeProps {}

const Home: FC<IHomeProps> = ({}) => {
  return (
    <div>
      <Button type='button' onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  )
}

export default Home
