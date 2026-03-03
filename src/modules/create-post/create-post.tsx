"use client";

import { useMemo, useState, useTransition } from "react";
import "@mdxeditor/editor/style.css";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  linkPlugin,
  markdownShortcutPlugin,
  thematicBreakPlugin,
  codeBlockPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  ListsToggle,
  InsertThematicBreak,
  imagePlugin,
  InsertImage,
} from "@mdxeditor/editor";
import { saveBlogMdx } from "@/app/create-post/actions";
import { Button } from "@/shared/ui/button";

type FormErrors = Partial<{
  title: string;
  description: string;
  date: string;
  image: string;
}>;

function isValidISODate(dateStr: string) {
  // strict YYYY-MM-DD + реальная дата
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const [y, m, d] = dateStr.split("-").map(Number);
  if (m < 1 || m > 12) return false;
  if (d < 1 || d > 31) return false;

  const dt = new Date(Date.UTC(y, m - 1, d));
  return (
    dt.getUTCFullYear() === y &&
    dt.getUTCMonth() === m - 1 &&
    dt.getUTCDate() === d
  );
}

function isValidImagePathOrUrl(value: string) {
  const v = value.trim();
  if (!v) return false;

  // локальный путь
  if (v.startsWith("/")) return true;

  // абсолютный URL
  try {
    const url = new URL(v);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function validate(values: {
  title: string;
  description: string;
  date: string;
  image: string;
}): FormErrors {
  const errors: FormErrors = {};

  const title = values.title.trim();
  const description = values.description.trim();
  const date = values.date.trim();
  const image = values.image.trim();

  if (!title) {
    errors.title = "Title обязателен";
  } else if (title.length < 3) {
    errors.title = "Title слишком короткий";
  }

  if (!description) {
    errors.description = "Description обязателен";
  } else if (description.length < 10) {
    errors.description = "Description слишком короткий (мин. 10 символов)";
  }

  if (!date) {
    errors.date = "Date обязателен";
  } else if (!isValidISODate(date)) {
    errors.date =
      "Дата должна быть формата YYYY-MM-DD и реальной (например 2026-02-19)";
  }

  if (!image) {
    errors.image = "Image обязателен";
  } else if (!isValidImagePathOrUrl(image)) {
    errors.image =
      "Image должен быть URL (https://...) или путь вида /images/...";
  }

  return errors;
}

export function CreatePostForm() {
  const [isPending, startTransition] = useTransition();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const [value, setValue] = useState<string>("");

  const [errors, setErrors] = useState<FormErrors>({});

  const canSubmit = useMemo(() => {
    const e = validate({ title, description, date, image });
    return Object.keys(e).length === 0 && !isPending;
  }, [title, description, date, image, isPending]);

  const onSave = () => {
    const nextErrors = validate({ title, description, date, image });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    startTransition(async () => {
      try {
        const res = await saveBlogMdx({
          title: title.trim(),
          description: description.trim(),
          date: date.trim(),
          image: image.trim(),
          bodyMdx: value,
        });

        alert(`Сохранено: ${res.file}`);
      } catch (e: any) {
        alert(e?.message ?? "Ошибка сохранения");
      }
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <input
            className="border rounded-lg px-3 py-2 w-full"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors((p) => ({ ...p, title: undefined }));
            }}
            placeholder="Title (EN)"
          />
          {errors.title && (
            <p className="text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        <div className="space-y-1">
          <input
            className="border rounded-lg px-3 py-2 w-full"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              if (errors.date) setErrors((p) => ({ ...p, date: undefined }));
            }}
            placeholder="YYYY-MM-DD"
          />
          {errors.date && <p className="text-sm text-red-600">{errors.date}</p>}
        </div>

        <div className="space-y-1 md:col-span-2">
          <input
            className="border rounded-lg px-3 py-2 w-full"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              if (errors.description)
                setErrors((p) => ({ ...p, description: undefined }));
            }}
            placeholder="Description"
          />
          {errors.description && (
            <p className="text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        <div className="space-y-1 md:col-span-2">
          <input
            className="border rounded-lg px-3 py-2 w-full"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
              if (errors.image) setErrors((p) => ({ ...p, image: undefined }));
            }}
            placeholder="/images/... или https://..."
          />
          {errors.image && (
            <p className="text-sm text-red-600">{errors.image}</p>
          )}
        </div>
      </div>

      <div className="border rounded-xl overflow-hidden bg-white">
        <MDXEditor
          markdown={value}
          onChange={setValue}
          contentEditableClassName="px-4 py-3 min-h-[260px] focus:outline-none mdx-content"
          plugins={[
            toolbarPlugin({
              toolbarContents: () => (
                <div className="flex flex-wrap items-center gap-2 border-b bg-gray-50 px-3 py-2">
                  <UndoRedo />
                  <span className="w-px h-5 bg-gray-200 mx-1" />
                  <BlockTypeSelect />
                  <BoldItalicUnderlineToggles />
                  <span className="w-px h-5 bg-gray-200 mx-1" />
                  <ListsToggle />
                  <InsertImage />
                  <InsertThematicBreak />
                </div>
              ),
            }),
            imagePlugin(),
            headingsPlugin(),
            listsPlugin(),
            quotePlugin(),
            linkPlugin(),
            thematicBreakPlugin(),
            codeBlockPlugin(),
            markdownShortcutPlugin(),
          ]}
        />
      </div>

      <Button
        type="button"
        className="cursor-pointer"
        onClick={onSave}
        // disabled={!canSubmit}
      >
        {isPending ? "Сохраняю..." : "Сохранить в .mdx"}
      </Button>
    </div>
  );
}
