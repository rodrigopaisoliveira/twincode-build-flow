import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { getProjectById } from "@/data/projects";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <>
      <SEOHead
        title={`${project.title} | Portfólio Twin Code`}
        description={project.description}
        path={`/portfolio/${project.id}`}
      />
      <Navbar />
      
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Voltar ao Portfólio
            </Link>

            <div className="fade-in">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-glow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Funcionalidades</h2>
                    <div className="space-y-3">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                          <p className="text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 border-2">
                    <h3 className="font-semibold mb-4">Tecnologias</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 rounded-lg bg-secondary text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>

                  {project.link && (
                    <Card className="p-6 border-2 bg-gradient-dark text-white">
                      <h3 className="font-semibold mb-2">Ver Projeto Online</h3>
                      <p className="text-sm text-gray-300 mb-4">
                        Visite o website ao vivo
                      </p>
                      <Button
                        asChild
                        className="w-full bg-white text-foreground hover:bg-gray-100"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Visitar Website
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    </Card>
                  )}

                  <Card className="p-6 border-2 bg-gradient-primary text-white">
                    <h3 className="font-semibold mb-2">Interessado?</h3>
                    <p className="text-sm mb-4 text-white/90">
                      Vamos criar algo incrível para você também
                    </p>
                    <Button
                      asChild
                      className="w-full bg-white text-foreground hover:bg-gray-100"
                    >
                      <Link to="/contato">Solicitar Orçamento</Link>
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetail;
