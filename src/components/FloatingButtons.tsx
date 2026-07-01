'use client'
import { Phone } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Zalo */}
      <a
        href="https://zalo.me/0901234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="group flex items-center gap-2"
      >
        <span className="hidden group-hover:block bg-white text-[#2C2C2C] text-xs font-medium px-3 py-1.5 shadow-lg rounded-sm whitespace-nowrap border border-[#E0D8CF]">
          Chat Zalo
        </span>
        <div className="w-12 h-12 rounded-full shadow-lg overflow-hidden hover:scale-110 transition-transform duration-200">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="48" height="48" rx="24" fill="#0068FF"/>
            <path d="M24 10C16.268 10 10 15.82 10 23c0 4.09 1.99 7.74 5.1 10.18L14 38l5.13-1.62A14.9 14.9 0 0024 37c7.732 0 14-5.82 14-13S31.732 10 24 10z" fill="white"/>
            <path d="M17 20h7M17 24h5M28 20v8l-4-4" stroke="#0068FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </a>

      {/* Facebook Messenger */}
      <a
        href="https://m.me/haihuongceramics"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Facebook"
        className="group flex items-center gap-2"
      >
        <span className="hidden group-hover:block bg-white text-[#2C2C2C] text-xs font-medium px-3 py-1.5 shadow-lg rounded-sm whitespace-nowrap border border-[#E0D8CF]">
          Chat Facebook
        </span>
        <div className="w-12 h-12 rounded-full shadow-lg overflow-hidden hover:scale-110 transition-transform duration-200">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="48" height="48" rx="24" fill="url(#fbgrad)"/>
            <defs>
              <linearGradient id="fbgrad" x1="0" y1="0" x2="48" y2="48">
                <stop offset="0%" stopColor="#00C6FF"/>
                <stop offset="100%" stopColor="#0068FF"/>
              </linearGradient>
            </defs>
            <path d="M24 11C16.82 11 11 16.48 11 23.2c0 3.88 1.87 7.34 4.8 9.64V37l4.37-2.4c1.17.32 2.4.5 3.68.5 7.18 0 13-5.48 13-12.2 0-6.72-5.82-11.9-13-11.9z" fill="white"/>
            <path d="M22 27l3.5-3.8 1.3 1.3L31 21l-3.5 3.8-1.3-1.3L22 27z" fill="url(#fbgrad)"/>
          </svg>
        </div>
      </a>

      {/* Phone call */}
      <a
        href="tel:0901234567"
        aria-label="Gọi điện"
        className="group flex items-center gap-2"
      >
        <span className="hidden group-hover:block bg-white text-[#2C2C2C] text-xs font-medium px-3 py-1.5 shadow-lg rounded-sm whitespace-nowrap border border-[#E0D8CF]">
          0901.234.567
        </span>
        <div className="w-12 h-12 rounded-full bg-[#C4933F] shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 hover:bg-[#D4A853]">
          <Phone size={20} className="text-white" />
        </div>
      </a>
    </div>
  )
}
