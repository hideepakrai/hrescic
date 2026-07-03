"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface EditableTextProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  onChange?: (text: string) => void;
  editable?: boolean;
  dangerouslySetInnerHTML?: boolean;
  multiline?: boolean;
  placeholder?: string;
}

export default function EditableText({
  text,
  tag: Tag = "span",
  className = "",
  onChange,
  editable = false,
  dangerouslySetInnerHTML: useDangerousHTML = false,
  multiline = false,
  placeholder = "",
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      (inputRef.current as HTMLTextAreaElement).select?.();
    }
  }, [isEditing]);

  const handleSave = useCallback(() => {
    setIsEditing(false);
    if (onChange && value.trim() !== text) {
      onChange(value.trim());
    } else {
      setValue(text);
    }
  }, [onChange, text, value]);

  if (!editable) {
    if (useDangerousHTML) {
      return <Tag className={className} dangerouslySetInnerHTML={{ __html: text || placeholder }} />;
    }
    return <Tag className={className}>{text || placeholder}</Tag>;
  }

  if (isEditing) {
    const sharedProps = {
      ref: inputRef as any,
      className: `border border-primary bg-transparent px-1 rounded w-full ${className}`,
      value,
      onChange: (e: any) => setValue(e.target.value),
      onBlur: handleSave,
      onKeyDown: (e: any) => {
        if (e.key === "Escape") {
          setValue(text);
          setIsEditing(false);
        }
        if (!multiline && e.key === "Enter") {
          e.preventDefault();
          handleSave();
        }
      },
      autoFocus: true,
    };

    if (multiline) {
      return <textarea rows={2} {...sharedProps} />;
    }
    return <input {...sharedProps} />;
  }

  if (useDangerousHTML) {
    return (
      <Tag
        className={`cursor-pointer hover:ring-1 hover:ring-primary/30 rounded px-0.5 ${className}`}
        onClick={() => setIsEditing(true)}
        title="Click to edit"
        dangerouslySetInnerHTML={{ __html: value || placeholder }}
      />
    );
  }

  return (
    <Tag
      className={`cursor-pointer hover:ring-1 hover:ring-primary/30 rounded px-0.5 ${className}`}
      onClick={() => setIsEditing(true)}
      title="Click to edit"
    >
      {value || placeholder}
    </Tag>
  );
}
