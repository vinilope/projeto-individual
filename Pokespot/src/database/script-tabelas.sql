create database pokespot;
use pokespot;

create table usuario (
	idUsuario int primary key auto_increment,
	nome varchar(60) not null,
	constraint chkNomeUsuario check (length(nome) >= 3),
	email varchar(80) not null,
	senha varchar(60) not null,
	dtNasc date not null,
	sexo char(1),
	constraint chkSexoUsuario check (sexo in('f', 'm', null))
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
	fkUsuario int,
	fkPokemon int,
	primary key (fkUsuario, fkPokemon),
	constraint fkUsuarioPkmnTreinador foreign key (fkUsuario)
		references usuario(idUsuario),
	constraint fkPokemonPkmnTreinador foreign key (fkPokemon)
		references pokemon(idPokemon),
	apelido varchar(255),
	dtAdquirido datetime default current_timestamp
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