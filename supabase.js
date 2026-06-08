import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ajhpvuoyhviyjfkpcxg.supabase.co";
const SUPABASE_ANON_KEY = "A_TUA_CHAVE_AQUI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
