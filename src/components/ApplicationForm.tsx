"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteContent } from "@/content/site";
import {
  applicationSchema,
  ApplicationFormData,
} from "@/lib/applicationSchema";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Loader2,
  Check,
} from "lucide-react";

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const headingRef = useRef<HTMLHeadingElement>(null);
  // Sentinel: skip the focus effect on initial mount so the page doesn't scroll
  // to #apply when it first loads.
  const isMountedRef = useRef(false);
  const totalSteps = siteContent.form.totalSteps;

  const {
    register,
    handleSubmit,
    watch,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    mode: "onChange",
    defaultValues: {
      timePostpartum: undefined,
      deliveryType: undefined,
      doctorCleared: undefined,
      isBreastfeeding: undefined,
      primaryGoal: undefined,
      trainingLocation: undefined,
      trainingDays: undefined,
      biggestStruggle: "",
      monthlyInvestment: undefined,
      fullName: "",
      email: "",
      phoneNumber: "",
      instagramHandle: "",
      consent: false as unknown as true,
      honeypot: "",
    },
  });

  // Shift focus to step heading on step change for a11y.
  // Guard: skip the very first render so the browser doesn't scroll to #apply on load.
  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [currentStep]);

  // Watch field values for real-time step validity
  const timePostpartum = watch("timePostpartum");
  const deliveryType = watch("deliveryType");
  const doctorCleared = watch("doctorCleared");
  const isBreastfeeding = watch("isBreastfeeding");
  const primaryGoal = watch("primaryGoal");
  const trainingLocation = watch("trainingLocation");
  const trainingDays = watch("trainingDays");
  const biggestStruggle = watch("biggestStruggle") || "";
  const monthlyInvestment = watch("monthlyInvestment");
  const fullName = watch("fullName") || "";
  const email = watch("email") || "";
  const consent = watch("consent");

  // Determine if current step can proceed
  const isEmailValid = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  let isCurrentStepValid = false;
  let inlineStepError = "";

  switch (currentStep) {
    case 1:
      isCurrentStepValid = Boolean(timePostpartum);
      if (!isCurrentStepValid) inlineStepError = "Please select an option to continue";
      break;
    case 2:
      isCurrentStepValid = Boolean(deliveryType);
      if (!isCurrentStepValid) inlineStepError = "Please select an option to continue";
      break;
    case 3:
      isCurrentStepValid = Boolean(doctorCleared);
      if (!isCurrentStepValid) inlineStepError = "Please select an option to continue";
      break;
    case 4:
      isCurrentStepValid = Boolean(isBreastfeeding);
      if (!isCurrentStepValid) inlineStepError = "Please select an option to continue";
      break;
    case 5:
      isCurrentStepValid = Boolean(primaryGoal);
      if (!isCurrentStepValid) inlineStepError = "Please select your primary goal";
      break;
    case 6:
      isCurrentStepValid = Boolean(trainingLocation) && Boolean(trainingDays);
      if (!trainingLocation) {
        inlineStepError = "Please choose where you plan to train";
      } else if (!trainingDays) {
        inlineStepError = "Please choose how many days per week";
      }
      break;
    case 7:
      isCurrentStepValid =
        biggestStruggle.trim().length >= 5 && biggestStruggle.length <= 500;
      if (biggestStruggle.trim().length < 5) {
        inlineStepError = "Please share at least a few words (min 5 characters)";
      }
      break;
    case 8:
      isCurrentStepValid = Boolean(monthlyInvestment);
      if (!isCurrentStepValid) inlineStepError = "Please select an option to continue";
      break;
    case 9:
      isCurrentStepValid =
        fullName.trim().length >= 2 && isEmailValid(email) && Boolean(consent);
      if (fullName.trim().length < 2) {
        inlineStepError = "Please enter your full name";
      } else if (!isEmailValid(email)) {
        inlineStepError = "Please enter a valid email address";
      } else if (!consent) {
        inlineStepError = "Please accept the privacy policy to submit";
      }
      break;
    default:
      isCurrentStepValid = true;
  }

  const handleNext = () => {
    if (isCurrentStepValid && currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data: ApplicationFormData) => {
    // If honeypot is filled, silent exit
    if (data.honeypot && data.honeypot.trim().length > 0) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => null);

      if (res.ok && json?.ok) {
        setIsSuccess(true);
      } else {
        setSubmitError(
          json?.message || siteContent.form.navigation.errorMessage
        );
      }
    } catch {
      setSubmitError(siteContent.form.navigation.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS SCREEN
  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl border border-blush p-8 sm:p-14 text-center shadow-sm max-w-2xl mx-auto animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-blush text-crimson flex items-center justify-center mx-auto mb-6 shadow-xs">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-deep mb-4">
          Application Received!
        </h3>
        <p className="text-base sm:text-lg text-deep/90 leading-relaxed max-w-lg mx-auto">
          {siteContent.apply.afterSubmit}
        </p>

        {/* What happens next — confirmed flow */}
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">
            What happens next
          </p>
          <ol className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
            {siteContent.apply.afterApplySteps.map((step, i) => (
              <li key={step} className="flex items-center gap-3 sm:gap-0">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-blush text-accent flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="mt-2 text-xs sm:text-sm font-medium text-deep text-center max-w-[90px]">
                    {step}
                  </span>
                </div>
                {i < siteContent.apply.afterApplySteps.length - 1 && (
                  <span className="hidden sm:block w-10 h-px bg-blush mx-2 mb-5 shrink-0" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  const progressPercentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-blush/80 shadow-md p-6 sm:p-10 transition-all">
      {/* Progress Bar & Counter */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-muted mb-2.5">
          <span className="text-crimson font-black">
            {siteContent.form.steps[currentStep as keyof typeof siteContent.form.steps]?.stepLabel ||
              `Step ${currentStep} of ${totalSteps}`}
          </span>
          <span>{progressPercentage}% Completed</span>
        </div>
        <div
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Application progress"
          className="w-full h-2.5 bg-blush/60 rounded-full overflow-hidden"
        >
          <div
            className="h-full bg-crimson rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col flex-1">
        {/* Hidden Honeypot Bot Trap */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="hp_field">Leave this empty</label>
          <input
            id="hp_field"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("honeypot")}
          />
        </div>

        {/* Step Content Wrapper: Keeps step area at a stable height so buttons don't jump */}
        <div className="min-h-[440px] sm:min-h-[400px] flex flex-col justify-start">
          {/* STEP 1: Time since giving birth */}
          {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="text-xl sm:text-2xl font-extrabold text-deep focus:outline-none"
              >
                {siteContent.form.steps[1].title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {siteContent.form.steps[1].subtitle}
              </p>
            </div>

            <div
              role="radiogroup"
              aria-label={siteContent.form.steps[1].title}
              className="space-y-3"
            >
              {siteContent.form.steps[1].options.map((option) => {
                const isSelected = timePostpartum === option;
                return (
                  <label
                    key={option}
                    className={`cursor-pointer p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-crimson ${
                      isSelected
                        ? "border-coral-pink bg-blush shadow-xs ring-2 ring-coral-pink/30"
                        : "border-blush bg-white hover:border-coral-pink/40 hover:bg-blush-light/50"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-bold text-deep">
                      {option}
                    </span>
                    <input
                      type="radio"
                      value={option}
                      {...register("timePostpartum")}
                      className="sr-only"
                    />
                    <div
                      aria-hidden="true"
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected
                          ? "border-crimson bg-crimson"
                          : "border-muted/40 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Delivery type */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="text-xl sm:text-2xl font-extrabold text-deep focus:outline-none"
              >
                {siteContent.form.steps[2].title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {siteContent.form.steps[2].subtitle}
              </p>
            </div>

            <div
              role="radiogroup"
              aria-label={siteContent.form.steps[2].title}
              className="space-y-3"
            >
              {siteContent.form.steps[2].options.map((option) => {
                const isSelected = deliveryType === option;
                return (
                  <label
                    key={option}
                    className={`cursor-pointer p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-crimson ${
                      isSelected
                        ? "border-coral-pink bg-blush shadow-xs ring-2 ring-coral-pink/30"
                        : "border-blush bg-white hover:border-coral-pink/40 hover:bg-blush-light/50"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-bold text-deep">
                      {option}
                    </span>
                    <input
                      type="radio"
                      value={option}
                      {...register("deliveryType")}
                      className="sr-only"
                    />
                    <div
                      aria-hidden="true"
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected
                          ? "border-crimson bg-crimson"
                          : "border-muted/40 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Doctor Clearance */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="text-xl sm:text-2xl font-extrabold text-deep focus:outline-none"
              >
                {siteContent.form.steps[3].title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {siteContent.form.steps[3].subtitle}
              </p>
            </div>

            <div
              role="radiogroup"
              aria-label={siteContent.form.steps[3].title}
              className="space-y-3"
            >
              {siteContent.form.steps[3].options.map((option) => {
                const isSelected = doctorCleared === option;
                return (
                  <label
                    key={option}
                    className={`cursor-pointer p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-crimson ${
                      isSelected
                        ? "border-coral-pink bg-blush shadow-xs ring-2 ring-coral-pink/30"
                        : "border-blush bg-white hover:border-coral-pink/40 hover:bg-blush-light/50"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-bold text-deep">
                      {option}
                    </span>
                    <input
                      type="radio"
                      value={option}
                      {...register("doctorCleared")}
                      className="sr-only"
                    />
                    <div
                      aria-hidden="true"
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected
                          ? "border-crimson bg-crimson"
                          : "border-muted/40 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                    </div>
                  </label>
                );
              })}
            </div>

            {/* Gentle Note if "No" or "Not sure yet" */}
            {(doctorCleared === "No" || doctorCleared === "Not sure yet") && (
              <div className="p-4 rounded-2xl bg-blush border-l-4 border-crimson text-sm font-semibold text-deep animate-fade-up">
                {siteContent.form.steps[3].gentleNote}
              </div>
            )}
          </div>
        )}

        {/* STEP 4: Breastfeeding */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="text-xl sm:text-2xl font-extrabold text-deep focus:outline-none"
              >
                {siteContent.form.steps[4].title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {siteContent.form.steps[4].subtitle}
              </p>
            </div>

            <div
              role="radiogroup"
              aria-label={siteContent.form.steps[4].title}
              className="space-y-3"
            >
              {siteContent.form.steps[4].options.map((option) => {
                const isSelected = isBreastfeeding === option;
                return (
                  <label
                    key={option}
                    className={`cursor-pointer p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-crimson ${
                      isSelected
                        ? "border-coral-pink bg-blush shadow-xs ring-2 ring-coral-pink/30"
                        : "border-blush bg-white hover:border-coral-pink/40 hover:bg-blush-light/50"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-bold text-deep">
                      {option}
                    </span>
                    <input
                      type="radio"
                      value={option}
                      {...register("isBreastfeeding")}
                      className="sr-only"
                    />
                    <div
                      aria-hidden="true"
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected
                          ? "border-crimson bg-crimson"
                          : "border-muted/40 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: Primary Goal */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="text-xl sm:text-2xl font-extrabold text-deep focus:outline-none"
              >
                {siteContent.form.steps[5].title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {siteContent.form.steps[5].subtitle}
              </p>
            </div>

            <div
              role="radiogroup"
              aria-label={siteContent.form.steps[5].title}
              className="space-y-3"
            >
              {siteContent.form.steps[5].options.map((option) => {
                const isSelected = primaryGoal === option;
                return (
                  <label
                    key={option}
                    className={`cursor-pointer p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-crimson ${
                      isSelected
                        ? "border-coral-pink bg-blush shadow-xs ring-2 ring-coral-pink/30"
                        : "border-blush bg-white hover:border-coral-pink/40 hover:bg-blush-light/50"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-bold text-deep">
                      {option}
                    </span>
                    <input
                      type="radio"
                      value={option}
                      {...register("primaryGoal")}
                      className="sr-only"
                    />
                    <div
                      aria-hidden="true"
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected
                          ? "border-crimson bg-crimson"
                          : "border-muted/40 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 6: Location & Days */}
        {currentStep === 6 && (
          <div className="space-y-8">
            <div>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="text-xl sm:text-2xl font-extrabold text-deep focus:outline-none"
              >
                {siteContent.form.steps[6].title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {siteContent.form.steps[6].subtitle}
              </p>
            </div>

            {/* Sub-group 1: Location */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-deep">
                {siteContent.form.steps[6].locationTitle}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {siteContent.form.steps[6].locationOptions.map((option) => {
                  const isSelected = trainingLocation === option;
                  return (
                    <label
                      key={option}
                      className={`cursor-pointer p-4 rounded-2xl border-2 transition-all text-center flex items-center justify-between has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-crimson ${
                        isSelected
                          ? "border-coral-pink bg-blush shadow-xs ring-2 ring-coral-pink/30"
                          : "border-blush bg-white hover:border-coral-pink/40 hover:bg-blush-light/50"
                      }`}
                    >
                      <span className="text-base font-bold text-deep">
                        {option}
                      </span>
                      <input
                        type="radio"
                        value={option}
                        {...register("trainingLocation")}
                        className="sr-only"
                      />
                      <div
                        aria-hidden="true"
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          isSelected
                            ? "border-crimson bg-crimson"
                            : "border-muted/40 bg-white"
                        }`}
                      >
                        {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Sub-group 2: Days per week */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-deep">
                {siteContent.form.steps[6].daysTitle}
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {siteContent.form.steps[6].daysOptions.map((option) => {
                  const isSelected = trainingDays === option;
                  return (
                    <label
                      key={option}
                      className={`cursor-pointer p-4 rounded-2xl border-2 transition-all text-center flex flex-col items-center justify-center gap-1 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-crimson ${
                        isSelected
                          ? "border-coral-pink bg-blush shadow-xs ring-2 ring-coral-pink/30"
                          : "border-blush bg-white hover:border-coral-pink/40 hover:bg-blush-light/50"
                      }`}
                    >
                      <span className="text-lg font-black text-deep">
                        {option}
                      </span>
                      <span className="text-2xs uppercase text-muted font-bold">
                        Days
                      </span>
                      <input
                        type="radio"
                        value={option}
                        {...register("trainingDays")}
                        className="sr-only"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 7: Biggest Struggle */}
        {currentStep === 7 && (
          <div className="space-y-6">
            <div>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="text-xl sm:text-2xl font-extrabold text-deep focus:outline-none"
              >
                {siteContent.form.steps[7].title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {siteContent.form.steps[7].subtitle}
              </p>
            </div>

            <div className="space-y-2">
              <textarea
                rows={5}
                maxLength={siteContent.form.steps[7].maxChars}
                placeholder={siteContent.form.steps[7].placeholder}
                {...register("biggestStruggle")}
                className="w-full p-4 rounded-2xl border-2 border-blush focus:border-coral-pink focus:outline-none focus:ring-2 focus:ring-coral-pink/20 text-deep text-base resize-none placeholder:text-muted/60"
              />
              <div className="flex justify-between items-center text-xs text-muted px-1">
                <span>Min 5 characters</span>
                <span
                  className={
                    biggestStruggle.length >= 480
                      ? "text-crimson font-bold"
                      : "text-muted"
                  }
                >
                  {biggestStruggle.length} / {siteContent.form.steps[7].maxChars}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 8: Monthly Investment */}
        {currentStep === 8 && (
          <div className="space-y-6">
            <div>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="text-xl sm:text-2xl font-extrabold text-deep focus:outline-none"
              >
                {siteContent.form.steps[8].title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {siteContent.form.steps[8].subtitle}
              </p>
            </div>

            <div
              role="radiogroup"
              aria-label={siteContent.form.steps[8].title}
              className="space-y-3"
            >
              {siteContent.form.steps[8].options.map((option) => {
                const isSelected = monthlyInvestment === option;
                return (
                  <label
                    key={option}
                    className={`cursor-pointer p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-crimson ${
                      isSelected
                        ? "border-coral-pink bg-blush shadow-xs ring-2 ring-coral-pink/30"
                        : "border-blush bg-white hover:border-coral-pink/40 hover:bg-blush-light/50"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-bold text-deep pr-3">
                      {option}
                    </span>
                    <input
                      type="radio"
                      value={option}
                      {...register("monthlyInvestment")}
                      className="sr-only"
                    />
                    <div
                      aria-hidden="true"
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "border-crimson bg-crimson"
                          : "border-muted/40 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 9: Contact Details */}
        {currentStep === 9 && (
          <div className="space-y-6">
            <div>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="text-xl sm:text-2xl font-extrabold text-deep focus:outline-none"
              >
                {siteContent.form.steps[9].title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {siteContent.form.steps[9].subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="full-name-input"
                  className="block text-xs font-bold uppercase tracking-wider text-deep mb-1.5"
                >
                  {siteContent.form.steps[9].nameLabel}
                </label>
                <input
                  id="full-name-input"
                  type="text"
                  placeholder={siteContent.form.steps[9].namePlaceholder}
                  {...register("fullName")}
                  className="w-full p-4 rounded-2xl border-2 border-blush focus:border-coral-pink focus:outline-none focus:ring-2 focus:ring-coral-pink/20 text-deep text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email-input"
                  className="block text-xs font-bold uppercase tracking-wider text-deep mb-1.5"
                >
                  {siteContent.form.steps[9].emailLabel}
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder={siteContent.form.steps[9].emailPlaceholder}
                  {...register("email")}
                  className="w-full p-4 rounded-2xl border-2 border-blush focus:border-coral-pink focus:outline-none focus:ring-2 focus:ring-coral-pink/20 text-deep text-base"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone-input"
                  className="block text-xs font-bold uppercase tracking-wider text-deep mb-1.5"
                >
                  {siteContent.form.steps[9].phoneLabel}{" "}
                  <span className="text-muted font-normal">
                    {siteContent.form.steps[9].phoneOptional}
                  </span>
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  placeholder={siteContent.form.steps[9].phonePlaceholder}
                  {...register("phoneNumber")}
                  className="w-full p-4 rounded-2xl border-2 border-blush focus:border-coral-pink focus:outline-none focus:ring-2 focus:ring-coral-pink/20 text-deep text-base"
                />
              </div>

              {/* Instagram Handle */}
              <div>
                <label
                  htmlFor="instagram-input"
                  className="block text-xs font-bold uppercase tracking-wider text-deep mb-1.5"
                >
                  {siteContent.form.steps[9].instagramLabel}{" "}
                  <span className="text-muted font-normal">
                    {siteContent.form.steps[9].instagramOptional}
                  </span>
                </label>
                <input
                  id="instagram-input"
                  type="text"
                  placeholder={siteContent.form.steps[9].instagramPlaceholder}
                  {...register("instagramHandle")}
                  className="w-full p-4 rounded-2xl border-2 border-blush focus:border-coral-pink focus:outline-none focus:ring-2 focus:ring-coral-pink/20 text-deep text-base"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    {...register("consent")}
                    className="w-5 h-5 rounded border-2 border-crimson text-crimson focus:ring-crimson mt-0.5"
                  />
                  <span className="text-xs sm:text-sm text-deep/90 leading-snug">
                    I agree to be contacted about coaching and accept the{" "}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-crimson underline font-bold hover:text-crimson-hover"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Error Message & Retry */}
            {submitError && (
              <div className="p-4 rounded-2xl bg-crimson/10 border border-crimson/30 text-crimson text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-up">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{submitError}</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-3.5 py-1.5 bg-crimson text-white rounded-xl text-xs font-bold hover:bg-crimson-hover transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
                >
                  {siteContent.form.navigation.retryButton}
                </button>
              </div>
            )}
          </div>
        )}
        </div>

        {/* Fixed-height slot for inline step validation hint: Prevents buttons from jumping */}
        <div className="h-6 mt-3 flex items-center">
          {!isCurrentStepValid && inlineStepError ? (
            <div className="text-xs font-semibold text-muted flex items-center gap-1.5 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-pink shrink-0" />
              <span>{inlineStepError}</span>
            </div>
          ) : null}
        </div>

        {/* Bottom Navigation Buttons: Fixed position across all steps */}
        <div className="flex items-center justify-between gap-4 mt-4 pt-6 border-t border-blush">
          <button
            type="button"
            onClick={handlePrev}
            className={`inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-deep transition-colors px-4 py-2.5 rounded-full hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta ${
              currentStep > 1
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none select-none invisible"
            }`}
            tabIndex={currentStep > 1 ? 0 : -1}
            aria-hidden={currentStep <= 1}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{siteContent.form.navigation.prevButton}</span>
          </button>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              variant="primary"
              size="md"
              disabled={!isCurrentStepValid}
              onClick={handleNext}
              className="font-semibold text-sm px-7 py-3 shadow-xs min-w-[130px] justify-center"
            >
              <span>{siteContent.form.navigation.nextButton}</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={!isCurrentStepValid || isSubmitting}
              className="font-bold text-sm sm:text-base px-8 py-3.5 uppercase tracking-wider shadow-xs min-w-[170px] justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  <span>{siteContent.form.navigation.submittingButton}</span>
                </>
              ) : (
                <span>{siteContent.form.navigation.submitButton}</span>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
