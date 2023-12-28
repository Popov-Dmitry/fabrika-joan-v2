"use client";

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";

import styles from "./index.module.css";
import { addToWaitlist } from "@/app/actions";
import Button from "@/components/elements/button/Button";
import Input from "@/components/elements/input/Input";

const initialState = {
  email: null
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return <Button className={styles.submitButton} type="submit" pending={pending} text="Join waitlist" />;
};

const JoinWaitlistForm = () => {
  const [state, formAction] = useFormState(addToWaitlist, initialState);
  const formRef = useRef();

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
      formRef.current?.reset();
    }

    if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <>
      <form className={styles.form} ref={formRef} action={formAction}>
        <div className={styles.emailInputs}>
          <Input
            className={styles.emailInput}
            type="email"
            name="email"
            label="Email:"
            placeholder="john@doe.com"
            required
          />
          <SubmitButton />
        </div>
      </form>
      <div className={styles.toaster}>
        <Toaster richColors position="bottom-right" />
      </div>
    </>
  );
};

export default JoinWaitlistForm;
