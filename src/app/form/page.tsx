"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const recipients = [
  { value: "man", label: "Мужчина", emoji: "👨" },
  { value: "woman", label: "Женщина", emoji: "👩" },
  { value: "boy", label: "Мальчик", emoji: "👦" },
  { value: "girl", label: "Девочка", emoji: "👧" },
  { value: "grandpa", label: "Дедушка", emoji: "👴" },
  { value: "grandma", label: "Бабушка", emoji: "👵" },
  { value: "colleague", label: "Коллега", emoji: "💼" },
  { value: "friend", label: "Друг/Подруга", emoji: "🤝" },
  { value: "other", label: "Другое", emoji: "✨" },
];

const categories = [
  "Электроника",
  "Книги",
  "Косметика",
  "Спорт",
  "Хобби",
  "Украшения",
  "Одежда",
  "Игрушки",
  "Дом",
  "Handmade",
];

const priceRanges = [
  { value: "budget", label: "До 2000₽" },
  { value: "medium", label: "2000₽ - 5000₽" },
  { value: "premium", label: "5000₽ - 15000₽" },
  { value: "luxury", label: "От 15000₽" },
];

const occasions = [
  "День рождения",
  "Новый год",
  "Свадьба",
  "8 марта",
  "23 февраля",
  "Юбилей",
  "Годовщина",
  "Просто так",
];

const FormPage = () => {
  const [formData, setFormData] = useState({
    recipient: "",
    customRecipient: "",
    category: "",
    age: "",
    priceRange: "",
    occasion: "",
    description: "",
  });

  const handleSubmit = async (formData: FormData) => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="pt-32 pb-20 px-6 mt-(--header-height) grow">
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

        <form
          action={handleSubmit}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-purple-100"
        >
          {/* Recipient Selection */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Кому дарите? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {recipients.map((recipient) => (
                <label
                  key={recipient.value}
                  className={`relative cursor-pointer group`}
                >
                  <input
                    type="radio"
                    name="recipient"
                    value={recipient.value}
                    required
                    className="peer sr-only"
                    onChange={(e) =>
                      setFormData({ ...formData, recipient: e.target.value })
                    }
                  />
                  <div className="p-4 border-2 border-gray-200 rounded-2xl text-center transition-all hover:border-purple-300 hover:shadow-md peer-checked:border-purple-600 peer-checked:bg-linear-to-br peer-checked:from-purple-50 peer-checked:to-pink-50 peer-checked:shadow-lg">
                    <div className="text-3xl mb-2">{recipient.emoji}</div>
                    <div className="text-sm font-medium text-gray-700 peer-checked:text-purple-700">
                      {recipient.label}
                    </div>
                  </div>
                </label>
              ))}
            </div>

            {formData.recipient === "other" && (
              <div className="mt-4">
                <input
                  type="text"
                  name="customRecipient"
                  placeholder="Укажите кто получатель..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-colors"
                  required
                />
              </div>
            )}
          </div>

          {/* Age */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Возраст <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="age"
              placeholder="Введите возраст..."
              min="1"
              max="120"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-colors text-lg"
            />
          </div>

          {/* Category */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Категория подарка
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <label key={cat} className="cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    className="peer sr-only"
                  />
                  <div className="px-4 py-2 border-2 border-gray-200 rounded-full text-sm font-medium text-gray-700 transition-all hover:border-purple-300 hover:shadow-sm peer-checked:border-purple-600 peer-checked:bg-linear-to-r peer-checked:from-purple-600 peer-checked:to-pink-600 peer-checked:text-white peer-checked:shadow-md">
                    {cat}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Ценовой диапазон <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {priceRanges.map((range) => (
                <label key={range.value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.value}
                    required
                    className="peer sr-only"
                  />
                  <div className="p-4 border-2 border-gray-200 rounded-xl text-center font-medium text-gray-700 transition-all hover:border-purple-300 hover:shadow-sm peer-checked:border-purple-600 peer-checked:bg-linear-to-br peer-checked:from-purple-50 peer-checked:to-pink-50 peer-checked:text-purple-700 peer-checked:shadow-md">
                    {range.label}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Occasion */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Повод <span className="text-red-500">*</span>
            </label>
            <select
              name="occasion"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-colors text-lg appearance-none bg-white cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>
                Выберите повод...
              </option>
              {occasions.map((occ) => (
                <option key={occ} value={occ}>
                  {occ}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Дополнительная информация{" "}
              <span className="text-gray-400 text-sm font-normal">
                (опционально)
              </span>
            </label>
            <textarea
              name="description"
              placeholder="Расскажите об увлечениях, характере, предпочтениях получателя..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-colors text-lg resize-none"
            />
            <p className="text-sm text-gray-500 mt-2">
              💡 Например: любит читать фэнтези, занимается йогой,
              коллекционирует винил
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-5 h-5" />
            Подобрать подарок
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormPage;
