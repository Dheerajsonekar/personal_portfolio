'use client';
import Image from 'next/image';
import axios from 'axios';
import ProjectCard from '@/components/ProjectCard';
import SocialIcons from '@/components/SocialIcons';

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
  techStack: string[];
  _id?: string;
};

export default function HomePage() {
  const projects: Project[] = [
    {
      title: "School Management system(freelancing project)",
      description: "A full-stack app with student, teacher and principal dashboards, payment, and live updates.",
      githubUrl: "https://github.com/Dheerajsonekar/Head_Sir_School",
      demoUrl: "https://head-sir-schoolfrontend.vercel.app/",
      techStack: ["Next.js", "MongoDB", "PostgreSQL", "Express", "Tailwind", "TypeScript", "nodejs"]
    },
    {
      title: "Fresh Store",
      description: "A full-stack app with vendor & customer dashboards, payment, and live updates.",
      githubUrl: "https://github.com/Dheerajsonekar/milk-delivery-platform",
      demoUrl: "https://milk-delivery-platform-sjlc.vercel.app/",
      techStack: ["Next.js", "MongoDB", "PostgreSQL", "Express", "Tailwind", "TypeScript", "nodejs"]
    },
    {
      title: "Charity donation Website",
      description: "Charity donation platform with user authentication and admin panel",
      githubUrl: "https://github.com/Dheerajsonekar/charity_donation_platform",
      demoUrl: "https://charity-platform-tchn.onrender.com",
      techStack: ["nodejs", "Express", "Mysql", "javascript", "html/css"]
    },
    {
      title: "Food delivery platform",
      description: "Food delivery platform for resturant with client panel .",
      githubUrl: "https://github.com/Dheerajsonekar/food-delivery-website",
      demoUrl: "",
      techStack: ["React.js", "Express", " NoSql", "javaScript", "Bootstrap", "nodejs"]
    },
    {
      title: "Expense Tracker",
      description: "Track daily expenses with authentication and analytics dashboard.",
      githubUrl: "https://github.com/Dheerajsonekar/full-stack-expense-app",
      demoUrl: "",
      techStack: ["Node.js", "Sql", "javascript", "JWT", "CSS"]
    },
    
    {
      title: "Ecommerce Website",
      description: "Ecommerce webstie using EJS and Node js",
      githubUrl: "https://github.com/Dheerajsonekar/ecommerce-website",
      demoUrl: "",
      techStack: ["Nodejs", "sql", "ejs", "javascript", "css"]
    }
  ];

  return (
    <div className="scroll-smooth pt-14">
      
      {/* Hero Section */}
      <section id="hero" className="relative w-full text-center py-32 sm:py-40 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-black overflow-hidden">
        {/* Professional Geometric Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-32 h-32 border border-blue-200/30 dark:border-blue-800/30 rounded-lg top-10 left-10 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-24 h-24 border border-purple-200/30 dark:border-purple-800/30 rounded-full top-1/4 right-20 animate-pulse" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
          <div className="absolute w-40 h-40 border border-gray-200/30 dark:border-gray-800/30 rounded-lg bottom-20 left-1/4 animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
          <div className="absolute w-20 h-20 border border-blue-200/30 dark:border-blue-800/30 rounded-full bottom-1/3 right-1/3 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1.5s'}}></div>
        </div>

        {/* Bouncing balls background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full left-[10%] animate-ball-bounce-1"></div>
          <div className="absolute w-30 h-30 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full left-[20%] animate-ball-bounce-2"></div>
          <div className="absolute w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full left-[30%] animate-ball-bounce-3"></div>
          <div className="absolute w-[80px] h-[80px] bg-gradient-to-br from-amber-400 to-amber-600 rounded-full left-[50%] animate-ball-bounce-4"></div>
          <div className="absolute w-[66px] h-[66px] bg-gradient-to-br from-red-400 to-red-600 rounded-full left-[70%] animate-ball-bounce-5"></div>
          <div className="absolute w-32 h-32 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full left-[80%] animate-ball-bounce-6"></div>
          <div className="absolute w-[30px] h-[30px] bg-gradient-to-br from-pink-400 to-pink-600 rounded-full left-[90%] animate-ball-bounce-7"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full mx-auto space-y-6 animate-slide-in px-4">
          <Image
            src="/profile.jpeg"
            alt="Dheeraj Sonekar"
            width={280}
            height={280}
            className="mx-auto rounded-full shadow-lg border-4 border-white dark:border-gray-800 hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-2xl sm:text-4xl text-gray-900 dark:text-white animate-name-slide ">
            Dheeraj Sonekar
          </h1>
          <p className="text-3xl sm:text-5xl font-semibold gradient-text mt-2">
            Full Stack Developer
          </p>
          <SocialIcons />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 px-6">
        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                 backgroundSize: '40px 40px',
                 animation: 'gridSlide 25s linear infinite'
               }}>
          </div>
          <div className="absolute w-2 h-2 bg-blue-500/60 rounded-full top-1/4 left-1/4 animate-pulse" style={{animationDuration: '2s'}}></div>
          <div className="absolute w-2 h-2 bg-blue-500/60 rounded-full top-3/4 right-1/4 animate-pulse" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
          <div className="absolute w-2 h-2 bg-blue-500/60 rounded-full top-1/2 left-1/2 animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
        </div>

        {/* Background animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-purple-300 to-pink-300 opacity-20 blur-3xl top-10 left-[-100px] animate-pulse-slow" />
          <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 opacity-20 blur-3xl bottom-[-80px] right-[-120px] animate-float" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white reveal">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition reveal">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Software engineer
              </h3>
              <p className="text-sm text-gray-500">Freelancer – June 2024 - present</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                
                Built full-stack applications using React, SQL, and Express. Worked on integration and backend APIs.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                
               Developed and delivered a full-stack School Management System with dashboards, auth, payments integration.
 
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                
              Developing a website for a Soya Paneer startup, covering backend, frontend with branding.
 
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition reveal">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Full Stack Developer – Intern
              </h3>
              <p className="text-sm text-gray-500">HashedBit Innovations – Jan 2024 - June 2024</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Built full-stack applications using React, SQL, and Express. Worked on integration and backend APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-hidden bg-white dark:bg-gray-950 py-20 px-6">
        {/* Professional Rotating Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-16 h-16 top-20 left-20 animate-spin opacity-20" style={{animationDuration: '20s'}}>
            <div className="w-full h-full border-2 border-blue-500/40 rounded-full"></div>
            <div className="absolute top-2 left-2 w-12 h-12 border-2 border-blue-500/40 rounded-full"></div>
          </div>
          <div className="absolute w-20 h-20 top-1/2 right-32 animate-spin opacity-20" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
            <div className="w-full h-full border-2 border-gray-500/40 rounded-full"></div>
            <div className="absolute top-2 left-2 w-16 h-16 border-2 border-gray-500/40 rounded-full"></div>
          </div>
          <div className="absolute w-12 h-12 bottom-32 left-1/3 animate-spin opacity-20" style={{animationDuration: '15s'}}>
            <div className="w-full h-full border-2 border-purple-500/40 rounded-full"></div>
            <div className="absolute top-1 left-1 w-10 h-10 border-2 border-purple-500/40 rounded-full"></div>
          </div>
        </div>

        {/* Background animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-purple-300 to-pink-300 opacity-20 blur-3xl top-10 left-[-100px] animate-pulse-slow" />
          <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 opacity-20 blur-3xl bottom-[-80px] right-[-120px] animate-float" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">My Services</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm sm:text-base">
            <a href="https://www.fiverr.com/s/BRev8jd" target="_blank" className="text-blue-600 hover:underline">Fiverr</a>
            <a href="https://www.freelancer.com" target="_blank" className="text-blue-600 hover:underline">Freelancer</a>
            <a href="https://www.upwork.com" target="_blank" className="text-blue-600 hover:underline">Upwork</a>
            <a href="https://www.peopleperhour.com" target="_blank" className="text-blue-600 hover:underline">PeoplePerHour</a>
            <a href="https://www.truelancer.com" target="_blank" className="text-blue-600 hover:underline">Truelancer</a>
            <a href="mailto:dheerajsonekar166@gmail.com" className="text-blue-600 hover:underline">Email for Custom Project</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Web Development</h3>
              <p className="text-sm text-gray-500">React / Next.js / APIs</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Mobile-Ready Dashboards</h3>
              <p className="text-sm text-gray-500">Admin panels & client portals</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">E-commerce Solutions</h3>
              <p className="text-sm text-gray-500">Cart / Payment / Delivery system</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Digital Platform Setup</h3>
              <p className="text-sm text-gray-500">Convert offline to online</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">AI Integrations</h3>
              <p className="text-sm text-gray-500">Chatbot / GPT tools / Automation</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Game UI / Interactive Apps</h3>
              <p className="text-sm text-gray-500">Mini-games / Engaging UIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative bg-gray-50 dark:bg-gray-900 py-20 px-6">
        {/* Professional Data Flow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent top-1/4 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500/30 to-transparent top-1/2 animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent top-3/4 animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
          
          <div className="absolute w-2 h-2 bg-blue-500/60 rounded-full top-1/4 left-0 animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-2 h-2 bg-gray-500/60 rounded-full top-1/2 left-0 animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          <div className="absolute w-2 h-2 bg-purple-500/60 rounded-full top-3/4 left-0 animate-ping" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
          
          {/* Clean code indicators */}
          <div className="absolute top-20 left-10 w-8 h-8 border border-blue-500/20 rounded animate-pulse" style={{animationDuration: '2s'}}></div>
          <div className="absolute top-20 right-10 w-6 h-6 border border-gray-500/20 rounded animate-pulse" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-20 w-10 h-10 border border-purple-500/20 rounded animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: Project) => (
              <ProjectCard key={project._id || project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative bg-gray-100 dark:bg-gray-950 py-20 px-6">
        {/* Professional Tech Elements */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <div className="absolute w-4 h-4 border border-blue-500/40 rounded top-20 left-20 animate-pulse" style={{animationDuration: '2s'}}></div>
          <div className="absolute w-6 h-6 border border-gray-500/40 rounded top-1/3 right-32 animate-pulse" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
          <div className="absolute w-8 h-8 border border-purple-500/40 rounded bottom-32 left-1/4 animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          <div className="absolute w-5 h-5 border border-green-500/40 rounded top-2/3 right-1/4 animate-pulse" style={{animationDuration: '2.2s', animationDelay: '1.5s'}}></div>
          <div className="absolute w-7 h-7 border border-yellow-500/40 rounded bottom-1/4 right-20 animate-pulse" style={{animationDuration: '2.8s', animationDelay: '2s'}}></div>
          
          {/* Connection lines */}
          <div className="absolute w-16 h-0.5 bg-blue-500/20 top-24 left-28 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-20 h-0.5 bg-gray-500/20 top-1/2 right-20 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1s'}}></div>
          <div className="absolute w-12 h-0.5 bg-purple-500/20 bottom-40 left-40 animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Git', 'REST APIs', 'AWS'].map(skill => (
              <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition text-gray-800 dark:text-white font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative bg-white dark:bg-gray-900 py-20 px-6">
        {/* Professional Academic Elements */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
          <div className="absolute w-20 h-24 border border-blue-500/30 rounded top-20 left-32 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute w-16 h-20 border border-gray-500/30 rounded top-1/2 right-40 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1s'}}></div>
          <div className="absolute w-24 h-28 border border-purple-500/30 rounded bottom-32 left-1/4 animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
          
          {/* Progress indicators */}
          <div className="absolute w-32 h-1 bg-gradient-to-r from-blue-500/30 to-transparent top-1/3 left-1/4 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-24 h-1 bg-gradient-to-r from-gray-500/30 to-transparent top-1/2 right-1/4 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1s'}}></div>
          
          {/* Clean geometric shapes */}
          <div className="absolute w-8 h-8 border border-blue-500/20 rounded-full top-40 right-20 animate-pulse" style={{animationDuration: '2.5s'}}></div>
          <div className="absolute w-6 h-6 border border-gray-500/20 rounded-full bottom-40 left-20 animate-pulse" style={{animationDuration: '3s', animationDelay: '0.7s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Education
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  B.Tech in IT
                </h3>
                <p className="text-sm text-blue-500 dark:text-blue-300 mt-1">
                  Cluster Innovation Centre – University of Delhi
                </p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 sm:mt-0 sm:text-right">
                <p>2020 – 2024</p>
                <p>CGPA: <span className="font-medium text-gray-800 dark:text-white">8.34</span></p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Core subjects included Data Structures & Algorithms, Web Development, DBMS, Operating Systems, Software Engineering, and Cloud Technologies. Project-based learning was emphasized with real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative bg-gray-50 dark:bg-gray-950 py-20 px-6">
        {/* Professional Achievement Elements */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
          <div className="absolute w-16 h-16 border-2 border-blue-500/30 rounded-full top-32 left-20 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute w-20 h-20 border-2 border-gray-500/30 rounded-full top-1/2 right-32 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '0.8s'}}></div>
          <div className="absolute w-12 h-12 border-2 border-purple-500/30 rounded-full bottom-40 left-1/3 animate-pulse" style={{animationDuration: '5s', animationDelay: '1.5s'}}></div>
          
          <div className="absolute w-16 h-16 border border-blue-500/20 rounded top-1/4 right-1/4 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute w-20 h-20 border border-gray-500/20 rounded bottom-1/3 left-1/3 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          
          {/* Certificate representations */}
          <div className="absolute w-24 h-18 border border-blue-500/20 rounded top-20 right-20 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-20 h-16 border border-gray-500/20 rounded bottom-20 left-20 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Certifications
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Full stack developement Bootcamp – Udemy
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Covered React, Node.js, Express, MongoDB, SQL, Auth, Payment Integration, REST APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative bg-gray-50 dark:bg-gray-900 py-20 px-6">
        {/* Professional Quote Elements */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
          <div className="absolute w-20 h-16 border border-blue-500/30 rounded-lg top-32 left-32 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-24 h-18 border border-gray-500/30 rounded-lg top-1/2 right-40 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1s'}}></div>
          <div className="absolute w-18 h-14 border border-purple-500/30 rounded-lg bottom-40 left-1/4 animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
          
          {/* Clean quote indicators */}
          <div className="absolute w-8 h-8 border-l-4 border-t-4 border-blue-500/30 top-1/4 left-10 animate-pulse" style={{animationDuration: '2.5s'}}></div>
          <div className="absolute w-8 h-8 border-r-4 border-b-4 border-gray-500/30 bottom-1/4 right-10 animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Testimonials
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700 dark:text-gray-300 italic">
                &quot;Dheeraj delivered our web app with high-quality code and impressive attention to detail. His backend logic and API integration were solid!&quot;
              </p>
              <p className="text-sm text-blue-500 mt-2 text-right">– Client, Freelance Project</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700 dark:text-gray-300 italic">
                &quot;Always reliable and quick to communicate. His ability to handle full-stack requirements made our startup MVP possible.&quot;
              </p>
              <p className="text-sm text-blue-500 mt-2 text-right">– Intern Manager, HashedBit Innovations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download */}
      <section id="resume" className="relative bg-white dark:bg-gray-950 py-20 text-center px-4">
        {/* Professional Document Elements */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
          <div className="absolute w-24 h-32 border border-gray-400/30 rounded-lg top-20 left-20 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-20 h-28 border border-blue-500/30 rounded-lg top-1/2 right-32 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1s'}}></div>
          <div className="absolute w-28 h-36 border border-gray-500/30 rounded-lg bottom-20 left-1/3 animate-pulse" style={{animationDuration: '4s', animationDelay: '1.5s'}}></div>
          
          {/* Document lines */}
          <div className="absolute w-32 h-0.5 bg-gray-400/30 top-1/3 left-1/4 animate-pulse" style={{animationDuration: '2s'}}></div>
          <div className="absolute w-24 h-0.5 bg-gray-400/30 top-1/3 left-1/4 mt-4 animate-pulse" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
          <div className="absolute w-28 h-0.5 bg-gray-400/30 top-1/3 left-1/4 mt-8 animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          
          {/* Clean geometric indicators */}
          <div className="absolute w-6 h-6 border border-blue-500/30 rounded top-20 right-1/2 animate-pulse" style={{animationDuration: '2.5s'}}></div>
          <div className="absolute w-8 h-8 border border-gray-500/30 rounded bottom-32 right-20 animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Resume</h2>
          <a
            href="/resume_dheeraj_sonekar.pdf"
            download
            className="btn-primary inline-block"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-gray-100 dark:bg-gray-900 py-20 px-4">
        {/* Professional Network Elements */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <div className="absolute w-2 h-2 bg-blue-500/60 rounded-full top-20 left-20 animate-pulse" style={{animationDuration: '2s'}}></div>
          <div className="absolute w-32 h-0.5 bg-blue-500/40 top-20 left-24 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-2 h-2 bg-gray-500/60 rounded-full top-1/2 right-32 animate-pulse" style={{animationDuration: '2.5s', animationDelay: '1s'}}></div>
          <div className="absolute w-40 h-0.5 bg-gray-500/40 top-1/2 right-36 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1s'}}></div>
          <div className="absolute w-2 h-2 bg-purple-500/60 rounded-full bottom-32 left-1/4 animate-pulse" style={{animationDuration: '3s', animationDelay: '2s'}}></div>
          <div className="absolute w-36 h-0.5 bg-purple-500/40 bottom-32 left-28 animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
          
          {/* Network nodes */}
          <div className="absolute w-6 h-6 border border-blue-500/30 rounded-full top-1/4 left-1/4 animate-pulse" style={{animationDuration: '2.5s'}}></div>
          <div className="absolute w-8 h-8 border border-gray-500/30 rounded-full bottom-1/3 right-1/3 animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          <div className="absolute w-4 h-4 border border-purple-500/30 rounded-full top-1/2 left-1/2 animate-pulse" style={{animationDuration: '2.2s', animationDelay: '1.5s'}}></div>
          
          {/* Clean connection indicators */}
          <div className="absolute w-10 h-10 border border-blue-500/20 rounded-full top-1/3 right-1/4 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute w-12 h-12 border border-gray-500/20 rounded-full bottom-1/4 left-1/3 animate-pulse" style={{animationDuration: '4.5s', animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-lg mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Contact Me</h2>
          {/* Contact Info */}
          <div className="text-center text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <p><strong>Email:</strong> <a href="mailto:dheerajsonekar166@gmail.com" className="text-blue-600 dark:text-blue-400">dheerajsonekar166@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+918858588160" className="text-blue-600 dark:text-blue-400">+91 7905944824</a></p>
          </div>
           <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget as HTMLFormElement);
              try {
                await axios.post('https://portfolio-backend1-q6cx.onrender.com/api/contact', {
                  name: form.get('name'),
                  email: form.get('email'),
                  message: form.get('message'),
                });
                e.currentTarget.reset();
                alert('Message sent!');
              } catch (error) {
                console.error('Failed to send message:', error);
                alert('Failed to send message.');
              }
            }}
            className="space-y-4"
          >
            <input name="name" placeholder="Your Name" className="input w-full" required />
            <input name="email" type="email" placeholder="Your Email" className="input w-full" required />
            <textarea name="message" placeholder="Your Message" className="input w-full h-32" required />
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gridSlide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
      `}</style>
    </div>
  );
}