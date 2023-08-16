"use client"

import { FC, useState } from "react"
import Button from "./ui/Button"
import addFriendValidator from "@/lib/validations/add-friend"
import axios, { AxiosError } from "axios"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

interface IAddFriendButtonProps {}
type FormData = z.infer<typeof addFriendValidator>

const AddFriendButton: FC<IAddFriendButtonProps> = ({}) => {
  const [isShowSuccess, setShowSuccess] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(addFriendValidator as any),
  })

  const addFriend = async (email: string) => {
    try {
      const validateEmail = addFriendValidator.parse({ email })

      await axios.post("/api/friends/add", {
        email: validateEmail,
      })
      setShowSuccess(true)
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError("email", {
          message: error.message,
        })
        return
      }
      if (error instanceof AxiosError) {
        setError("email", {
          message: error.response?.data,
        })
        return
      }
      setError("email", {
        message: "Something went wrong...",
      })
    }
  }

  const onSubmit = (data: FormData) => {
    addFriend(data.email)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm'>
      <label
        htmlFor='email'
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        Add friend by E-mail
      </label>
      <div className='mt-2 flex gap-4'>
        <input
          {...register("email")}
          type='text'
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='you@example.com'
        ></input>
        <Button>Add</Button>
      </div>
      <p className='mt-1 text-sm text-red-400'>{errors.email?.message}</p>
      {isShowSuccess ? (
        <p className='mt-1 text-sm text-green-400'>Friend request sent!</p>
      ) : null}
    </form>
  )
}

export default AddFriendButton
