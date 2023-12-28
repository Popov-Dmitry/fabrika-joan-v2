"use client";

import Title from "@/components/elements/title";
import styles from "./index.module.css";
import axios from "axios";
import { useState } from "react";
import { getDemoEndpoint } from "@/app/actions";
import Button from "@/components/elements/button/Button";
import Input from "@/components/elements/input/Input";
import JoinWaitlistForm from "@/components/elements/join-waitlist-form";
import Image from "next/image";

const options = {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
};

const getDocsBasedByPrompt = async (prompt, setLoading, onSuccessCallback) => {
  setLoading(true);
  try {
    const { endpoint } = await getDemoEndpoint();
    const { data } = await axios.post(
      endpoint,
      {
        user_query: prompt
      },
      options
    );
    setLoading(false);
    onSuccessCallback(data.message);
  } catch (error) {
    setLoading(false);
    console.log(error);
    return error;
  }
};

const Joan = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(
    "Long text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
    // ""
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    getDocsBasedByPrompt(prompt, setLoading, setResponse);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.joan}>
      <div id="joan" className={styles.joanAnchor} />
      <div className={styles.joanContainer}>
        <Title>Tell Joan <br /> what you are building</Title>
        <Image
          className={styles.demoImage}
          src="/joan_shape.png"
          alt=""
          width={212}
          height={212}
        />
        <div className={styles.demo}>
          <div className={styles.demoHeader}>
            <Input placeholder="Try typing what you are building or selling" />
            <Button className={styles.demoButton} text="Analyze" onClick={handleSubmit} />
          </div>
          {(loading || response) && (
            <div className={styles.demoBody}>
              {loading && (
                <svg className={styles.spinner} viewBox="0 0 50 50">
                  <circle
                    className={styles.path}
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                  />
                </svg>
              )}
              {!loading && response}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Joan;
