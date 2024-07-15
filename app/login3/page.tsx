import { LoginForm } from '@/components/LoginForm'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { DoorOpen } from 'lucide-react'
import React from 'react'

const Login3 = () => {
  return (
    <div className='flex w-dvw h-dvh'>
        <div className='flex justify-center items-center w-3/5 bg-planeBg bg-cover h-full'>
            <Logo />
        </div>
        <div className='flex flex-col space-y-6 items-center justify-center w-full h-full'>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <h1 className='text-6xl font-bold'>Bienvenido a SIGEAC</h1>
            <p className='text-sm text-muted-foreground'>Por favor, ingrese sus credenciales de inicio de sesión.</p>
          </div>
          <div className='flex flex-col space-y-2'>
            <Label className='text-2xl font-medium'>Usuario</Label>
            <Input className='border-t-0 border-r-0 border-l-0 rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-b-2 focus-visible:border-b-primary' placeholder='Ingrese su usuario...'/>
            <Label className='text-2xl font-medium'>Contraseña</Label>
            <Input className='border-t-0 border-r-0 border-l-0 rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-b-2 focus-visible:border-b-primary' placeholder='Ingrese su contraseña...'/>
          </div>
          <div>
            <Button className='gap-x-2'><DoorOpen /> Iniciar Sesion</Button>
          </div>
        </div>
    </div>
  )
}

export default Login3