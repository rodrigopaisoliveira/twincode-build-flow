import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const categories = ["Todos", "Website Institucional", "Plataforma Web", "E-commerce", "Landing Page"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Portfólio | Twin Code - Projetos de Websites"
        description="Conheça os projetos de websites desenvolvidos pela Twin Code. Portfólio completo com cases de sucesso."
        path="/portfolio"
      />
      <Navbar />
      
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nosso <span className="gradient-text">Portfólio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Projetos que combinam design excepcional com tecnologia de ponta.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/portfolio/${project.id}`}
                  className="group fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 hover-scale border-2 h-full">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-semibold text-primary mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm">
                        Ver Projeto
                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-20">
              <h2 className="text-2xl font-bold mb-4">Gostou do que vê?</h2>
              <p className="text-muted-foreground mb-6">
                Vamos criar algo incrível juntos
              </p>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/contato">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;
