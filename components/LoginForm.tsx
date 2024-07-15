"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast, useToast } from "@/components/ui/use-toast"
import { Separator } from "./ui/separator"
import { GitGraph, Github } from "lucide-react"
import { useRouter } from "next/navigation"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "El usuario debe tener al menos 3 carácteres.",
  }),
  password: z.string().min(5, {
    message: "La contraseña debe tener al menos 5 carácteres.",
  }),
})

export function LoginForm() {

  const {toast} = useToast();

  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    router.push("/dashboard")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col  space-y-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <FormControl>
                <Input className="dark:bg-black/30" placeholder="admin" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        /> 
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input className="dark:bg-black/30" type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        /> 
        <div className="flex justify-between items-center gap-x-4">
          <Separator className="flex-1"/> 
          <p className="text-muted-foreground">SIGEAC</p> 
          <Separator className="flex-1" />
        </div>
        <Button className="dark:text-white dark:bg-transparent dark:border dark:border-primary dark:hover:bg-primary" type="submit">Iniciar Sesión</Button>
      </form>
    </Form>
  )
}
