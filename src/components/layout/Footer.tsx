import { Link } from "react-router-dom";
import { Code2, Mail, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  // 👇 Função utilitária para scrollar até ao topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-dark text-white py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="text-accent" size={32} />
              <span className="text-2xl font-bold">TwinCode</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-md">
              Transformamos ideias em sites incríveis. Especialistas em
              desenvolvimento web personalizado.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:TwinCode2025@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={scrollToTop}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                onClick={scrollToTop}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Portfólio
              </Link>
              <Link
                to="/sobre"
                onClick={scrollToTop}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Sobre Nós
              </Link>
              <Link
                to="/contacto"
                onClick={scrollToTop}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a
                href="mailto:TwinCode2025@gmail.com"
                className="hover:text-white transition-colors"
              >
                TwinCode2025@gmail.com
              </a>
              <Link
                to="/Contacto"
                onClick={scrollToTop}
                className="hover:text-white transition-colors"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} TwinCode. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
