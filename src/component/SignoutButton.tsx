"use client"

import { ButtonHTMLAttributes, FC, useState } from "react"
import Button from "./ui/Button"
import { signOut } from "next-auth/react"
import { toast } from "react-hot-toast"
import { Loader2, LogOut } from "lucide-react"

interface ISignoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton: FC<ISignoutButtonProps> = ({ ...props }) => {
  const [isSignOut, setSignOut] = useState<boolean>(false)

  return (
    <Button
      {...props}
      variant='ghost'
      onClick={async () => {
        setSignOut(true)
        try {
          await signOut()
        } catch (error) {
          toast.error("There was an error signing out. Please try again later.")
        } finally {
          setSignOut(false)
        }
      }}
    >
      {isSignOut ? (
        <Loader2 className='animate-spin w-4 h-4' />
      ) : (
        <LogOut className='w-4 h-4' />
      )}
    </Button>
  )
}

export default SignOutButton
