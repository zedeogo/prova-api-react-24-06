import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function consultar() {
	const resp = await api.get('/pet');
	return resp.data;
}

export async function cadastrar(nome) {
	const resp = await api.post('/pet', {
		name: nome
	});
	return resp.data;
}