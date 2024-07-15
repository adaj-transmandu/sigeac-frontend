import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BellIcon, Settings } from 'lucide-react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

  

const Navbar = () => {
  return (
    <div className='p-2 flex justify-between'>
        <div className='flex justify-center gap-x-2'>
        <Select>
          <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Empresa" />
          </SelectTrigger>
          <SelectContent>
              <SelectItem value="light">Transmandu</SelectItem>
              <SelectItem value="dark">Hangar74</SelectItem>
              <SelectItem value="system">AVSEC</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Estación" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Principal</SelectItem>
            <SelectItem value="dark">B1</SelectItem>
            <SelectItem value="system">B2</SelectItem>
          </SelectContent>
        </Select>
        </div> 
        <div className='flex gap-x-6 items-center justify-end'>
          <Settings />
          <BellIcon />
          <Avatar>
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> 
        </div>
    </div>
  )
}

export default Navbar