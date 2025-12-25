import { FormGifts } from "@/modules/form/form-gifts";
import { ResultsGifts } from "@/modules/form/results-gifts";

const FormPage = () => {
  return (
    <section className="pt-10 pb-20 px-6 mt-(--header-height) grow">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Расскажите о получателе
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Чем больше деталей — тем точнее подберем подарок
          </p>
        </div>

        <FormGifts />

        <ResultsGifts />
      </div>
    </section>
  );
};

export default FormPage;
