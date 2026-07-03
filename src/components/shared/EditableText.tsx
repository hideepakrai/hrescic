"use client";

import { useState, useCallback } from "react";

interface EditableTextProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  onChange?: (text: string) => void;
  editable?: boolean;
}

export default function EditableText({
  text,
  tag: Tag = "span",
  className = "",
  onChange,
  editable = false,
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  const handleBlur = useCallback(() => {
    setIsEditing(false);
    if (onChange && value !== text) {
      onChange(value);
    }
  }, [onChange, text, value]);

  if (!editable) {
    return <Tag className={className}>{text}</Tag>;
  }

  if (isEditing) {
    return (
      <input
        className={`border border-primary bg-transparent px-1 rounded ${className}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleBlur();
          if (e.key === "Escape") {
            setValue(text);
            setIsEditing(false);
          }
        }}
        autoFocus
      />
    );
  }

  return (
    <Tag
      className={`cursor-pointer hover:ring-1 hover:ring-primary/30 rounded px-0.5 ${className}`}
      onClick={() => setIsEditing(true)}
      title="Click to edit"
    >
      {value}
    </Tag>
  );
}
