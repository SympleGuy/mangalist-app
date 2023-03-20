import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>MangaList</title>
      </Head>
      <Navbar />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  );
}
