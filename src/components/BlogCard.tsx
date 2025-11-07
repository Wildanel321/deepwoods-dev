import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  slug: string;
  link: string;
}

const BlogCard = ({ title, description, category, slug, link }: BlogCardProps) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
      <CardHeader>
        <div className="mb-2">
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="ghost" className="group/btn">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Baca Selengkapnya
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
