import Login from "@/components/views/Login/Login";
import { createMetadata } from "@/lib/utils";

export const generateMetadata = () => createMetadata({ title: "Login" });

export default function LoginPage() {
  return (
    <Login />
  )
}
