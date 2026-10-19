import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  business: z.string().trim().min(2, "Please enter your business name").max(120),
  website: z
    .string()
    .trim()
    .max(255)
    .refine(
      (value) => value.length === 0 || /^https?:\/\/[\w.-]+(?:\.[\w.-]+)+(?:[/?#].*)?$/i.test(value),
      "Please enter a full website address beginning with http",
    ),
  budget: z.string().min(1, "Please select a monthly budget"),
  challenge: z.string().trim().min(10, "Please tell us a little more").max(600),
  message: z.string().trim().max(1000),
});

type FieldName = keyof z.infer<typeof consultationSchema>;
type FormErrors = Partial<Record<FieldName, string>>;

const fieldClass =
  "h-12 rounded-sm border-border bg-background px-4 shadow-none focus-visible:ring-2";

export function ConsultationForm() {
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [prepared, setPrepared] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const result = consultationSchema.safeParse({ ...raw, budget });

    if (!result.success) {
      const nextErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as FieldName | undefined;
        if (field && !nextErrors[field]) nextErrors[field] = issue.message;
      }
      setPrepared(false);
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitError("");
    setPrepared(false);
    setSubmitting(true);

    const { name, email, business, website, challenge, message } = result.data;
    const payload = {
      name,
      email,
      business,
      website: website || "Not provided",
      budget,
      challenge,
      message: message || "Nothing added",
      _subject: `New Acquisition Labs consultation request — ${name}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello.acquisitionlabs@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { success?: string | boolean; message?: string };
      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message || "The form could not be sent. Please try again.");
      }
      setPrepared(true);
      form.reset();
      setBudget("");
    } catch {
      setSubmitError(
        "We couldn't send your request just now. Please email hello.acquisitionlabs@gmail.com directly, or try again in a moment.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5" aria-label="Consultation request">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" error={errors.name} required />
        <Field label="Work email" name="email" type="email" error={errors.email} required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Business name" name="business" error={errors.business} required />
        <Field
          label="Website"
          name="website"
          type="url"
          placeholder="https://"
          error={errors.website}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="budget">Monthly advertising budget</Label>
        <Select value={budget} onValueChange={setBudget}>
          <SelectTrigger id="budget" className={fieldClass} aria-invalid={Boolean(errors.budget)}>
            <SelectValue placeholder="Select a range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Under R10,000">Under R10,000</SelectItem>
            <SelectItem value="R10,000 to R25,000">R10,000 to R25,000</SelectItem>
            <SelectItem value="R25,000 to R50,000">R25,000 to R50,000</SelectItem>
            <SelectItem value="R50,000 or more">R50,000 or more</SelectItem>
            <SelectItem value="Not sure yet">Not sure yet</SelectItem>
          </SelectContent>
        </Select>
        <FieldError message={errors.budget} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="challenge">What is making lead generation difficult right now?</Label>
        <Textarea
          id="challenge"
          name="challenge"
          maxLength={600}
          rows={4}
          aria-invalid={Boolean(errors.challenge)}
          className="min-h-28 resize-y rounded-sm border-border bg-background px-4 py-3 shadow-none focus-visible:ring-2"
          placeholder="Tell us where leads are getting stuck"
        />
        <FieldError message={errors.challenge} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Anything else we should know?</Label>
        <Textarea
          id="message"
          name="message"
          maxLength={1000}
          rows={3}
          aria-invalid={Boolean(errors.message)}
          className="min-h-24 resize-y rounded-sm border-border bg-background px-4 py-3 shadow-none focus-visible:ring-2"
          placeholder="Optional"
        />
        <FieldError message={errors.message} />
      </div>
      <Button type="submit" disabled={submitting} size="lg" className="mt-1 h-13 w-full rounded-sm text-base font-semibold">
        {submitting ? "Sending your request…" : "Request Your Consultation"}
        <ArrowRight />
      </Button>
      {prepared ? (
        <p className="flex items-center gap-2 text-sm font-medium text-foreground" role="status">
          <CheckCircle2 className="h-4 w-4 text-blue-soft" />
          Your request has been submitted. We’ll be in touch to arrange your call.
        </p>
      ) : null}
      {submitError ? <p className="text-sm text-destructive" role="alert">{submitError}</p> : null}
      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        Your details are sent securely to our consultation inbox so we can follow up about your call.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required = false,
  ...props
}: {
  label: string;
  name: FieldName;
  error?: string | undefined;
  required?: boolean;
} & Omit<React.ComponentProps<typeof Input>, "name">) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        required={required}
        maxLength={name === "email" || name === "website" ? 255 : 120}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={fieldClass}
        {...props}
      />
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id?: string | undefined; message?: string | undefined }) {
  return message ? (
    <p id={id} className="text-sm text-destructive" role="alert">
      {message}
    </p>
  ) : null;
}