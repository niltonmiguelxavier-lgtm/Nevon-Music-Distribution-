// supabase.js

const SUPABASE_URL = 'https://ajhpvuoyhviyjfkpctxg.supabase.co';

const SUPABASE_ANON_KEY = 'sb_publishable_UhYFCXMFdJgA94RKrhb_Fg_G2lUcDKN';

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

console.log('Supabase client initialized:', supabase);
