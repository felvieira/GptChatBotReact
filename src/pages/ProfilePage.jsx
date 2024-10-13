import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronRight, Settings, Lock, HelpCircle, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { BackIcon } from '../utils/icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export function ProfilePage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-screen bg-background text-text">
      <Header title="Profile" leftIcon={<BackIcon className="h-6 w-6" />} />
      <main className="flex-1 p-4 space-y-8">
        <div className="flex flex-col items-center space-y-2 relative">
          <div className="relative">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/src/assets/robot-img.png" alt="Tom Hillson" />
              <AvatarFallback>TH</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <h2 className="text-title-large mt-2">Tom Hillson</h2>
          <p className="text-body-small text-text-muted">Tomhill@mail.com</p>
        </div>
        <div className="space-y-10">
          <Button variant="ghost" className="w-full justify-between py-4 text-left" onClick={() => navigate('/preferences')}>
            <div className="flex items-center">
              <Settings className="mr-3 h-8 w-8" />
              <span className="font-poppins text-body-large">Preferences</span>
            </div>
            <ChevronRight className="h-8 w-8" />
          </Button>
          <Button variant="ghost" className="w-full justify-between py-4 text-left">
            <div className="flex items-center flex-1">
              <Lock className="mr-3 h-8 w-8" />
              <div className="flex-1 space-y-2">
                <span className="font-poppins text-[18.37px] font-medium leading-[27.56px]">Account Security</span>
                <div className="w-3/4">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-3/4"></div>
                  </div>
                  <span className="text-xs text-text-muted mt-4 block">Excellent</span>
                </div>
              </div>
            </div>
            <ChevronRight className="h-8 w-8" />
          </Button>
          <Button variant="ghost" className="w-full justify-between py-4 text-left">
            <div className="flex items-center">
              <HelpCircle className="mr-3 h-8 w-8" />
              <span className="font-poppins text-[18.37px] font-medium leading-[27.56px]">Customer Support</span>
            </div>
            <ChevronRight className="h-8 w-8" />
          </Button>
          <Button variant="ghost" className="w-full justify-start py-4 text-left text-text">
            <LogOut className="mr-3 h-8 w-8" />
            <span className="font-poppins text-[18.37px] font-medium leading-[27.56px]">Logout</span>
          </Button>
        </div>
      </main>
      <div className="h-px bg-white"></div>
      <Footer />
    </div>
  );
}
