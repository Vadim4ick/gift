"use client";

import { useState } from "react";
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

export function CreatePostForm() {
  const [value, setValue] = useState("# Заголовок\n\nТекст...");

  return (
    <div className="space-y-3">
      <div className="border rounded-xl overflow-hidden bg-white">
        <MDXEditor
          markdown={value}
          onChange={setValue}
          contentEditableClassName="px-4 py-3 min-h-[220px] focus:outline-none mdx-content"
          plugins={[
            toolbarPlugin({
              toolbarContents: () => (
                <div className="flex flex-wrap items-center gap-2 border-b bg-gray-50 px-3 py-2">
                  <UndoRedo />
                  <span className="w-px h-5 bg-gray-200 mx-1" />
                  <BlockTypeSelect /> {/* ← тут выбираешь H1/H2/Paragraph */}
                  <BoldItalicUnderlineToggles />
                  <span className="w-px h-5 bg-gray-200 mx-1" />
                  <ListsToggle /> {/* буллеты/нумерация */}
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
    </div>
  );
}
