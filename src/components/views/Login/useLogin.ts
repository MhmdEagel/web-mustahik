import { loginSchema } from "@/schemas/login"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export const useLogin = () => {
    const form = useForm({
        resolver: zodResolver(loginSchema)
    })

    return {
        form
    }
}