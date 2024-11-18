-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: aingtel
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (0,'Categoría'),(1,'Videovigilancia'),(2,'Redes y Comunicaciones'),(3,'Seguridad Electrónica'),(4,'Sistemas Domóticos'),(5,'Sistemas para Energía y Respaldo'),(6,'Biométricos'),(7,'Sistemas Eléctricos');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dealer`
--

DROP TABLE IF EXISTS `dealer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dealer` (
  `ci` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` int DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ci`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dealer`
--

LOCK TABLES `dealer` WRITE;
/*!40000 ALTER TABLE `dealer` DISABLE KEYS */;
INSERT INTO `dealer` VALUES (10004852,'Mauricio Mendoza','mau@example.com','12345678',68542435,'0000'),(12345678,'Rodrigo Quispe','rodrigo@example.com','12345678',69825600,'Pazankeri c\\5 de agosto');
/*!40000 ALTER TABLE `dealer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `code` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category` int DEFAULT NULL,
  `cost` float NOT NULL,
  `price` float NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`code`),
  KEY `category` (`category`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('abc1','filmadora',7,22,23,'1731533569182-product-4.jpeg','asdasd'),('abc111','qwerr',7,24,25,'1731533668880-AlbedoBase_XL_Chaski_el_conejo_corriendo_entre_los_rboles_del_3.jpg','zxccqwe'),('abc1116','qqq',6,22,23,'1731533913497-AlbedoBase_XL_Crea_esta_imagen_al_estilo_Pixar_en_formato_169_2.jpg','asdasd'),('abc112','asdd',6,24,17,'1731533702171-Rafa el conejo, observa a sus amigos buscando refugio. Rafa usa sus patas para cavar un tÃºnel.png','zxccqweadas'),('abc113','energia',5,45,50,'1731533737694-un bosque calmado y feliz al estilo de Disney.png','zxccqweadas,,'),('abc114','domotivo',4,47,52,'1731533763923-Pixar style image of small scared animals and mice in an underground tunnel.png','zxccqweadas,,asdas'),('abc115','redes',2,50,53,'1731533834009-pngtree-happy-cartoon-dogs-and-puppies-characters-outdoor-png-image_12577405.png','zxccqweadas,,asdasasdaasd'),('asd123','camara',1,22.5,23.5,'1731436456702-product-1.jpeg','asdasdasd asdasd'),('asdasd','asdad',1,22,23,'1731436651924-Captura de pantalla 2024-11-07 131456.jpg','asdasd'),('asdqe','asdasd',3,54,56,'1731533986408-felices-perros-dibujos-animados-amigos-sentados-juntos_98396-103903.jpg','asdasd'),('asdqwe123','Camara2',1,23,24,'1731796894821-product-5.jpeg','asdasdasd'),('asdqwe123243','Camara222',5,24,25,'1731797030476-istockphoto-1309646840-612x612.jpg','asdasdasddas3'),('dasdas','Filmadora',4,22,23,'1731796173529-product-3.jpeg','sdadqweqwedsz'),('ewrwe33','rerer',6,34,44,'1731860381666-istockphoto-1309646840-612x612-400x400.jpg','dffddf'),('oty125','qqwe44',2,22.5,23.6,'1731801154868-AlbedoBase_XL_Una_escena_dramtica_en_el_bosque_donde_una_colum_2.jpg','khkjvbnv'),('ppp32','asdasd44555',2,12.5,15,'1731800340863-product-4.jpeg','asdqwewq'),('qwrtt123','asdasd',1,26,26,'1731797565615-istockphoto-1309646840-612x612.jpg','adasdasd');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotation`
--

DROP TABLE IF EXISTS `quotation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quotation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dealer_email` varchar(100) DEFAULT NULL,
  `buyer_name` varchar(100) NOT NULL,
  `buyer_phone` bigint DEFAULT NULL,
  `buyer_email` varchar(100) DEFAULT NULL,
  `buyer_address` varchar(255) DEFAULT NULL,
  `total_price` float NOT NULL,
  `quotation_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dealer_email` (`dealer_email`),
  CONSTRAINT `quotation_ibfk_1` FOREIGN KEY (`dealer_email`) REFERENCES `user` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotation`
--

LOCK TABLES `quotation` WRITE;
/*!40000 ALTER TABLE `quotation` DISABLE KEYS */;
INSERT INTO `quotation` VALUES (1,'rodrigo@example.com','22',22,'22','22',47,'2024-11-17 19:20:44'),(2,'rodrigo@example.com','33',33,'33','33',168,'2024-11-17 19:23:43'),(3,'rodrigo@example.com','asdas',2323,'asdasd','dasdasd',115,'2024-11-18 01:50:53');
/*!40000 ALTER TABLE `quotation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'aingtelempresa@gmail.com','aingtelempresa','admin'),(3,'rodrigo@example.com','12345678','dealer'),(4,'rene@example.com','12345678','dealer'),(5,'jose@example.com','12345678','dealer'),(6,'admin','admin','admin'),(11,'mau@example.com','12345678','dealer');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-18 15:54:50
