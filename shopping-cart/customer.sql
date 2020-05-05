--
-- Database: `learning_zone`
--

-- --------------------------------------------------------

--
-- Stable structure `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table`customer`
--

INSERT INTO `customer` (`name`, `address`, `email`, `phone`) VALUES
('Alex', 'Jl. Ciwidey no 20', 'alex@yahoo.com', '086454743743'),
('Amali', 'Jl. kemandoran no 10 Jakarta', 'amalia@langit.com', '03937263623'),
('Angel ', 'Jl. Ciledug no 45A. tanggerang', 'angel@gmail.com', '082271626121'),
('Ujang', 'Jl. ribut no 90 A', 'ujang@gmail.com', '07846352532'),
('Memet', 'Blok cepu no 14. Bandung', 'memet@ongkek.com', '038372636232'),
('Agung', 'Jl st Petersburg no 34. Russia', 'agung@yahoo.com', '038373273262'),
('Jhon Taylor', 'St paris A . Block 43. paris', 'jtaylor@yahoo.com', '039223232323');

