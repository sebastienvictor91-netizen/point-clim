import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { FloatingConversionBar } from "./floating-conversion-bar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">
        {children}
      </main>
      <Footer />
      <FloatingConversionBar />
    </div>
  );
}
