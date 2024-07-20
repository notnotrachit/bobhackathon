import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="flex justify-between p-10">
        <Image src="/bob-logo.png" alt="Bob" width={200} height={200} />
        <div className="flex gap-4 self-center">
          <p>Accounts</p>
          <p>Loans</p>
          <p>Investments</p>
        </div>
        <div className="self-center">
          <p className="bg-[#FC7A574D] py-2 px-4 rounded-lg">Sign In</p>
        </div>
    </div>
  )
}

export default Navbar
