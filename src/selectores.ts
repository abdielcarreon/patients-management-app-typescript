// Selectores
export const pacienteInput = document.querySelector('#paciente') as HTMLInputElement // "as HTMLInputElement" Confirma a TypeScript que el elemento existe o existirá
export const propietarioInput = document.querySelector('#propietario') as HTMLInputElement // "as HTMLInputElement" Confirma a TypeScript que el elemento existe o existirá
export const emailInput = document.querySelector('#email') as HTMLInputElement // "as HTMLInputElement" Confirma a TypeScript que el elemento existe o existirá
export const fechaInput = document.querySelector('#fecha') as HTMLInputElement // "as HTMLInputElement" Confirma a TypeScript que el elemento existe o existirá
export const sintomasInput = document.querySelector('#sintomas') as HTMLTextAreaElement // "as HTMLTextAreaElement" Confirma a TypeScript que el elemento existe o existirá

export const formulario = document.querySelector('#formulario-cita') as HTMLFormElement // "as HTMLFormElement" Confirma a TypeScript que el elemento existe o existirá
export const formularioInput = document.querySelector('#formulario-cita input[type="submit"]') as HTMLInputElement // "as HTMLInputElement" Confirma a TypeScript que el elemento existe o existirá
export const contenedorCitas = document.querySelector('#citas') as HTMLDivElement // "as HTMLDivElement" Confirma a TypeScript que el elemento existe o existirá
