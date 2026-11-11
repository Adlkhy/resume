import FlowingMenu from "@/components/FlowingMenu";

interface Certification {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
  image?: string;
}

const certifications: Certification[] = [
  { 
    name: 'CCNA: Introduction to Networks', 
    issuer: 'Cisco', 
    date: 'Nov 2026', 
    link: 'https://www.credly.com/badges/80771766-6b6b-448e-8196-1cfceab61e24',
    image: './ccna.png'
  },
  { 
    name: 'Cybersecurity Defense Analyst Career Path', 
    issuer: 'Cisco', 
    date: 'Jun 2026', 
    link: 'https://www.credly.com/badges/774b7cfa-322e-450f-bb53-71989eaed645',
    image: './cybdef.png'
  },
  { 
    name: 'AI Fundamentals with IBM SkillsBuild', 
    issuer: 'Cisco', 
    date: 'Jun 2026', 
    link: 'https://www.credly.com/badges/eeaab234-2a96-464d-b1b8-a97e31518ef3',
    image: './aifun.png'
  },
  {
    name: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'Cisco',
    date: 'Feb 2026',
    link: 'https://www.credly.com/badges/01d951d1-654b-4071-ace8-34201b7a0a5d',
    image: './juncyb.png'
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google (Coursera)',
    date: 'Dec 2024',
    link: 'https://www.credly.com/earner/earned/badge/2f9f2b2f-9f8b-4a8e-a135-f0bc7fec7729',
    image: './google.png'
  },
  {
    name: 'Web Programming with Python and JavaScript',
    issuer: 'Harvard University (edX)',
    date: 'Oct 2024',
    link: 'https://cs50.harvard.edu/certificates/e180c108-c5a8-4f5e-b536-dfdd234d917b',
    image: './cs50w.png'
  },
  {
    name: 'Introduction to Programming with Python',
    issuer: 'Harvard University (edX)',
    date: 'Jul 2024',
    link: 'https://cs50.harvard.edu/certificates/4244d9e0-4f4c-41ad-89d6-0a9d35930cc8',
    image: './cs50p.png'
  },
];

const Certifications = () => {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="scroll-mt-24 px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl border-t border-border pt-6">
        <h2 id="certifications-heading" className="mb-3 font-mono text-sm sm:text-md font-medium uppercase text-muted-foreground">
          Certifications
        </h2>
        {certifications.length === 0 ? (
          <p className="text-sm text-muted-foreground">Certificates will be added here.</p>
        ) : (
          <FlowingMenu
            items={certifications}
            speed={60}
            stretch={0.6}
            magnet={0.25}
            followCursor={0.4}
            textColor="var(--foreground)"
            bgColor="var(--background)"
            marqueeBgColor="var(--accent)"
            marqueeTextColor="var(--foreground)"
            direction="alternate"
            duration={0.5}
            bandInset={0}
            bandRadius={0}
            carryContent={false}
            dividers
            dimInactive={false}
            align="left"
            showIndex={false}
            showArrow
            imageShape="pill"
            intro
          />
        )}
      </div>
    </section>
  );
};

export default Certifications;
