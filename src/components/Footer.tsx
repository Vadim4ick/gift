import { Gift } from "lucide-react";
import { Container } from "../shared/ui/Container";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-white">
      <Container className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Gift className="w-8 h-8 text-purple-400" />
          <span className="text-2xl font-bold">GiftGenius</span>
        </div>
        <p className="text-gray-400 mb-6">Дарите с умом, радуйте с душой</p>
        <div className="flex justify-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-purple-400 transition-colors">
            О нас
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Блог
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Контакты
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Политика
          </a>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} GiftGenius. Все права защищены.
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
