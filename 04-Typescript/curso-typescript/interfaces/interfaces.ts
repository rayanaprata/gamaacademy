interface Usuario {
  nome: string;
  email: string;
  address?: string;
}
function getUser(): Usuario {
  return {
    nome: 'Rayana',
    email: 'rayanaprata@uol.com.br'
  }
}

function setUser(user: Usuario) {
  // ...
}