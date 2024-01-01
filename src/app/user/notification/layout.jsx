import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/NavbarUser"));

export const metadata = {
  title: "Notifikasi",
  description: "",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}