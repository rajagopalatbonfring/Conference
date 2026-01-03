// 'use client';

// import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';

// const FloatingWhatsApp = dynamic(
//   () => import('react-floating-whatsapp').then(mod => mod.FloatingWhatsApp),
//   { ssr: false }
// );

// export default function WhatsAppFloat() {
//   const [isMounted, setIsMounted] = useState(false);

//   // Mount guard
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // DOM manipulation logic (AFTER mount)
//   useEffect(() => {
//     if (!isMounted) return;

//     let observer: MutationObserver | null = null;
//     let intervalId: NodeJS.Timeout | null = null;

//     const forceStylesAndValue = () => {
//       const chatbox = document.querySelector('.floating-whatsapp-chatbox');
//       if (!chatbox) return;

//       const inputEl = chatbox.querySelector('input, textarea') as
//         | HTMLInputElement
//         | HTMLTextAreaElement
//         | null;

//       if (inputEl) {
//         inputEl.style.color = '#000000';
//         inputEl.style.backgroundColor = '#ffffff';
//         inputEl.style.caretColor = '#25D366';
//         inputEl.style.setProperty('color', '#000000', 'important');

//         const desiredText =
//           "Hello! I'm interested in ICLEAS 2026. How can I participate?";

//         if (inputEl.value !== desiredText) {
//           inputEl.value = desiredText;
//           inputEl.dispatchEvent(new Event('input', { bubbles: true }));
//           inputEl.dispatchEvent(new Event('change', { bubbles: true }));
//         }
//       }

//       const sendBtn = chatbox.querySelector(
//         'button[class*="sendButton"]'
//       ) as HTMLElement | null;

//       if (sendBtn) {
//         sendBtn.style.backgroundColor = '#25D366';
//         sendBtn.style.color = '#ffffff';
//       }
//     };

//     observer = new MutationObserver(() => {
//       if (document.querySelector('.floating-whatsapp-chatbox')) {
//         forceStylesAndValue();
//       }
//     });

//     observer.observe(document.body, { childList: true, subtree: true });
//     intervalId = setInterval(forceStylesAndValue, 400);

//     return () => {
//       observer?.disconnect();
//       if (intervalId) clearInterval(intervalId);
//     };
//   }, [isMounted]);

//   if (!isMounted) return null;

//   return (
//     <div className="fixed bottom-6 right-6 z-[9999]">
//       <FloatingWhatsApp
//         phoneNumber="+919087468838" // ← MUST REPLACE with your real number (with +91 or country code)
//         accountName="ICLEAS 2026 Support"
//         statusMessage="Usually replies within 1 hour"
//         chatMessage={`Hello! This is ICLEAS 2026 support, How can we help you?`}
//         placeholder="Type your message here..."
//         allowEsc
//         notification
//         notificationSound={true}
//         className="z-[9999]"
//         buttonClassName="shadow-2xl hover:scale-110 transition-transform duration-200"
//         // Optional: delay open so it doesn't annoy on page load
//       />
//     </div>
//   );
// }










'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import profile from '@/assets/profile.jpg'

const FloatingWhatsApp = dynamic(
  () => import('react-floating-whatsapp').then(m => m.FloatingWhatsApp),
  { ssr: false }
);

export default function WhatsAppFloat() {
  const [showWidget, setShowWidget] = useState(false);

  // ⏳ Load widget only when browser is idle (best for SEO & performance)
  useEffect(() => {
    const load = () => setShowWidget(true);

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(load);
    } else {
      setTimeout(load, 3000);
    }
  }, []);

  // 🎯 DOM customization – observer runs ONCE and disconnects
  useEffect(() => {
    if (!showWidget) return;

    const observer = new MutationObserver(() => {
      const chatbox = document.querySelector('.floating-whatsapp-chatbox');
      if (!chatbox) return;

      const inputEl = chatbox.querySelector(
        'input, textarea'
      ) as HTMLInputElement | HTMLTextAreaElement | null;

      if (inputEl) {
        const desiredText =
          "Hello! I'm interested in ICLEAS 2026. How can I participate?";

        inputEl.style.color = '#000';
        inputEl.style.backgroundColor = '#fff';
        inputEl.style.caretColor = '#25D366';
        inputEl.style.setProperty('color', '#000', 'important');

        if (inputEl.value !== desiredText) {
          inputEl.value = desiredText;
          inputEl.dispatchEvent(new Event('input', { bubbles: true }));
          inputEl.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }

      const sendBtn = chatbox.querySelector(
        'button[class*="sendButton"]'
      ) as HTMLElement | null;

      if (sendBtn) {
        sendBtn.style.backgroundColor = '#25D366';
        sendBtn.style.color = '#fff';
      }

      // 🔥 Stop observing once done
      observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [showWidget]);

  if (!showWidget) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <FloatingWhatsApp
        phoneNumber="+919087468838"
        accountName="ICLEAS Support"
        statusMessage="Usually replies within 1 hour"
        chatMessage={`Hello!\nThis is ICLEAS 2026 support. How can we help you?`}
        placeholder="Type your message here..."
        avatar="/images/profile.jpg"
        allowEsc
        notification
        notificationSound
        className="z-[9999]"
        buttonClassName="shadow-2xl hover:scale-110 transition-transform duration-200"
      />
    </div>
  );
}
