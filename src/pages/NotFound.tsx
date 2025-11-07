import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <Search className="mx-auto h-24 w-24 text-muted-foreground/50 mb-4" />
          <h1 className="text-8xl font-bold text-gradient mb-2">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="outline">
            <a href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </a>
          </Button>
          <Button asChild size="lg">
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
