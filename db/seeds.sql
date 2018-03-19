INSERT INTO flashcards
    (questions, answers)
VALUES
    ('What does HTML stand for?', 'Hypertext Markup Language');
INSERT INTO flashcards
    (questions, answers)
VALUES
    ('What does CSS stand for?', 'Cascading Style Sheets');
INSERT INTO flashcards
    (questions, answers)
VALUES
    ('What does API stand for?', 'Application Programming Interface');
INSERT INTO flashcards
    (questions, answers)
VALUES
    ('What is one way a website can store data in a browser?', 'Cookies');
INSERT INTO flashcards
    (questions, answers)
VALUES
    ('How many different values can booleans have?', 'Two (true and false)');
INSERT INTO flashcards
    (questions, answers)
VALUES
    ('What language are Express apps written in?', 'JavaScript');
INSERT INTO flashcards
    (questions, answers)
VALUES
    ('What does JSON stand for?', 'JavaScript Object Notation');
INSERT INTO flashcards
    (questions, answers)
VALUES
    ('What special character is used when coding with jQuery?', '$');

INSERT INTO users ( username, email, password_hash, flashcard_id )  
VALUES
("user", "user@user.com", "$2a$10$pJXUz4FJznL8TCpl/RcJIumV8C8xgxREYR8nJjeVseTETU9AdFjye", "1");
