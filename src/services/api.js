import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://txpjgrmbtobmktevwsbl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cGpncm1idG9ibWt0ZXZ3c2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI4ODQwNTEsImV4cCI6MTk2ODQ2MDA1MX0.LBrzctTEyS7tOIu1RG9ZqP89k9vDec2wVP7S1OZZJwE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;