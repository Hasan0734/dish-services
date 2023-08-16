import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import MobileMenu from "@/components/mobileMenu";


const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dish Servie",
  description: "Our resturant provied a too many dishes?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(raleway.className, "relative")}>
        <Navbar />
        <main>{children}</main>
        <MobileMenu/>
        <Footer />
      </body>
    </html>
  );
}
