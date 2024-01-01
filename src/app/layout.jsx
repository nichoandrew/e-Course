import "./globals.css";
import { ReduxProvider } from "@/redux/provider";

export const metadata = {
  title: "KURSUSONLINE.COM",
  description: "",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}