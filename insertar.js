import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://mqrkihjpgfavgjfglmur.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcmtpaGpwZ2ZhdmdqZmdsbXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NDU1MDQsImV4cCI6MjEwODIyMTUwNH0.-NphsUrCeNT9K8me85-Vnb8WfiSctBMhXVorUHnIXrU'
)

async function insertarEstudiante() {
  const { data, error } = await supabase
    .from('estudiantes')
    .insert([{ nombre: 'Marcelo Jair Morales Esquivel', carrera: 'Ingeniería Biomédica' }])
    .select()

  if (error) {
    console.log('Error:', error)
  } else {
    console.log('Insertado:', data)
  }
}

insertarEstudiante()