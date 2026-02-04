"use client";

import * as React from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section>
      <div className="mb-5">
        <h1 className="text-xl font-semibold text-white mb-2">Contact</h1>
        <p className="text-sm text-zinc-400">
          Get in touch for any inquiries or collaboration opportunities.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
        <div className="space-y-3">
          <Label htmlFor="name" className="text-sm font-medium text-white">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="border-zinc-700"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="email" className="text-sm font-medium text-white">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="border-zinc-700"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="message" className="text-sm font-medium text-white">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={6}
            className="border-zinc-700 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          variant="ghost"
          size="sm"
          className="text-xs rounded-sm border border-zinc-700"
        >
          {isSubmitted
            ? "Message Sent!"
            : isSubmitting
              ? "Sending..."
              : "Send Message"}
          {!isSubmitting && !isSubmitted && <Send className="ml-2 h-4 w-4" />}
        </Button>
      </form>
    </section>
  );
}
