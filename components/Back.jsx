"use client";

import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

function Back({ title }) {
  const router = useRouter();

  return (
    <div
      className="w-48 btn btn-ghost flex gap-4 items-center justify-start mb-4"
      onClick={() => router.back()}
    >
      <FaChevronLeft />
      <h2>{title}</h2>
    </div>
  );
}

export default Back;
