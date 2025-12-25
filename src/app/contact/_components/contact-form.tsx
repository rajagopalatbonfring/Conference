// "use client";

// import { useFormState, useFormStatus } from "react-dom";
// import { handleContactForm, type ContactFormState } from "../actions";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { useEffect, useRef } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { Loader2, Send } from "lucide-react";
// import { cn } from "@/lib/utils";

// const initialState: ContactFormState = {
//   message: "",
//   error: false,
//   success: false,
// };

// function SubmitButton() {
//   const { pending } = useFormStatus();
//   return (
//     <Button type="submit" disabled={pending} className="w-full">
//       {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
//       Send Message
//     </Button>
//   );
// }

// export function ContactForm() {
//   const [state, formAction] = useFormState(handleContactForm, initialState);
//   const { toast } = useToast();
//   const formRef = useRef<HTMLFormElement>(null);

//   useEffect(() => {
//     if (state.message) {
//       if (state.error) {
//         toast({
//           title: "Error",
//           description: state.message,
//           variant: "destructive",
//         });
//       }
//       if (state.success) {
//         toast({
//           title: "Success",
//           description: state.message,
//         });
//         formRef.current?.reset();
//       }
//     }
//   }, [state, toast]);

//   return (
//     <form ref={formRef} action={formAction} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-2">
//           <Label htmlFor="name">Name</Label>
//           <Input id="name" name="name" placeholder="Your Name" required />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="email">Email</Label>
//           <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="phone">Phone (Optional)</Label>
//           <Input id="phone" name="phone" type="tel" placeholder="+1 234 567 890" />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="organization">Organization (Optional)</Label>
//           <Input id="organization" name="organization" placeholder="Your Organization" />
//         </div>
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="subject">Subject</Label>
//         <Select name="subject" required>
//             <SelectTrigger id="subject">
//                 <SelectValue placeholder="Select a subject" />
//             </SelectTrigger>
//             <SelectContent>
//                 <SelectItem value="General">General Inquiry</SelectItem>
//                 <SelectItem value="Submission">Paper Submission</SelectItem>
//                 <SelectItem value="Registration">Registration Issue</SelectItem>
//                 <SelectItem value="Technical">Technical Support</SelectItem>
//                 <SelectItem value="Sponsorship">Sponsorship Inquiry</SelectItem>
//                 <SelectItem value="Other">Other</SelectItem>
//             </SelectContent>
//         </Select>
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="message">Message</Label>
//         <Textarea
//           id="message"
//           name="message"
//           placeholder="Your message..."
//           rows={6}
//           required
//           minLength={50}
//           maxLength={2000}
//         />
//       </div>

//       <div className="flex items-center space-x-2">
//         <Checkbox id="subscribe" name="subscribe" />
//         <Label htmlFor="subscribe" className="text-sm font-normal">Subscribe to conference updates</Label>
//       </div>
      
//       {/* reCAPTCHA placeholder */}
//       <div className="text-xs text-muted-foreground">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>

//       {state.error && state.message && (
//         <p className={cn("text-sm font-medium text-destructive")}>{state.message}</p>
//       )}

//       <SubmitButton />
//     </form>
//   );
// }











"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleContactForm, type ContactFormState } from "../actions";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, CheckCircle2, User, Mail as MailIcon, Building, MessageSquare } from "lucide-react";

const initialState: ContactFormState = {
  message: "",
  error: false,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="w-5 h-5" />
          Send Message
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(handleContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.error) {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
      if (state.success) {
        toast({
          title: "Success",
          description: state.message,
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              id="name" 
              name="name" 
              placeholder="Your Full Name" 
              required
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="your.email@example.com" 
              required
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Phone and Organization Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
            Phone <span className="text-slate-400 text-xs">(Optional)</span>
          </label>
          <input 
            id="phone" 
            name="phone" 
            type="tel" 
            placeholder="+1 234 567 890"
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="organization" className="block text-sm font-bold text-slate-900 mb-2">
            Organization <span className="text-slate-400 text-xs">(Optional)</span>
          </label>
          <div className="relative">
            <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              id="organization" 
              name="organization" 
              placeholder="Your Organization"
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-bold text-slate-900 mb-2">
          Subject <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none z-10" />
          <select
            id="subject"
            name="subject"
            required
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
          >
            <option value="">Select a subject</option>
            <option value="General">General Inquiry</option>
            <option value="Submission">Paper Submission</option>
            <option value="Registration">Registration Issue</option>
            <option value="Technical">Technical Support</option>
            <option value="Sponsorship">Sponsorship Inquiry</option>
            <option value="Other">Other</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Please describe your inquiry in detail... (Minimum 50 characters)"
          rows={6}
          required
          minLength={50}
          maxLength={2000}
          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors resize-none"
        />
        <div className="text-xs text-slate-500 text-right">
          Minimum 50 characters, maximum 2000 characters
        </div>
      </div>

      {/* Subscribe Checkbox */}
      <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-100">
        <div className="flex items-start space-x-3">
          <input 
            type="checkbox"
            id="subscribe" 
            name="subscribe"
            className="w-5 h-5 mt-0.5 rounded border-2 border-emerald-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
          />
          <label htmlFor="subscribe" className="text-sm text-slate-700 cursor-pointer">
            <span className="font-semibold">Subscribe to conference updates</span>
            <span className="block text-xs text-slate-600 mt-1">
              Receive the latest news, announcements, and important dates for ICLEAS 2026
            </span>
          </label>
        </div>
      </div>
      
      {/* reCAPTCHA Notice */}
      <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg p-3">
        <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
        <span>
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a> and{' '}
          <a href="#" className="text-emerald-600 hover:underline">Terms of Service</a> apply.
        </span>
      </div>

      {/* Error Message */}
      {state.error && state.message && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div>
              <div className="font-bold text-red-900 mb-1">Error</div>
              <div className="text-sm text-red-700">{state.message}</div>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {state.success && state.message && (
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-emerald-900 mb-1">Success</div>
              <div className="text-sm text-emerald-700">{state.message}</div>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <SubmitButton />
    </form>
  );
}