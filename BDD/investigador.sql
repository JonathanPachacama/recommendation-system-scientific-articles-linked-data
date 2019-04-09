-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-04-2019 a las 11:15:59
-- Versión del servidor: 5.7.14
-- Versión de PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `investigador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `article`
--

CREATE TABLE `article` (
  `art_id` int(10) UNSIGNED NOT NULL,
  `art_title` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_contry` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_number` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_volume` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_year` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_journal` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_editorial` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_abstract` longtext COLLATE utf8mb4_spanish_ci,
  `art_issns` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_language` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_keywords` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_link` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_authors` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_category` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_pages` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `art_notes` longtext COLLATE utf8mb4_spanish_ci,
  `createdAt` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulo`
--

CREATE TABLE `articulo` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `number` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `volume` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `year` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `journal` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `editorial` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `abstract` longtext COLLATE utf8mb4_spanish_ci,
  `issns` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `language` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `keywords` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `authores` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `pages` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `notas` longtext COLLATE utf8mb4_spanish_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `articulo`
--

INSERT INTO `articulo` (`id`, `title`, `country`, `number`, `volume`, `year`, `journal`, `editorial`, `abstract`, `issns`, `language`, `keywords`, `link`, `authores`, `category`, `pages`, `notas`, `createdAt`, `updatedAt`) VALUES
(1, 'Enteral Nutrition in Dementia: A Systematic Review', 'CH', '4', '7', '2015', 'Nutrients', 'MDPI AG', 'The aim of this systematic review is to evaluate the role of enteral nutrition in dementia. The prevalence of dementia is predicted to rise worldwide partly due to an aging population. People with dementia may experience both cognitive and physical complications that impact on their nutritional intake. Malnutrition and weight loss in dementia correlates with cognitive decline and the progress of the disease. An intervention for long term eating difficulties is the provision of enteral nutrition through a Percutaneous Endoscopic Gastrostomy tube to improve both nutritional parameters and quality of life. Enteral nutrition in dementia has traditionally been discouraged, although further understanding of physical, nutritional and quality of life outcomes are required. The following electronic databases were searched: EBSCO Host, MEDLINE, PubMed, Cochrane Database of Systematic Reviews and Google Scholar for publications from 1st January 2008 and up to and including 1st January 2014. Inclusion criteria included the following outcomes: mortality, aspiration pneumonia, pressure sores, nutritional parameters and quality of life. Each study included separate analysis for patients with a diagnosis of dementia and/or neurological disease. Retrospective and prospective observational studies were included. No differences in mortality were found for patients with dementia, without dementia or other neurological disorders. Risk factors for poor survival included decreased or decreasing serum albumin levels, increasing age or over 80 years and male gender. Evidence regarding pneumonia was limited, although did not impact on mortality. No studies explored pressure sores or quality of life.', '2072-6643', 'EN', 'enteral nutrition,dementia,percutaneous endoscopic gastrostomy,nasogastric tube,serum albumin', 'aHR0cDovL3d3dy5tZHBpLmNvbS8yMDcyLTY2NDMvNy80LzI0NTY=', 'Joanne Brooke y  Omorogieva Ojo', 'Nutrition. Foods and food supply', '2456-2468', '"null"', '2019-04-05 05:50:47', '2019-04-05 08:11:57'),
(2, 'A review of safety standards', NULL, NULL, '', '1985-01-01', '', NULL, '', NULL, NULL, 'I.2.9. Robotics', 'https://dl.acm.org/citation.cfm?id=4862', 'N Percival', NULL, NULL, NULL, '2019-04-05 05:54:03', '2019-04-05 05:54:03'),
(6, 'Flow parsing and heading perception show similar dependence on quality and quantity of optic flow', 'CH', 'undefined', '7', '2013', 'Frontiers in Behavioral Neuroscience', 'Frontiers Media S.A.', 'In a companion study we have investigated the pattern of dependence of human heading estimation on the quantity (amount of dots per frame) and quality (amount of directional noise) of motion information in an optic flow field. In the present study we investigated whether the flow parsing mechanism, which is thought to aid in the assessment of scene-relative object movement during observer movement, exhibits a similar pattern of dependence on these stimulus manipulations. Finding that the pattern of flow parsing effects was similar to the that observed for heading thresholds would provide some evidence that these two complementary roles for optic flow processing are reliant on the same, or similar, neural computation. We found that the pattern of flow parsing effects observed does indeed display a striking similarity to the heading thresholds. As with judgements of heading, there is a critical value of around 25 dots per frame; below this value flow parsing effects rapidly deteriorate and above this value flow parsing effects are stable (see Warren et al. (1988) for similar results for heading). Again, as with judgements of heading, when there were 50 or more dots there was a systematic effect of noise on the magnitude of the flow parsing effect. These results are discussed in the context of different possible schemes of flow processing to support both heading and flow parsing mechanisms.', '1662-5153', 'EN', 'Heading,Optic flow processing,flow parsing,object movement,ego-motion', 'aHR0cDovL2pvdXJuYWwuZnJvbnRpZXJzaW4ub3JnL0pvdXJuYWwvMTAuMzM4OS9mbmJlaC4yMDEzLjAwMDQ5L2Z1bGw=', 'Andrew J Foulkes, Simon K. Rushton y  Paul A Warren', 'Neurosciences. Biological psychiatry. Neuropsychiatry', '0-0', NULL, '2019-04-05 15:26:14', '2019-04-05 15:26:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `file`
--

CREATE TABLE `file` (
  `filename` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `fkIdArticulo` int(11) DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linkpublication`
--

CREATE TABLE `linkpublication` (
  `id` int(10) UNSIGNED NOT NULL,
  `links_Value` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `link_Type` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `o_Value` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `o_Type` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `miarticulo`
--

CREATE TABLE `miarticulo` (
  `title` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `number` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `volume` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `year` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `journal` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `editorial` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `abstract` longtext COLLATE utf8mb4_spanish_ci,
  `issns` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `language` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `keywords` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `authors` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `pages` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `notas` longtext COLLATE utf8mb4_spanish_ci,
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mifiles`
--

CREATE TABLE `mifiles` (
  `filename` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `fkIdMiArticulo` int(11) DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profile`
--

CREATE TABLE `profile` (
  `pro_id` int(10) UNSIGNED NOT NULL,
  `pro_user_id` int(11) DEFAULT NULL,
  `pro_completed` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `pro_path_photo` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `pro_education` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `pro_city` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `pro_address` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `pro_phone` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `pro_aboutMe` longtext COLLATE utf8mb4_spanish_ci,
  `createdAt` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `profile`
--

INSERT INTO `profile` (`pro_id`, `pro_user_id`, `pro_completed`, `pro_path_photo`, `pro_education`, `pro_city`, `pro_address`, `pro_phone`, `pro_aboutMe`, `createdAt`, `updatedAt`) VALUES
(1, 1, '1', 'uploads/profiles/Jonathan.jpg', 'Escuela Politecnica Nacional', 'Quito', 'Amaguaña', '0998837713', 'Programador', '2019-04-09 06:11:32', '2019-04-09 06:12:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profile_article`
--

CREATE TABLE `profile_article` (
  `pa_id` int(10) UNSIGNED NOT NULL,
  `pa_pro_id` int(11) DEFAULT NULL,
  `pa_art_id` int(11) DEFAULT NULL,
  `createdAt` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recommenderwkx`
--

CREATE TABLE `recommenderwkx` (
  `id` int(10) UNSIGNED NOT NULL,
  `name_Value` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_users`
--

CREATE TABLE `rol_users` (
  `rol_id` int(10) UNSIGNED NOT NULL,
  `rol_name` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `rol_description` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `rol_active` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `createdAt` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `rol_users`
--

INSERT INTO `rol_users` (`rol_id`, `rol_name`, `rol_description`, `rol_active`, `createdAt`, `updatedAt`) VALUES
(1, 'Administrador', 'usuario Administrador', '1', '2019-04-09 06:04:58', '2019-04-09 06:04:58'),
(2, 'Investidador', 'usuario investigador', '1', '2019-04-09 06:05:14', '2019-04-09 06:05:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `user_rol_id` int(11) DEFAULT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `user_last_name` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `user_username` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `user_email` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `user_password` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `user_has_access` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `createdAt` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`user_id`, `user_rol_id`, `user_name`, `user_last_name`, `user_username`, `user_email`, `user_password`, `user_has_access`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'Jonathan', 'Pachacama', 'jpachacama', 'jonathan.pachacama@epn.edu.ec', '$2a$10$ilosyH5o/4wEVUoBVcuhcuyJJRpjXnXwZr8FK8ScGam1R.TjJxbSq', '1', '2019-04-09 06:11:31', '2019-04-09 06:11:31');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`art_id`);

--
-- Indices de la tabla `articulo`
--
ALTER TABLE `articulo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `linkpublication`
--
ALTER TABLE `linkpublication`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `miarticulo`
--
ALTER TABLE `miarticulo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mifiles`
--
ALTER TABLE `mifiles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indices de la tabla `profile_article`
--
ALTER TABLE `profile_article`
  ADD PRIMARY KEY (`pa_id`);

--
-- Indices de la tabla `recommenderwkx`
--
ALTER TABLE `recommenderwkx`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol_users`
--
ALTER TABLE `rol_users`
  ADD PRIMARY KEY (`rol_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `article`
--
ALTER TABLE `article`
  MODIFY `art_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `articulo`
--
ALTER TABLE `articulo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `file`
--
ALTER TABLE `file`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `linkpublication`
--
ALTER TABLE `linkpublication`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `miarticulo`
--
ALTER TABLE `miarticulo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `mifiles`
--
ALTER TABLE `mifiles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `profile`
--
ALTER TABLE `profile`
  MODIFY `pro_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `profile_article`
--
ALTER TABLE `profile_article`
  MODIFY `pa_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `recommenderwkx`
--
ALTER TABLE `recommenderwkx`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `rol_users`
--
ALTER TABLE `rol_users`
  MODIFY `rol_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
