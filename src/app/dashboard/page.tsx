import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth/next"
import { FC } from "react"

interface IDashboardProps {}

const Dashboard: FC<IDashboardProps> = async ({}) => {
  const session = await getServerSession(authOptions)

  return (
    <>
      <pre>{JSON.stringify(session)}</pre>
    </>
  )
}

export default Dashboard
