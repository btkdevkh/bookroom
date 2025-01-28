"use client";

import Heading from "@/components/Heading";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import createUser from "../actions/createUser";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(createUser, {});

  useEffect(() => {
    if (state.error) toast.error(state.error);

    if (state.success) {
      toast.success("Account created");
      router.push("/login");
    }
  }, [state, router]);

  return (
    <form className="max-w-96 mx-auto flex flex-col gap-4" action={formAction}>
      <Heading title="Register" />

      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="28"
            strokeDashoffset="28"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.4s"
                values="28;0"
              />
            </path>
            <path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.4s"
                dur="0.4s"
                values="28;0"
              />
            </path>
          </g>
        </svg>
        <input type="text" className="grow" placeholder="Name" name="name" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" className="grow" placeholder="Email" name="email" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>

        <input
          type="password"
          className="grow"
          name="password"
          placeholder="Password"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          className="grow"
          name="confirm-password"
          placeholder="Confirm Password"
        />
      </label>

      <button className="btn btn-primary text-white">Register</button>

      <div className="text-center">
        <span>
          Alreaday have an Account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </span>
      </div>
    </form>
  );
};

export default RegisterPage;
