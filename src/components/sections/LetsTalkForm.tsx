"use client";

import React, { useState } from "react";
import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";

interface LetsTalkFormProps {
  demo: {
    panelTitle: LocalizedString;
    panelDescription: LocalizedString;
    nameLabel: LocalizedString;
    emailLabel: LocalizedString;
    companyLabel: LocalizedString;
    websiteLabel: LocalizedString;
    messageLabel: LocalizedString;
    messagePlaceholder: LocalizedString;
    submitLabel: LocalizedString;
    successMessage: LocalizedString;
    errorMessage: LocalizedString;
    noteText: LocalizedString;
    switchPrompt: LocalizedString;
    switchLinkLabel: LocalizedString;
    switchHref: string;
  };
  ask: {
    panelTitle: LocalizedString;
    panelDescription: LocalizedString;
    nameLabel: LocalizedString;
    emailLabel: LocalizedString;
    messageLabel: LocalizedString;
    messagePlaceholder: LocalizedString;
    submitLabel: LocalizedString;
    successMessage: LocalizedString;
    errorMessage: LocalizedString;
    noteText: LocalizedString;
    switchPrompt: LocalizedString;
    switchLinkLabel: LocalizedString;
    switchHref: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  captchaLabel: LocalizedString;
}

const inputCls = "w-full border-b border-black/15 bg-transparent py-2 text-sm outline-none focus:border-black/40";
const labelCls = "block space-y-1.5";
const labelTextCls = "text-[15px] font-semibold text-[#0F0F3D]";

type FeedbackState = { type: "success" | "error"; text: string } | null;

function ReCaptcha({
  id, checked, onCheck, label,
}: {
  id: string;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
  label: string;
}) {
  const handleToggle = () => {
    if (onCheck) onCheck(!checked);
  };

  return (
    <div className="flex h-[78px] w-[304px] select-none items-center justify-between rounded-sm border border-gray-300 bg-[#F9F9F9] px-3 shadow-sm">
      <label htmlFor={id} className="flex cursor-pointer items-center gap-3 text-sm font-normal text-gray-800">
        <button
          type="button"
          onClick={handleToggle}
          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm border border-gray-400 bg-white transition-all hover:border-gray-600 ${
            checked ? "border-[#37C100] bg-[#37C100]/10" : ""
          }`}
        >
          {checked && (
            <svg className="h-5 w-5 text-[#37C100]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          )}
          <input type="checkbox" id={id} checked={checked} onChange={handleToggle} className="sr-only" />
        </button>
        {label}
      </label>
      <div className="flex flex-shrink-0 flex-col items-center gap-1 leading-none text-gray-500 opacity-80">
        <img src="/assets/Image/re.svg" alt="reCAPTCHA logo" className="h-8 w-8" />
        <span className="text-[9px] text-gray-400">reCAPTCHA</span>
        <div className="flex gap-2 text-[9px] text-gray-400 hover:text-gray-600">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  );
}

export default function LetsTalkForm({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const p = block.props as unknown as LetsTalkFormProps;

  const resolved = {
    demo: {
      panelTitle: getLocalizedString(p.demo.panelTitle, locale),
      panelDescription: getLocalizedString(p.demo.panelDescription, locale),
      nameLabel: getLocalizedString(p.demo.nameLabel, locale),
      emailLabel: getLocalizedString(p.demo.emailLabel, locale),
      companyLabel: getLocalizedString(p.demo.companyLabel, locale),
      websiteLabel: getLocalizedString(p.demo.websiteLabel, locale),
      messageLabel: getLocalizedString(p.demo.messageLabel, locale),
      messagePlaceholder: getLocalizedString(p.demo.messagePlaceholder, locale),
      submitLabel: getLocalizedString(p.demo.submitLabel, locale),
      successMessage: getLocalizedString(p.demo.successMessage, locale),
      errorMessage: getLocalizedString(p.demo.errorMessage, locale),
      noteText: getLocalizedString(p.demo.noteText, locale),
      switchPrompt: getLocalizedString(p.demo.switchPrompt, locale),
      switchLinkLabel: getLocalizedString(p.demo.switchLinkLabel, locale),
      switchHref: p.demo.switchHref,
    },
    ask: {
      panelTitle: getLocalizedString(p.ask.panelTitle, locale),
      panelDescription: getLocalizedString(p.ask.panelDescription, locale),
      nameLabel: getLocalizedString(p.ask.nameLabel, locale),
      emailLabel: getLocalizedString(p.ask.emailLabel, locale),
      messageLabel: getLocalizedString(p.ask.messageLabel, locale),
      messagePlaceholder: getLocalizedString(p.ask.messagePlaceholder, locale),
      submitLabel: getLocalizedString(p.ask.submitLabel, locale),
      successMessage: getLocalizedString(p.ask.successMessage, locale),
      errorMessage: getLocalizedString(p.ask.errorMessage, locale),
      noteText: getLocalizedString(p.ask.noteText, locale),
      switchPrompt: getLocalizedString(p.ask.switchPrompt, locale),
      switchLinkLabel: getLocalizedString(p.ask.switchLinkLabel, locale),
      switchHref: p.ask.switchHref,
    },
    contact: p.contact,
    captchaLabel: getLocalizedString(p.captchaLabel, locale),
  };

  const [demoCaptcha, setDemoCaptcha] = useState(false);
  const [askCaptcha, setAskCaptcha] = useState(false);
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const [askSubmitting, setAskSubmitting] = useState(false);
  const [demoFeedback, setDemoFeedback] = useState<FeedbackState>(null);
  const [askFeedback, setAskFeedback] = useState<FeedbackState>(null);

  const [demoForm, setDemoForm] = useState({ name: "", email: "", company: "", website: "", message: "" });
  const [askForm, setAskForm] = useState({ name: "", email: "", message: "" });

  const submitLead = async (
    formType: "demo" | "ask",
    payload: Record<string, string>,
    captchaChecked: boolean,
    setFeedback: (v: FeedbackState) => void,
    reset: () => void,
  ) => {
    if (!captchaChecked) {
      setFeedback({ type: "error", text: "Please verify that you are not a robot." });
      return;
    }

    try {
      const res = await fetch("/api/public/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType,
          ...payload,
          page: "/lets-talk",
          locale,
          captchaToken: "local-pass",
        }),
      });

      const data = await res.json() as { success?: boolean; error?: string };
      if (!res.ok || !data.success) {
        const errText = data.error || (formType === "demo" ? resolved.demo.errorMessage : resolved.ask.errorMessage);
        setFeedback({ type: "error", text: errText });
        return;
      }

      setFeedback({ type: "success", text: formType === "demo" ? resolved.demo.successMessage : resolved.ask.successMessage });
      reset();
    } catch {
      setFeedback({ type: "error", text: "Something went wrong. Please try again." });
    }
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDemoFeedback(null);
    setDemoSubmitting(true);
    try {
      await submitLead("demo", demoForm, demoCaptcha, setDemoFeedback, () => {
        setDemoForm({ name: "", email: "", company: "", website: "", message: "" });
        setDemoCaptcha(false);
      });
    } finally {
      setDemoSubmitting(false);
    }
  };

  const handleAskSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAskFeedback(null);
    setAskSubmitting(true);
    try {
      await submitLead("ask", askForm, askCaptcha, setAskFeedback, () => {
        setAskForm({ name: "", email: "", message: "" });
        setAskCaptcha(false);
      });
    } finally {
      setAskSubmitting(false);
    }
  };

  return (
    <>
      {/* Demo Section */}
      <section id="demo" className="w-full bg-white py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 overflow-hidden md:grid-cols-2">
            <div className="flex min-h-[520px] flex-col rounded-[20px] bg-[#37C100] p-8 text-white md:p-10">
              <h4 className="text-xl font-semibold">{resolved.demo.panelTitle}</h4>
              <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
                {resolved.demo.panelDescription}
              </p>
              <div className="mt-auto space-y-4 pt-10 text-[14px] text-white/95">
                <div className="flex items-center gap-3">
                  <img src="/assets/Image/mail.svg" alt="email" className="w-8" />
                  <span>{resolved.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/assets/Image/phone.svg" alt="phone" className="w-8" />
                  <span>{resolved.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/assets/Image/map.svg" alt="location" className="w-8" />
                  <span>{resolved.contact.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10">
              <form className="space-y-5" onSubmit={handleDemoSubmit}>
                <label className={labelCls}>
                  <span className={labelTextCls}>{resolved.demo.nameLabel}</span>
                  <input type="text" className={inputCls} required value={demoForm.name} onChange={(e) => setDemoForm((prev) => ({ ...prev, name: e.target.value }))} />
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>{resolved.demo.emailLabel}</span>
                  <input type="email" className={inputCls} required value={demoForm.email} onChange={(e) => setDemoForm((prev) => ({ ...prev, email: e.target.value }))} />
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>{resolved.demo.companyLabel}</span>
                  <input type="text" className={inputCls} value={demoForm.company} onChange={(e) => setDemoForm((prev) => ({ ...prev, company: e.target.value }))} />
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>{resolved.demo.websiteLabel}</span>
                  <input type="url" className={inputCls} value={demoForm.website} onChange={(e) => setDemoForm((prev) => ({ ...prev, website: e.target.value }))} />
                </label>
                <div className="space-y-1.5">
                  <span className={labelTextCls}>{resolved.demo.messageLabel}</span>
                  <textarea rows={4} required minLength={3} value={demoForm.message} onChange={(e) => setDemoForm((prev) => ({ ...prev, message: e.target.value }))} placeholder={resolved.demo.messagePlaceholder} className="w-full resize-none rounded-md border border-black/10 p-3 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5" />
                </div>
                <button type="submit" disabled={demoSubmitting} className="inline-flex items-center gap-2 rounded-full bg-[#37C100] px-6 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#2d9802] disabled:cursor-not-allowed disabled:opacity-70">
                  <img src="/assets/Image/mail2-icon.svg" alt="" />
                  {demoSubmitting ? "Sending..." : resolved.demo.submitLabel}
                </button>
                <ReCaptcha id="demo-captcha" checked={demoCaptcha} onCheck={setDemoCaptcha} label={resolved.captchaLabel} />
                {demoFeedback && (
                  <p className={`text-[13px] ${demoFeedback.type === "success" ? "text-[#1f7a39]" : "text-red-600"}`}>
                    {demoFeedback.text}
                  </p>
                )}
                <p className="text-[13px] text-[#555555]">{resolved.demo.noteText}</p>
                <p className="text-[13px] text-[#0F0F3D]">
                  {resolved.demo.switchPrompt}{" "}
                  <a href={resolved.demo.switchHref} className="font-medium text-[#37C100] hover:underline">
                    {resolved.demo.switchLinkLabel}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Ask Section */}
      <section id="ask" className="w-full bg-[#F8F8F8] py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 overflow-hidden md:grid-cols-2">
            <div className="flex min-h-[480px] flex-col rounded-[20px] bg-[#0F0F3D] p-8 text-white md:p-10">
              <h4 className="text-xl font-semibold">{resolved.ask.panelTitle}</h4>
              <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
                {resolved.ask.panelDescription}
              </p>
              <div className="mt-auto space-y-4 pt-10 text-[14px] text-white/95">
                <div className="flex items-center gap-3">
                  <img src="/assets/Image/mail.svg" alt="email" className="w-8" />
                  <span>{resolved.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/assets/Image/phone.svg" alt="phone" className="w-8" />
                  <span>{resolved.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/assets/Image/map.svg" alt="location" className="w-8" />
                  <span>{resolved.contact.location}</span>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] bg-white p-8 md:p-10">
              <form className="space-y-5" onSubmit={handleAskSubmit}>
                <label className={labelCls}>
                  <span className={labelTextCls}>{resolved.ask.nameLabel}</span>
                  <input type="text" className={inputCls} required value={askForm.name} onChange={(e) => setAskForm((prev) => ({ ...prev, name: e.target.value }))} />
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>{resolved.ask.emailLabel}</span>
                  <input type="email" className={inputCls} required value={askForm.email} onChange={(e) => setAskForm((prev) => ({ ...prev, email: e.target.value }))} />
                </label>
                <div className="space-y-1.5">
                  <span className={labelTextCls}>{resolved.ask.messageLabel}</span>
                  <textarea rows={4} required minLength={3} value={askForm.message} onChange={(e) => setAskForm((prev) => ({ ...prev, message: e.target.value }))} placeholder={resolved.ask.messagePlaceholder} className="w-full resize-none rounded-md border border-black/10 p-3 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5" />
                </div>
                <button type="submit" disabled={askSubmitting} className="inline-flex items-center gap-2 rounded-full bg-[#0F0F3D] px-6 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#1a1a5e] disabled:cursor-not-allowed disabled:opacity-70">
                  <img src="/assets/Image/mail2-icon.svg" alt="" />
                  {askSubmitting ? "Sending..." : resolved.ask.submitLabel}
                </button>
                <ReCaptcha id="ask-captcha" checked={askCaptcha} onCheck={setAskCaptcha} label={resolved.captchaLabel} />
                {askFeedback && (
                  <p className={`text-[13px] ${askFeedback.type === "success" ? "text-[#1f7a39]" : "text-red-600"}`}>
                    {askFeedback.text}
                  </p>
                )}
                <p className="text-[13px] text-[#555555]">{resolved.ask.noteText}</p>
                <p className="text-[13px] text-[#0F0F3D]">
                  {resolved.ask.switchPrompt}{" "}
                  <a href={resolved.ask.switchHref} className="font-medium text-[#37C100] hover:underline">
                    {resolved.ask.switchLinkLabel}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
