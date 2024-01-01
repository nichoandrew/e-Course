import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/NavbarVendor"));
const FooterVendor = dynamic(() => import("@/components/FooterVendor"));
import Sidebar from "@/components/SidebarVendor";
export const metadata = {
  title: "Vendor | KURSUSONLINE.COM",
  description: "",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex w-screen overflow-y-hidden">
      <aside className="flex lg:w-[16%] border">
        <Sidebar />
      </aside>
      <div className="lg:w-[84%] flex-1 overflow-y-scroll">
        <header>
          <Navbar />
        </header>
        <main className="mt-12 lg:mt-0">{children}</main>
        <footer>
          <FooterVendor />
        </footer>
      </div>
    </div>
  );
}