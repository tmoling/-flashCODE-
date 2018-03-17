DROP DATABASE flashcard_db;
CREATE DATABASE flashcard_db;

USE flashcard_db;

-- flashcard data with question and answer
CREATE TABLE flashcards
(   id int NOT NULL AUTO_INCREMENT,
    questions varchar(255) NOT NULL,
    answers varchar(255) NOT NULL,
    PRIMARY KEY(id)
);


-- this will be customer data-base
CREATE TABLE users 
(   id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password_hash varchar(255) NOT NULL,
    flashcard_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (flashcard_id) references flashcards(id)
);

CREATE TABLE user_result
(   flashcard_id int NOT NULL,
    user_id int NOT NULL,
    FOREIGN KEY (flashcard_id) references flashcards(id),
    FOREIGN KEY (user_id) references users(id)
)


