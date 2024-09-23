import SideNav from "@/app/ui/SideNav";
import TopNav from "@/app/ui/TopNav";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
  <div className="flex">
    <SideNav />
    <div className="w-full min-w-max flex flex-col">
      <TopNav />
      {children}
    </div>
  </div>
  );
};

export default RootLayout;