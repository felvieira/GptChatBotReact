import React from 'react';
import { Button } from "@/components/ui/button"
import { BackIcon } from '../utils/icons'
import { useNavigate } from 'react-router-dom'

const Header = ({ title, leftIcon, rightIcon, onLeftPress, onRightPress }) => {
  const navigate = useNavigate()

  return (
    <header className="flex justify-between items-center p-4">
      {leftIcon && (
        <Button variant="ghost" size="icon" onClick={onLeftPress || (() => navigate(-1))} className="bg-background-secondary rounded-[5px]">
          {leftIcon}
        </Button>
      )}
      <h1 className="text-xl font-semibold">{title}</h1>
      {rightIcon ? (
        <Button variant="ghost" size="icon" onClick={onRightPress} className="rounded-[5px]">
          {rightIcon}
        </Button>
      ) : (
        <div className="w-10"></div>
      )}
    </header>
  );
};

export default Header;
