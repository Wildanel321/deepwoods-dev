import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Youtube, Mail } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS",
    "Unity", "C#", "Game Design", "2D/3D Graphics",
    "Flutter", "Dart", "Firebase", "Mobile Development",
    "PostgreSQL", "MongoDB", "REST APIs", "Git"
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/wildanel321", color: "hover:text-[#333]" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/Wildanelgato2", color: "hover:text-[#FF0000]" },
    { name: "Email", icon: Mail, url: "mailto:hello@devforest.com", color: "hover:text-primary" },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-primary shadow-strong">
                <img src="https://i.ibb.co.com/Qv5JZNBy/IMG-20250912-WA0002-1.jpg" alt="IMG-20250912-WA0002-1"className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-gradient-forest shadow-elevated" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Full Stack Developer | Game Creator | Content Creator
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          {/* Introduction Card */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle>My Journey</CardTitle>
              <CardDescription>From code to creation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Halo! Saya adalah seorang pengembang yang bersemangat dalam menciptakan pengalaman digital yang bermakna. Perjalanan saya di dunia teknologi berawal dari rasa ingin tahu tentang bagaimana sesuatu bekerja, dan kini telah berkembang menjadi karier yang mencakup pengembangan web, pembuatan game, serta pengembangan aplikasi mobile.
              </p>
              <p>
                Saya memiliki keahlian dalam membangun aplikasi web modern menggunakan React dan TypeScript, menciptakan game interaktif dengan Unity, serta mengembangkan aplikasi lintas platform menggunakan Flutter. Setiap proyek bagi saya adalah kesempatan untuk belajar hal baru dan menantang batas kemampuan diri.
              </p>
              <p>
                Di luar dunia pemrograman, saya senang menjelajahi teknologi terbaru, berkontribusi pada proyek open-source, serta berbagi ilmu melalui tutorial dan tulisan di blog. Saya percaya bahwa pembelajaran tak pernah berhenti — dan berbagi pengetahuan adalah cara terbaik untuk tumbuh bersama komunitas pengembang.
              </p>
              <p>Namaku Wildan Nur Awaludin From Toyamas Pendidikan Sekarang Sma di SMAN 1 CLURING Sekian Dan Terima kasih</p>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle>Skills & Technologies</CardTitle>
              <CardDescription>Tools I work with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Connect Card */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
              <CardDescription>Find me on social media</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    asChild
                    variant="outline"
                    size="lg"
                    className={link.color}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="mr-2 h-5 w-5" />
                      {link.name}
                    </a>
                  </Button>
                ))}
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:text-[#000000]"
                >
                  <a
                    href="https://www.tiktok.com/@wildanelgato2"
                    target="_blank"
                  >
                    <FaTiktok className="mr-2 h-5 w-5" />
                    TikTok
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
