create database pokespot;
use pokespot;

create table usuario (
	idUsuario int primary key auto_increment,
	apelido varchar(60) not null,
	constraint chkApelidoUsuario check (length(apelido) >= 3),
	email varchar(80) not null,
	senha varchar(60) not null,
	dtNasc date not null,
	sexo char(1),
	constraint chkSexoUsuario check (sexo in('f', 'm', null))
);

create table treinador (
	idTreinador int primary key,
	constraint fkTreinadorUsuario foreign key (idTreinador)
		references usuario(idUsuario),
	qtdPokemon int,
	diasConsecutivos int
);

create table pokemon (
	idPokemon int primary key,
	especie varchar(45),
	descricao varchar(600),
	tipo1 varchar(30),
	tipo2 varchar(30),
	altura int,
	peso int
);

create table pokemonTreinador (
	fkTreinador int,
	fkPokemon int,
	primary key (fkTreinador, fkPokemon),
	constraint fkTreinadorPkmnTreinador foreign key (fkTreinador)
		references treinador(idTreinador),
	constraint fkPokemonPkmnTreinador foreign key (fkPokemon)
		references pokemon(idPokemon)
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