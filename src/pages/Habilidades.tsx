import cv from '../data/cv.json'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaAws,
  FaPython,
  FaJava,
  FaPhp,
  FaWordpress,
  FaFigma,
  FaGithub,
  FaNpm,
  FaYarn,
  FaSass,
  FaLess,
  FaBootstrap,
  FaAngular,
  FaVuejs,
  FaLaravel,
  FaSymfony,
  FaJenkins,
  FaTrello,
  FaSlack,
  FaDiscord
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiVite, 
  SiNextdotjs, 
  SiPrisma, 
  SiSupabase,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiDigitalocean,
  SiUbuntu,
  SiCentos,
  SiLinux,

  SiIntellijidea,
  SiWebstorm,
  SiSublimetext,
  SiPostman,
  SiInsomnia,
  SiJira,
  SiConfluence,
  SiNotion,
  SiZoom,
  SiGooglemeet,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis
} from 'react-icons/si'

// Mapeo de habilidades a iconos
const skillIcons: { [key: string]: any } = {
  'React': FaReact,
  'TypeScript': SiTypescript,
  'JavaScript': FaJs,
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'Tailwind CSS': SiTailwindcss,
  'Vite': SiVite,
  'Next.js': SiNextdotjs,
  'Node.js': FaNodeJs,
  'Git': FaGitAlt,
  'GitHub': FaGithub,
  'npm': FaNpm,
  'Yarn': FaYarn,
  'Sass': FaSass,
  'Less': FaLess,
  'Bootstrap': FaBootstrap,
  'Angular': FaAngular,
  'Vue.js': FaVuejs,
  'Python': FaPython,
  'Java': FaJava,
  'PHP': FaPhp,
  'Laravel': FaLaravel,
  'Symfony': FaSymfony,
  'WordPress': FaWordpress,
  'Database': FaDatabase,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'Redis': SiRedis,
  'Prisma': SiPrisma,
  'Supabase': SiSupabase,
  'Firebase': SiFirebase,
  'Docker': FaDocker,
  'AWS': FaAws,
  'Vercel': SiVercel,
  'Netlify': SiNetlify,
  'Heroku': SiHeroku,
  'DigitalOcean': SiDigitalocean,
  'Ubuntu': SiUbuntu,
  'CentOS': SiCentos,
  'Linux': SiLinux,

  'IntelliJ': SiIntellijidea,
  'WebStorm': SiWebstorm,
  'Sublime Text': SiSublimetext,
  'Postman': SiPostman,
  'Insomnia': SiInsomnia,
  'Figma': FaFigma,
  'Jira': SiJira,
  'Confluence': SiConfluence,
  'Notion': SiNotion,
  'Trello': FaTrello,
  'Slack': FaSlack,
  'Discord': FaDiscord,
  'Zoom': SiZoom,
  'Google Meet': SiGooglemeet,
  'Jenkins': FaJenkins
}

// Categorías de habilidades
const skillCategories = {
  'Frontend': ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite', 'Next.js', 'Sass', 'Bootstrap', 'Angular', 'Vue.js'],
  'Backend': ['Node.js', 'Python', 'Java', 'PHP', 'Laravel', 'Symfony'],
  'Database': ['Database', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Supabase', 'Firebase'],
  'DevOps': ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Netlify', 'Heroku', 'DigitalOcean', 'Jenkins'],
  'Tools': ['VS Code', 'IntelliJ', 'WebStorm', 'Postman', 'Figma', 'Jira', 'Trello', 'Slack', 'Discord']
}

export default function Habilidades() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold">Habilidades</h2>
      
      {/* Gráfico de habilidades por categorías */}
      <div className="space-y-6">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
            <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill) => {
                const IconComponent = skillIcons[skill]
                return (
                  <div
                    key={skill}
                    className="flex flex-col items-center p-4 rounded-lg bg-neutral-50 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors group cursor-pointer"
                  >
                    {IconComponent ? (
                      <IconComponent className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    ) : (
                      <div className="w-8 h-8 bg-primary rounded mb-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{skill.charAt(0)}</span>
                      </div>
                    )}
                    <span className="text-xs text-center text-neutral-700 dark:text-neutral-300 font-medium">
                      {skill}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Lista simple de todas las habilidades */}
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold mb-4">Todas las habilidades</h3>
                     <div className="flex flex-wrap gap-2">
               {cv.skills?.map((skill: string) => {
                 const IconComponent = skillIcons[skill]
                 return (
                   <span
                     key={skill}
                     className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                   >
                     {IconComponent && <IconComponent className="w-4 h-4" />}
                     {skill}
                   </span>
                 )
               })}
             </div>
      </div>
    </section>
  )
}


