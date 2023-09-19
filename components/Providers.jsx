"use client";

import { SessionProvider } from "next-auth/react";

import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children, session }) => (
  <SessionProvider session={session}>
    <NextUIProvider>{children}</NextUIProvider>
  </SessionProvider>
);

export default Providers;
