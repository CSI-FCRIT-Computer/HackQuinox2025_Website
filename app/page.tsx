import Nav from "@/components/Nav";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pt-20 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <div className="flex justify-end">
        <h1 className="text-4xl font-bold">Hackathon Web</h1>
      </div>
    </div>
  );
}
