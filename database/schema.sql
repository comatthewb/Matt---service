DROP DATABASE IF EXISTS fullstack_todo;

CREATE DATABASE fullstack_todo;

USE fullstack_todo;

CREATE TABLE todos (
  todoID INT NOT NULL AUTO_INCREMENT,
  todo_name VARCHAR(255) NOT NULL,
  PRIMARY KEY(todoID)
);