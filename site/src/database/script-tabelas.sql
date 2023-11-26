 create database  if not exists projetoIndividual;
use projetoIndividual;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45) unique,
telefone char(11),
senha varchar(45),
confirmarSenha varchar(45));
select * from usuario;
    
create table tentativa(
idTentativa int auto_increment,
erros int,
acertos int,
fkUsuario int,
primary key(idTentativa, fkUsuario),
constraint fkUsuario foreign key(fkUsuario)
	references usuario(idUsuario));
select * from tentativa;
    
 create table aldeia(
idAldeia int primary key auto_increment,
nome varchar(45),
fkKagePersonagem int
);

alter table aldeia add constraint foreign key(fkKagePersonagem) 
	references personagem(idPersonagem);

select * from aldeia;

insert into aldeia(nome, fkKagePersonagem) values
	('Vila da Folha', '1'),
    ('Vila da Areia', '2');

update aldeia set fkKagePersonagem = 11
	where idAldeia = 5;
    
update aldeia set fkKagePersonagem = 12
	where idAldeia = 6;

create table personagem(
idPersonagem int primary key auto_increment,
nome varchar(45),
fkAldeia int);

alter table personagem add constraint foreign key(fkAldeia) 
	references aldeia(idAldeia);

insert into personagem(nome) values
	('Naruto Uzumaki'),
    ('Sakura Haruno'),
    ('Sasuke Uchiha'),
    ('Kakashi Hatake'),
    ('Jiraiya'),
    ('Hinata Hyuga'),
    ('Gaara'),
    ('Shikamaru Nara'),
    ('Neji Hyuga'),
    ('Minato Namikaze');
 insert into personagem(nome) values
	('Hokage'),
    ('kazekage');
    
select * from personagem;
    
UPDATE personagem SET fkAldeia = '5' 
	WHERE idPersonagem = '1';
UPDATE personagem SET fkAldeia = '5' 
	WHERE idPersonagem = '2';
UPDATE personagem SET fkAldeia = '5' 
	WHERE idPersonagem = '3';
UPDATE personagem SET fkAldeia = '5' 
	WHERE idPersonagem = '4';
UPDATE personagem SET fkAldeia = '5' 
	WHERE idPersonagem = '5';
UPDATE personagem SET fkAldeia = '5' 
	WHERE idPersonagem = '6';
UPDATE personagem SET fkAldeia = '6' 
	WHERE idPersonagem = '7';
UPDATE personagem SET fkAldeia = '5' 
	WHERE idPersonagem = '8';
UPDATE personagem SET fkAldeia = '5' 
	WHERE idPersonagem = '9';
UPDATE personagem SET fkAldeia = '5' 
	WHERE idPersonagem = '10';
UPDATE personagem SET fkAldeia = '5' 
	WHERE idPersonagem = '11';
UPDATE personagem SET fkAldeia = '6' 
	WHERE idPersonagem = '12';

create table favoritos(
idFavorito int auto_increment,
fkUsuarioFav int,
fkPersonagem int,
favoritado TINYINT,
nomeCard varchar(45),
naoFavoritado TINYINT,
primary key(idFavorito, fkUsuarioFav, fkPersonagem),
constraint fkFav foreign key(idFavorito)
	references personagem(idPersonagem),
constraint fkUs foreign key(fkUsuarioFav)
	references usuario(idUsuario) 
);
select * from favoritos;

select * from usuario
	join tentativa 
		on idUsuario = fkusuario;
        
select usuario.nome, usuario.email from usuario;

select usuario.email, usuario.senha from usuario;

select usuario.email, usuario.senha from usuario
	where idUsuario = 1;

select * from usuario
	join tentativa 
		on idUsuario = fkusuario
			where idUsuario = 1;
            
select usuario.nome, tentativa.erros from usuario 
	join tentativa
		on idUsuario = fkUsuario;

select usuario.nome, tentativa.acertos from usuario 
	join tentativa
		on idUsuario = fkUsuario;
            
select count(idTentativa) as totalTentativas, sum(erros) as totalErros, sum(acertos) as totalAcertos from tentativa 
	where fkUsuario = 1;

select tentativa.idTentativa as totalTentativas, tentativa.erros as totalErros, tentativa.acertos as totalAcertos from tentativa
	where tentativa.fkUsuario = 1;
    
select * from personagem 
	join aldeia 
		on idAldeia =fkAldeia;
        
select personagem.nome, aldeia.idAldeia from personagem
	join aldeia
		on idAldeia=fkAldeia
			where aldeia.idAldeia = 6;
        
select personagem.nome, aldeia.nome from personagem
	join aldeia
		on idAldeia=fkAldeia
			where personagem.nome = 'Naruto Uzumaki';
            
select personagem.nome, aldeia.nome from personagem
	join aldeia
		on idAldeia=fkAldeia
			where personagem.nome like 'S_%';
		
select personagem.nome, aldeia.nome from personagem
	join aldeia
		on idAldeia=fkAldeia
			where personagem.nome like '%e%';
            
select personagem.nome, aldeia.nome from personagem
	join aldeia
		on idAldeia=fkAldeia
			where personagem.nome like '%_a';
        
select personagem.nome, aldeia.nome from personagem
	join aldeia
		on idAldeia=fkAldeia;
        
select personagem.nome, aldeia.fkKagePersonagem from personagem
	join aldeia
		on fkAldeia=idAldeia;