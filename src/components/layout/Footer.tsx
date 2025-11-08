import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TwinCode</h3>
            <p className="text-sm opacity-90">
              Orçamentos rápidos, obras sem stress
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="flex flex-col gap-2">
              <Link to="/servicos" className="text-sm hover:opacity-80 transition-opacity">
                Serviços
              </Link>
              <Link to="/projetos" className="text-sm hover:opacity-80 transition-opacity">
                Projetos
              </Link>
              <Link to="/faq" className="text-sm hover:opacity-80 transition-opacity">
                FAQ
              </Link>
              <Link to="/orcamento" className="text-sm hover:opacity-80 transition-opacity">
                Pedir Orçamento
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:twincode2025@gmail.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail size={16} />
                twincode2025@gmail.com
              </a>
              <a
                href="tel:+351932132036"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone size={16} />
                932 132 036
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          © {new Date().getFullYear()} TwinCode. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
