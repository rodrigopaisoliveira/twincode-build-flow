import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Profissionais, cumpriram prazos e orçamento. A comunicação foi sempre clara e transparente.",
    author: "Cliente verificado",
    project: "Remodelação completa",
    rating: 5,
  },
  {
    text: "Excelente coordenação de obra. Uma única pessoa geriu tudo, poupou-me muito tempo e preocupações.",
    author: "Cliente verificado",
    project: "Gestão de obra",
    rating: 5,
  },
  {
    text: "O transporte de materiais foi sempre pontual. Facilitou muito o andamento da obra.",
    author: "Cliente verificado",
    project: "Logística",
    rating: 5,
  },
  {
    text: "Recomendo. Trabalho de qualidade, preço justo e equipa simpática. Voltarei a trabalhar com eles.",
    author: "Cliente verificado",
    project: "Construção nova",
    rating: 5,
  },
];

const Testemunhos = () => {
  return (
    <>
      <SEOHead
        title="O que dizem os clientes | TwinCode"
        description="Avaliações reais e resultados consistentes."
        path="/testemunhos"
      />
      <Navbar />
      
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                O Que Dizem os Clientes
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Avaliações reais de quem já trabalhou connosco. Resultados que falam por si.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="text-cta flex-shrink-0" size={28} />
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="text-cta fill-cta" size={16} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.project}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center bg-secondary/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Seja o nosso próximo cliente satisfeito</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Junte-se aos clientes que confiam em nós para os seus projetos de construção e logística.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-cta hover:bg-cta-hover text-cta-foreground"
              >
                <Link to="/orcamento">Pedir Orçamento</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Testemunhos;
