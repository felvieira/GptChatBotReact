import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoSvg from '@/assets/logo.svg'

export function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding')
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex flex-col justify-between items-center h-screen bg-background text-text p-6">
      <div className="flex-1 flex items-center justify-center w-full">
        <img src={LogoSvg} alt="BrainBox Logo" className="w-32 h-32" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">BrainBox</h1>
        <p className="text-sm text-text-muted">Version 1.0.0</p>
      </div>
    </div>
  )
}
