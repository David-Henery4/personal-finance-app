"use client"

import Link from "next/link"
import { useStackApp } from "@stackframe/stack"

const SignOut = () => {
  const app = useStackApp()
  return (
    <Link href={app.urls.signOut}>SignOut</Link>
  )
}

export default SignOut