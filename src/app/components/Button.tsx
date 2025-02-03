"use client"
import { FC } from "react"
import Link from "next/link"

const ButtonC:FC<{text:string, link:string, disable?: boolean}> = ({text, link, disable}) => {
 
    return (<Link href={link}>
      <button
        className={`bg-blue-600 p-2 shadow-xl text-bold border-none text-white rounded-lg ${disable ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={disable} // Disable the button if the prop is true
        onClick={(e) => {
          if (disable) {
            e.preventDefault(); // Prevent navigation if disabled
          }
        }}
      >
        {text}
      </button>
    </Link>
  )
}

export default ButtonC