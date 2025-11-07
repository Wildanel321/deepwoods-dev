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
    { name: "GitHub", icon: Github, url: "https://github.com", color: "hover:text-[#333]" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com", color: "hover:text-[#FF0000]" },
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
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-gradient-forest shadow-elevated" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Full Stack Developer | Game Creator | App Builder
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
                Hello! I'm a passionate developer who loves creating digital experiences
                that make a difference. My journey in technology started with a curiosity
                about how things work, and it has grown into a career spanning web development,
                game creation, and mobile app development.
              </p>
              <p>
                I specialize in building modern web applications using React and TypeScript,
                creating engaging games with Unity, and developing cross-platform mobile apps
                with Flutter. Each project is an opportunity to learn something new and push
                the boundaries of what's possible.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or sharing my knowledge through tutorials and blog posts.
                I believe in continuous learning and giving back to the developer community.
              </p>
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
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
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
