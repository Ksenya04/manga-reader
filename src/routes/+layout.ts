import { invalidate } from '$app/navigation'
// import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/dynamic/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'
import type { LayoutLoad } from './$types'

const supabaseUrl = "https://tdgigulcrickrxcqzkvi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZ2lndWxjcmlja3J4Y3F6a3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzOTc3MTQsImV4cCI6MTk5NDk3MzcxNH0.ljFfkhZYxPTMkmnc37DP1g4tlo775gjx8eiNaxI4ROE";

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient({
    supabaseUrl: "https://tdgigulcrickrxcqzkvi.supabase.co", // PUBLIC_SUPABASE_URL,
    supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZ2lndWxjcmlja3J4Y3F6a3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzOTc3MTQsImV4cCI6MTk5NDk3MzcxNH0.ljFfkhZYxPTMkmnc37DP1g4tlo775gjx8eiNaxI4ROE", //PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}