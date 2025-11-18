// Initialize Supabase client

// Your Supabase project credentials:
const SUPABASE_URL = "https://nybedwlsvqcfgxrruredz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55YmVkd2xzdnFjZmd4cnVyZWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMzAyNTAsImV4cCI6MjA1MjcwNjI1MH0.8o_DjtkSbD7P-9xpgW5EykDbqZfXYI3czcSKltl4p0o";

// Load Supabase JS SDK (via CDN)
const s = document.createElement("script");
s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js";
s.onload = () => {
    window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("Supabase initialized");
};
document.head.appendChild(s);