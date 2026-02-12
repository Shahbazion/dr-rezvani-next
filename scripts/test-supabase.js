// scripts/test-supabase.js
const { createClient } = require('@supabase/supabase-js')

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dacwkythkddcitajbora.supabase.co'
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_Kj4ZJYTEqYsupT_XmBNC7g_b1e0vJVB'

const supabase = createClient(url, anon)

async function run(){
  console.log('Testing Supabase connection to', url)
  const { data, error } = await supabase.from('posts').select('id,title').limit(1)
  if(error){
    console.error('SUPABASE ERROR:', error)
    process.exit(1)
  }
  console.log('OK — received rows:', data.length)
  console.log(data)
  process.exit(0)
}

run()
