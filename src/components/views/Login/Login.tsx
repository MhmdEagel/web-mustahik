import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
        <Card className="w-md">
            <CardContent>
                <Image src={"/images/logo_izi.png"} width={120} height={120} alt="Logo IZI" />
            </CardContent>
        </Card>
    </div>
  )
}
