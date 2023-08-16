import Button from "@/component/ui/Button"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth/next"
import Link from "next/link"
import { FC } from "react"

interface IDashboardProps {}

const Dashboard: FC<IDashboardProps> = async ({}) => {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <>
      <pre>{JSON.stringify(session)}</pre>
      <Button>
        <Link href='/'>Home</Link>
      </Button>
    </>
  )
}

export default Dashboard
