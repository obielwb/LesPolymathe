import Link from "next/link";
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function RegisterButton({...props}: ButtonProps) {
  return (
    <div>
      <Link href={'#final-register-area'}>
        <button
          {...props} >
          {props.children}
        </button>
      </Link>
    </div>
  )
}
