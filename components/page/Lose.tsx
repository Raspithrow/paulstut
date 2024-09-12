// components/page/Lose.tsx
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
export default function Lose() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-b from-purple-500 to-pink-500 p-6 text-left align-middle shadow-xl transition-all">
            <div className="flex items-center justify-center">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationTriangleIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-red-600"
                />
              </div>
            </div>
            <div className="mt-3 text-center sm:mt-0">
              <DialogTitle
                as="h3"
                className="text-lg leading-6 font-bold text-white"
              >
                You Lose!
              </DialogTitle>
              <div className="mt-2">
                <p className="text-sm text-white">
                  Sorry, your score fell below zero. Better luck next time!
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-purple-600 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                onClick={() => router.push("/")}
              >
                Try Again
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
