import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { Building2, Truck, Wrench, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <>
      <SEOHead
        title="TwinCode | Orçamentos Rápidos para Obras"
        description="Pedidos de orçamento claros para construção, remodelações e logística."
        path="/"
      />
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Orçamentos rápidos, obras sem stress
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Diga-nos o que precisa. Enviamos proposta clara e prazos realistas.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cta hover:bg-cta-hover text-cta-foreground text-lg px-8 py-6"
            >
              <Link to="/orcamento">Pedir Orçamento</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-secondary/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Construção & Remodelações</h3>
                <p className="text-muted-foreground">Do projeto à entrega, uma equipa completa</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gestão de Obra</h3>
                <p className="text-muted-foreground">Uma equipa, um contacto, zero complicações</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transporte & Logística</h3>
                <p className="text-muted-foreground">Materiais entregues simples e pontual</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Porquê TwinCode?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Resposta no mesmo dia útil",
                "Orçamentos claros sem surpresas",
                "Equipa profissional e certificada",
                "Cumprimento de prazos garantido",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="text-cta flex-shrink-0 mt-1" size={20} />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-cta hover:bg-cta-hover text-cta-foreground"
              >
                <Link to="/orcamento">Começar Agora</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
