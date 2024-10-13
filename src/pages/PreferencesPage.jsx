'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { ProfileIcon, LockIcon, CreditCard, UserPlus, BackIcon } from '../utils/icons'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header'

export function PreferencesPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-background text-text">
      <Header title="Preference" leftIcon={<BackIcon className="h-6 w-6" />} />
      <main className="flex-1 p-4 space-y-12 mt-10">
        <Button variant="ghost" className="w-full justify-start py-4 text-left" onClick={() => navigate('/edit-information')}>
          <div className="flex items-center">
            <ProfileIcon className="mr-3 h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-poppins text-[18.37px] font-medium leading-[27.56px]">Account Information</span>
              <span className="text-sm text-text-muted">Change your Account Information</span>
            </div>
          </div>
        </Button>
        <Button variant="ghost" className="w-full justify-start py-4 text-left">
          <div className="flex items-center">
            <LockIcon className="mr-3 h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-poppins text-[18.37px] font-medium leading-[27.56px]">Password</span>
              <span className="text-sm text-[#737373]">Change your Password</span>
            </div>
          </div>
        </Button>
        <Button variant="ghost" className="w-full justify-start py-4 text-left">
          <div className="flex items-center">
            <CreditCard className="mr-3 h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-poppins text-[18.37px] font-medium leading-[27.56px]">Payment Methods</span>
              <span className="text-sm text-[#737373]">Add Your Credit / Credit Cards</span>
            </div>
          </div>
        </Button>
        <Button variant="ghost" className="w-full justify-start py-4 text-left" onClick={() => navigate('/invite-friends')}>
          <div className="flex items-center">
            <UserPlus className="mr-3 h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-poppins text-[18.37px] font-medium leading-[27.56px]">Invite Your Friends</span>
              <span className="text-sm text-[#737373]">Get $3 For Each Invitation!</span>
            </div>
          </div>
        </Button>
      </main>
    </div>
  );
}
