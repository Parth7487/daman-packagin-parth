
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Email to company (with reply-to set to sender's email)
    const companyEmailResponse = await resend.emails.send({
      from: "Daman Packaging <onboarding@resend.dev>",
      to: ["sales1@damanpackaging.com", "parthpp1666@gmail.com"],
      subject: `New Contact Form Message: ${subject}`,
      reply_to: email,
      html: `
        <h1>New Message from Website Contact Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Email confirmation to the sender
    const senderEmailResponse = await resend.emails.send({
      from: "Daman Packaging <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Daman Packaging",
      html: `
        <h1>Thank you for contacting us!</h1>
        <p>Dear ${name},</p>
        <p>We have received your message regarding "${subject}" and will get back to you as soon as possible.</p>
        <p>For your records, here is a copy of your message:</p>
        <blockquote>${message.replace(/\n/g, '<br>')}</blockquote>
        <p>Best regards,<br/>The Daman Packaging Team</p>
      `,
    });

    console.log("Emails sent successfully:", {
      companyEmail: companyEmailResponse,
      senderEmail: senderEmailResponse
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully!" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
