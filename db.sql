CREATE DATABASE  IF NOT EXISTS `db`
USE `db`;

--  table `tb_comentario`
DROP TABLE IF EXISTS `tb_comentario`;
CREATE TABLE `tb_comentario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar DEFAULT NULL,
  `data_criacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_id` int DEFAULT NULL,
  `postagem_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `postagem_id` (`postagem_id`),
  CONSTRAINT `tb_comentario_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `tb_usuario` (`id`),
  CONSTRAINT `tb_comentario_ibfk_2` FOREIGN KEY (`postagem_id`) REFERENCES `tb_postagem` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `tb_comentario` WRITE;
UNLOCK TABLES;

--  table `tb_postagem`

DROP TABLE IF EXISTS `tb_postagem`;
CREATE TABLE `tb_postagem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `conteudo` varchar DEFAULT NULL,
  `data_criacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `tb_postagem_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `tb_usuario` (`usuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `tb_postagem` WRITE;
UNLOCK TABLES;

-- table `tb_usuario`

DROP TABLE IF EXISTS `tb_usuario`;
CREATE TABLE `tb_usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar DEFAULT NULL,
  `email` varchar DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `tb_usuario` WRITE;
UNLOCK TABLES;

