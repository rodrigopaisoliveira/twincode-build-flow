import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

const Orcamento = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    local: "",
    tipoServico: "",
    prazo: "",
    mensagem: "",
    rgpd: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.rgpd) {
      toast({
        title: "Atenção",
        description: "Por favor, aceite os termos de tratamento de dados.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailBody = `
Nome: ${formData.nome}
E-mail: ${formData.email}
Telefone: ${formData.telefone}
Local/Concelho: ${formData.local}
Tipo de Serviço: ${formData.tipoServico}
Prazo desejado: ${formData.prazo || "Não especificado"}
Mensagem: ${formData.mensagem}
      `.trim();

      const mailtoLink = `mailto:twincode2025@gmail.com?subject=Pedido de Orçamento - ${formData.nome}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Obrigado!",
        description: "Iremos responder brevemente ao seu pedido de orçamento.",
      });

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        local: "",
        tipoServico: "",
        prazo: "",
        mensagem: "",
        rgpd: false,
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar o formulário. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Pedir Orçamento | TwinCode"
        description="Preencha o formulário e receba proposta sem compromisso."
        path="/orcamento"
      />
      <Navbar />
      
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Pedir Orçamento
              </h1>
              <p className="text-xl text-muted-foreground">
                Preencha o formulário abaixo. Responderemos no mesmo dia útil.
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome">Nome *</Label>
                  <Input
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="O seu nome completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div>
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    placeholder="912 345 678"
                  />
                </div>

                <div>
                  <Label htmlFor="local">Local/Concelho *</Label>
                  <Input
                    id="local"
                    required
                    value={formData.local}
                    onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                    placeholder="Onde será realizado o trabalho"
                  />
                </div>

                <div>
                  <Label htmlFor="tipoServico">Tipo de Serviço *</Label>
                  <Select
                    required
                    value={formData.tipoServico}
                    onValueChange={(value) => setFormData({ ...formData, tipoServico: value })}
                  >
                    <SelectTrigger id="tipoServico">
                      <SelectValue placeholder="Selecione o tipo de serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construcao">Construção</SelectItem>
                      <SelectItem value="remodelacao">Remodelação</SelectItem>
                      <SelectItem value="transporte">Transporte/Logística</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="prazo">Prazo desejado</Label>
                  <Input
                    id="prazo"
                    value={formData.prazo}
                    onChange={(e) => setFormData({ ...formData, prazo: e.target.value })}
                    placeholder="Ex: 3 meses, Urgente, Flexível"
                  />
                </div>

                <div>
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Descreva o seu projeto em detalhe"
                    rows={5}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="rgpd"
                    checked={formData.rgpd}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, rgpd: checked as boolean })
                    }
                  />
                  <Label htmlFor="rgpd" className="text-sm leading-relaxed cursor-pointer">
                    Li e aceito o tratamento dos meus dados para contacto e envio de proposta.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-cta hover:bg-cta-hover text-cta-foreground"
                >
                  {isSubmitting ? "A enviar..." : "Enviar Pedido"}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Orcamento;
