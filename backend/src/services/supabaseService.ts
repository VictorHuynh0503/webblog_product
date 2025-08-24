// Example Supabase service
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
export const supabase = createClient(supabaseUrl, supabaseKey);

// Example function to fetch posts
export async function getPosts() {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) throw error;
  return data;
}
// ...add more Supabase functions here
