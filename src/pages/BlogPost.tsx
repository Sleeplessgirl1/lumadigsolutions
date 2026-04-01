import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/content";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const renderContent = (content: string) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Code block
    if (line.trim().startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre key={elements.length} className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono text-muted-foreground">
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
      continue;
    }

    // H2 heading (## )
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={elements.length} className="text-2xl sm:text-3xl font-display font-bold text-foreground mt-14 mb-4">
          {formatInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // H3 heading (### )
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={elements.length} className="text-xl sm:text-2xl font-display font-bold text-foreground mt-10 mb-3">
          {formatInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Checklist item (- [ ])
    if (line.trim().startsWith('- [ ]') || line.trim().startsWith('- [x]')) {
      const checkItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- [ ]') || lines[i].trim().startsWith('- [x]'))) {
        checkItems.push(lines[i]);
        i++;
      }
      elements.push(
        <ul key={elements.length} className="space-y-2 my-4 ml-1">
          {checkItems.map((item, j) => {
            const checked = item.trim().startsWith('- [x]');
            const text = item.trim().slice(5).trim();
            return (
              <li key={j} className="flex items-start gap-3 text-muted-foreground">
                <span className={`mt-1 w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 ${checked ? 'bg-primary border-primary text-primary-foreground' : 'border-border'}`}>
                  {checked && <span className="text-xs">✓</span>}
                </span>
                <span>{formatInline(text)}</span>
              </li>
            );
          })}
        </ul>
      );
      continue;
    }

    // Unordered list (- or • or ├─ or └─ or │)
    if (line.trim().startsWith('- ') || line.trim().startsWith('• ') || line.trim().startsWith('├') || line.trim().startsWith('└') || line.trim().startsWith('│')) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('• ') || lines[i].trim().startsWith('├') || lines[i].trim().startsWith('└') || lines[i].trim().startsWith('│'))) {
        listItems.push(lines[i]);
        i++;
      }
      // Check if it's a tree structure
      const isTree = listItems.some(l => l.includes('├') || l.includes('└') || l.includes('│'));
      if (isTree) {
        elements.push(
          <pre key={elements.length} className="bg-muted/30 border border-border rounded-xl p-5 overflow-x-auto my-4 text-sm font-mono text-muted-foreground">
            {listItems.join('\n')}
          </pre>
        );
      } else {
        elements.push(
          <ul key={elements.length} className="space-y-2 my-4 ml-4">
            {listItems.map((item, j) => {
              const text = item.trim().replace(/^[-•]\s*/, '');
              return (
                <li key={j} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1.5 shrink-0">•</span>
                  <span>{formatInline(text)}</span>
                </li>
              );
            })}
          </ul>
        );
      }
      continue;
    }

    // Horizontal rule (---)
    if (line.trim() === '---') {
      elements.push(<hr key={elements.length} className="my-10 border-border/50" />);
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={elements.length} className="text-muted-foreground leading-relaxed font-sans font-normal my-4">
        {formatInline(line)}
      </p>
    );
    i++;
  }

  return elements;
};

const formatInline = (text: string): React.ReactNode => {
  // Process bold (**text**) and emoji
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<strong key={match.index} className="text-foreground font-semibold">{match[1]}</strong>);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
};

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
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed font-sans mb-8 border-l-4 border-primary pl-6 italic">{post.excerpt}</p>
              {renderContent(post.content)}
              <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Este artículo fue escrito por el equipo de <strong className="text-foreground">LUMA Digital Solutions</strong>. Si te interesa saber más sobre cómo implementar estas estrategias en tu negocio, no dudes en contactarnos para una consulta gratuita.
                </p>
              </div>
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
