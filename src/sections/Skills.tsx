import type { IconType } from 'react-icons';
import { SiReact, SiTypescript, SiVite, 
  SiHtml5, SiTailwindcss, SiDjango, 
  SiNodedotjs, SiCplusplus, SiGit, 
  SiPython, SiPostgresql} from 'react-icons/si';
import { ShieldCheck, Network, Terminal, Globe, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FaWindows, FaCloudflare } from 'react-icons/fa6';
import { MdMonitorHeart, MdOutlineSecurity } from "react-icons/md";
import { AiOutlineBug } from 'react-icons/ai';

// Set to false for text-only badges throughout this section.
const SHOW_SKILL_ICONS = true;

interface Skill {
  name: string;
  primary?: boolean;
  icon?: IconType;
}

// Sample names for the layout. Mark your strongest skills with primary: true.
// Icons are optional: omit icon on any entry to show just its name.
const skills: Skill[] = [
  { name: 'Penetration Testing', icon: ShieldCheck },
  { name: 'React', icon: SiReact },
  { name: 'Vite', primary: true, icon: SiVite },
  { name: 'TypeScript', primary: true, icon: SiTypescript },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Django', icon: SiDjango },
  { name: 'Python', primary: true, icon: SiPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Git', primary: true, icon: SiGit },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'SOC', icon: MdMonitorHeart },
  { name: 'Threat-Hunting', icon: AiOutlineBug },
  { name: 'IP services', icon: Globe },
  { name: 'Application Security', icon: MdOutlineSecurity },
  { name: 'Cloud Security', icon: FaCloudflare },
  { name: 'Windows Security', icon: FaWindows },
  { name: 'Artificial Intelligence', icon: Cpu },
  { name: 'Network Security', icon: Network },
  { name: 'Linux', primary: true, icon: Terminal },
];

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24 px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl border-t border-border pt-6">
        <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 id="skills-heading" className="font-mono text-sm font-medium uppercase text-muted-foreground">
            Skills
          </h2>
        </div>
        <ul className="flex flex-wrap gap-2" aria-label="Skills">
          {skills.map(({ name, primary, icon: Icon }) => (
            <li key={name} className="max-w-full">
              <Badge
                variant={primary ? 'default' : 'outline'}
                className="max-w-full gap-1.5 rounded-md px-2.5 py-1 font-mono text-xs whitespace-normal text-left leading-5"
              >
                {SHOW_SKILL_ICONS && Icon && <Icon aria-hidden="true" className="shrink-0" />}
                <span className="min-w-0 wrap-break-word">{name}</span>
                {primary && <span className="sr-only"> — core skill</span>}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
