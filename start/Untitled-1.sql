drop database if exists Motorradausleihe;

create database Motorradausleihe;

use Motorradausleihe;

create table Motorraeder (
M_ID int not null auto_increment primary key,
M_Hersteller char(20) not null,
M_Modell varchar(20) not null,
M_Kennzeichen char(10) not null,
M_Leistung int not null,
M_KMStand int(7),
M_Baujahr date not null,
M_TUEV date not null);


create table Kunden (
K_ID int not null auto_increment primary key,
K_Anrede varchar(4) not null,
K_Name char(20) not null,
K_PLZ varchar(5) not null,
K_Ort varchar(20) not null,
K_Strasse varchar(20) not null,
K_GebDat date not null);

create table Ausleihe (
M_ID int not null,
K_ID int not null,
AusleiheBeginn datetime not null,
AusleiheEnde datetime not null,
Kilometer float(9,1) not null,
Foreign Key(M_ID) references Motorraeder(M_ID),
foreign key(K_ID) references Kunden(K_ID));

insert into motorraeder (M_Hersteller, M_Modell, M_Leistung, M_Kennzeichen, M_KMStand, M_Baujahr, M_TUEV) values
('BMW','GS 1200',110,'MD-B 123', 51001, '2009-01-01', '2017-08-01'),
('Kawasaki','ZX11R',212,'BK-A 321', 1100, '2016-01-01', '2018-06-01'),
('Kawasaki','KLX 125',10,'JL-L 669', 5, '2016-01-01', '2018-12-01'),
('KTM','Duke 990',120,'JL-T 99', 13256, '2015-01-01', '2017-04-01'),
('KTM','Super Enduro',110,'JL-M 1', 69569, '2000-01-01', '2018-06-01'),
('Triumph','Explorer XCx',139,'MD-G 100', 0, '2017-01-01', '2019-04-01'),
('CPI','Avagon',2.7,'RXV 123', 14200, '2009-01-01', '2018-08-03'),
('Suzuki','Bandit 1200',98,'OC-G 123', 10801, '2016-01-01', '2018-09-01'),
('MZ','ETZ 251',21,'JL-K 123', 47258, '1990-01-01', '2017-04-01');

insert into kunden (K_Anrede, K_Name, K_PLZ, K_Ort, K_Strasse, K_Gebdat) values
('Herr', 'Meier','39112','Magdeburg','Fuchsberg 2','1955-12-12'),
('Frau', 'Meier','39112','Magdeburg','Fuchsberg 2','1945-12-13'),
('Herr', 'Mueller','39124','Magdeburg','Luebeckerstrasse 1','1985-07-27'),
('Herr','Grau','39387','Oschersleben','Goethe Strasse 3','1981-04-03'),
('Herr','Schwarz','39245','Gommern','Hauptstrasse 7','2000-01-01'),
('Herr','Glatze','39888','Calbe/Saale','Am Hof 99','1974-06-11');

insert into ausleihe (M_ID, K_ID,AusleiheBeginn, AusleiheEnde,Kilometer) values
(2,3,'2015-03-01','2015-03-08',545),
(5,1,'2015-03-01','2015-03-01',636),
(1,6,'2015-05-05','2015-05-09',365),
(6,5,'2016-03-02','2016-03-05',400),
(4,4,'2016-06-06','2016-06-20',1230),
(7,1,'2017-03-01','2017-03-06',560),
(9,2,'2017-03-01','2017-03-06',562);
