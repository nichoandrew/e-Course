import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../../components/FooterContent"));

export const metadata = {
  title: "Kategori Kursus",
  description: "",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
