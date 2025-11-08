import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
Nome: ${formData.nome}
E-mail: ${formData.email}
Empresa: ${formData.empresa || "Não informado"}

Mensagem:
${formData.mensagem}
      `.trim();

      const mailtoLink = `mailto:twincode2025@gmail.com?subject=Pedido de Orçamento - ${formData.nome}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado!",
      });

      setFormData({
        nome: "",
        email: "",
        empresa: "",
        mensagem: "",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contato | Twin Code - Solicitar Orçamento"
        description="Entre em contato com a Twin Code para solicitar um orçamento personalizado para seu projeto web."
        path="/contato"
      />
      <Navbar />
      
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16 fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Vamos <span className="gradient-text">Conversar</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tem um projeto em mente? Envie-nos uma mensagem e solicite um orçamento personalizado.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-8 bg-gradient-dark text-white border-0 shadow-glow">
                  <Mail className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:twincode2025@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    twincode2025@gmail.com
                  </a>
                </Card>

                <Card className="p-8 border-2">
                  <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Segunda a Sexta: 9h - 18h</p>
                    <p>Sábado: 9h - 13h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </Card>

                <Card className="p-8 border-2 bg-secondary/50">
                  <h3 className="text-lg font-semibold mb-3">Resposta Rápida</h3>
                  <p className="text-sm text-muted-foreground">
                    Respondemos todos os pedidos de orçamento em até 24 horas úteis.
                  </p>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="p-8 border-2 shadow-glow">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nome">Nome *</Label>
                      <Input
                        id="nome"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Seu nome completo"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@exemplo.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input
                        id="empresa"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Nome da sua empresa (opcional)"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        required
                        value={formData.mensagem}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        placeholder="Conte-nos sobre seu projeto..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Solicitar Orçamento
                          <Send className="ml-2" size={18} />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar este formulário, você concorda em ser contatado pela Twin Code.
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contato;
