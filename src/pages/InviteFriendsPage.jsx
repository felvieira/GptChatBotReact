import React from 'react'
import { Button } from "@/components/ui/button"
import { BackIcon, CopyIcon } from '../utils/icons'
import Header from '@/components/Header'
import ReferIllustrationSvg from '@/assets/refer-ilustration.svg'

export function InviteFriendsPage() {

  return (
    <div className="flex flex-col h-screen bg-background text-text">
      <Header title="Invite Friends" leftIcon={<BackIcon className="h-6 w-6" />} />
      <main className="flex-1 p-4 flex flex-col items-center justify-center space-y-10">
        <div className="w-64 h-64 mb-8">
          <img src={ReferIllustrationSvg} alt="Refer a Friend" className="w-full h-full" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Refer A Friend</h2>
        <p className="text-text-muted text-center text-lg mb-10">
          Share Your Promo Code & Get $3<br />For Each Friend
        </p>
        <div className="w-full max-w-xs relative">
          <div className="flex items-center justify-between bg-transparent border border-white rounded-[10px] p-4">
            <span className="text-white font-medium text-lg">BrainAIPartnerMR</span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigator.clipboard.writeText("BrainAIPartnerMR")}
              className="text-white"
            >
              <CopyIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
