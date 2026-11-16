import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Cases from '@/components/Cases';
import Tools from '@/components/Tools';
import DataProjects from '@/components/DataProjects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-bg"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Cases />
        <Tools />
        <DataProjects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
