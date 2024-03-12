import { PT_Serif } from "next/font/google";
import "./globals.css";

const serif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "My IxDF Application",
  description: "A Next.js application for the Interaction Design Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={serif.className}>{children}</body>
    </html>
  );
}
