import { User } from "lucide-react"
import { LoginAuthTwo } from "../ButtonAuth/LoginAuth"
import Image from "next/image"
import { SignOutTwo } from "../ButtonAuth/SignOut"
import { Iuser } from "@/Types/interfaces"

const userOn = async (user: any) => {


    return (
        <div className="w-full px-2 py-2.5 flex justify-between items-center">

            {
                user.auth ? (
                    <Image 
                    alt={user.user?.name ?? ''} 
                    src={user.user?.image  ?? ''} 
                    width={50} 
                    height={50}
                    className="rounded-full"
                    />
                ) : (
                    <User className="size-10 p-1 rounded-full bg-zinc-500 text-zinc-50"/>
                )
            }           
            

            <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-center px-1">
                    <p className="italic">{user.user?.name}</p>
                    <SignOutTwo/>
                </div>
                <p className="font-thin text-xs">{user.user?.email}</p>
            </div>
        </div>
    )
}

const userOff = () => {
    return (
        <div className="w-full px-2 py-2.5 flex justify-between items-center">
            
            <User className="size-10 p-1 rounded-full bg-zinc-500 text-zinc-50"/>

            <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center px-1">
                <p className="italic">Anonimo</p>
                <LoginAuthTwo/>
            </div>
                <p className="font-thin text-xs text-zinc-50/40">Faca login com Github.</p>
            </div>

        </div>
    )
}

const  user = await {
    On: userOn,
    Off: userOff
}

export default user
