import styles from './ProfilePage.module.css'
export default function ResumeFromLatex() {
  const skills = [
    { label: 'Frontend', value: 'React.js, Vue.js, Angular, HTML5, CSS3, Fabric.js' },
    { label: 'Libraries', value: 'Next.js, Node.js, Express.js, Playwright' },
    { label: '3D Interactive Web', value: 'Three.js, Babylon.js, WebGL' },
    { label: 'AI-Assisted Tools', value: 'Cursor, GitHub Copilot, Claude' },
  ];

  const experience = [
    {
      company: 'Dell Technologies',
      role: 'Software Senior Principal Engineer',
      period: 'Apr 2026 - present',
      points: [
        'Built a reusable UI component library to standardize development across studios.',
        'Abstracted platform APIs and workflows to simplify integration for developers.',
        'Helped accelerate studio feature development by providing shared SDK utilities.',
        'Ensured consistent user experience (UX) across multiple teams and studio applications.',
      ],
    },
    {
      company: 'Dataloop',
      role: 'Senior Software Developer',
      period: 'Feb 2023 - Mar 2026',
      points: [
        'Led end-to-end development of annotation tools (LiDAR, Video, Map, Text).',
        'Designed and implemented UI/UX and annotation logic using Vue.js and Three.js.',
        'Integrated tools with data pipelines to support large-scale production environments.',
        'Optimized the UI to handle large annotations efficiently.',
      ],
    },
    {
      company: 'INSPIFY',
      role: 'Full Stack Engineer',
      period: 'Jan 2021 - Oct 2022',
      points: [
        'Built high-performance 3D metaverse product displays for global brands, leveraging client-side rendering and asset loading for low-latency user experiences.',
        'Implemented features such as scripting, textures, animations, GUI styles, and particle systems.',
        'Contributed to full-stack web application development across frontend and backend.',
        'Ensured seamless application performance and optimized system responsiveness.',
        'Maintained cross-browser compatibility to provide a consistent user experience.',
      ],
    },
    {
      company: 'Hututu Games',
      role: 'Co-Founder & Lead Engineer',
      period: 'May 2013 - Dec 2020',
      points: [
        'Developed and launched 2D/3D single/multi player games for iOS, Android, and Web platforms.',
        'Managed the entire game development lifecycle from concept, prototyping, and asset integration.',
        'Focused on optimizing performance, gameplay, and ensuring seamless cross-platform compatibility.',
        'Delivered end-to-end web and mobile eCommerce solutions, including WordPress-based website development, native Android and iOS applications, custom feature development, and secure payment gateway integration.',
        'Turned ideas into fully functional, future-proof web applications with secure cloud hosting, easy content management, full code ownership, extensibility, and best-practice integrations.',
      ],
    },
    {
      company: 'Aricent Technologies',
      role: 'Software Engineer',
      period: 'Apr 2010 - Jul 2011',
      points: [
        'Developed, maintained, and optimized inbuilt mobile applications for AT&T on BREW and BREW-MP platforms.',
        'Worked on cross-platform game and application development across a wide range of mobile devices.',
        'Focused on performance optimization on constrained devices and the end-to-end mobile development lifecycle.',
      ],
    },
  ];

  const education = [
    { years: '2004 - 2007', degree: 'Master of Computer Applications (MCA)', location: 'India' },
    { years: '2001 - 2004', degree: 'Bachelor of Computer Applications (BCA)', location: 'India' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white shadow-xl overflow-hidden">
        <div className="border-b border-slate-200 px-8 py-10 sm:px-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Yogesh Bangar</h1>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-600">
              <a className="hover:text-slate-900" href="https://github.com/yogeshbangar" target="_blank" rel="noreferrer">GitHub</a>
              <span className="hidden sm:inline">|</span>
              <a className="hover:text-slate-900" href="https://www.linkedin.com/in/yogesh-bangar" target="_blank" rel="noreferrer">LinkedIn</a>
              <span className="hidden sm:inline">|</span>
              <a className="hover:text-slate-900" href="mailto:yogeshbangar@gmail.com">yogeshbangar@gmail.com</a>
              <span className="hidden sm:inline">|</span>
              <a className="hover:text-slate-900" href="tel:+919425959123">+91 94259 59123</a>
            </div>
          </div>
        </div>

        <div className="px-8 py-8 sm:px-12">
          <section className="mb-10">
            <h2 className="mb-4 border-b border-slate-300 pb-2 text-2xl font-semibold uppercase tracking-[0.2em] text-slate-800">
              Summary
            </h2>
            <p className="leading-7 text-slate-700">
              I specialize in full-stack web development, delivering scalable, performant, and user-centric applications across various platforms.
              My skill set spans both frontend and backend development, with additional experience in 3D graphics, LiDAR data visualization,
              and AI-assisted annotation tools.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              I’ve worked extensively on building interactive platforms for LiDAR, video, and image annotation, helping accelerate data labeling
              pipelines in production AI systems. I bring a strong technical foundation in React, Vue.js, Node.js, Express.js, HTML5, PHP,
              and Three.js, paired with a deep understanding of UI/UX design and workflow optimization.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b border-slate-300 pb-2 text-2xl font-semibold uppercase tracking-[0.2em] text-slate-800">
              Skills
            </h2>
            <div className="grid gap-4">
              {skills.map((skill) => (
                <div key={skill.label} className="grid gap-1 sm:grid-cols-[220px_1fr]">
                  <div className="font-semibold text-slate-900">{skill.label}:</div>
                  <div className="text-slate-700">{skill.value}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b border-slate-300 pb-2 text-2xl font-semibold uppercase tracking-[0.2em] text-slate-800">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job) => (
                <article key={`${job.company}-${job.period}`}>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {job.company} <span className="font-medium text-slate-700">as {job.role}</span>
                      </h3>
                    </div>
                    <div className="text-sm font-medium text-slate-500">{job.period}</div>
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 border-b border-slate-300 pb-2 text-2xl font-semibold uppercase tracking-[0.2em] text-slate-800">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((item) => (
                <div key={item.degree} className="grid gap-1 sm:grid-cols-[160px_1fr_100px] sm:items-center">
                  <div className="font-medium text-slate-600">{item.years}</div>
                  <div className="text-slate-900">{item.degree}</div>
                  <div className="text-slate-600 sm:text-right">{item.location}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
