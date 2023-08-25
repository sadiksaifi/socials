"use client"

import { FC } from "react"
import Button from "@/component/ui/Button"
import { signOut } from "next-auth/react"

const Home: FC = () => {
  return (
    <div className='flex w-full min-h-screen justify-center items-center'>
      <Button type='button' onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  )
}

export default Home
