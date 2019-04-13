-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-04-2019 a las 17:05:38
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
  `art_title` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_contry` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_number` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_volume` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_year` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_journal` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_editorial` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_abstract` longtext COLLATE utf8_spanish_ci,
  `art_issns` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_language` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_keywords` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_link` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_authors` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_category` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_pages` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `art_notes` longtext COLLATE utf8_spanish_ci,
  `createdAt` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulo`
--

CREATE TABLE `articulo` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `number` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `volume` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `year` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `journal` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `editorial` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `abstract` longtext COLLATE utf8_spanish_ci,
  `issns` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `language` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `keywords` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `authores` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pages` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `notas` longtext COLLATE utf8_spanish_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `file`
--

CREATE TABLE `file` (
  `filename` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fkIdArticulo` int(11) DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linkpublication`
--

CREATE TABLE `linkpublication` (
  `id` int(10) UNSIGNED NOT NULL,
  `links_Value` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `link_Type` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `o_Value` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `o_Type` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `miarticulo`
--

CREATE TABLE `miarticulo` (
  `title` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `number` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `volume` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `year` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `journal` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `editorial` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `abstract` longtext COLLATE utf8_spanish_ci,
  `issns` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `language` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `keywords` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `authors` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pages` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `notas` longtext COLLATE utf8_spanish_ci,
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mifiles`
--

CREATE TABLE `mifiles` (
  `filename` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fkIdMiArticulo` int(11) DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profile`
--

CREATE TABLE `profile` (
  `pro_id` int(10) UNSIGNED NOT NULL,
  `pro_user_id` int(11) DEFAULT NULL,
  `pro_completed` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pro_path_photo` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pro_education` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pro_city` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pro_address` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pro_phone` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pro_aboutMe` longtext COLLATE utf8_spanish_ci,
  `createdAt` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profile_article`
--

CREATE TABLE `profile_article` (
  `pa_id` int(10) UNSIGNED NOT NULL,
  `pa_pro_id` int(11) DEFAULT NULL,
  `pa_art_id` int(11) DEFAULT NULL,
  `createdAt` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recommenderwkx`
--

CREATE TABLE `recommenderwkx` (
  `id` int(10) UNSIGNED NOT NULL,
  `name_Value` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_users`
--

CREATE TABLE `rol_users` (
  `rol_id` int(10) UNSIGNED NOT NULL,
  `rol_name` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `rol_description` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `rol_active` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `createdAt` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `user_rol_id` int(11) DEFAULT NULL,
  `user_username` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `user_password` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `user_email` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `user_name` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `user_last_name` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `user_has_access` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `user_created` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `user_updated` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

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
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_username` (`user_username`),
  ADD UNIQUE KEY `user_email` (`user_email`);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
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
  MODIFY `pro_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
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
  MODIFY `rol_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
