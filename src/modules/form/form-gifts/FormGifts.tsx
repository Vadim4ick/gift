"use client";

import { memo, useRef, useState } from "react";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
import { categories, occasions, priceRanges, recipients } from "./_model/const";
import { useAtom } from "jotai";
import { giftResultAtom } from "@/state/show-result";
import { parseGiftFormData } from "./_model/helpers";
import { giftService } from "@/shared/services/gift.service";
import { FormOverlayLoader } from "./FormOverlayLoader";

const FormGifts = memo(() => {
  const [_, setGiftResult] = useAtom(giftResultAtom);

  const [isLoading, setIsLoading] = useState(false);
  const [recipient, setRecipient] = useState("");

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || isLoading) return;

    setIsLoading(true);

    try {
      const formData = new FormData(formRef.current);
      const values = parseGiftFormData(formData);

      const res = await giftService.getAllIdeas(values);
      setGiftResult(res.ideas);

      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      // action={handleSubmit}
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-purple-100"
    >
      {/* оверлей блокирует любые клики, форма не очищается */}
      {isLoading && <FormOverlayLoader />}

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
                onChange={(e) => setRecipient(e.target.value)}
                disabled={isLoading}
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

        {recipient === "other" && (
          <div className="mt-4">
            <Input
              type="text"
              name="customRecipient"
              placeholder="Укажите кто получатель..."
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

        <Input
          type="number"
          name="age"
          placeholder="Введите возраст..."
          min="1"
          max="90"
          required
          disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
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

        <Select name="occasion" required disabled={isLoading}>
          <SelectTrigger className="w-full h-12.5 border-2 rounded-xl cursor-pointer">
            <SelectValue placeholder="Выберите повод..." />
          </SelectTrigger>
          <SelectContent>
            {occasions.map((occ) => (
              <SelectItem className="cursor-pointer" key={occ} value={occ}>
                {occ}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Description */}
      <div className="mb-8">
        <label className="block text-lg font-semibold text-gray-800 mb-4">
          Дополнительная информация{" "}
          <span className="text-gray-400 text-sm font-normal">
            (опционально)
          </span>
        </label>

        <Textarea
          disabled={isLoading}
          name="description"
          placeholder="Расскажите об увлечениях, характере, предпочтениях получателя..."
        />

        <p className="text-sm text-gray-500 mt-2">
          💡 Например: любит читать фэнтези, занимается йогой, коллекционирует
          винил
        </p>
      </div>

      <Button
        disabled={isLoading}
        type="submit"
        className="w-full text-xl"
        size={"lg"}
      >
        {isLoading ? (
          <>
            <Sparkles className="w-5 h-5 animate-spin" />
            Подбираем подарки…
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            Подобрать подарок
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </form>
  );
});

export { FormGifts };
