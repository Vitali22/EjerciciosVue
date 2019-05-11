const app = new Vue({
	el:'#app',
	data: {
		titulo: 'Frutas',
		frutas: [],
		nuevaFruta: '',
		indexn:'',
		position:'',
	},
	methods:{
		agregarFruta () {
			this.frutas.push(this.nuevaFruta);
			this.nuevaFruta ='';
		},
		quitarFruta () {
			this.frutas.pop();
		},
		borrarFruta () {
			this.frutas.splice(this.position,1);
		}
	}
})
