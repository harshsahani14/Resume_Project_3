"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image"


import { Button } from "@/components/ui/button"
import FormField from "./FormField"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { toast } from "sonner"
import { Form } from "./ui/form"
import { useRouter } from "next/navigation"//why not next/router?


const AuthFormSchema = (  type:FormType ) =>{

    return z.object({
        name: type==="sign-in" ? z.string().min(0)  : z.string().min(3),
        email : z.string().email(),
        password : z.string().min(3)
    })

}



const AuthForm = ({type}:{type:FormType}) => {


    const router = useRouter()

    const formSchema = AuthFormSchema(type);
// 1. Define your form.
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:"",
      email:"",
      password:""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    try{
        if(type==='sign-in'){
            toast.success("Sign in successfully");
            router.push("/");
        }
        else{
          toast.success("Account created successfully.Please sign in");
          router.push("/sign-in")
        }
    }
    catch(error){
        console.log(error);
        toast.error(`Something went wrong ${error} `)
    }
    console.log(values)
  }

  const isSignIn = type === "sign-in";
  return (


    <div className=" card-border lg:min-w-[566px]">

        <div className=" flex flex-col gap-6 card py-14 px-10">

            <div className=" flex gap-2 justify-center">

                <Image src="/logo.svg" alt="logo"
                    width={32}
                    height={38}
                />
                <h2 className="text-primary-100">PrepWise</h2>
            </div>
        

            <h3 className="text-center text-[28px] leading-[32px]">Practice job Interview with AI</h3>
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-6 mt-4 form">
        
        {!isSignIn && 
          (<FormField
            name='name'
            placeholder='Your Name'
            label='Name'
            control={form.control}
            
            ></FormField>)
        
        }
        
        <FormField
            name='email'
            placeholder='Your email address'
            label='Email Address'
            control={form.control}
            type="email"
          ></FormField>
        
        <FormField
            name='password'
            placeholder='Enter your Password'
            label='Password'
            control={form.control}
            type="password"
            
          ></FormField>

        <Button className=" btn" type="submit">{ isSignIn ? "Sign in" : "Create account" }</Button>
      </form>
    </Form>

    <p className=" text-center">

        {isSignIn ? "No account yet?" : "Have an account already?" }

        <Link href={isSignIn ? "/sign-up" : "/sign-in"} className=" font-bold text-user-primary ml-1"
        > {isSignIn ? "Sign up" : "Sign in" } </Link>
    </p>
    </div>
    </div>
  )
}

export default AuthForm