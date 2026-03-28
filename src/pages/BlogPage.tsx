import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/data/content";

const BlogPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-dark text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-secondary-foreground mb-4">Blog</h1>
            <p className="text-secondary-foreground/70 max-w-xl mx-auto text-lg">Noticias, insights y tips de marketing digital</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="rounded-xl border border-border bg-card overflow-hidden hover-lift h-full">
                    <div className="h-48 bg-gradient-dark" />
                    <div className="p-6">
                      <span className="text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary">{post.category}</span>
                      <h2 className="font-display font-semibold text-lg text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>{post.readTime} de lectura</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
