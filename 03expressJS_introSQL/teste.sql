so coloco aqui pela corzinha. Copio e colo no cmd
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Victor Lima", 
    "email@teste.com",
    8
);

SELECT * FROM usuarios WHERE idade = 8;
SELECT * FROM usuarios WHERE nome = "lucas";
SELECT * FROM usuarios WHERE idade >= 18;
DELETE FROM usuarios (toda a tabela vai ser excluída)
DELETE FROM usuarios WHERE nome = "Victor Lima";
UPDATE usuarios SET nome = "Nome de Teste" (toda a tabela vai ser alterada)
UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Maria Clara";