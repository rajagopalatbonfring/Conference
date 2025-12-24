"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleContactForm, type ContactFormState } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {
  message: "",
  error: false,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+1 234 567 890" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="organization">Organization (Optional)</Label>
          <Input id="organization" name="organization" placeholder="Your Organization" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Select name="subject" required>
            <SelectTrigger id="subject">
                <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="General">General Inquiry</SelectItem>
                <SelectItem value="Submission">Paper Submission</SelectItem>
                <SelectItem value="Registration">Registration Issue</SelectItem>
                <SelectItem value="Technical">Technical Support</SelectItem>
                <SelectItem value="Sponsorship">Sponsorship Inquiry</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={6}
          required
          minLength={50}
          maxLength={2000}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="subscribe" name="subscribe" />
        <Label htmlFor="subscribe" className="text-sm font-normal">Subscribe to conference updates</Label>
      </div>
      
      {/* reCAPTCHA placeholder */}
      <div className="text-xs text-muted-foreground">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>

      {state.error && state.message && (
        <p className={cn("text-sm font-medium text-destructive")}>{state.message}</p>
      )}

      <SubmitButton />
    </form>
  );
}
