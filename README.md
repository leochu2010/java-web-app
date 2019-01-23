create database websystique;
create user websystique_user;
grant all on websystique.* to 'websystique_user'@'localhost' identified by 'websystique_pwd';