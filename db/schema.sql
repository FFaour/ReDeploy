DROP DATABASE IF EXISTS redeployDB;
CREATE DATABASE redeployDB;
USE redeployDB;

CREATE TABLE `accounts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `organization` varchar(255) DEFAULT NULL,
  `userName` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zipcode` varchar(255) NOT NULL,
  `contactName` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `faxNumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` VALUES ('1','Universal cohesive budgetarymanagement','aracely07','0a9d8f7f6b8e644595c060f776b65f8ee3ca1c08','5674 Edgardo Extension Suite 869\nLeilaton, IL 50380-2740','Port Dorrisfort','District of Columbia','adgr','963-235-5093','+09(9)8444293549','702830','ashlee.kilback@example.net','1977-12-30 01:17:33','2000-05-16 00:44:27'),
('2','Streamlined responsive installation','pmetz','4a2081b707814a0f75a24c76d4d1f35d61cc589f','28081 Krystel Union\nDarianton, CA 81621-1499','West Liamstad','Hawaii','migs','261-919-2809','073.402.8387','96358','francesco45@example.org','1972-11-16 04:49:12','1984-11-02 14:41:17'),
('3','Compatible multimedia leverage','qschaefer','a5b4e1ef44b0ec1ce060f7e7a9738aaa77091a56','6106 Smitham Forks\nAliyatown, PA 08870-3473','Bergestad','SouthCarolina','dhhq','(123)304-3967x823','+60(0)5303399294','663641169','bheller@example.net','2014-02-10 23:44:33','1999-05-18 23:14:47'),
('4','Stand-alone fresh-thinking leverage','rborer','c3db34ac5618b9e2fe88bea4c3cab0c45c35c229','2403 D\'Amore Well Suite 265\nKristoferside, NE 25597-6043','Port Estefaniaville','WestVirginia','xjtl','351.577.4581','208.456.3819x916','8993','sdeckow@example.net','2000-03-04 08:59:29','1998-12-27 11:19:54'),
('5','Future-proofed object-oriented challenge','gerlach.prince','5e5b39b1f92de184e4b895bf5b791b273f7fa51b','5228 Minnie Estates\nGuadalupemouth, NE 28001-7387','New Geoview','Minnesota','qlaj','07999579866','1-511-692-0157x71401','77886218','bradley67@example.org','1983-09-01 20:11:40','2001-01-14 03:37:33'),
('6','Facetoface zeroadministration encryption','jovanny.pfeffer','0391c9e3f723fbfdf9a4e889d305c75e67a0fe54','1403 Eileen Cliff Apt. 538\nBruenstad, DC 32055-6431','Lake Verlietown','Iowa','mfhz','00519685562','314-651-0466','88943','renee94@example.com','1995-02-22 21:53:09','1989-01-25 07:18:22'),
('7','Total background complexity','jones.maynard','7c3a76435fb6c7c8feb51ec1ff91602887582a4f','9339 Farrell Squares\nEast Dallinhaven, NE 50441-9883','East Hilmaberg','Colorado','vqrb','(371)579-3193x667','305-489-6326','42','nora01@example.com','2000-10-23 15:59:57','1972-08-27 05:36:43'),
('8','Progressive static hub','trevion08','50ab5c9cc771440d86690655318ab9a89f2eb568','37923 Simeon Causeway Suite 131\nAuerstad, MD 22063-7200','South Douglasborough','Idaho','vagq','(639)218-2996','06389540505','3669096','lhaag@example.org','2003-12-27 19:27:01','2013-06-02 21:47:09'),
('9','Automated modular synergy','stracke.bernadette','0f9ce3ca314a1ebccb8731b8af6ec1ebacec07e6','215 Josie Dam\nKubton, PA 38807-2250','New Magnoliabury','Vermont','lqdv','455.187.8942x2324','111.092.2412','31714352','lazaro88@example.com','1980-04-29 09:36:35','1995-05-27 19:23:05'),
('10','Advanced dynamic software','ethel82','ca490d597930958d7ea12edea6244a4a736e32af','1239 Leffler Roads\nNorth Fermin, NC 88104-6849','Lamarbury','Alabama','zsvc','101.318.6445x02816','220-945-1962x504','822969194','kiana.baumbach@example.org','1990-06-30 08:57:16','1994-04-03 18:46:28')
