var app = new Vue({
    el : '#app',
    data : {
        lista : [],
        nombre:'',
        primedio:''
    },
    methods: {
        agregarNota: function (){
            estadoA=false;
            if(this.promedio>=12.5){
                estadoA=true;
            }
            if(this.nombre!="" && this.promedio!=""){
                this.lista.push({nombre:this.nombre,promedio:this.promedio, estado:estadoA});
                this.nombre="";
                this.promedio="";
            }
            else{
                alert("Ingrese el nombre y promedio del estudiante");
            }
        }
    }
})

/*Propiedades de Vue
el:  Permite especificar qué elemento del DOM será controlado por nuestra instancia Vue
data:  Perimte almacenar las pripiedades que queremos exponer en nuestro template usando {{}}

methods
Permite implementar métodos a nuestro template, para realizar ciertas funcionalidades o retornar datos.
*/
