import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/data/content";

const BlogPage = () => {
  return (
    <div className="pt-[70px]">
      <section className="py-28 bg-primary/5 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-foreground uppercase tracking-tight mb-6">Blog</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">Noticias, insights y tips de marketing digital</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:shadow-card-hover h-full">
                    <div className="h-48 bg-gradient-dark" />
                    <div className="p-8">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">{post.category}</span>
                      <h2 className="font-display font-bold text-lg text-foreground mt-4 mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-6 text-xs text-muted-foreground">
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
