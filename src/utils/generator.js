const NOMES_MASCULINO = [
    'Miguel', 'Davi', 'Gabriel', 'Arthur', 'Lucas', 'Matheus', 'Pedro', 'Guilherme', 'Gustavo',
    'Rafael', 'Felipe', 'Bernardo', 'Enzo', 'Nicolas', 'Cauã', 'Vitor', 'Eduardo', 'Daniel',
    'Henrique', 'Murilo', 'Vinícius', 'Samuel', 'Pietro', 'Leonardo', 'Caio', 'Heitor', 'Lorenzo',
    'Isaac', 'Lucca', 'Thiago', 'João', 'Theo', 'Bruno', 'Bryan', 'Breno', 'Emanuel', 'Ryan', 'Erick',
    'Yuri', 'Benjamin', 'Fernando', 'Joaquim', 'André', 'Tomás', 'Francisco', 'Rodrigo', 'Igor',
    'Antonio', 'Ian', 'Juan', 'Diogo', 'Otávio', 'Nathan', 'Calebe', 'Danilo', 'Luan', 'Kaique',
    'Alexandre', 'Iago', 'Ricardo', 'Raul', 'Marcelo', 'Cauê', 'Benício', 'Augusto', 'Giovanni',
    'Renato', 'Diego', 'Renan', 'Anthony', 'Thales', 'Henry', 'Kevin', 'Levi', 'Enrico', 'Hugo',
];

const NOMES_FEMININO = [
    'Helena', 'Alice', 'Laura', 'Manuela', 'Valentina', 'Sophia', 'Isabella', 'Heloísa',
    'Luíza', 'Júlia', 'Lorena', 'Lívia', 'Cecília', 'Eloá', 'Giovanna', 'Mariana',
    'Lara', 'Beatriz', 'Antonella', 'Emanuelly', 'Isadora', 'Melissa', 'Esther', 'Lavínia',
    'Maitê', 'Sarah', 'Elisa', 'Liz', 'Yasmin', 'Isabelly', 'Alícia', 'Clara', 'Isis', 'Rebeca',
    'Rafaela', 'Marina', 'Agatha', 'Gabriela', 'Catarina', 'Letícia', 'Mirella', 'Nicole',
    'Luna', 'Olívia', 'Vitória', 'Maria', 'Allana', 'Milena', 'Emilly', 'Ayla', 'Maya',
    'Bianca', 'Clarice', 'Aurora', 'Larissa', 'Mariah', 'Pietra', 'Laís', 'Stella', 'Eduarda',
    'Carolina', 'Malu', 'Gabrielly', 'Analu', 'Amanda', 'Louise', 'Heloise', 'Fernanda',
    'Ana', 'Melina', 'Bella', 'Joana', 'Isabel', 'Melinda', 'Pérola',
];

const SOBRENOMES = [
    'Almeida', 'Alves', 'Andrade', 'Barbosa', 'Barros', 'Batista',
    'Borges', 'Campos', 'Cardoso', 'Carvalho', 'Castro', 'Costa',
    'Dias', 'Duarte', 'Freitas', 'Fernandes', 'Ferreira', 'Garcia',
    'Gomes', 'Gonçalves', 'Lima', 'Lopes', 'Machado', 'Marques',
    'Martins', 'Medeiros', 'Melo', 'Mendes', 'Miranda', 'Monteiro',
    'Moraes', 'Moreira', 'Moura', 'Nascimento', 'Nunes', 'Oliveira',
    'Pereira', 'Ramos', 'Reis', 'Ribeiro', 'Rocha', 'Santana', 'Santos',
    'Silva', 'Soares', 'Souza', 'Teixeira', 'Vieira',
];

class generator {
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    cnpj() {
        const rnd = (n) => Math.round(Math.random() * n);
        const n = Array(8).fill('').map(() => rnd(8));
    
        n.push(0);
        n.push(0);
        n.push(0);
        n.push(1);
    
        let d1 = n.reduce((total, number, index) => (total + (number * ((((index<4)?0:1)*8) + (5-index)))), 0)
        d1 = 11 - d1%11;
        if (d1>=10) d1 = 0;
    
        n.push(d1)
        
        let d2 = n.reduce((total, number, index) => (total + (number * ((((index<5)?0:1)*8) + (6-index)))), 0)
        d2 = 11 - d2%11;
        if (d2>=10) d2 = 0;
    
        n.push(d2)
        
        return `${n.join('')}`
    }

    cpf() {
        const rnd = (n) => Math.round(Math.random() * n);
        const mod = (base, div) => Math.round(base - Math.floor(base / div) * div)
        const n = Array(9).fill('').map(() => rnd(9));
    
        let d1 = n.reduce((total, number, index) => (total + (number * (10 - index))), 0)
        d1 = 11 - mod(d1, 11);
        if (d1 >= 10) d1 = 0;
        
        let d2 = (d1 * 2) + n.reduce((total, number, index) => (total + (number * (11 - index))), 0)
        d2 = 11 - mod(d2, 11);
        if (d2 >= 10) d2 = 0;
    
        return `${n.join('')}${d1}${d2}`
    }

    uuid() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, (c) => {  
            const r = Math.floor(Math.random() * 16);  
            return r.toString(16);  
        });  
    }

    fone() {
        let fone = `${this.getRandomInt(parseInt("11"), parseInt("99"))}${this.getRandomInt(parseInt("90000"), parseInt("99999"))}${this.getRandomInt(parseInt("0000"), parseInt("9999"))}`
        return fone
    }

    email() {
        let email
        let isMan = this.getRandomInt(0, 1)

        email = (isMan) ? `${NOMES_MASCULINO[this.getRandomInt(0, NOMES_MASCULINO.length - 1)]}` : `${NOMES_FEMININO[this.getRandomInt(0, NOMES_FEMININO.length - 1)]}`
        
        email += `.${SOBRENOMES[this.getRandomInt(0, SOBRENOMES.length - 1)]}@qamockdata.com`

        return email.toLowerCase()
    }

    name() {
        let name
        let isMan = this.getRandomInt(0, 1)

        name = (isMan) ? `${NOMES_MASCULINO[this.getRandomInt(0, NOMES_MASCULINO.length - 1)]}` : `${NOMES_FEMININO[this.getRandomInt(0, NOMES_FEMININO.length - 1)]}`
        
        name += ` ${SOBRENOMES[this.getRandomInt(0, SOBRENOMES.length - 1)]} ${SOBRENOMES[this.getRandomInt(0, SOBRENOMES.length - 1)]}`

        return name
    }
}

export default new generator()