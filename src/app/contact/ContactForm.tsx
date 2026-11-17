"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = {
  ok: false,
  errors: {},
  values: {
    name: "",
    email: "",
    budget: "",
    message: "",
  },
};

const fieldClassName =
  "mt-2 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d5f66f]";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );
  const { errors, values } = state;

  return (
    <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 sm:p-8">
      {state.ok && (
        <p role="status" className="mb-6 rounded-xl bg-[#d5f66f]/10 p-4 text-sm text-[#d5f66f]">
          Thanks for reaching out. Your message has been saved, and we&apos;ll be in touch.
        </p>
      )}

      <form action={formAction} key={JSON.stringify(values)} noValidate>
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              minLength={2}
              maxLength={80}
              defaultValue={values.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={fieldClassName}
            />
            {errors.name && <p id="name-error" className="mt-2 text-sm text-[#ffb4a8]">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              defaultValue={values.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={fieldClassName}
            />
            {errors.email && <p id="email-error" className="mt-2 text-sm text-[#ffb4a8]">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="budget" className="text-sm font-medium text-white">Project budget</label>
            <select
              id="budget"
              name="budget"
              required
              defaultValue={values.budget}
              aria-invalid={Boolean(errors.budget)}
              aria-describedby={errors.budget ? "budget-error" : undefined}
              className={`${fieldClassName} appearance-none`}
            >
              <option value="" className="bg-[#17261f]">Select a budget</option>
              <option value="under-5k" className="bg-[#17261f]">Under $5,000</option>
              <option value="5k-10k" className="bg-[#17261f]">$5,000–$10,000</option>
              <option value="10k-25k" className="bg-[#17261f]">$10,000–$25,000</option>
              <option value="25k-plus" className="bg-[#17261f]">$25,000+</option>
              <option value="not-sure" className="bg-[#17261f]">Not sure yet</option>
            </select>
            {errors.budget && <p id="budget-error" className="mt-2 text-sm text-[#ffb4a8]">{errors.budget}</p>}
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-white">Tell us a little about it</label>
            <textarea
              id="message"
              name="message"
              required
              minLength={20}
              maxLength={2000}
              rows={5}
              defaultValue={values.message}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${fieldClassName} resize-y`}
            />
            {errors.message && <p id="message-error" className="mt-2 text-sm text-[#ffb4a8]">{errors.message}</p>}
          </div>
        </div>

        {errors.form && (
          <p role="alert" className="mt-5 text-sm text-[#ffb4a8]">{errors.form}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#d5f66f] px-6 text-sm font-semibold text-[#17261f] transition-colors hover:bg-[#c3e85c] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send your message"}
        </button>
      </form>

      <p className="mt-4 text-xs leading-5 text-white/45">
        Your details are only used to respond to your enquiry.
      </p>
    </div>
  );
}
