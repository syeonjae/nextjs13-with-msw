"use client";

import { useState, type PropsWithChildren, useEffect } from "react";

interface Props {}

export default function MSW({ children }: PropsWithChildren<Props>) {
  const isDev = process.env.NEXT_PUBLIC_API_MOCKING == "enabled";

  const [ready, setReady] = useState<boolean>(false);

  const init = async () => {
    if (isDev) {
      const initMock = await import("@/mocks/index").then(
        (res) => res.initMock
      );
      await initMock();
      setReady(true);
    }
  };

  useEffect(() => {
    if (!ready) init();
  }, [ready]);

  if (!isDev) return null;

  return <>{children}</>;
}
