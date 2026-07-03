"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import type { PageBlock } from "@/lib/data/pageLoader";

interface ContactInfoProps {
  email: string;
  phone: string;
  location: string;
}

export default function ContactInfo({ block }: { block: PageBlock }) {
  const props = block.props as unknown as ContactInfoProps;

  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container-xl mx-auto max-w-3xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href={`mailto:${props.email}`} className="flex flex-col items-center p-6 bg-white rounded-[16px] hover:shadow-md transition-all group">
            <Mail className="w-8 h-8 text-[#41C717] mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm text-[#555555] group-hover:text-[#1F1F1F] transition-colors">{props.email}</span>
          </a>
          <a href={`tel:${props.phone.replace(/\s/g, "")}`} className="flex flex-col items-center p-6 bg-white rounded-[16px] hover:shadow-md transition-all group">
            <Phone className="w-8 h-8 text-[#41C717] mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm text-[#555555] group-hover:text-[#1F1F1F] transition-colors">{props.phone}</span>
          </a>
          <div className="flex flex-col items-center p-6 bg-white rounded-[16px]">
            <MapPin className="w-8 h-8 text-[#41C717] mb-3" />
            <span className="text-sm text-[#555555]">{props.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
