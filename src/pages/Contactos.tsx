import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";

const Contactos = () => {
  return (
    <>
      <SEOHead
        title="Contactos | TwinCode"
        description="Fale com a nossa equipa por e-mail, telefone ou WhatsApp."
        path="/contactos"
      />
      <Navbar />
      
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Fale Connosco
              </h1>
              <p className="text-xl text-muted-foreground">
                Estamos disponíveis para responder às suas questões.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">E-mail</h3>
                    <a
                      href="mailto:twincode2025@gmail.com"
                      className="text-primary hover:text-cta transition-colors"
                    >
                      twincode2025@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Rodrigo Oliveira</h3>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+351932132036"
                        className="text-primary hover:text-cta transition-colors text-sm"
                      >
                        932 132 036
                      </a>
                      <a
                        href="https://wa.me/351932132036"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:text-green-700 transition-colors flex items-center gap-1"
                      >
                        <MessageCircle size={14} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Leonardo Luz</h3>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+351926318581"
                        className="text-primary hover:text-cta transition-colors text-sm"
                      >
                        926 318 581
                      </a>
                      <a
                        href="https://wa.me/351926318581"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:text-green-700 transition-colors flex items-center gap-1"
                      >
                        <MessageCircle size={14} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Horário</h3>
                    <p className="text-sm text-muted-foreground">
                      Segunda a Sexta: 9h - 18h<br />
                      Sábado: 9h - 13h
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center bg-secondary/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Preferir enviar um pedido formal?</h2>
              <p className="text-muted-foreground mb-6">
                Preencha o formulário de orçamento e receba uma resposta detalhada.
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

export default Contactos;
