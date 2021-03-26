-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Mar-2021 às 23:34
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ecocity`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresa_coletora`
--

CREATE TABLE `empresa_coletora` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(245) NOT NULL,
  `cnpj` varchar(45) NOT NULL,
  `cep` varchar(45) NOT NULL,
  `imagem` varchar(50) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresa_parceira`
--

CREATE TABLE `empresa_parceira` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cnpj` varchar(50) NOT NULL,
  `imagem` varchar(150) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `peso` float DEFAULT NULL,
  `pedido_id` int(11) DEFAULT NULL,
  `material_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `item`
--

INSERT INTO `item` (`id`, `peso`, `pedido_id`, `material_id`) VALUES
(49, 444, NULL, NULL),
(51, 202020, NULL, NULL),
(53, 9090, NULL, NULL),
(60, 0, NULL, NULL),
(61, 0, NULL, NULL),
(62, 0, NULL, NULL),
(63, 5555, NULL, NULL),
(64, 50, NULL, NULL),
(65, 888, NULL, NULL),
(67, 20, NULL, NULL),
(68, 20, NULL, NULL),
(69, 20, NULL, NULL),
(72, 12, NULL, 2),
(73, 888, 50, 1),
(74, 888, 51, 1),
(75, 999, 52, 4),
(76, 999, 53, 2),
(77, 800, 54, 4),
(78, 800, 55, 4),
(79, 999, 56, 5),
(80, 111, 57, 2),
(81, 11, 58, 4),
(82, 10, 59, 1),
(83, 10, 60, 5),
(84, 10, 61, 5),
(85, 10, 62, 5),
(86, 10, 63, 5),
(87, 10, 64, 5),
(88, 10, 65, 5),
(89, 20, 66, 3),
(90, 20, 67, 4),
(91, 123, 68, 4),
(92, 123, 69, 4),
(93, 123, 70, 2),
(94, 20, 71, 3),
(95, 20, 72, 3),
(96, 20, 73, 3),
(97, 12, 74, 2),
(98, 40, 75, 4),
(99, 20, 76, 2),
(100, 60, 77, 2),
(101, 123, 78, 3),
(102, 20, 79, 2),
(103, 12, 80, 2),
(104, 40, 81, 3),
(105, 20, 82, 5),
(106, 50, 83, 3),
(107, 12, 84, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `material`
--

CREATE TABLE `material` (
  `id` int(11) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `pontos_por_peso` int(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `material`
--

INSERT INTO `material` (`id`, `tipo`, `pontos_por_peso`) VALUES
(1, 'Papel', 100),
(2, 'Vidro', 300),
(3, 'Plástico', 200),
(4, 'Metal', 300),
(5, 'Eletrônicos', 400);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedido`
--

CREATE TABLE `pedido` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `empresa_coletora_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `pedido`
--

INSERT INTO `pedido` (`id`, `usuario_id`, `empresa_coletora_id`, `createdAt`, `updatedAt`) VALUES
(49, NULL, NULL, '2021-03-24 18:32:44', '2021-03-24 18:32:44'),
(50, NULL, NULL, '2021-03-25 17:31:54', '2021-03-25 17:31:54'),
(51, NULL, NULL, '2021-03-25 17:32:03', '2021-03-25 17:32:03'),
(52, NULL, NULL, '2021-03-25 17:36:13', '2021-03-25 17:36:13'),
(53, 60, NULL, '2021-03-25 17:41:27', '2021-03-25 17:41:27'),
(54, 60, NULL, '2021-03-25 18:05:52', '2021-03-25 18:05:52'),
(55, 60, NULL, '2021-03-25 18:10:20', '2021-03-25 18:10:20'),
(56, 60, NULL, '2021-03-25 18:12:24', '2021-03-25 18:12:24'),
(57, 60, NULL, '2021-03-25 18:16:00', '2021-03-25 18:16:00'),
(58, 60, NULL, '2021-03-25 18:23:40', '2021-03-25 18:23:40'),
(59, 60, NULL, '2021-03-25 18:24:33', '2021-03-25 18:24:33'),
(60, NULL, NULL, '2021-03-25 18:26:35', '2021-03-25 18:26:35'),
(61, NULL, NULL, '2021-03-25 18:27:27', '2021-03-25 18:27:27'),
(62, NULL, NULL, '2021-03-25 18:27:29', '2021-03-25 18:27:29'),
(63, 60, NULL, '2021-03-25 18:28:01', '2021-03-25 18:28:01'),
(64, 60, NULL, '2021-03-25 18:28:33', '2021-03-25 18:28:33'),
(65, 60, NULL, '2021-03-25 18:28:43', '2021-03-25 18:28:43'),
(66, 60, NULL, '2021-03-26 11:19:23', '2021-03-26 11:19:23'),
(67, 60, NULL, '2021-03-26 11:21:44', '2021-03-26 11:21:44'),
(68, 60, NULL, '2021-03-26 18:18:23', '2021-03-26 18:18:23'),
(69, 60, NULL, '2021-03-26 18:18:40', '2021-03-26 18:18:40'),
(70, 60, NULL, '2021-03-26 18:20:15', '2021-03-26 18:20:15'),
(71, 60, NULL, '2021-03-26 18:20:29', '2021-03-26 18:20:29'),
(72, 60, NULL, '2021-03-26 18:27:04', '2021-03-26 18:27:04'),
(73, 60, NULL, '2021-03-26 18:27:20', '2021-03-26 18:27:20'),
(74, 60, NULL, '2021-03-26 18:27:39', '2021-03-26 18:27:39'),
(75, 60, NULL, '2021-03-26 18:28:09', '2021-03-26 18:28:09'),
(76, 60, NULL, '2021-03-26 18:28:53', '2021-03-26 18:28:53'),
(77, 60, NULL, '2021-03-26 18:33:54', '2021-03-26 18:33:54'),
(78, 60, NULL, '2021-03-26 18:48:12', '2021-03-26 18:48:12'),
(79, 60, NULL, '2021-03-26 18:48:38', '2021-03-26 18:48:38'),
(80, 60, NULL, '2021-03-26 18:52:52', '2021-03-26 18:52:52'),
(81, 60, NULL, '2021-03-26 18:57:26', '2021-03-26 18:57:26'),
(82, 60, NULL, '2021-03-26 18:57:57', '2021-03-26 18:57:57'),
(83, 60, NULL, '2021-03-26 18:59:56', '2021-03-26 18:59:56'),
(84, 60, NULL, '2021-03-26 22:01:23', '2021-03-26 22:01:23');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `cpf` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(245) NOT NULL,
  `imagem` varchar(245) DEFAULT NULL,
  `pontuacao` int(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `cpf`, `email`, `senha`, `imagem`, `pontuacao`, `createdAt`, `updatedAt`) VALUES
(60, 'Carlos Eduardo Vieira', '123', 'kadu@gmail.com', '$2b$10$4KePLcW/q7Tg3ix202.a2uZTMWnzopYEJbsGJDPdpbvA/lZfhBQnm', '1616635655733-fotoKAdu.jpeg', 245100, '2021-03-25 01:27:35', '2021-03-26 22:01:23'),
(67, 'admin', '789', 'admin@admin.com', '$2b$10$b/co/mP/lV1aGlf9nsGi3OvEomV509/1TI5fT7IMC8LOzVhZF4y0O', '1616765602712-paisagem.jpg', NULL, '2021-03-26 13:33:22', '2021-03-26 13:33:22');

-- --------------------------------------------------------

--
-- Estrutura da tabela `voucher`
--

CREATE TABLE `voucher` (
  `id` int(11) NOT NULL,
  `codigo` varchar(45) DEFAULT NULL,
  `descricao` varchar(45) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `empresa_parceira_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatetAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `empresa_coletora`
--
ALTER TABLE `empresa_coletora`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `empresa_parceira`
--
ALTER TABLE `empresa_parceira`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido_id` (`pedido_id`),
  ADD KEY `material_id` (`material_id`);

--
-- Índices para tabela `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `empresa_coletora_id` (`empresa_coletora_id`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `voucher`
--
ALTER TABLE `voucher`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `empresa_parceira_id` (`empresa_parceira_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `empresa_coletora`
--
ALTER TABLE `empresa_coletora`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `empresa_parceira`
--
ALTER TABLE `empresa_parceira`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT de tabela `material`
--
ALTER TABLE `material`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT de tabela `voucher`
--
ALTER TABLE `voucher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`),
  ADD CONSTRAINT `item_ibfk_2` FOREIGN KEY (`material_id`) REFERENCES `material` (`id`);

--
-- Limitadores para a tabela `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`empresa_coletora_id`) REFERENCES `empresa_coletora` (`id`);

--
-- Limitadores para a tabela `voucher`
--
ALTER TABLE `voucher`
  ADD CONSTRAINT `voucher_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `voucher_ibfk_2` FOREIGN KEY (`empresa_parceira_id`) REFERENCES `empresa_parceira` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
