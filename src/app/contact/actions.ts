"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

const budgets = ["under-5k", "5k-10k", "10k-25k", "25k-plus", "not-sure"] as const;

type ContactField = "name" | "email" | "budget" | "message";
type ContactFormErrors = Partial<Record<ContactField | "form", string>>;

export type ContactFormState = {
  ok: boolean;
  errors: ContactFormErrors;
  values: Record<ContactField, string>;
};

const emptyValues: ContactFormState["values"] = {
  name: "",
  email: "",
  budget: "",
  message: "",
};

function getString(formData: FormData, field: ContactField): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  void previousState;

  const values: ContactFormState["values"] = {
    name: getString(formData, "name"),
    email: getString(formData, "email"),
    budget: getString(formData, "budget"),
    message: getString(formData, "message"),
  };
  const errors: ContactFormErrors = {};

  if (values.name.length < 2 || values.name.length > 80) {
    errors.name = "Please enter a name between 2 and 80 characters.";
  }

  if (
    values.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!budgets.some((budget) => budget === values.budget)) {
    errors.budget = "Please choose a project budget.";
  }

  if (values.message.length < 20 || values.message.length > 2000) {
    errors.message = "Please enter a message between 20 and 2,000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, values };
  }

  if (process.env.NODE_ENV !== "development") {
    return {
      ok: false,
      errors: {
        form: "Message storage is only available in development right now. Please email hello@kingmanu.studio.",
      },
      values,
    };
  }

  const dataDirectory = path.join(process.cwd(), "data");
  const filePath = path.join(dataDirectory, "contact-submissions.jsonl");
  const submission = {
    ...values,
    createdAt: new Date().toISOString(),
  };

  try {
    await mkdir(dataDirectory, { recursive: true });
    await appendFile(filePath, `${JSON.stringify(submission)}\n`, "utf8");
  } catch (error) {
    console.error("Failed to save the contact submission locally.", error);
    return {
      ok: false,
      errors: {
        form: "We couldn’t save your message. Please try again or email hello@kingmanu.studio.",
      },
      values,
    };
  }

  return { ok: true, errors: {}, values: emptyValues };
}
