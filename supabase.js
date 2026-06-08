import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ajhpvuoyhviyjfkpctxg.supabase.co";

const SUPABASE_ANON_KEY = "COLOCA_AQUI_A_TUA_KEY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
