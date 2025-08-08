import { filterSchema } from "@/schemas/filter-data"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export const useFilterData = () => {
    const form = useForm({
        resolver: zodResolver(filterSchema),
        defaultValues: {
            nama: "",
            alamat: "",
            jenisBantuan: "",
            nik: "",
            noTelepon: "",
            status: ""
        }
    })

    return {
        form
    }
}