import axios from "axios"

export const ingresarEstudianteFachada = (bodyEstudiante) =>{
    ingresarEstudiante(bodyEstudiante)
}



const ingresarEstudiante = (bodyEstudiante) =>{
    axios.post(`http://localhost:8081/API/V1.0/Inscripcion/estudiantes`, bodyEstudiante).then(r => r.data);
    console.log('Se ha insertado un estudiante')
}















