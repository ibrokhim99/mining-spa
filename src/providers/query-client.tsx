"use client"

import * as React from "react"

import {
  QueryClientProvider as QCProvider,
  QueryClient,
  isServer,
} from "@tanstack/react-query"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

export default function QueryClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = getQueryClient()

  return (
    <QCProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QCProvider>
  )
}
