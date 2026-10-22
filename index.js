import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mqrkihjpgfavgjfglmur.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcmtpaGpwZ2ZhdmdqZmdsbXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NDU1MDQsImV4cCI6MjEwODIyMTUwNH0.-NphsUrCeNT9K8me85-Vnb8WfiSctBMhXVorUHnIXrU'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes(){
    const{ data, error }=await supabase
    .from('estudiantes')
    .select('*')

    if(error){
        console.log('Error:', error)
    } else{
        console.log('Datos:', data)
    }
}

obtenerEstudiantes()