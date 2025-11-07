import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Absensi Smart Flow",
      description: "website sistem Absensi Siswa yang terintergrasi dengan rfid",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      demoUrl: "https://radar.wildanstore.my.id",
      githubUrl: "https://github.com",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    },
    {
      title: "Website My Class",
      description: "Website yang saya rancang untuk official website keals dwidhasa karena gabut dan skill nya cuman web dev ya akhirnya jadi deh",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
      demoUrl: "https://class.dwidhasa.my.id",
      githubUrl: "https://github.com/Wildanel321",
      tags: ["Tailwind", "JSX", "OpenAI", "React"],
    },
    {
      title: "Music Players",
      description: "Website ini dikembangkan dikarenakan tugas informatika sebelumnya",
      image: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?w=800&h=600&fit=crop",
      demoUrl: "https://music.wildanstore.my.id",
      githubUrl: "https://github.com",
      tags: ["Flutter", "Firebase", "Mobile", "Health"],
    },
    {
      title: "Task Management Dashboard",
      description: "Modern task management web application to do list",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      demoUrl: "https://sec.wildanstore.my.id",
      githubUrl: "https://github.com",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Puzzle Mobile Game",
      description: "Addictive puzzle game with 100+ levels. Built using Unity with optimized performance for mobile devices.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      tags: ["Unity", "Mobile", "Game"],
    },

  ];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my work in web development, game development, and mobile apps
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
