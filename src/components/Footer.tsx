import { Github, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded bg-gradient-forest" />
            <span className="text-sm font-semibold text-gradient">DevForest</span>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="TikTok"
            >
              <FaTiktok className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 DevForest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
