// lib/supabase.js
import { createClient } from '@supabase/supabase-js';


export const supabase = createClient(supabaseUrl, supabaseKey);
