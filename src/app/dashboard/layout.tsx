import type { Metadata } from "next";
import SideNav from "@/app/ui/SideNav";
import TopNav from "@/app/ui/TopNav";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
  <div className="flex">
    <SideNav />
    <div className="flex flex-col">
      <TopNav />
      {children}
    </div>
  </div>
  );
};

export default RootLayout;