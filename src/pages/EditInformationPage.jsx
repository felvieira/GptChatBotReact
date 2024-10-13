import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BackIcon, ProfileIcon, EmailIcon, LockIcon, EditIcon } from '../utils/icons'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header'
import useForm from '../hooks/useForm'

export function EditInformationPage() {
  const navigate = useNavigate()
  const { values, handleChange, resetForm } = useForm({
    fullName: "Tom Hillson",
    email: "Tomhill@mail.com",
    password: "••••••••"
  })

  const [isEditingName, setIsEditingName] = React.useState(false)
  const [isEditingEmail, setIsEditingEmail] = React.useState(false)
  const [isEditingPassword, setIsEditingPassword] = React.useState(false)

  const handleEdit = (field) => {
    switch(field) {
      case 'name':
        setIsEditingName(!isEditingName)
        break
      case 'email':
        setIsEditingEmail(!isEditingEmail)
        break
      case 'password':
        setIsEditingPassword(!isEditingPassword)
        break
    }
  }

  const handleSave = () => {
    console.log('Saving changes:', values)
    navigate('/profile')
  }

  return (
    <div className="flex flex-col h-screen bg-background text-text">
      <Header title="Edit Information" leftIcon={<BackIcon className="h-6 w-6" />} />
      <main className="flex-1 p-4 mt-20 space-y-12">
        <div className="space-y-6">
          <div className="bg-[#232627] rounded-[10px] p-4 flex items-center justify-between">
            <div className="flex items-center flex-1">
              <ProfileIcon className="mr-3 h-6 w-6 text-gray-400" />
              {isEditingName ? (
                <Input
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  className="bg-transparent border-none text-text font-poppins text-[18.37px] font-medium leading-[27.56px]"
                />
              ) : (
                <span className="font-poppins text-[18.37px] font-medium leading-[27.56px] text-white">{values.fullName}</span>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={() => handleEdit('name')}>
              <EditIcon className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
          <div className="bg-[#232627] rounded-[10px] p-4 flex items-center justify-between">
            <div className="flex items-center flex-1">
              <EmailIcon className="mr-3 h-6 w-6 text-gray-400" />
              {isEditingEmail ? (
                <Input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="bg-transparent border-none text-text font-poppins text-[18.37px] font-medium leading-[27.56px]"
                />
              ) : (
                <span className="font-poppins text-[18.37px] font-medium leading-[27.56px] text-white">{values.email}</span>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={() => handleEdit('email')}>
              <EditIcon className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
          <div className="bg-[#232627] rounded-[10px] p-4 flex items-center justify-between">
            <div className="flex items-center flex-1">
              <LockIcon className="mr-3 h-6 w-6 text-gray-400" />
              {isEditingPassword ? (
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="bg-transparent border-none text-text font-poppins text-[18.37px] font-medium leading-[27.56px]"
                />
              ) : (
                <span className="font-poppins text-[18.37px] font-medium leading-[27.56px] text-white">{values.password}</span>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={() => handleEdit('password')}>
              <EditIcon className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
        </div>
        <Button onClick={handleSave} className="w-full py-10 bg-[#1B1E20] text-text font-poppins text-[18.37px] font-medium rounded-[10px]">
          SAVE CHANGES
        </Button>
      </main>
    </div>
  );
}
