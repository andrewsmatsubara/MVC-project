DROP DATABASE IF EXISTS pmp;

CREATE DATABASE IF NOT EXISTS pmp;

USE pmp;

CREATE TABLE IF NOT EXISTS artist (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  artist VARCHAR(100)
);

INSERT INTO artist (id, artist)
VALUES
(1, "Cia a Sós"),
(2, "Adeus, Robô");

CREATE TABLE IF NOT EXISTS album (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  album VARCHAR(100),
  artist_id INT NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artist(id)
);

INSERT INTO album (id, album, artist_id)
VALUES
(1, "Junho", 1),
(2, "Adeus, Robô", 2);

CREATE TABLE IF NOT EXISTS song (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  song VARCHAR(100),
  album_id INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album(id)
);

INSERT INTO song (id, song, album_id)
VALUES
(1, "Monstros", 1),
(2, "Nunca Mais", 1),
(3, "Meio-Fio", 1),
(4, "Larissa", 1),
(5, "Rasura", 2),
(6, "Tarja Preta", 2),
(7, "Mesa Amarela", 2),
(8, "Pós-Créditos", 2);
