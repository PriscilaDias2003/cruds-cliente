create database WEBII;

use WEBII;

create table Usuario (
	id int(11) not null auto_increment,
    nome varchar(50) null default null,
    senha varchar(50) null default null,
    primary key (id)
);