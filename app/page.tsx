import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Recognition from '@/components/Recognition';
import Videos from '@/components/Videos';
import Founder from '@/components/Founder';
import News from '@/components/News';
import Platform from '@/components/Platform';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Recognition />
      <Videos />
      <Founder />
      <Platform />
      <News />
      <Contact />
    </>
  );
}
