
"use client";

import { createClient } from "@/lib/supabase/client";
import { type SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

const SupabaseContext = createContext<SupabaseClient | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createClient());

  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
};
