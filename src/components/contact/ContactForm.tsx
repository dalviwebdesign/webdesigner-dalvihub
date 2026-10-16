import React, { useState } from 'react';
import { Send, CheckCircle, MessageSquare, Mail, Copy, Check, AlertCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  projectDescription: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  projectDescription?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Business Website Design',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., name@example.com).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone or WhatsApp number.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Phone number should be at least 8 digits.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your website requirements.';
    } else if (formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = 'Please provide at least 10 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowDemoModal(true);
    }, 350);
  };

  const formattedWhatsAppText = encodeURIComponent(
    `Hello Mahesh,\n\nI would like to enquire about website design for my business.\n\n*Name:* ${formData.fullName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Project Overview:* ${formData.projectDescription}\n\nLooking forward to hearing from you!`
  );

  const whatsappDirectUrl = `https://wa.me/919869850188?text=${formattedWhatsAppText}`;

  const emailSubject = encodeURIComponent(`Website Design Inquiry: ${formData.service} - ${formData.fullName}`);
  const emailBody = encodeURIComponent(
    `Hello Mahesh,\n\nI would like to enquire about website design for my business.\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nProject Requirements:\n${formData.projectDescription}\n\nRegards,\n${formData.fullName}`
  );
  const emailDirectUrl = `mailto:mahesh@dalvihub.com?subject=${emailSubject}&body=${emailBody}`;

  const copyToClipboard = () => {
    const textToCopy = `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nRequirements: ${formData.projectDescription}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl"
      >
        <div className="border-b border-slate-800 pb-4">
          <h3 className="text-xl font-bold text-white">Send a Project Enquiry</h3>
          <p className="text-xs text-slate-400 mt-1">
            Fill in your project requirements below. For immediate chat, you can also reach Mahesh directly via WhatsApp.
          </p>
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Your Full Name <span className="text-rose-400">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
              errors.fullName
                ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/20'
                : 'border-slate-800 focus:border-cyan-400'
            }`}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Email Address <span className="text-rose-400">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. yourname@company.com"
              className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                errors.email
                  ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/20'
                  : 'border-slate-800 focus:border-cyan-400'
              }`}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Phone / WhatsApp <span className="text-rose-400">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98000 00000"
              className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                errors.phone
                  ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/20'
                  : 'border-slate-800 focus:border-cyan-400'
              }`}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Service Required <span className="text-rose-400">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          >
            <option value="Business Website Design">Business Website Design</option>
            <option value="WordPress Website Design">WordPress Website Design</option>
            <option value="Landing Page Design">Landing Page Design</option>
            <option value="Website Redesign / Consultation">Website Redesign / Consultation</option>
          </select>
        </div>

        {/* Project Description */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="projectDescription" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Project Overview & Requirements <span className="text-rose-400">*</span>
            </label>
            <span className="text-[11px] text-slate-400">
              {formData.projectDescription.length} characters
            </span>
          </div>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows={4}
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Tell Mahesh about your business, the goals for your website, and any specific preferences or reference websites you admire..."
            className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
              errors.projectDescription
                ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/20'
                : 'border-slate-800 focus:border-cyan-400'
            }`}
            aria-invalid={Boolean(errors.projectDescription)}
            aria-describedby={errors.projectDescription ? 'desc-error' : undefined}
          />
          {errors.projectDescription && (
            <p id="desc-error" className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.projectDescription}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Preparing Enquiry...</span>
            ) : (
              <>
                <span>Submit Website Enquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-[11px] text-slate-400 text-center mt-2.5">
            Clear Communication · No spam · Direct reply from Mahesh Dalvi
          </p>
        </div>
      </form>

      {/* Transparent Demo Notice & Transmission Modal */}
      {showDemoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in"
        >
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-750 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  Enquiry Form Validated
                </h4>
                <div className="text-xs text-amber-400 font-medium mt-0.5">
                  Static Host Demo Notice
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              This website is hosted statically without a third-party form aggregator. To make sure your enquiry reaches Mahesh directly without delay, send your formatted message via WhatsApp or Email:
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1.5 font-mono">
              <div><strong className="text-slate-400">Name:</strong> {formData.fullName}</div>
              <div><strong className="text-slate-400">Service:</strong> {formData.service}</div>
              <div><strong className="text-slate-400">Phone:</strong> {formData.phone}</div>
              <div className="truncate"><strong className="text-slate-400">Notes:</strong> {formData.projectDescription}</div>
            </div>

            {/* Direct Send Buttons */}
            <div className="space-y-2.5">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp (+91 9869850188)</span>
              </a>

              <a
                href={emailDirectUrl}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Send via Email ({siteConfig.email})</span>
              </a>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowDemoModal(false)}
                  className="py-2 px-4 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
