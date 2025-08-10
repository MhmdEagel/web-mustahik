import Image from "next/image";
import BackBtn from "./BackBtn/BackBtn";

export default function NotFoundComponent() {
  return (
    <div className="flex flex-col h-screen text-center justify-center items-center min-h-[400px] space-y-4">
      <Image
        src={"/ilustration/not-found.svg"}
        width={300}
        height={300}
        alt="404 not found"
      />
      <div className="text-foreground text-3xl font-bold">
        Halaman tidak ditemukan
      </div>
        <BackBtn />
    </div>
  );
}
