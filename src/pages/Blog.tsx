import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      title: "Getting Started with React and TypeScript",
      description: "Learn the fundamentals of building modern web applications with React and TypeScript. Covers setup, basic concepts, and best practices.",
      category: "Web",
      slug: "react-typescript-basics",
    },
    {
      title: "Unity Game Development Essentials",
      description: "Master the core concepts of game development using Unity engine and C#. From basics to advanced techniques.",
      category: "Game",
      slug: "unity-essentials",
    },
    {
      title: "Building Mobile Apps with Flutter",
      description: "Create beautiful cross-platform mobile applications using Flutter framework. Complete guide from setup to deployment.",
      category: "App",
      slug: "flutter-mobile-apps",
    },
    {
      title: "Advanced React Patterns",
      description: "Deep dive into advanced React patterns and techniques for building scalable applications.",
      category: "Web",
      slug: "advanced-react-patterns",
    },
    {
      title: "Game Physics with Unity",
      description: "Understanding and implementing physics systems in Unity for realistic game mechanics.",
      category: "Game",
      slug: "unity-physics",
    },
    {
      title: "State Management in Flutter",
      description: "Comprehensive guide to state management solutions in Flutter applications.",
      category: "App",
      slug: "flutter-state-management",
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Blog & Learning
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tutorials, guides, and insights on web, game, and app development
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={post.slug}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
