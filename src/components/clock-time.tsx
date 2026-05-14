import { Clock as ClockIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export const ClockTime = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()

      const formattedTime = now.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })

      setTime(formattedTime)
    }

    updateClock()

    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-1 text-xl text-muted-foreground">
      <ClockIcon className="size-5 text-primary-foreground" strokeWidth={1.5} />
      <span className='text-primary-foreground'>{time}</span>
    </div>
  )
}
