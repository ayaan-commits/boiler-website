"use client";

import { useState, FormEvent, useEffect } from "react";
import { Send } from "lucide-react";
import { services } from "@/data/siteConfig";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      console.log("Form submitted:", formData);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div role="status" aria-live="polite" aria-atomic="true" className="bg-success/10 border-2 border-success rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-success mb-2">
          Thank You!
        </h3>
        <p className="text-text-secondary">
          We've received your enquiry and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Contact enquiry form" className="space-y-5">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-text-primary mb-2"
        >
          Name <span className="text-alert">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
          aria-required="true"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
            errors.name
              ? "border-alert focus:ring-alert/50"
              : "border-warm-grey"
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-alert text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-text-primary mb-2"
        >
          Email <span className="text-alert">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
          aria-required="true"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
            errors.email
              ? "border-alert focus:ring-alert/50"
              : "border-warm-grey"
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-alert text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-text-primary mb-2"
        >
          Phone Number <span className="text-alert">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          aria-invalid={!!errors.phone}
          aria-required="true"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
            errors.phone
              ? "border-alert focus:ring-alert/50"
              : "border-warm-grey"
          }`}
          placeholder="0123 456 7890"
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="text-alert text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Service Dropdown */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-text-primary mb-2"
        >
          Service Required <span className="text-alert">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          aria-describedby={errors.service ? "service-error" : undefined}
          aria-invalid={!!errors.service}
          aria-required="true"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none bg-white ${
            errors.service
              ? "border-alert focus:ring-alert/50"
              : "border-warm-grey"
          }`}
        >
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className="text-alert text-sm mt-1">{errors.service}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-text-primary mb-2"
        >
          Message <span className="text-alert">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          aria-required="true"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${
            errors.message
              ? "border-alert focus:ring-alert/50"
              : "border-warm-grey"
          }`}
          placeholder="Please provide details about your enquiry..."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-alert text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="w-full bg-accent hover:bg-accent-dark text-white px-7 py-4 rounded-lg font-semibold transition-colors shadow-lg shadow-accent/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" aria-hidden="true" />
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>

      <p className="text-xs text-text-muted text-center">
        We'll respond within 24 hours. For emergencies, please call{" "}
        <a href="tel:01234567890" className="text-alert font-semibold">
          0123 456 7890
        </a>
      </p>
    </form>
  );
}
