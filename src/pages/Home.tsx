import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OrbitText from "@/components/OrbitText";

const leaves = [
  "https://i.ibb.co.com/MxcDQf2F/meteor.png",
  "https://i.ibb.co.com/MxcDQf2F/meteor.png",
  "https://i.ibb.co.com/MxcDQf2F/meteor.png",
];

const FallingLeaves: React.FC = () => {
  useEffect(() => {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.overflow = "hidden";
    container.style.zIndex = "50";
    document.body.appendChild(container);

    const createLeaf = () => {
      const leaf = document.createElement("img");
      leaf.src = leaves[Math.floor(Math.random() * leaves.length)];
      leaf.style.position = "absolute";
      leaf.style.top = "-10%";
      leaf.style.left = Math.random() * 100 + "%";
      leaf.style.width = Math.random() * 50 + 40 + "px";
      leaf.style.opacity = (Math.random() * 0.5 + 0.5).toString();

      const duration = Math.random() * 5 + 5;
      const horizontalMove = Math.random() * 100 - 50;

      leaf.style.transition = `transform ${duration}s linear, top ${duration}s linear`;

      container.appendChild(leaf);

      requestAnimationFrame(() => {
        leaf.style.top = "110%";
        leaf.style.transform = `translateX(${horizontalMove}px) rotate(${Math.random() * 360}deg)`;
      });

      setTimeout(() => leaf.remove(), duration * 1000);
    };

    const interval = setInterval(createLeaf, 600);

    return () => {
      clearInterval(interval);
      container.remove();
    };
  }, []);

  return null;
};

// Komponen Marquee untuk Selamat Datang
const WelcomeMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-4">
      {/* Marquee Indonesia */}
      <div className="marquee-container mb-3">
        <div className="marquee marquee-slow text-lg font-bold text-primary">
          🎉 Selamat Datang di Blog Saya! ✨ Selamat Datang di Blog Saya! ✨ Selamat Datang di Blog Saya! ✨
        </div>
      </div>
      
      {/* Marquee Arabic */}
      <div className="marquee-container mb-3">
        <div className="marquee marquee-slow text-lg font-bold text-primary">
          🎊 أهلا بك في مدونتي! 🌟 أهلا بك في مدونتي! 🌟 أهلا بك في مدونتي! 🌟
        </div>
      </div>
      
      {/* Marquee Japanese */}
      <div className="marquee-container mb-3">
        <div className="marquee marquee-fast text-lg font-bold text-primary">
          🎯 私のブログへようこそ！ 💫 私のブログへようこそ！ 💫 私のブログへようこそ！ 💫
        </div>
      </div>
      
      {/* Marquee Russian */}
      <div className="marquee-container">
        <div className="marquee text-lg font-bold text-primary">
          🎈 Добро пожаловать в мой блог! ⭐ Добро пожаловать в мой блог! ⭐ Добро пожаловать в мой блог! ⭐
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const featuredPosts = [
    {
      title: "Getting Started with React and TypeScript",
      description: "Learn the fundamentals of building modern web applications with React and TypeScript.",
      category: "Web",
      slug: "react-typescript-basics",
      link: "https://example.com/react-typescript",
    },
    {
      title: "Unity Game Development Essentials",
      description: "Master the core concepts of game development using Unity engine and C#.",
      category: "Game",
      slug: "unity-essentials",
      link: "https://example.com/unity-essentials",
    },
    {
      title: "Building Mobile Apps with Flutter",
      description: "Create beautiful cross-platform mobile applications using Flutter framework.",
      category: "App",
      slug: "flutter-mobile-apps",
      link: "https://example.com/flutter-mobile-apps",
    },
  ];

  const featuredProjects = [
    {
      title: "Website Kelas",
      description: "website kelas dibuat dengan sepenuh hati dan  profesional karena gabut",
      image: "https://i.ibb.co.com/j9chRn6S/web.png",
      demoUrl: "https://class.dwidhasa.my.id",
      githubUrl: "https://github.com",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Welcome Message Section dengan Marquee */}
      <section className="py-8 bg-gradient-forest text-primary-foreground">
        <div className="container mx-auto px-4">
          {/* Marquee Selamat Datang */}
          <WelcomeMarquee />
          
          <div className="overflow-hidden mt-6">
            <OrbitText
              text="Welcome To My Blog"
              size={26}
              diameter={12}
              letterSpacing={5}
              rotation={0.4}
              speed={0.3}
              color="#00FFCC"
            />
          </div>
        </div>
      </section>

      <FallingLeaves />

      {/* Comment Box Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-2xl font-bold text-center mb-8">Berikan Ulasan atau Pertanyaan</h3>
            <form className="space-y-4">
              <textarea
                placeholder="Tulis ulasan atau pertanyaan Anda di sini..."
                className="w-full p-4 border border-input rounded-lg resize-none focus:ring-2 focus:ring-ring focus:outline-none"
                rows={5}
              />
              <Button type="submit" className="w-full">
                Kirim
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Latest Articles
              </h2>
              <p className="mt-2 text-muted-foreground">
                Tutorials, guides, and insights on development
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link to="/blog">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <div key={post.slug} className="animate-fade-in">
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-2 text-muted-foreground">
                Showcasing my best work across different platforms
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link to="/projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
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
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-forest p-8 text-center text-primary-foreground md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Let's Work Together
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Interested in collaborating? Feel free to reach out!
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link to="/about">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tambahkan CSS untuk marquee */}
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px 0;
          margin-bottom: 8px;
        }

        .marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 15s linear infinite;
        }

        .marquee-slow {
          animation: marquee 20s linear infinite;
        }

        .marquee-fast {
          animation: marquee 10s linear infinite;
        }

        .marquee-indonesia {
          animation: marquee-indonesia 18s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-100%, 0);
          }
        }

        @keyframes marquee-indonesia {
          0% {
            transform: translate(100%, 0);
          }
          100% {
            transform: translate(-100%, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;