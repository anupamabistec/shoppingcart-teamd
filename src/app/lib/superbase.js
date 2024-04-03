// lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hleajrvjcqpwviinsdmy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZWFqcnZqY3Fwd3ZpaW5zZG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMzQ3NjQsImV4cCI6MjAyNzcxMDc2NH0.9lAMemyYsD1FSTv7EVM2ZbBnl0KVyzxuJDiU4hpYt38';

export const supabase = createClient(supabaseUrl, supabaseKey);
