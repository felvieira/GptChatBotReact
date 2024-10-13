import React from 'react';
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import { HomeIcon, EmailIcon, ClockIcon, ProfileIcon } from '../utils/icons'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer>
      <div className="flex justify-between h-14 mt-4">
        <Button variant="ghost" className="flex-1 justify-center items-center" onClick={() => navigate('/')}>
          <div className="flex flex-col items-center">
            <HomeIcon />
          </div>
        </Button>
        <Button variant="ghost" className="flex-1 justify-center items-center">
          <div className="flex flex-col items-center">
            <EmailIcon />
          </div>
        </Button>
        <Button variant="ghost" className="flex-1 justify-center items-center">
          <div className="flex flex-col items-center">
            <ClockIcon />
          </div>
        </Button>
        <Button variant="ghost" className="flex-1 justify-center items-center">
          <div className="flex flex-col items-center">
            <ProfileIcon />
            <div className="w-1 h-1 bg-white rounded-full mt-1"></div>
          </div>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
