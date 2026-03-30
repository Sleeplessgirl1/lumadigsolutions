import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/content";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Artículo no encontrado</h1>
          <Link to="/blog" className="text-primary hover:underline">Volver al blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <AnimatedSection>
            <Link to="/blog" className="inline-flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Volver al blog
            </Link>
            <span className="inline-block text-xs font-medium px-2 py-1 rounded-md bg-primary/20 text-primary mb-4">{post.category}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-secondary-foreground/60">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} de lectura</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
              {post.content.split('\n\n').map((paragraph, i) => (
                <div key={i} className="mt-6">
                  {paragraph.split('\n').map((line, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed font-sans font-normal">{line}</p>
                  ))}
                </div>
              ))}
              <p className="text-muted-foreground leading-relaxed mt-6">
                Este artículo fue escrito por el equipo de LUMA Digital Solutions. Si te interesa saber más sobre cómo implementar estas estrategias en tu negocio, no dudes en contactarnos para una consulta gratuita.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-16 p-8 rounded-2xl bg-gradient-dark text-center">
            <h3 className="font-display font-bold text-xl text-secondary-foreground mb-2">¿Te gustó este artículo?</h3>
            <p className="text-secondary-foreground/70 mb-4">Suscríbete a nuestro newsletter para recibir más contenido.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input type="email" placeholder="tu@email.com" className="flex-1 px-4 py-2 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40 text-sm" />
              <button className="px-6 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">Suscribir</button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
