import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ataebbudnojpauzvhbot.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0YWViYnVkbm9qcGF1enZoYm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5NDE1MTYsImV4cCI6MjA3MTUxNzUxNn0.dsypfmGD20HACwjyFyR0gEh58D33MEym8S3uc0t4qZU';
export const supabase = createClient(supabaseUrl, supabaseKey);
