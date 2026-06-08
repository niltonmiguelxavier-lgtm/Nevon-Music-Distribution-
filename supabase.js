import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "COLOCA_AQUI_URL_DO_SUPABASE";
const SUPABASE_ANON_KEY = "COLOCA_AQUI_ANON_KEY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
