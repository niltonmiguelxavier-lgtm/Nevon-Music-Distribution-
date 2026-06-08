// supabase.js

// Substitua com as suas credenciais Supabase
const SUPABASE_URL = 'https://[YOUR_SUPABASE_PROJECT_ID].supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('Supabase client initialized:', supabase);
