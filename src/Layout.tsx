import Header from "./sections/Header/Header";
import { LayoutProps } from "./Types/LayoutProps";

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen text-primary-color bg-page-color font-bebas">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default Layout;
