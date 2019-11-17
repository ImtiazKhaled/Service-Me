DROP DATABASE IF EXISTS SERVICEME;
CREATE DATABASE SERVICEME;
USE SERVICEME;

CREATE TABLE SMUSER(
	UserId VARCHAR(50) PRIMARY KEY,
	FName VARCHAR(50) NOT NULL,
	LName VARCHAR(50) NOT NULL,
    CreatedAt DATE NOT NULL,
	ProfilePicture VARCHAR(255)
);

CREATE TABLE VENDOR(
	UserId VARCHAR(50) NOT NULL,
	ServiceOffered VARCHAR(50) NOT NULL,
	Rating VARCHAR(50) NOT NULL,
	FOREIGN KEY(UserId) REFERENCES SMUSER(UserId)
);

CREATE TABLE MESSAGESBETWEEN(
	Messager VARCHAR(50) NOT NULL,
	Messagee VARCHAR(50) NOT NULL,
	FOREIGN KEY(Messager) REFERENCES SMUSER(UserId),
	FOREIGN KEY(Messagee) REFERENCES SMUSER(UserId)
);


CREATE TABLE MESSAGES(
	MessageId VARCHAR(50) PRIMARY KEY,
	Sender VARCHAR(50) NOT NULL,
	Receiver VARCHAR(50) NOT NULL,
	MessageText VARCHAR(255) NOT NULL,
	SendAt VARCHAR(50) NOT NULL
);


LOAD DATA LOCAL INFILE '/home/imtiazkhaled07/Service-Me/server/dataset/users'
INTO TABLE SMUSER
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE '/home/imtiazkhaled07/Service-Me/server/dataset/vendors'
INTO TABLE VENDOR
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;


LOAD DATA LOCAL INFILE '/home/imtiazkhaled07/Service-Me/server/dataset/messagesbetween'
INTO TABLE MESSAGESBETWEEN
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE '/home/imtiazkhaled07/Service-Me/server/dataset/messages'
INTO TABLE MESSAGES
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;
