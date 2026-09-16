"use client";
import { useState, useCallback } from "react";

export function useToast() {
  const [toast, setToast] = useState<{ msg: string; visible: boolean }>({
    msg: "",
    visible: false,
  });

  const show = useCallback((msg: string) => {
    setToast({ msg, visible: true });
    setTimeout(() => setToast({ msg: "", visible: false }), 3000);
  }, []);

  return { toast, show };
}