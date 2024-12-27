import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kfwfdgisafuspcdfihil.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmd2ZkZ2lzYWZ1c3BjZGZpaGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyNTcwNTIsImV4cCI6MjA1MDgzMzA1Mn0.3JQfVRbFNsvO0sEGoibS8nKiK-k5JuoOUYxi7zFcdJM";
export const supabase = createClient(supabaseUrl, supabaseKey);
