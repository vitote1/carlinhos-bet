import AsyncStorage from "@react-native-async-storage/async-storage";

let contas = []; 


const listarUsers = async () => {
    const dados = await AsyncStorage.getItem('usuarios');
    const usuarios = dados ? JSON.parse(dados) : [];
    return usuarios;
}



const adicionarUsuario = async (nome, novoEmail, senha, cpf) => {
    const contas = await listarUsers();

    if (await verificarExistencia(novoEmail, cpf, senha)) {
        throw new Error('Conta já cadastrada');
    }

    const novoUser = {
        id: contas.length + 1,
        nome: nome,
        email: novoEmail,
        senha: senha,
        cpf: cpf,
        saldo: 0
    };

    contas.push(novoUser);
    await AsyncStorage.setItem('usuarios', JSON.stringify(contas));

    return novoUser;
};

const verificarExistencia = async (email, senha) => {
    const usuarios = await listarUsers();
    return usuarios.some(
        (user) => (user.email === email && user.senha === senha) 
    );
};

export { listarUsers, adicionarUsuario, verificarExistencia };