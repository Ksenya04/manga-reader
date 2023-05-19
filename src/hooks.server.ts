// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import type { Handle } from '@sveltejs/kit'

const supabaseUrl = "https://tdgigulcrickrxcqzkvi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZ2lndWxjcmlja3J4Y3F6a3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzOTc3MTQsImV4cCI6MTk5NDk3MzcxNH0.ljFfkhZYxPTMkmnc37DP1g4tlo775gjx8eiNaxI4ROE";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: "https://tdgigulcrickrxcqzkvi.supabase.co",
    supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZ2lndWxjcmlja3J4Y3F6a3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzOTc3MTQsImV4cCI6MTk5NDk3MzcxNH0.ljFfkhZYxPTMkmnc37DP1g4tlo775gjx8eiNaxI4ROE",
    event,
  })

  /**
   * A convenience helper so we can just call await getSession() instead const { data: { session } } = await supabase.auth.getSession()
   */
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }

  return resolve(event, {
    /**
     * There´s an issue with `filterSerializedResponseHeaders` not working when using `sequence`
     *
     * https://github.com/sveltejs/kit/issues/8061
     */
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })
}