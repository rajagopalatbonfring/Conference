"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  organization: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(50, { message: "Message must be at least 50 characters." }).max(2000, { message: "Message must be less than 2000 characters." }),
  subscribe: z.string().optional(),
});

export type ContactFormState = {
  message: string;
  error: boolean;
  success: boolean;
};

export async function handleContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    organization: formData.get("organization"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    subscribe: formData.get("subscribe"),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors.map(e => e.message).join(" ");
    return {
      message: errorMessages,
      error: true,
      success: false,
    };
  }

  // Simulate sending an email
  console.log("Form data submitted:", validatedFields.data);

  return {
    message: "Thank you for your message! We will get back to you shortly.",
    error: false,
    success: true,
  };
}
