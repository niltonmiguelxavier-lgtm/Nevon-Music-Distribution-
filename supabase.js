import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ajhpvuoyhviyjfkpctxg.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_UhYFCXMFdJgA94RKrhb_Fg_G2lUcDKN";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
