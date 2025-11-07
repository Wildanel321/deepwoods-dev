import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include product management, cart, checkout, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    },
    {
      title: "Adventure RPG Game",
      description: "2D adventure game built with Unity and C#. Features include character progression, inventory system, and quest management.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      tags: ["Unity", "C#", "2D", "Game Design"],
    },
    {
      title: "Fitness Tracking App",
      description: "Cross-platform mobile app for fitness tracking and workout planning. Built with Flutter and Firebase backend.",
      image: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?w=800&h=600&fit=crop",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      tags: ["Flutter", "Firebase", "Mobile", "Health"],
    },
    {
      title: "Task Management Dashboard",
      description: "Modern task management web application with real-time collaboration features and team management.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      demoUrl: "https://demo.example.com",
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
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with detailed forecasts, multiple locations, and weather alerts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      tags: ["Flutter", "API", "UI/UX"],
    },
    {
      title: "Blog CMS Platform",
      description: "Content management system for bloggers with markdown support, SEO optimization, and analytics.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      tags: ["Next.js", "MongoDB", "CMS"],
    },
    {
      title: "Racing Game Prototype",
      description: "High-speed racing game prototype with realistic physics and multiple tracks. Built with Unity 3D.",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&h=600&fit=crop",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      tags: ["Unity", "3D", "Physics"],
    },
    {
      title: "Social Media App",
      description: "Instagram-like social media application with photo sharing, likes, comments, and user profiles.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      tags: ["Flutter", "Firebase", "Social"],
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
