
// const CartFab = dynamic(() => import('@/components/cart/CartFab'), { ssr: false })
// import FacebookFab from "@/components/fab/FacebookFab"; 
import dynamic from "next/dynamic";
import Link from "next/link";
import RightDockHeader from "../components/RightDockHeader";





export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
        <RightDockHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
} 