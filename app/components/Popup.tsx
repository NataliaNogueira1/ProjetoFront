"use client";

import { Twitter, Instagram, Facebook } from "lucide-react";

type SocialPopupProps = {
  open: boolean;
};

export default function SocialPopup({ open }: SocialPopupProps) {
  if (!open) return null;

  return (
    <div className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-lg bg-white p-4 text-sm text-gray-800 shadow-xl">
      <p className="mb-3 font-semibold">Redes sociais fonte:</p>

      <ul className="space-y-2 ps-6">
        <li className="flex cursor-pointer items-center gap-2 hover:underline">
          <Twitter size={18} />
          Twitter
        </li>

        <li className="flex cursor-pointer items-center gap-2 hover:underline">
          <Instagram size={18} />
          Instagram
        </li>

        <li className="flex cursor-pointer items-center gap-2 hover:underline">
          <Facebook size={18} />
          Facebook
        </li>
      </ul>
    </div>
  );
}
