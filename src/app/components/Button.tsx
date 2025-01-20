import { FC } from "react"
import Link from "next/link"
const ButtonC:FC<{text:string, link:string}> = ({text, link}) => {
 
    return (
      <Link href={link}>
  <button className="bg-blue-600 p-2 shadow-xl text-bold border-none text-white rounded-lg">
        {text}
    </button>
  </Link>
 
  )
}

export default ButtonC