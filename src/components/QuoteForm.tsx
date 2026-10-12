import { useState } from "react";
import { Send, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/data/assets";
import { Reveal } from "@/hooks/useReveal";

const SERVICE_OPTIONS = [
  "Courier",
  "Tour Bus / Party Bus",
  "Medical Ride (NEMT)",
  "Casino Trip",
  "Beach Ride",
  "Other",
];

const RIDE_SERVICES = new Set([
  "Tour Bus / Party Bus",
  "Medical Ride (NEMT)",
  "Casino Trip",
  "Beach Ride",
  "Other",
]);

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  pickup: string;
  destination: string;
  passengers: string;
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  pickup: "",
  destination: "",
  passengers: "",
  message: "",
};

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const showPassengers = RIDE_SERVICES.has(form.service);

  const set = <K extends keyof FormState>(k: K, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter a phone number we can reach you at.";
    else if (form.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.service) e.service = "Please pick a service.";
    if (!form.pickup.trim()) e.pickup = "Please enter a pickup location.";
    if (showPassengers && (!form.passengers || Number(form.passengers) < 1))
      e.passengers = "Please enter how many passengers.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    // Build a mailto body as a working fallback so the form never silently fails.
    // PLACEHOLDER: Connect a real backend (e.g. Formspree, Netlify Forms, or your own endpoint).
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email || "—"}`,
        `Service: ${form.service}`,
        `Date: ${form.date || "—"}`,
        `Pickup: ${form.pickup}`,
        `Destination: ${form.destination || "—"}`,
        showPassengers ? `Passengers: ${form.passengers}` : null,
        `Message: ${form.message || "—"}`,
      ]
        .filter(Boolean)
        .join("\n")
    );
    const subject = encodeURIComponent(`Quote request from ${form.name} — ${form.service}`);
    // Try mailto fallback (non-blocking). In production, replace with a fetch() to your form endpoint.
    window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-[0.98rem] text-navy-900 shadow-sm transition-colors placeholder:text-navy-400 focus:outline-none focus:ring-4 focus:ring-teal-200 ${
      errors[field] ? "border-red-400 focus:border-red-500" : "border-navy-200 focus:border-teal-500"
    }`;

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-teal-50/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-sun-100 px-3.5 py-1 text-[0.75rem] font-700 uppercase tracking-wider text-sun-700">
              Request a Quote
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 text-navy-800 sm:text-4xl md:text-5xl">
              Let's Get You Moving
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-700/85">
              Tell us a little about what you need — we'll confirm details and get you on the schedule.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={submit}
              noValidate
              className="rounded-3xl border border-navy-100 bg-white p-6 shadow-xl sm:p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-teal-100 text-teal-700">
                    <CheckCircle2 className="h-8 w-8" strokeWidth={2.3} />
                  </div>
                  <h3 className="font-display text-2xl font-800 text-navy-800">Thanks! We'll contact you shortly.</h3>
                  <p className="max-w-md text-navy-700/85">
                    Your request was sent. If your email app didn't open automatically, you can also reach us
                    directly by call or text.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={`tel:${BUSINESS.phoneTel}`}
                      className="inline-flex items-center gap-2 rounded-full bg-sun-600 px-5 py-2.5 text-[0.95rem] font-700 text-white"
                    >
                      <Phone className="h-4 w-4" /> Call {BUSINESS.phoneDisplay}
                    </a>
                    <a
                      href={`sms:${BUSINESS.phoneSms}`}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-navy-800 bg-white px-5 py-2.5 text-[0.95rem] font-700 text-navy-800"
                    >
                      <MessageSquare className="h-4 w-4" /> Text Us
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initial);
                    }}
                    className="mt-2 text-[0.88rem] font-600 text-teal-700 underline decoration-sun-400 underline-offset-4"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" required error={errors.name} className="sm:col-span-2">
                    <input
                      id="f-name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass("name")}
                      placeholder="Your full name"
                    />
                  </Field>

                  <Field label="Phone" required error={errors.phone}>
                    <input
                      id="f-phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={inputClass("phone")}
                      placeholder="(___) ___-____"
                    />
                  </Field>

                  <Field label="Email" error={errors.email}>
                    <input
                      id="f-email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputClass("email")}
                      placeholder="you@example.com"
                    />
                  </Field>

                  <Field label="Service" required error={errors.service} className="sm:col-span-2">
                    <select
                      id="f-service"
                      value={form.service}
                      onChange={(e) => set("service", e.target.value)}
                      className={inputClass("service")}
                    >
                      <option value="">Choose a service…</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Preferred Date">
                    <input
                      id="f-date"
                      type="date"
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                      className={inputClass("date")}
                    />
                  </Field>

                  {showPassengers ? (
                    <Field label="Number of Passengers" required error={errors.passengers}>
                      <input
                        id="f-passengers"
                        type="number"
                        min={1}
                        value={form.passengers}
                        onChange={(e) => set("passengers", e.target.value)}
                        className={inputClass("passengers")}
                        placeholder="e.g. 10"
                      />
                    </Field>
                  ) : (
                    <Field label="&nbsp;">
                      <div className="rounded-xl border border-navy-100 bg-navy-50/40 px-4 py-3 text-[0.85rem] text-navy-700">
                        Passenger count not needed for courier deliveries.
                      </div>
                    </Field>
                  )}

                  <Field label="Pickup Location" required error={errors.pickup} className="sm:col-span-2">
                    <input
                      id="f-pickup"
                      type="text"
                      value={form.pickup}
                      onChange={(e) => set("pickup", e.target.value)}
                      className={inputClass("pickup")}
                      placeholder="Street address or landmark"
                    />
                  </Field>

                  <Field label="Destination" className="sm:col-span-2">
                    <input
                      id="f-destination"
                      type="text"
                      value={form.destination}
                      onChange={(e) => set("destination", e.target.value)}
                      className={inputClass("destination")}
                      placeholder="Where to? (optional for courier pickup)"
                    />
                  </Field>

                  <Field label="Message" className="sm:col-span-2">
                    <textarea
                      id="f-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      className={inputClass("message")}
                      placeholder="Anything else we should know? Wheelchair access, timing, group details…"
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sun-600 px-7 py-3.5 text-base font-700 text-white shadow-lg shadow-sun-600/25 transition-all hover:bg-sun-700 hover:-translate-y-0.5 sm:w-auto"
                    >
                      <Send className="h-4 w-4" /> Send Request
                    </button>
                    <p className="mt-3 text-[0.82rem] text-navy-600">
                      We typically respond within a few hours during the day. For fastest service, call or text.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="space-y-4">
              <div className="rounded-3xl bg-gradient-to-br from-navy-800 to-teal-700 p-6 text-white shadow-xl">
                <h3 className="font-display text-xl font-800">Prefer to talk?</h3>
                <p className="mt-2 text-[0.98rem] text-navy-100/90">
                  We're happy to help by phone or text — fastest way to lock in your ride.
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href={`tel:${BUSINESS.phoneTel}`}
                    className="flex items-center justify-center gap-2 rounded-full bg-sun-600 px-5 py-3 text-[0.98rem] font-700 text-white shadow-lg shadow-sun-600/30"
                  >
                    <Phone className="h-4 w-4" /> Call {BUSINESS.phoneDisplay}
                  </a>
                  <a
                    href={`sms:${BUSINESS.phoneSms}`}
                    className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-[0.98rem] font-700 text-white ring-1 ring-white/25 hover:bg-white/20"
                  >
                    <MessageSquare className="h-4 w-4" /> Text {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm">
                <h4 className="font-display text-lg font-700 text-navy-800">Email</h4>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="mt-1 block break-all text-[0.98rem] font-600 text-teal-700 hover:underline"
                >
                  {BUSINESS.email}
                </a>
                <p className="mt-1 text-[0.82rem] text-navy-600">
                  [PLACEHOLDER] Replace with the real business email.
                </p>
                <div className="mt-4 border-t border-navy-100 pt-4">
                  <h4 className="font-display text-lg font-700 text-navy-800">Service Area</h4>
                  <p className="mt-1 text-[0.95rem] text-navy-700">{BUSINESS.area} and nearby areas</p>
                </div>
                <div className="mt-4 border-t border-navy-100 pt-4">
                  <h4 className="font-display text-lg font-700 text-navy-800">Hours</h4>
                  <p className="mt-1 text-[0.95rem] text-navy-700">{BUSINESS.hours}</p>
                  <p className="mt-1 text-[0.82rem] text-navy-600">[PLACEHOLDER] Replace with real hours.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-[0.88rem] font-600 text-navy-800">
        {label} {required && <span className="text-sun-600">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-[0.8rem] font-600 text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
