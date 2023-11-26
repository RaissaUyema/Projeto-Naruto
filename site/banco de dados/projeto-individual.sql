create database projetoIndividual;
use projetoIndividual;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
telefone char(11),
senha varchar(45));



    
create table personagem(
idPersonagem int,
nome varchar(45),
foto varchar(500),
fkAldeia int,
fkKage int,
primary key(idPersonagem, fkAldeia, fkKage),
constraint fkAldeia foreign key(fkAldeia)
	references;