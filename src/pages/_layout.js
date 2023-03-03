import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
