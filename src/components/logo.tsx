import { MapPinCheckIcon } from 'lucide-react'

export const Logo = () => {
  return (
    <div className="flex items-center  text-xl">
      <MapPinCheckIcon
        strokeWidth={1.7}
        className="size-8 text-blue-500 logo-icon logo-text"
      />
      <div className="text-primary-foreground tracking-tighter -ml-1.5  font-semibold ">
        Cheguei
      </div>
    </div>
  )
}
