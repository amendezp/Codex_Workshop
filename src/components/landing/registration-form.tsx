"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useWorkshopStore } from "@/store/workshop-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, PartyPopper } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof schema>;

export function RegistrationForm() {
  const { isRegistered, email, setRegistration, hydrateFromServer } =
    useWorkshopStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });
      const result = await res.json();
      if (result.progress) {
        hydrateFromServer(result.progress);
      }
    } catch {
      // Server might be down — continue with local-only mode
    }
    setRegistration(data.email);
  };

  return (
    <AnimatePresence>
      {(
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {isRegistered ? (
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
              <PartyPopper className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="mb-1 font-serif text-lg font-semibold text-foreground">
                You&apos;re all set!
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Registered as{" "}
                <span className="font-medium text-foreground">{email}</span>
              </p>
              <Link href="/cheat-sheet">
                <Button size="lg" className="gap-2">
                  Continue to Workshop
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="mb-4 text-center">
                <Mail className="mx-auto mb-2 h-6 w-6 text-primary" />
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  All prerequisites met!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Enter your email to register and track your progress.
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto flex max-w-md gap-3"
              >
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="you@stanford.edu"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Registering..." : "Register"}
                </Button>
              </form>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
