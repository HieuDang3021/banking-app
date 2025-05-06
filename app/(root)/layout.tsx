import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedInUser} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Link href="/">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          </Link>
          <div>
            <MobileNav user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
