create table users(
    id int auto_increment primary key,
    name varchar(255),
    email varchar(255),
    age int
);


create table contacts(
    id int auto_increment primary key,
    name varchar(255),
    email varchar(255),
    phone bigint,
    subject varchar(255),
    message text
);