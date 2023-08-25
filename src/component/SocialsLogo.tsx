import { VariantProps, cva } from "class-variance-authority"
import { FC } from "react"
import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"
import Logo from "@/assets/logo.svg"

export const logoVariants = cva("", {
  variants: {
    size: {
      default: "w-24 h-auto",
      sm: "w-16 h-auto",
      lg: "w-36 h-auto",
      xl: "w-48 h-auto",
      "2xl": "w-[25rem] 2xl:w-[70rem] h-auto",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export type LogoProps = VariantProps<typeof logoVariants>

const SocialsLogo: FC<LogoProps> = ({ size }) => {
  return (
    <Image
      className={cn(logoVariants({ size }))}
      src={Logo}
      alt='socials logo'
      priority={true}
    />
  )
}

export default SocialsLogo
