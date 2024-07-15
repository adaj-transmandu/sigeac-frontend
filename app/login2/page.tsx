/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ohhek0WV6bu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Login2() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh] flex-col w-full bg-sky-100">
      <div className="flex flex-col items-center justify-between">
        <div style={{
          width: 300,
          height: 300,
          borderRadius: 100,
          backgroundColor: 'transparent',
        }} className="flex items-center">
          <Image src={'/logo.png'} width={320} height={320} alt="Logo" className="object-fit"/>
        </div>
        <Card className="w-full p-6 -mt-10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Ingreso a Sistema</CardTitle>
              <p className="text-xs text-muted-foreground">Por favor, ingrese sus credenciales de inicio de sesión.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="username">Usuario</Label>
                <Input id="username" placeholder="Ingrese el usario..." required />
              </div>
              <div>
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" placeholder="********" required />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500">
                Iniciar Sesion
              </Button>
            </CardFooter>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              <Link href="#" className="underline text-blue-500 hover:text-blue-600" prefetch={false}>
                ¿Olvidó su contraseña?
              </Link>
            </div>
        </Card>
      </div>
    </div>
  )
}