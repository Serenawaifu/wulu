import Hero from '@/components/Hero';
import Roadmap from '@/components/Roadmap';
import Team from '@/components/Team/Team';
import Parallax from '@/components/Parallax';
import SectionWrapper from '@/components/SectionWrapper';

export default function Home() {
  return (
    <>
      <Hero />
      <Parallax>
        <SectionWrapper className="py-20">
          <h2 className="mb-12 text-center text-4xl font-bold">Roadmap</h2>
          <Roadmap />
        </SectionWrapper>
      </Parallax>
      <SectionWrapper className="py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">Team</h2>
        <Team />
      </SectionWrapper>
    </>
  );
}
