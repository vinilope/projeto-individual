create database pokespot;
use pokespot;

create table usuario (
	idUsuario int primary key auto_increment,
	nome varchar(60) not null,
	constraint chkNomeUsuario check (length(nome) >= 3),
	email varchar(80) not null,
	senha varchar(60) not null,
	dtNasc date not null,
	fotoPerfil varchar(255) default 'assets/img/user/default.png',
    diasConsecutivos int default 0
);

create table historico_log (
	idLog int primary key auto_increment,
	fkUsuario int,
	constraint fkLogUsuario foreign key (fkUsuario)
		references usuario(idUsuario),
	dtHoraLogin datetime default current_timestamp
);

create table pokemon (
	idPokemon int primary key,
	especie varchar(45),
	descricao varchar(600),
	tipo1 varchar(30),
	tipo2 varchar(30),
	altura int,
	peso int,
	raridade int
);

create table pokemonTreinador (
	idPokeTre int primary key auto_increment,
	fkUsuario int,
	fkPokemon int,
	constraint fkUsuarioPkmnTreinador foreign key (fkUsuario)
		references usuario(idUsuario),
	constraint fkPokemonPkmnTreinador foreign key (fkPokemon)
		references pokemon(idPokemon),
	apelido varchar(255),
	dtAdquirido datetime default current_timestamp,
	isShiny tinyint
);

create table baseStatus (
	idBaseStatus int primary key,
	constraint fkStatusPokemon foreign key (idBaseStatus)
		references pokemon(idPokemon),
	hp int,
	attack int,
	defense int,
	atkSpecial int,
	defSpecial int,
	speed int
);

create table sprite (
	idSprite int primary key,
	constraint fkSpritePokemon foreign key (idSprite)
		references pokemon(idPokemon),
	miniatura varchar(45),
	normal varchar(45),
	shiny varchar(45),
	animNormal varchar(45),
	animShiny varchar(45)
);

create table questionario (
	idQuestionario int primary key,
	fkUsuario int,
	constraint fkQuestUsuario foreign key (fkUsuario)
		references usuario(idUsuario),
	qtdAcerto int,
	dtHoraRealizado datetime default current_timestamp
);