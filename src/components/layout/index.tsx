import React, { useState } from 'react'
import { ReactElement } from 'react'
import Navbar from './navbar'

export default function Layout({ children }: {children: ReactElement}) {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
            {children}
      </div>
    </>
  )
}
