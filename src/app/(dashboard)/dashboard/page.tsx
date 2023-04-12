import Button from '@/components/UI/Button'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { FC } from 'react'


const page = async ({}) => {
  const session = await getServerSession(authOptions)
  
  return <pre>Hello Dash</pre>
}

export default page