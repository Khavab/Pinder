import React from 'react'
import Head from 'next/head'
import Link from 'next/Link'

export default function Home() {
  return (
    <div>
      <h2>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </h2>

      <h2>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </h2>

    </div>
  )
}
