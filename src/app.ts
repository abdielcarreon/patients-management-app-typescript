import './style.css' // Importando las directivas de tailwind al proyecto
import { pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario } from './selectores'
import { datosCita, submitCita } from './funciones'

// Eventos
pacienteInput?.addEventListener('change', datosCita) // "? => Optional chaning para indicar a typescript que si existen dichos elementos"
propietarioInput?.addEventListener('change', datosCita) // "? => Optional chaning para indicar a typescript que si existen dichos elementos"
emailInput?.addEventListener('change', datosCita) // "? => Optional chaning para indicar a typescript que si existen dichos elementos"
fechaInput?.addEventListener('change', datosCita) // "? => Optional chaning para indicar a typescript que si existen dichos elementos"
sintomasInput?.addEventListener('change', datosCita) // "? => Optional chaning para indicar a typescript que si existen dichos elementos"
formulario?.addEventListener('submit', submitCita) // "? => Optional chaning para indicar a typescript que si existen dichos elementos"