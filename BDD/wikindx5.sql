-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-03-2019 a las 21:39:54
-- Versión del servidor: 5.7.14
-- Versión de PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wikindx5`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_bibtex_string`
--

CREATE TABLE `wkx_bibtex_string` (
  `bibtexstringId` int(11) NOT NULL,
  `bibtexstringText` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_cache`
--

CREATE TABLE `wkx_cache` (
  `cacheResourceCreators` longtext COLLATE utf8_unicode_ci,
  `cacheMetadataCreators` longtext COLLATE utf8_unicode_ci,
  `cacheKeywords` longtext COLLATE utf8_unicode_ci,
  `cacheResourceKeywords` longtext COLLATE utf8_unicode_ci,
  `cacheMetadataKeywords` longtext COLLATE utf8_unicode_ci,
  `cacheQuoteKeywords` longtext COLLATE utf8_unicode_ci,
  `cacheParaphraseKeywords` longtext COLLATE utf8_unicode_ci,
  `cacheMusingKeywords` longtext COLLATE utf8_unicode_ci,
  `cacheResourcePublishers` longtext COLLATE utf8_unicode_ci,
  `cacheMetadataPublishers` longtext COLLATE utf8_unicode_ci,
  `cacheConferenceOrganisers` longtext COLLATE utf8_unicode_ci,
  `cacheResourceCollections` longtext COLLATE utf8_unicode_ci,
  `cacheMetadataCollections` longtext COLLATE utf8_unicode_ci,
  `cacheResourceCollectionTitles` longtext COLLATE utf8_unicode_ci,
  `cacheResourceCollectionShorts` longtext COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_category`
--

CREATE TABLE `wkx_category` (
  `categoryId` int(11) NOT NULL,
  `categoryCategory` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_category`
--

INSERT INTO `wkx_category` (`categoryId`, `categoryCategory`) VALUES
(1, 'General');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_collection`
--

CREATE TABLE `wkx_collection` (
  `collectionId` int(11) NOT NULL,
  `collectionTitle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `collectionTitleShort` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `collectionType` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `collectionDefault` longtext COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_collection`
--

INSERT INTO `wkx_collection` (`collectionId`, `collectionTitle`, `collectionTitleShort`, `collectionType`, `collectionDefault`) VALUES
(1, 'Recomendacion datos enlazados', 'recomendacion', 'journal', 'YToxOntzOjIxOiJyZXNvdXJjZW1pc2NQdWJsaXNoZXIiO2k6MTt9');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_config`
--

CREATE TABLE `wkx_config` (
  `configId` int(11) NOT NULL,
  `configName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `configInt` int(11) DEFAULT NULL,
  `configFloat` double DEFAULT NULL,
  `configVarchar` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `configText` text COLLATE utf8_unicode_ci,
  `configBoolean` tinyint(1) DEFAULT NULL,
  `configDatetime` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_config`
--

INSERT INTO `wkx_config` (`configId`, `configName`, `configInt`, `configFloat`, `configVarchar`, `configText`, `configBoolean`, `configDatetime`) VALUES
(1, 'configTitle', NULL, NULL, 'WIKINDX', NULL, NULL, NULL),
(2, 'configContactEmail', NULL, NULL, '', NULL, NULL, NULL),
(3, 'configDescription', NULL, NULL, NULL, 'My Wikindx', NULL, NULL),
(4, 'configFileDeleteSeconds', 3600, NULL, NULL, NULL, NULL, NULL),
(5, 'configPaging', 20, NULL, NULL, NULL, NULL, NULL),
(6, 'configPagingMaxLinks', 11, NULL, NULL, NULL, NULL, NULL),
(7, 'configStringLimit', 40, NULL, NULL, NULL, NULL, NULL),
(8, 'configLanguage', NULL, NULL, 'en', NULL, NULL, NULL),
(9, 'configStyle', NULL, NULL, 'APA', NULL, NULL, NULL),
(10, 'configTemplate', NULL, NULL, 'default', NULL, NULL, NULL),
(11, 'configMultiUser', NULL, NULL, NULL, NULL, 0, NULL),
(12, 'configUserRegistration', NULL, NULL, NULL, NULL, 0, NULL),
(13, 'configUserRegistrationModerate', NULL, NULL, NULL, NULL, 0, NULL),
(14, 'configNotify', NULL, NULL, NULL, NULL, 0, NULL),
(15, 'configImgWidthLimit', 400, NULL, NULL, NULL, NULL, NULL),
(16, 'configImgHeightLimit', 400, NULL, NULL, NULL, NULL, NULL),
(17, 'configFileAttach', NULL, NULL, NULL, NULL, 0, NULL),
(18, 'configFileViewLoggedOnOnly', NULL, NULL, NULL, NULL, 0, NULL),
(19, 'configMaxPaste', 10, NULL, NULL, NULL, NULL, NULL),
(20, 'configLastChanges', 10, NULL, NULL, NULL, NULL, NULL),
(21, 'configLastChangesType', NULL, NULL, 'number', NULL, NULL, NULL),
(22, 'configLastChangesDayLimit', 10, NULL, NULL, NULL, NULL, NULL),
(23, 'configPagingTagCloud', 100, NULL, NULL, NULL, NULL, NULL),
(24, 'configImportBib', NULL, NULL, NULL, NULL, 0, NULL),
(25, 'configEmailNews', NULL, NULL, NULL, NULL, 0, NULL),
(26, 'configEmailNewRegistrations', NULL, NULL, '', NULL, NULL, NULL),
(27, 'configQuarantine', NULL, NULL, NULL, NULL, 0, NULL),
(28, 'configListLink', NULL, NULL, NULL, NULL, 0, NULL),
(29, 'configEmailStatistics', NULL, NULL, NULL, NULL, 0, NULL),
(30, 'configStatisticsCompiled', NULL, NULL, NULL, NULL, NULL, '2018-01-01 01:01:01'),
(31, 'configMetadataAllow', NULL, NULL, NULL, NULL, 1, NULL),
(32, 'configMetadataUserOnly', NULL, NULL, NULL, NULL, 0, NULL),
(33, 'configNoSort', NULL, NULL, NULL, 'YTozNDp7aTowO3M6MjoiYW4iO2k6MTtzOjE6ImEiO2k6MjtzOjM6InRoZSI7aTozO3M6MzoiZGVyIjtpOjQ7czozOiJkaWUiO2k6NTtzOjM6ImRhcyI7aTo2O3M6MzoiZWluIjtpOjc7czo0OiJlaW5lIjtpOjg7czo1OiJlaW5lciI7aTo5O3M6NToiZWluZXMiO2k6MTA7czoyOiJsZSI7aToxMTtzOjI6ImxhIjtpOjEyO3M6MzoibGFzIjtpOjEzO3M6MjoiaWwiO2k6MTQ7czozOiJsZXMiO2k6MTU7czozOiJ1bmUiO2k6MTY7czoyOiJ1biI7aToxNztzOjM6InVuYSI7aToxODtzOjM6InVubyI7aToxOTtzOjI6ImxvIjtpOjIwO3M6MzoibG9zIjtpOjIxO3M6MToiaSI7aToyMjtzOjM6ImdsaSI7aToyMztzOjI6ImRlIjtpOjI0O3M6MzoiaGV0IjtpOjI1O3M6MjoidW0iO2k6MjY7czozOiJ1bWEiO2k6Mjc7czoxOiJvIjtpOjI4O3M6Mjoib3MiO2k6Mjk7czoyOiJhcyI7aTozMDtzOjM6ImRlbiI7aTozMTtzOjM6ImRldCI7aTozMjtzOjI6ImVuIjtpOjMzO3M6MjoiZXQiO30=', NULL, NULL),
(34, 'configSearchFilter', NULL, NULL, NULL, 'YTo1OntpOjA7czoyOiJhbiI7aToxO3M6MToiYSI7aToyO3M6MzoidGhlIjtpOjM7czozOiJhbmQiO2k6NDtzOjI6InRvIjt9', NULL, NULL),
(35, 'configDenyReadOnly', NULL, NULL, NULL, NULL, 0, NULL),
(36, 'configReadOnlyAccess', NULL, NULL, NULL, NULL, 1, NULL),
(37, 'configOriginatorEditOnly', NULL, NULL, NULL, NULL, 0, NULL),
(38, 'configGlobalEdit', NULL, NULL, NULL, NULL, 0, NULL),
(39, 'configTimezone', NULL, NULL, NULL, 'UTC', NULL, NULL),
(40, 'configRestrictUserId', NULL, NULL, NULL, NULL, NULL, NULL),
(41, 'configMaxWriteChunk', 10000, NULL, NULL, NULL, NULL, NULL),
(42, 'configDeactivateResourceTypes', NULL, NULL, NULL, 'YTowOnt9', NULL, NULL),
(43, 'configRssAllow', NULL, NULL, NULL, NULL, 0, NULL),
(44, 'configRssBibstyle', NULL, NULL, 'APA', NULL, NULL, NULL),
(45, 'configRssLimit', 10, NULL, NULL, NULL, NULL, NULL),
(46, 'configRssDisplay', NULL, NULL, NULL, NULL, 0, NULL),
(47, 'configRssTitle', NULL, NULL, 'WIKINDX', NULL, NULL, NULL),
(48, 'configRssDescription', NULL, NULL, 'My Wikindx', NULL, NULL, NULL),
(49, 'configRssLanguage', NULL, NULL, 'en', NULL, NULL, NULL),
(50, 'configMailServer', NULL, NULL, NULL, NULL, 0, NULL),
(51, 'configMailFrom', NULL, NULL, 'WIKINDX', NULL, NULL, NULL),
(52, 'configMailReplyTo', NULL, NULL, 'noreply@noreply.org', NULL, NULL, NULL),
(53, 'configMailReturnPath', NULL, NULL, '', NULL, NULL, NULL),
(54, 'configMailBackend', NULL, NULL, 'smtp', NULL, NULL, NULL),
(55, 'configMailSmPath', NULL, NULL, '/usr/sbin/sendmail', NULL, NULL, NULL),
(56, 'configMailSmtpServer', NULL, NULL, 'localhost', NULL, NULL, NULL),
(57, 'configMailSmtpPort', 25, NULL, NULL, NULL, NULL, NULL),
(58, 'configMailSmtpEncrypt', NULL, NULL, '', NULL, NULL, NULL),
(59, 'configMailSmtpPersist', NULL, NULL, NULL, NULL, 0, NULL),
(60, 'configMailSmtpAuth', NULL, NULL, NULL, NULL, 0, NULL),
(61, 'configMailSmtpUsername', NULL, NULL, '', NULL, NULL, NULL),
(62, 'configMailSmtpPassword', NULL, NULL, '', NULL, NULL, NULL),
(63, 'configGsAllow', NULL, NULL, NULL, NULL, 0, NULL),
(64, 'configGsAttachment', NULL, NULL, NULL, NULL, 0, NULL),
(65, 'configCmsAllow', NULL, NULL, NULL, NULL, 0, NULL),
(66, 'configCmsBibstyle', NULL, NULL, 'APA', NULL, NULL, NULL),
(67, 'configCmsLanguage', NULL, NULL, 'en', NULL, NULL, NULL),
(68, 'configCmsSql', NULL, NULL, NULL, NULL, 0, NULL),
(69, 'configCmsDbUser', NULL, NULL, '', NULL, NULL, NULL),
(70, 'configCmsDbPassword', NULL, NULL, '', NULL, NULL, NULL),
(71, 'configTagLowColour', NULL, NULL, 'a0a0a0', NULL, NULL, NULL),
(72, 'configTagHighColour', NULL, NULL, 'ff0000', NULL, NULL, NULL),
(73, 'configTagLowSize', NULL, 1, NULL, NULL, NULL, NULL),
(74, 'configTagHighSize', NULL, 2, NULL, NULL, NULL, NULL),
(75, 'configImagesAllow', NULL, NULL, NULL, NULL, 0, NULL),
(76, 'configImagesMaxSize', 5, NULL, NULL, NULL, NULL, NULL),
(77, 'configErrorReport', NULL, NULL, NULL, NULL, 0, NULL),
(78, 'configSqlEmail', NULL, NULL, '', NULL, NULL, NULL),
(79, 'configPrintSql', NULL, NULL, NULL, NULL, 0, NULL),
(80, 'configSqlErrorOutput', NULL, NULL, 'printSql', NULL, NULL, NULL),
(81, 'configBypassSmartyCompile', NULL, NULL, NULL, NULL, 0, NULL),
(82, 'configDisplayStatistics', NULL, NULL, NULL, NULL, 0, NULL),
(83, 'configDisplayUserStatistics', NULL, NULL, NULL, NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_creator`
--

CREATE TABLE `wkx_creator` (
  `creatorId` int(11) NOT NULL,
  `creatorSurname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `creatorFirstname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `creatorInitials` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `creatorPrefix` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `creatorSameAs` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_creator`
--

INSERT INTO `wkx_creator` (`creatorId`, `creatorSurname`, `creatorFirstname`, `creatorInitials`, `creatorPrefix`, `creatorSameAs`) VALUES
(1, 'Pachacama', 'Jonathan', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_custom`
--

CREATE TABLE `wkx_custom` (
  `customId` int(11) NOT NULL,
  `customLabel` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `customSize` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'S'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_database_summary`
--

CREATE TABLE `wkx_database_summary` (
  `databasesummaryTotalResources` int(11) NOT NULL,
  `databasesummaryTotalQuotes` int(11) DEFAULT NULL,
  `databasesummaryTotalParaphrases` int(11) DEFAULT NULL,
  `databasesummaryTotalMusings` int(11) DEFAULT NULL,
  `databasesummaryDbVersion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_database_summary`
--

INSERT INTO `wkx_database_summary` (`databasesummaryTotalResources`, `databasesummaryTotalQuotes`, `databasesummaryTotalParaphrases`, `databasesummaryTotalMusings`, `databasesummaryDbVersion`) VALUES
(1, 0, 0, 0, '5.4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_import_raw`
--

CREATE TABLE `wkx_import_raw` (
  `importrawId` int(11) NOT NULL,
  `importrawStringId` int(11) DEFAULT NULL,
  `importrawText` text COLLATE utf8_unicode_ci NOT NULL,
  `importrawImportType` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_keyword`
--

CREATE TABLE `wkx_keyword` (
  `keywordId` int(11) NOT NULL,
  `keywordKeyword` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `keywordGlossary` text COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_keyword`
--

INSERT INTO `wkx_keyword` (`keywordId`, `keywordKeyword`, `keywordGlossary`) VALUES
(1, 'recommender', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_language`
--

CREATE TABLE `wkx_language` (
  `languageId` int(11) NOT NULL,
  `languageLanguage` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_news`
--

CREATE TABLE `wkx_news` (
  `newsId` int(11) NOT NULL,
  `newsTitle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `newsNews` text COLLATE utf8_unicode_ci,
  `newsTimestamp` datetime DEFAULT NULL,
  `newsEmailSent` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_papers`
--

CREATE TABLE `wkx_papers` (
  `papersId` int(11) NOT NULL,
  `papersUserId` int(11) NOT NULL,
  `papersHashFilename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `papersFilename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `papersTimestamp` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_publisher`
--

CREATE TABLE `wkx_publisher` (
  `publisherId` int(11) NOT NULL,
  `publisherName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `publisherLocation` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `publisherType` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_publisher`
--

INSERT INTO `wkx_publisher` (`publisherId`, `publisherName`, `publisherLocation`, `publisherType`) VALUES
(1, 'Epn', 'EC', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource`
--

CREATE TABLE `wkx_resource` (
  `resourceId` int(11) NOT NULL,
  `resourceType` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceTitle` text COLLATE utf8_unicode_ci,
  `resourceSubtitle` text COLLATE utf8_unicode_ci,
  `resourceShortTitle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceTransTitle` text COLLATE utf8_unicode_ci,
  `resourceTransSubtitle` text COLLATE utf8_unicode_ci,
  `resourceTransShortTitle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceTitleSort` text COLLATE utf8_unicode_ci,
  `resourceField1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceField2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceField3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceField4` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceField5` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceField6` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceField7` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceField8` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceField9` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceNoSort` text COLLATE utf8_unicode_ci,
  `resourceTransNoSort` text COLLATE utf8_unicode_ci,
  `resourceIsbn` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceBibtexKey` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceDoi` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_resource`
--

INSERT INTO `wkx_resource` (`resourceId`, `resourceType`, `resourceTitle`, `resourceSubtitle`, `resourceShortTitle`, `resourceTransTitle`, `resourceTransSubtitle`, `resourceTransShortTitle`, `resourceTitleSort`, `resourceField1`, `resourceField2`, `resourceField3`, `resourceField4`, `resourceField5`, `resourceField6`, `resourceField7`, `resourceField8`, `resourceField9`, `resourceNoSort`, `resourceTransNoSort`, `resourceIsbn`, `resourceBibtexKey`, `resourceDoi`) VALUES
(1, 'journal_article', 'Prueba de articulo cientifico', 'preuba articulo', 'test', NULL, NULL, NULL, 'Prueba de articulo cientifico preuba articulo', '1', '2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pachacama2018', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_attachments`
--

CREATE TABLE `wkx_resource_attachments` (
  `resourceattachmentsId` int(11) NOT NULL,
  `resourceattachmentsResourceId` int(11) DEFAULT NULL,
  `resourceattachmentsHashFilename` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceattachmentsFileName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceattachmentsFileType` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceattachmentsFileSize` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceattachmentsDownloads` int(11) DEFAULT '0',
  `resourceattachmentsDownloadsPeriod` int(11) DEFAULT '0',
  `resourceattachmentsPrimary` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `resourceattachmentsTimestamp` datetime DEFAULT NULL,
  `resourceattachmentsEmbargo` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `resourceattachmentsEmbargoUntil` datetime DEFAULT NULL,
  `resourceattachmentsDescription` text COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_category`
--

CREATE TABLE `wkx_resource_category` (
  `resourcecategoryId` int(11) NOT NULL,
  `resourcecategoryResourceId` int(11) DEFAULT NULL,
  `resourcecategoryCategoryId` int(11) DEFAULT NULL,
  `resourcecategorySubcategoryId` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_resource_category`
--

INSERT INTO `wkx_resource_category` (`resourcecategoryId`, `resourcecategoryResourceId`, `resourcecategoryCategoryId`, `resourcecategorySubcategoryId`) VALUES
(1, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_creator`
--

CREATE TABLE `wkx_resource_creator` (
  `resourcecreatorId` int(11) NOT NULL,
  `resourcecreatorResourceId` int(11) NOT NULL,
  `resourcecreatorCreatorId` int(11) DEFAULT NULL,
  `resourcecreatorOrder` int(11) DEFAULT NULL,
  `resourcecreatorRole` int(11) DEFAULT NULL,
  `resourcecreatorCreatorMain` int(11) DEFAULT NULL,
  `resourcecreatorCreatorSurname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_resource_creator`
--

INSERT INTO `wkx_resource_creator` (`resourcecreatorId`, `resourcecreatorResourceId`, `resourcecreatorCreatorId`, `resourcecreatorOrder`, `resourcecreatorRole`, `resourcecreatorCreatorMain`, `resourcecreatorCreatorSurname`) VALUES
(1, 1, 1, 1, 1, 1, 'pachacama');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_custom`
--

CREATE TABLE `wkx_resource_custom` (
  `resourcecustomId` int(11) NOT NULL,
  `resourcecustomCustomId` int(11) NOT NULL,
  `resourcecustomResourceId` int(11) NOT NULL,
  `resourcecustomShort` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourcecustomLong` text COLLATE utf8_unicode_ci,
  `resourcecustomAddUserIdCustom` int(11) DEFAULT NULL,
  `resourcecustomEditUserIdCustom` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_keyword`
--

CREATE TABLE `wkx_resource_keyword` (
  `resourcekeywordId` int(11) NOT NULL,
  `resourcekeywordResourceId` int(11) DEFAULT NULL,
  `resourcekeywordMetadataId` int(11) DEFAULT NULL,
  `resourcekeywordKeywordId` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_resource_keyword`
--

INSERT INTO `wkx_resource_keyword` (`resourcekeywordId`, `resourcekeywordResourceId`, `resourcekeywordMetadataId`, `resourcekeywordKeywordId`) VALUES
(1, 1, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_language`
--

CREATE TABLE `wkx_resource_language` (
  `resourcelanguageId` int(11) NOT NULL,
  `resourcelanguageResourceId` int(11) DEFAULT NULL,
  `resourcelanguageLanguageId` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_metadata`
--

CREATE TABLE `wkx_resource_metadata` (
  `resourcemetadataId` int(11) NOT NULL,
  `resourcemetadataResourceId` int(11) DEFAULT NULL,
  `resourcemetadataMetadataId` int(11) DEFAULT NULL,
  `resourcemetadataAddUserId` int(11) DEFAULT NULL,
  `resourcemetadataPageStart` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourcemetadataPageEnd` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourcemetadataParagraph` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourcemetadataSection` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourcemetadataChapter` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourcemetadataTimestamp` datetime DEFAULT NULL,
  `resourcemetadataTimestampEdited` datetime DEFAULT NULL,
  `resourcemetadataText` text COLLATE utf8_unicode_ci NOT NULL,
  `resourcemetadataType` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `resourcemetadataPrivate` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'N'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_misc`
--

CREATE TABLE `wkx_resource_misc` (
  `resourcemiscId` int(11) NOT NULL,
  `resourcemiscCollection` int(11) DEFAULT NULL,
  `resourcemiscPublisher` int(11) DEFAULT NULL,
  `resourcemiscField1` int(11) DEFAULT NULL,
  `resourcemiscField2` int(11) DEFAULT NULL,
  `resourcemiscField3` int(11) DEFAULT NULL,
  `resourcemiscField4` int(11) DEFAULT NULL,
  `resourcemiscField5` int(11) DEFAULT NULL,
  `resourcemiscField6` int(11) DEFAULT NULL,
  `resourcemiscTag` int(11) DEFAULT NULL,
  `resourcemiscAddUserIdResource` int(11) DEFAULT NULL,
  `resourcemiscEditUserIdResource` int(11) DEFAULT NULL,
  `resourcemiscAccesses` int(11) DEFAULT '1',
  `resourcemiscAccessesPeriod` int(11) DEFAULT '1',
  `resourcemiscMaturityIndex` double DEFAULT '0',
  `resourcemiscPeerReviewed` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `resourcemiscQuarantine` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_resource_misc`
--

INSERT INTO `wkx_resource_misc` (`resourcemiscId`, `resourcemiscCollection`, `resourcemiscPublisher`, `resourcemiscField1`, `resourcemiscField2`, `resourcemiscField3`, `resourcemiscField4`, `resourcemiscField5`, `resourcemiscField6`, `resourcemiscTag`, `resourcemiscAddUserIdResource`, `resourcemiscEditUserIdResource`, `resourcemiscAccesses`, `resourcemiscAccessesPeriod`, `resourcemiscMaturityIndex`, `resourcemiscPeerReviewed`, `resourcemiscQuarantine`) VALUES
(1, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 1, 1, 0, 'N', 'N');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_page`
--

CREATE TABLE `wkx_resource_page` (
  `resourcepageId` int(11) NOT NULL,
  `resourcepagePageStart` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourcepagePageEnd` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_resource_page`
--

INSERT INTO `wkx_resource_page` (`resourcepageId`, `resourcepagePageStart`, `resourcepagePageEnd`) VALUES
(1, '1', '10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_summary`
--

CREATE TABLE `wkx_resource_summary` (
  `resourcesummaryId` int(11) NOT NULL,
  `resourcesummaryQuotes` int(11) DEFAULT NULL,
  `resourcesummaryParaphrases` int(11) DEFAULT NULL,
  `resourcesummaryMusings` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_text`
--

CREATE TABLE `wkx_resource_text` (
  `resourcetextId` int(11) NOT NULL,
  `resourcetextAddUserIdNote` int(11) DEFAULT NULL,
  `resourcetextEditUserIdNote` int(11) DEFAULT NULL,
  `resourcetextAddUserIdAbstract` int(11) DEFAULT NULL,
  `resourcetextEditUserIdAbstract` int(11) DEFAULT NULL,
  `resourcetextNote` text COLLATE utf8_unicode_ci,
  `resourcetextAbstract` text COLLATE utf8_unicode_ci,
  `resourcetextUrls` text COLLATE utf8_unicode_ci,
  `resourcetextUrlText` text COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_resource_text`
--

INSERT INTO `wkx_resource_text` (`resourcetextId`, `resourcetextAddUserIdNote`, `resourcetextEditUserIdNote`, `resourcetextAddUserIdAbstract`, `resourcetextEditUserIdAbstract`, `resourcetextNote`, `resourcetextAbstract`, `resourcetextUrls`, `resourcetextUrlText`) VALUES
(1, NULL, NULL, NULL, NULL, 'si notas', 'Este arcticulo es una prueba para el funcionamiento de wikindx5', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_timestamp`
--

CREATE TABLE `wkx_resource_timestamp` (
  `resourcetimestampId` int(11) NOT NULL,
  `resourcetimestampTimestamp` datetime DEFAULT NULL,
  `resourcetimestampTimestampAdd` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_resource_timestamp`
--

INSERT INTO `wkx_resource_timestamp` (`resourcetimestampId`, `resourcetimestampTimestamp`, `resourcetimestampTimestampAdd`) VALUES
(1, '2019-03-22 21:39:25', '2019-03-22 21:39:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_user_tags`
--

CREATE TABLE `wkx_resource_user_tags` (
  `resourceusertagsId` int(11) NOT NULL,
  `resourceusertagsTagId` int(11) DEFAULT NULL,
  `resourceusertagsResourceId` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_resource_year`
--

CREATE TABLE `wkx_resource_year` (
  `resourceyearId` int(11) NOT NULL,
  `resourceyearYear1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceyearYear2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceyearYear3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resourceyearYear4` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_resource_year`
--

INSERT INTO `wkx_resource_year` (`resourceyearId`, `resourceyearYear1`, `resourceyearYear2`, `resourceyearYear3`, `resourceyearYear4`) VALUES
(1, '2018', NULL, '2019', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_statistics`
--

CREATE TABLE `wkx_statistics` (
  `statisticsId` int(11) NOT NULL,
  `statisticsResourceId` int(11) NOT NULL,
  `statisticsAttachmentId` int(11) DEFAULT NULL,
  `statisticsStatistics` text COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_statistics`
--

INSERT INTO `wkx_statistics` (`statisticsId`, `statisticsResourceId`, `statisticsAttachmentId`, `statisticsStatistics`) VALUES
(1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_subcategory`
--

CREATE TABLE `wkx_subcategory` (
  `subcategoryId` int(11) NOT NULL,
  `subcategoryCategoryId` int(11) DEFAULT NULL,
  `subcategorySubcategory` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_tag`
--

CREATE TABLE `wkx_tag` (
  `tagId` int(11) NOT NULL,
  `tagTag` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_users`
--

CREATE TABLE `wkx_users` (
  `usersId` int(11) NOT NULL,
  `usersUsername` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `usersPassword` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `usersFullname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usersEmail` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usersDepartment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usersInstitution` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usersTimestamp` datetime DEFAULT NULL,
  `usersAdmin` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `usersCookie` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `usersPaging` int(11) DEFAULT '20',
  `usersPagingMaxLinks` int(11) DEFAULT '11',
  `usersPagingStyle` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `usersStringLimit` int(11) DEFAULT '40',
  `usersLanguage` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'en',
  `usersStyle` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'APA',
  `usersTemplate` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'default',
  `usersNotify` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `usersNotifyAddEdit` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'A',
  `usersNotifyThreshold` int(2) DEFAULT '0',
  `usersNotifyTimestamp` datetime DEFAULT NULL,
  `usersNotifyDigestThreshold` int(11) DEFAULT '100',
  `usersPagingTagCloud` int(11) DEFAULT '100',
  `usersPasswordQuestion1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usersPasswordAnswer1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usersPasswordQuestion2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usersPasswordAnswer2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usersPasswordQuestion3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usersPasswordAnswer3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usersUserSession` longtext COLLATE utf8_unicode_ci,
  `usersUseBibtexKey` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `usersUseWikindxKey` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `usersDisplayBibtexLink` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `usersDisplayCmsLink` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `usersCmsTag` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usersIsCreator` int(11) DEFAULT NULL,
  `usersListlink` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `usersTemplateMenu` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `wkx_users`
--

INSERT INTO `wkx_users` (`usersId`, `usersUsername`, `usersPassword`, `usersFullname`, `usersEmail`, `usersDepartment`, `usersInstitution`, `usersTimestamp`, `usersAdmin`, `usersCookie`, `usersPaging`, `usersPagingMaxLinks`, `usersPagingStyle`, `usersStringLimit`, `usersLanguage`, `usersStyle`, `usersTemplate`, `usersNotify`, `usersNotifyAddEdit`, `usersNotifyThreshold`, `usersNotifyTimestamp`, `usersNotifyDigestThreshold`, `usersPagingTagCloud`, `usersPasswordQuestion1`, `usersPasswordAnswer1`, `usersPasswordQuestion2`, `usersPasswordAnswer2`, `usersPasswordQuestion3`, `usersPasswordAnswer3`, `usersUserSession`, `usersUseBibtexKey`, `usersUseWikindxKey`, `usersDisplayBibtexLink`, `usersDisplayCmsLink`, `usersCmsTag`, `usersIsCreator`, `usersListlink`, `usersTemplateMenu`) VALUES
(1, 'Jonathan', '54a/p7g3zWkQA', 'Jonathan Paul Pachacama Quinga', 'jonathan.pachacama@epn.edu.ec', NULL, NULL, '2019-03-22 16:35:45', 'Y', 'N', 20, 11, 'N', 40, 'en', 'APA', 'default', 'N', 'A', 0, '2019-03-22 16:35:45', 100, 100, NULL, NULL, NULL, NULL, NULL, NULL, 'YTo1OntzOjEyOiJRdWVyeVN0cmluZ3MiO3M6NTQ0OiJZVG8xT250cE9qQTdjem80T1RvaUwzZHBhMmx1WkhnMUwybHVaR1Y0TG5Cb2NEOWhZM1JwYjI0OWJHbHpkRjlNU1ZOVVVrVlRUMVZTUTBWVFgwTlBVa1VtYldWMGFHOWtQWEJ5YjJObGMzTkhaVzVsY21Gc0pteHBjM1JmVDNKa1pYSTlkR2wwYkdVaU8yazZNVHR6T2pVNE9pSXZkMmxyYVc1a2VEVXZhVzVrWlhndWNHaHdQMkZqZEdsdmJqMXlaWE52ZFhKalpWOVNSVk5QVlZKRFJWWkpSVmRmUTA5U1JTWnBaRDB4SWp0cE9qSTdjem80T1RvaUwzZHBhMmx1WkhnMUwybHVaR1Y0TG5Cb2NEOWhZM1JwYjI0OWJHbHpkRjlNU1ZOVVVrVlRUMVZTUTBWVFgwTlBVa1VtYldWMGFHOWtQWEJ5YjJObGMzTkhaVzVsY21Gc0pteHBjM1JmVDNKa1pYSTlkR2wwYkdVaU8yazZNenR6T2pVek9pSXZkMmxyYVc1a2VEVXZhVzVrWlhndWNHaHdQMkZqZEdsdmJqMXlaWE52ZFhKalpWOVNSVk5QVlZKRFJVWlBVazFmUTA5U1JTSTdhVG8wTzNNNk5UTTZJaTkzYVd0cGJtUjROUzlwYm1SbGVDNXdhSEEvWVdOMGFXOXVQWEpsYzI5MWNtTmxYMUpGVTA5VlVrTkZSazlTVFY5RFQxSkZJanQ5IjtzOjM6InNxbCI7czoxMDkzMjoiWVRvMk9udHpPamc2SWt4aGMzUlRiMnh2SWp0ek9qRTZJakVpTzNNNk9Ub2lUR0Z6ZEU5eVpHVnlJanR6T2pVNkluUnBkR3hsSWp0ek9qZzZJa3hwYzNSVGRHMTBJanR6T2pNek9UVTZJbE5GVEVWRFZDQWdZSEpsYzI5MWNtTmxTV1JnTENCZ1kzSmxZWFJ2Y2xOMWNtNWhiV1ZnTENCZ2NtVnpiM1Z5WTJWVWVYQmxZQ3dnWUhKbGMyOTFjbU5sVkdsMGJHVmdMQ0JnY21WemIzVnlZMlZUZFdKMGFYUnNaV0FzSUdCeVpYTnZkWEpqWlZOb2IzSjBWR2wwYkdWZ0xDQmdjbVZ6YjNWeVkyVlVjbUZ1YzFScGRHeGxZQ3dnWUhKbGMyOTFjbU5sVkhKaGJuTlRkV0owYVhSc1pXQXNJR0J5WlhOdmRYSmpaVlJ5WVc1elUyaHZjblJVYVhSc1pXQXNJR0J5WlhOdmRYSmpaVVpwWld4a01XQXNJR0J5WlhOdmRYSmpaVVpwWld4a01tQXNJR0J5WlhOdmRYSmpaVVpwWld4a00yQXNJR0J5WlhOdmRYSmpaVVpwWld4a05HQXNJR0J5WlhOdmRYSmpaVVpwWld4a05XQXNJR0J5WlhOdmRYSmpaVVpwWld4a05tQXNJR0J5WlhOdmRYSmpaVVpwWld4a04yQXNJR0J5WlhOdmRYSmpaVVpwWld4a09HQXNJR0J5WlhOdmRYSmpaVVpwWld4a09XQXNJR0J5WlhOdmRYSmpaVTV2VTI5eWRHQXNJR0J5WlhOdmRYSmpaVlJ5WVc1elRtOVRiM0owWUN3Z1lISmxjMjkxY21ObFNYTmlibUFzSUdCeVpYTnZkWEpqWlVKcFluUmxlRXRsZVdBc0lHQnlaWE52ZFhKalpVUnZhV0FzSUdCeVpYTnZkWEpqWlhSbGVIUkpaR0FzSUdCeVpYTnZkWEpqWlhSbGVIUk9iM1JsWUN3Z1lISmxjMjkxY21ObGRHVjRkRUZpYzNSeVlXTjBZQ3dnWUhKbGMyOTFjbU5sZEdWNGRGVnliSE5nTENCZ2NtVnpiM1Z5WTJWMFpYaDBWWEpzVkdWNGRHQXNJR0J5WlhOdmRYSmpaWFJsZUhSRlpHbDBWWE5sY2tsa1RtOTBaV0FzSUdCeVpYTnZkWEpqWlhSbGVIUkJaR1JWYzJWeVNXUk9iM1JsWUN3Z1lISmxjMjkxY21ObGRHVjRkRVZrYVhSVmMyVnlTV1JCWW5OMGNtRmpkR0FzSUdCeVpYTnZkWEpqWlhSbGVIUkJaR1JWYzJWeVNXUkJZbk4wY21GamRHQXNJR0J5WlhOdmRYSmpaWGxsWVhKSlpHQXNJR0J5WlhOdmRYSmpaWGxsWVhKWlpXRnlNV0FzSUdCeVpYTnZkWEpqWlhsbFlYSlpaV0Z5TW1Bc0lHQnlaWE52ZFhKalpYbGxZWEpaWldGeU0yQXNJR0J5WlhOdmRYSmpaWGxsWVhKWlpXRnlOR0FzSUdCeVpYTnZkWEpqWlhCaFoyVkpaR0FzSUdCeVpYTnZkWEpqWlhCaFoyVlFZV2RsVTNSaGNuUmdMQ0JnY21WemIzVnlZMlZ3WVdkbFVHRm5aVVZ1WkdBc0lHQnlaWE52ZFhKalpYTjFiVzFoY25sSlpHQXNJR0J5WlhOdmRYSmpaWE4xYlcxaGNubFJkVzkwWlhOZ0xDQmdjbVZ6YjNWeVkyVnpkVzF0WVhKNVVHRnlZWEJvY21GelpYTmdMQ0JnY21WemIzVnlZMlZ6ZFcxdFlYSjVUWFZ6YVc1bmMyQXNJR0J5WlhOdmRYSmpaWFJwYldWemRHRnRjRWxrWUN3Z1lISmxjMjkxY21ObGRHbHRaWE4wWVcxd1ZHbHRaWE4wWVcxd1lDd2dZSEpsYzI5MWNtTmxkR2x0WlhOMFlXMXdWR2x0WlhOMFlXMXdRV1JrWUN3Z1lIQjFZbXhwYzJobGNrbGtZQ3dnWUhCMVlteHBjMmhsY2s1aGJXVmdMQ0JnY0hWaWJHbHphR1Z5VEc5allYUnBiMjVnTENCZ2NIVmliR2x6YUdWeVZIbHdaV0FzSUdCamIyeHNaV04wYVc5dVNXUmdMQ0JnWTI5c2JHVmpkR2x2YmxScGRHeGxZQ3dnWUdOdmJHeGxZM1JwYjI1VWFYUnNaVk5vYjNKMFlDd2dZR052Ykd4bFkzUnBiMjVVZVhCbFlDd2dZSFZ6WlhKelNXUmdMQ0JnZFhObGNuTlZjMlZ5Ym1GdFpXQXNJR0IxYzJWeWMwWjFiR3h1WVcxbFlDd2dZSEpsYzI5MWNtTmxiV2x6WTBsa1lDd2dZSEpsYzI5MWNtTmxiV2x6WTBOdmJHeGxZM1JwYjI1Z0xDQmdjbVZ6YjNWeVkyVnRhWE5qVUhWaWJHbHphR1Z5WUN3Z1lISmxjMjkxY21ObGJXbHpZMFpwWld4a01XQXNJR0J5WlhOdmRYSmpaVzFwYzJOR2FXVnNaREpnTENCZ2NtVnpiM1Z5WTJWdGFYTmpSbWxsYkdRellDd2dZSEpsYzI5MWNtTmxiV2x6WTBacFpXeGtOR0FzSUdCeVpYTnZkWEpqWlcxcGMyTkdhV1ZzWkRWZ0xDQmdjbVZ6YjNWeVkyVnRhWE5qUm1sbGJHUTJZQ3dnWUhKbGMyOTFjbU5sYldselkxUmhaMkFzSUdCeVpYTnZkWEpqWlcxcGMyTkJaR1JWYzJWeVNXUlNaWE52ZFhKalpXQXNJR0J5WlhOdmRYSmpaVzFwYzJORlpHbDBWWE5sY2tsa1VtVnpiM1Z5WTJWZ0xDQmdjbVZ6YjNWeVkyVnRhWE5qUVdOalpYTnpaWE5nTENCZ2NtVnpiM1Z5WTJWdGFYTmpUV0YwZFhKcGRIbEpibVJsZUdBc0lHQnlaWE52ZFhKalpXMXBjMk5RWldWeVVtVjJhV1YzWldSZ0xDQmdjbVZ6YjNWeVkyVnRhWE5qVVhWaGNtRnVkR2x1WldBc0lHQnlaWE52ZFhKalpXMXBjMk5CWTJObGMzTmxjMUJsY21sdlpHQXNJR0J5WlhOdmRYSmpaV055WldGMGIzSkRjbVZoZEc5eVUzVnlibUZ0WldBZ1JsSlBUU0JnZDJ0NFgzSmxjMjkxY21ObFlDQWdJRXhGUmxRZ1NrOUpUaUJnZDJ0NFgzSmxjMjkxY21ObFgyMXBjMk5nSUU5T0lHQnlaWE52ZFhKalpXMXBjMk5KWkdBZ1BTQmdjbVZ6YjNWeVkyVkpaR0FnVEVWR1ZDQktUMGxPSUdCM2EzaGZjbVZ6YjNWeVkyVmZZM0psWVhSdmNtQWdUMDRnWUhKbGMyOTFjbU5sWTNKbFlYUnZjbEpsYzI5MWNtTmxTV1JnSUQwZ1lISmxjMjkxY21ObFNXUmdJRXhGUmxRZ1NrOUpUaUJnZDJ0NFgyTnlaV0YwYjNKZ0lFOU9JR0JqY21WaGRHOXlTV1JnSUQwZ1lISmxjMjkxY21ObFkzSmxZWFJ2Y2tOeVpXRjBiM0pKWkdBZ1RFVkdWQ0JLVDBsT0lHQjNhM2hmY21WemIzVnlZMlZmZEdsdFpYTjBZVzF3WUNCUFRpQmdjbVZ6YjNWeVkyVjBhVzFsYzNSaGJYQkpaR0FnUFNCZ2NtVnpiM1Z5WTJWSlpHQWdURVZHVkNCS1QwbE9JR0IzYTNoZmNtVnpiM1Z5WTJWZmVXVmhjbUFnVDA0Z1lISmxjMjkxY21ObGVXVmhja2xrWUNBOUlHQnlaWE52ZFhKalpVbGtZQ0JNUlVaVUlFcFBTVTRnWUhkcmVGOXlaWE52ZFhKalpWOTBaWGgwWUNCUFRpQmdjbVZ6YjNWeVkyVjBaWGgwU1dSZ0lEMGdZSEpsYzI5MWNtTmxTV1JnSUV4RlJsUWdTazlKVGlCZ2QydDRYM0psYzI5MWNtTmxYM0JoWjJWZ0lFOU9JR0J5WlhOdmRYSmpaWEJoWjJWSlpHQWdQU0JnY21WemIzVnlZMlZKWkdBZ1RFVkdWQ0JLVDBsT0lHQjNhM2hmY21WemIzVnlZMlZmYzNWdGJXRnllV0FnVDA0Z1lISmxjMjkxY21ObGMzVnRiV0Z5ZVVsa1lDQTlJR0J5WlhOdmRYSmpaVWxrWUNCTVJVWlVJRXBQU1U0Z1lIZHJlRjl5WlhOdmRYSmpaVjl0WlhSaFpHRjBZV0FnVDA0Z1lISmxjMjkxY21ObGJXVjBZV1JoZEdGU1pYTnZkWEpqWlVsa1lDQTlJR0J5WlhOdmRYSmpaVWxrWUNCTVJVWlVJRXBQU1U0Z1lIZHJlRjl3ZFdKc2FYTm9aWEpnSUU5T0lHQnlaWE52ZFhKalpXMXBjMk5RZFdKc2FYTm9aWEpnSUQwZ1lIQjFZbXhwYzJobGNrbGtZQ0JNUlVaVUlFcFBTVTRnWUhkcmVGOWpiMnhzWldOMGFXOXVZQ0JQVGlCZ2NtVnpiM1Z5WTJWdGFYTmpRMjlzYkdWamRHbHZibUFnUFNCZ1kyOXNiR1ZqZEdsdmJrbGtZQ0JNUlVaVUlFcFBTVTRnWUhkcmVGOTFjMlZ5YzJBZ1QwNGdkWE5sY25OSlpDQTlJRU5CVTBVZ1YwaEZUaUFvWUhKbGMyOTFjbU5sYldselkwVmthWFJWYzJWeVNXUlNaWE52ZFhKalpXQWdTVk1nVGs5VUlFNVZURXdwSUZSSVJVNGdLR0J5WlhOdmRYSmpaVzFwYzJORlpHbDBWWE5sY2tsa1VtVnpiM1Z5WTJWZ0tTQWdSVXhUUlNBb1lISmxjMjkxY21ObGJXbHpZMEZrWkZWelpYSkpaRkpsYzI5MWNtTmxZQ2tnUlU1RUlFZFNUMVZRSUVKWklHQnlaWE52ZFhKalpVbGtZQ0JQVWtSRlVpQkNXU0JnY21WemIzVnlZMlZVYVhSc1pWTnZjblJnSUNCQlUwTXNJR0J5WlhOdmRYSmpaV055WldGMGIzSkRjbVZoZEc5eVUzVnlibUZ0WldBZ0lFRlRReXdnSUZKRlVFeEJRMFVvSUZKRlVFeEJRMFVvUTBGVFJTQlhTRVZPSUNnb1lISmxjMjkxY21ObFZIbHdaV0FnUFNBblltOXZheWNnVDFJZ1lISmxjMjkxY21ObFZIbHdaV0FnUFNBblltOXZhMTlqYUdGd2RHVnlKeUJQVWlCZ2NtVnpiM1Z5WTJWVWVYQmxZQ0E5SUNkaWIyOXJYMkZ5ZEdsamJHVW5LU0JCVGtRZ1lISmxjMjkxY21ObGVXVmhjbGxsWVhJeVlDQkpVeUJPVDFRZ1RsVk1UQ0FwSUZSSVJVNGdZSEpsYzI5MWNtTmxlV1ZoY2xsbFlYSXlZQ0JYU0VWT0lDZ29ZSEpsYzI5MWNtTmxWSGx3WldBZ1BTQW5jSEp2WTJWbFpHbHVaM01uSUU5U0lHQnlaWE52ZFhKalpWUjVjR1ZnSUQwZ0ozQnliMk5sWldScGJtZHpYMkZ5ZEdsamJHVW5LU0JCVGtRZ1lISmxjMjkxY21ObGVXVmhjbGxsWVhJeFlDQkpVeUJPVlV4TUlDa2dWRWhGVGlCZ2NtVnpiM1Z5WTJWNVpXRnlXV1ZoY2pKZ0lGZElSVTRnS0NoZ2NtVnpiM1Z5WTJWVWVYQmxZQ0E5SUNkamIyNW1aWEpsYm1ObFgzQmhjR1Z5SnlCUFVpQmdjbVZ6YjNWeVkyVlVlWEJsWUNBOUlDZGpiMjVtWlhKbGJtTmxYM0J2YzNSbGNpY3BLU0JVU0VWT0lHQnlaWE52ZFhKalpYbGxZWEpaWldGeU1tQWdWMGhGVGlBb0tHQnlaWE52ZFhKalpWUjVjR1ZnSUQwZ0ozZGxZbDlsYm1ONVkyeHZjR1ZrYVdFbklFOVNJR0J5WlhOdmRYSmpaVlI1Y0dWZ0lEMGdKM2RsWWw5bGJtTjVZMnh2Y0dWa2FXRmZZWEowYVdOc1pTY3BJRUZPUkNCZ2NtVnpiM1Z5WTJWNVpXRnlXV1ZoY2pOZ0lFbFRJRTVQVkNCT1ZVeE1JQ2tnVkVoRlRpQmdjbVZ6YjNWeVkyVjVaV0Z5V1dWaGNqTmdJQ0JGVEZORklDaGdjbVZ6YjNWeVkyVjVaV0Z5V1dWaGNqRmdLU0JGVGtRc0lDZDdKeXdnSnljcExDQW5mU2NzSUNjbktTQWdRVk5ESWp0ek9qazZJa3hoYzNSTmRXeDBhU0k3Y3pvMk9Ub2lZV04wYVc5dVBXeHBjM1JmVEVsVFZGSkZVMDlWVWtORlUxOURUMUpGSm0xbGRHaHZaRDF3Y205alpYTnpSMlZ1WlhKaGJDWnNhWE4wWDA5eVpHVnlQWFJwZEd4bElqdHpPalE2SWxOMGJYUWlPM002TkRVME5Eb2lWVEJXVFZKVlRsVkpRMEpuWTIxV2VtSXpWbmxaTWxaS1drZEJjMGxIUW1wamJWWm9aRWM1ZVZVelZubGliVVowV2xkQmMwbEhRbmxhV0U1MlpGaEthbHBXVWpWalIxWm5URU5DWjJOdFZucGlNMVo1V1RKV1ZXRllVbk5hVjBGelNVZENlVnBZVG5aa1dFcHFXbFpPTVZsdVVuQmtSM2hzV1VOM1oxbElTbXhqTWpreFkyMU9iRlV5YUhaamJsSlZZVmhTYzFwWFFYTkpSMEo1V2xoT2RtUllTbXBhVmxKNVdWYzFlbFpIYkRCaVIxWm5URU5DWjJOdFZucGlNMVo1V1RKV1ZXTnRSblZqTVU0eFdXNVNjR1JIZUd4WlEzZG5XVWhLYkdNeU9URmpiVTVzVmtoS2FHSnVUbFJoUnpsNVpFWlNjR1JIZUd4WlEzZG5XVWhLYkdNeU9URmpiVTVzVW0xc2JHSkhVWGhaUTNkbldVaEtiR015T1RGamJVNXNVbTFzYkdKSFVYbFpRM2RuV1VoS2JHTXlPVEZqYlU1c1VtMXNiR0pIVVhwWlEzZG5XVWhLYkdNeU9URmpiVTVzVW0xc2JHSkhVVEJaUTNkbldVaEtiR015T1RGamJVNXNVbTFzYkdKSFVURlpRM2RuV1VoS2JHTXlPVEZqYlU1c1VtMXNiR0pIVVRKWlEzZG5XVWhLYkdNeU9URmpiVTVzVW0xc2JHSkhVVE5aUTNkbldVaEtiR015T1RGamJVNXNVbTFzYkdKSFVUUlpRM2RuV1VoS2JHTXlPVEZqYlU1c1VtMXNiR0pIVVRWWlEzZG5XVWhLYkdNeU9URmpiVTVzVkcwNVZHSXpTakJaUTNkbldVaEtiR015T1RGamJVNXNWa2hLYUdKdVRrOWlNVTUyWTI1U1oweERRbWRqYlZaNllqTldlVmt5Vmtwak1rcDFXVU4zWjFsSVNteGpNamt4WTIxT2JGRnRiR2xrUjFZMFV6SldOVmxEZDJkWlNFcHNZekk1TVdOdFRteFNSemx3V1VOM1oxbElTbXhqTWpreFkyMU9iR1JIVmpSa1JXeHJXVU4zWjFsSVNteGpNamt4WTIxT2JHUkhWalJrUlRWMlpFZFdaMHhEUW1kamJWWjZZak5XZVZreVZqQmFXR2d3VVZkS2VtUklTbWhaTTFKblRFTkNaMk50Vm5waU0xWjVXVEpXTUZwWWFEQldXRXB6WXpKQmMwbEhRbmxhV0U1MlpGaEthbHBZVW14bFNGSldZMjE0VlZwWWFEQlpRM2RuV1VoS2JHTXlPVEZqYlU1c1pFZFdOR1JGVm10aFdGSldZekpXZVZOWFVrOWlNMUpzV1VOM1oxbElTbXhqTWpreFkyMU9iR1JIVmpSa1JVWnJXa1pXZWxwWVNrcGFSVFYyWkVkV1oweERRbWRqYlZaNllqTldlVmt5VmpCYVdHZ3dVbGRTY0dSR1ZucGFXRXBLV2tWR2FXTXpVbmxaVjA0d1dVTjNaMWxJU214ak1qa3hZMjFPYkdSSFZqUmtSVVpyV2taV2VscFlTa3BhUlVacFl6TlNlVmxYVGpCWlEzZG5XVWhLYkdNeU9URmpiVTVzWlZkV2FHTnJiR3RaUTNkbldVaEtiR015T1RGamJVNXNaVmRXYUdOc2JHeFpXRWw0V1VOM1oxbElTbXhqTWpreFkyMU9iR1ZYVm1oamJHeHNXVmhKZVZsRGQyZFpTRXBzWXpJNU1XTnRUbXhsVjFab1kyeHNiRmxZU1hwWlEzZG5XVWhLYkdNeU9URmpiVTVzWlZkV2FHTnNiR3haV0Vrd1dVTjNaMWxJU214ak1qa3hZMjFPYkdOSFJtNWFWV3hyV1VOM1oxbElTbXhqTWpreFkyMU9iR05IUm01YVZrSm9XakpXVkdSSFJubGtSMEZ6U1VkQ2VWcFlUblprV0VwcVdsaENhRm95VmxGWlYyUnNVbGMxYTFsRGQyZFpTRXBzWXpJNU1XTnRUbXhqTTFaMFlsZEdlV1ZWYkd0WlEzZG5XVWhLYkdNeU9URmpiVTVzWXpOV2RHSlhSbmxsVmtZeFlqTlNiR015UVhOSlIwSjVXbGhPZG1SWVNtcGFXRTR4WWxjeGFHTnViRkZaV0Vwb1kwZG9lVmxZVG14ak1rRnpTVWRDZVZwWVRuWmtXRXBxV2xoT01XSlhNV2hqYm14T1pGaE9jR0p0WkhwWlEzZG5XVWhLYkdNeU9URmpiVTVzWkVkc2RGcFlUakJaVnpGM1UxZFNaMHhEUW1kamJWWjZZak5XZVZreVZqQmhWekZzWXpOU2FHSllRbFZoVnpGc1l6TlNhR0pZUW1kTVEwSm5ZMjFXZW1JelZubFpNbFl3WVZjeGJHTXpVbWhpV0VKVllWY3hiR016VW1oaVdFSkNXa2RTWjB4RFFtZGpTRlpwWWtkc2VtRkhWbmxUVjFKblRFTkNaMk5JVm1saVIyeDZZVWRXZVZSdFJuUmFWMEZ6U1VkQ2QyUlhTbk5oV0U1dldsaEtUV0l5VG1oa1IyeDJZbTFCYzBsSFFuZGtWMHB6WVZoT2IxcFlTbFZsV0VKc1dVTjNaMWxIVG5aaVIzaHNXVE5TY0dJeU5VcGFSMEZ6U1VkQ2FtSXllSE5hVjA0d1lWYzVkVlpIYkRCaVIxWm5URU5DWjFreU9YTmlSMVpxWkVkc2RtSnNVbkJrUjNoc1ZUSm9kbU51VW1kTVEwSm5XVEk1YzJKSFZtcGtSMngyWW14U05XTkhWbWRNUTBKblpGaE9iR051VGtwYVIwRnpTVWRDTVdNeVZubGpNVlo2V2xoS2RWbFhNV3haUTNkbldVaFdlbHBZU25wU2JsWnpZa2MxYUdKWFZtZE1RMEpuWTIxV2VtSXpWbmxaTWxaMFlWaE9hbE5YVW1kTVEwSm5ZMjFXZW1JelZubFpNbFowWVZoT2FsRXlPWE5pUjFacVpFZHNkbUp0UVhOSlIwSjVXbGhPZG1SWVNtcGFWekZ3WXpKT1VXUlhTbk5oV0U1dldsaEtaMHhEUW1kamJWWjZZak5XZVZreVZuUmhXRTVxVW0xc2JHSkhVWGhaUTNkbldVaEtiR015T1RGamJVNXNZbGRzZWxrd1duQmFWM2hyVFcxQmMwbEhRbmxhV0U1MlpGaEthbHBYTVhCak1rNUhZVmRXYzFwRVRtZE1RMEpuWTIxV2VtSXpWbmxaTWxaMFlWaE9hbEp0Ykd4aVIxRXdXVU4zWjFsSVNteGpNamt4WTIxT2JHSlhiSHBaTUZwd1dsZDRhMDVYUVhOSlIwSjVXbGhPZG1SWVNtcGFWekZ3WXpKT1IyRlhWbk5hUkZwblRFTkNaMk50Vm5waU0xWjVXVEpXZEdGWVRtcFdSMFp1V1VOM1oxbElTbXhqTWpreFkyMU9iR0pYYkhwWk1FWnJXa1pXZWxwWVNrcGFSa3BzWXpJNU1XTnRUbXhaUTNkbldVaEtiR015T1RGamJVNXNZbGRzZWxrd1ZtdGhXRkpXWXpKV2VWTlhVbE5hV0U1MlpGaEthbHBYUVhOSlIwSjVXbGhPZG1SWVNtcGFWekZ3WXpKT1Fsa3lUbXhqTTA1c1l6SkJjMGxIUW5sYVdFNTJaRmhLYWxwWE1YQmpNazVPV1ZoU01XTnRiREJsVld4MVdrZFdORmxEZDJkWlNFcHNZekk1TVdOdFRteGlWMng2V1RGQ2JGcFlTbE5hV0Zwd1dsaGtiRnBIUVhOSlIwSjVXbGhPZG1SWVNtcGFWekZ3WXpKT1VtUlhSbmxaVnpVd1lWYzFiRmxEZDJkWlNFcHNZekk1TVdOdFRteGlWMng2V1RCR2Fsa3lWbnBqTWxaNlZVZFdlV0ZYT1d0WlEzZG5XVWhLYkdNeU9URmpiVTVzV1ROS2JGbFlVblpqYTA1NVdsZEdNR0l6U2xSa1dFcDFXVmN4YkZsRFFrZFZhemxPU1VkQ00yRXphR1pqYlZaNllqTldlVmt5Vm1kSlEwRm5WRVZXUjFaRFFrdFVNR3hQU1VkQ00yRXphR1pqYlZaNllqTldlVmt5Vm1aaVYyeDZXVEpCWjFRd05HZFpTRXBzWXpJNU1XTnRUbXhpVjJ4NldUQnNhMWxEUVRsSlIwSjVXbGhPZG1SWVNtcGFWV3hyV1VOQ1RWSlZXbFZKUlhCUVUxVTBaMWxJWkhKbFJqbDVXbGhPZG1SWVNtcGFWamxxWTIxV2FHUkhPWGxaUTBKUVZHbENaMk50Vm5waU0xWjVXVEpXYW1OdFZtaGtSemw1VlcxV2VtSXpWbmxaTWxaS1drZEJaMUJUUW1kamJWWjZZak5XZVZreVZrcGFSMEZuVkVWV1IxWkRRa3RVTUd4UFNVZENNMkV6YUdaWk0wcHNXVmhTZG1OdFFXZFVNRFJuV1VkT2VWcFhSakJpTTBwS1drZEJaMUJUUW1kamJWWjZZak5XZVZreVZtcGpiVlpvWkVjNWVWRXpTbXhaV0ZKMlkydHNhMWxEUWsxU1ZWcFZTVVZ3VUZOVk5HZFpTR1J5WlVZNWVWcFlUblprV0VwcVdsWTVNR0ZYTVd4ak0xSm9ZbGhDWjBsRk9VOUpSMEo1V2xoT2RtUllTbXBhV0ZKd1lsZFdlbVJIUm5SalJXeHJXVU5CT1VsSFFubGFXRTUyWkZoS2FscFZiR3RaUTBKTlVsVmFWVWxGY0ZCVFZUUm5XVWhrY21WR09YbGFXRTUyWkZoS2FscFdPVFZhVjBaNVdVTkNVRlJwUW1kamJWWjZZak5XZVZreVZqVmFWMFo1VTFkU1owbEVNR2RaU0Vwc1l6STVNV050VG14VFYxSm5TVVY0UmxKc1VXZFRhemxLVkdsQ1oyUXlkRFJZTTBwc1l6STVNV050VG14WU0xSnNaVWhTWjBsRk9VOUpSMEo1V2xoT2RtUllTbXBhV0ZKc1pVaFNTbHBIUVdkUVUwSm5ZMjFXZW1JelZubFpNbFpLV2tkQloxUkZWa2RXUTBKTFZEQnNUMGxIUWpOaE0yaG1ZMjFXZW1JelZubFpNbFptWTBkR2JscFhRV2RVTURSbldVaEtiR015T1RGamJVNXNZMGRHYmxwVmJHdFpRMEU1U1VkQ2VWcFlUblprV0VwcVdsVnNhMWxEUWsxU1ZWcFZTVVZ3VUZOVk5HZFpTR1J5WlVZNWVWcFlUblprV0VwcVdsWTVlbVJYTVhSWldFbzFXVU5DVUZScFFtZGpiVlo2WWpOV2VWa3lWbnBrVnpGMFdWaEtOVk5YVW1kSlJEQm5XVWhLYkdNeU9URmpiVTVzVTFkU1owbEZlRVpTYkZGblUyczVTbFJwUW1ka01uUTBXRE5LYkdNeU9URmpiVTVzV0RJeGJHUkhSbXRaV0ZKb1dVTkNVRlJwUW1kamJWWjZZak5XZVZreVZuUmFXRkpvV2tkR01GbFdTbXhqTWpreFkyMU9iRk5YVW1kSlJEQm5XVWhLYkdNeU9URmpiVTVzVTFkU1owbEZlRVpTYkZGblUyczVTbFJwUW1ka01uUTBXRE5DTVZsdGVIQmpNbWhzWTIxQloxUXdOR2RaU0Vwc1l6STVNV050VG14aVYyeDZXVEZDTVZsdGVIQmpNbWhzWTIxQloxQlRRbWRqU0ZacFlrZHNlbUZIVm5sVFYxSm5TVVY0UmxKc1VXZFRhemxLVkdsQ1oyUXlkRFJZTWs1MllrZDRiRmt6VW5CaU1qVm5TVVU1VDBsSFFubGFXRTUyWkZoS2FscFhNWEJqTWs1RVlqSjRjMXBYVGpCaFZ6bDFXVU5CT1VsSFFtcGlNbmh6V2xkT01HRlhPWFZUVjFKblNVVjRSbEpzVVdkVGF6bEtWR2xDWjJReWREUllNMVo2V2xoS2VsbERRbEJVYVVJeFl6SldlV013Ykd0SlJEQm5VVEJHVkZKVFFsaFRSVlpQU1VOb1oyTnRWbnBpTTFaNVdUSldkR0ZZVG1wU1YxSndaRVpXZWxwWVNrcGFSa3BzWXpJNU1XTnRUbXhaUTBKS1ZYbENUMVF4VVdkVWJGWk5WRU5yWjFaRmFFWlVhVUZ2V1VoS2JHTXlPVEZqYlU1c1lsZHNlbGt3Vm10aFdGSldZekpXZVZOWFVsTmFXRTUyWkZoS2FscFhRWEJKUTBKR1ZFWk9Sa2xEYUdkamJWWjZZak5XZVZreVZuUmhXRTVxVVZkU2ExWllUbXhqYTJ4clZXMVdlbUl6Vm5sWk1sWm5TMU5DUmxSclVXZFNNVXBRVmxaQloxRnNhMmRaU0Vwc1l6STVNV050VG14VFYxSm5TVVU1VTFKRlZsTkpSVXBhU1VkQ2VWcFlUblprV0VwcVdsWlNjR1JIZUd4Vk1qbDVaRWRCWjBsRlJsUlJlWGRuV1VoS2JHTXlPVEZqYlU1c1dUTktiRmxZVW5aamEwNTVXbGRHTUdJelNsUmtXRXAxV1ZjeGJGbERRV2RSVms1RVRFTkJaMVZyVmxGVVJVWkVVbE5uWjFWclZsRlVSVVpFVWxOb1JGRldUa1pKUm1SSlVsVTBaMHREYUdkamJWWjZZak5XZVZreVZsVmxXRUpzV1VOQk9VbERaR2xpTWpseVNubENVRlZwUW1kamJWWjZZak5XZVZreVZsVmxXRUpzV1VOQk9VbERaR2xpTWpseVdESk9iMWxZUWpCYVdFbHVTVVU1VTBsSFFubGFXRTUyWkZoS2FscFdValZqUjFablNVUXdaMG95U25aaU1uUm1XVmhLTUdGWFRuTmFVMk53U1VWR1QxSkRRbWRqYlZaNllqTldlVmt5VmpWYVYwWjVWMWRXYUdOcVNtZEpSV3hVU1VVMVVGWkRRazlXVlhoTlNVTnJaMVpGYUVaVWFVSm5ZMjFXZW1JelZubFpNbFkxV2xkR2VWZFhWbWhqYWtwblNVWmtTVkpWTkdkTFEyaG5ZMjFXZW1JelZubFpNbFpWWlZoQ2JGbERRVGxKUTJSM1kyMDVhbHBYVm10aFZ6VnVZM2xqWjFReFNXZFpTRXBzWXpJNU1XTnRUbXhXU0d4M1dsZEJaMUJUUVc1alNFcDJXVEpXYkZwSGJIVmFNMDVtV1ZoS01HRlhUbk5hVTJOd1NVVkdUMUpEUW1kamJWWjZZak5XZVZreVZqVmFWMFo1VjFkV2FHTnFSbWRKUld4VVNVVTFWbFJGZDJkTFUwSlZVMFZXVDBsSFFubGFXRTUyWkZoS2FscFliR3haV0VwYVdsZEdlVTF0UVdkV01HaEdWR2xCYjB0SFFubGFXRTUyWkZoS2FscFdValZqUjFablNVUXdaMG95VG5aaWJWcHNZMjFXZFZreVZtWmpSMFozV2xoSmJrbEZPVk5KUjBKNVdsaE9kbVJZU21wYVZsSTFZMGRXWjBsRU1HZEtNazUyWW0xYWJHTnRWblZaTWxabVkwYzVlbVJIVm5sS2VXdHdTVVpTU1ZKVk5HZFpTRXBzWXpJNU1XTnRUbXhsVjFab1kyeHNiRmxZU1hsWlEwSllVMFZXVDBsRFoyOVpTRXBzWXpJNU1XTnRUbXhXU0d4M1dsZEJaMUJUUVc1a01sWnBXREpXZFZremJHcGlSemwzV2xkU2NGbFRZMmRVTVVsbldVaEtiR015T1RGamJVNXNWa2hzZDFwWFFXZFFVMEZ1WkRKV2FWZ3lWblZaTTJ4cVlrYzVkMXBYVW5CWlZqbG9ZMjVTY0ZreWVHeEtlV3RuVVZVMVJVbEhRbmxhV0U1MlpGaEthbHBZYkd4WldFcGFXbGRHZVUweVFXZFRWazFuVkdzNVZVbEZOVlpVUlhkblMxTkNWVk5GVms5SlIwSjVXbGhPZG1SWVNtcGFXR3hzV1ZoS1dscFhSbmxOTWtGblNVVldUVlV3VldkTFIwSjVXbGhPZG1SWVNtcGFXR3hzV1ZoS1dscFhSbmxOVjBGd1NVVldUMUpEZDJkS00zTnVURU5CYmtwNWEzTkpRMlE1U25sM1owcDVZM0JKUTBKQ1ZUQk5aMVJGYkU1VFZsRm5UVU4zWjAxcVFUMGlPM002TVRBNklreHBjM1JRWVhKaGJYTWlPM002TXpZNklsbFViM2hQYm5Sd1QycEJOMk42YnpSUGFVcE5ZVmhPTUVsSFJuTmlRMGszWmxFOVBTSTdmUT09IjtzOjU6InNldHVwIjtzOjY4NDoiWVRveU1EcDdjem94TURvaVUzVndaWEpoWkcxcGJpSTdZam94TzNNNk1URTZJbE4wY21sdVoweHBiV2wwSWp0ek9qSTZJalF3SWp0ek9qVTZJbGR5YVhSbElqdGlPakU3Y3pvMk9pSlZjMlZ5U1dRaU8yazZNVHR6T2pFMU9pSlNaV1IxWTJWTlpXNTFUR1YyWld3aU8ySTZNRHR6T2pZNklsQmhaMmx1WnlJN2N6b3lPaUl5TUNJN2N6b3hORG9pVUdGbmFXNW5UV0Y0VEdsdWEzTWlPM002TWpvaU1URWlPM002T0RvaVRHRnVaM1ZoWjJVaU8zTTZNam9pWlc0aU8zTTZOVG9pVTNSNWJHVWlPM002TXpvaVFWQkJJanR6T2pnNklsUmxiWEJzWVhSbElqdHpPamM2SW1SbFptRjFiSFFpTzNNNk1UUTZJbEJoWjJsdVoxUmhaME5zYjNWa0lqdHpPak02SWpFd01DSTdjem81T2lKTmRXeDBhVlZ6WlhJaU8ySTZNRHR6T2pnNklrMWhlRkJoYzNSbElqdHBPakV3TzNNNk1URTZJa3hoYzNSRGFHRnVaMlZ6SWp0cE9qRXdPM002TVRrNklreGhjM1JEYUdGdVoyVnpSR0Y1VEdsdGFYUWlPMms2TVRBN2N6b3hOVG9pVEdGemRFTm9ZVzVuWlhOVWVYQmxJanR6T2pZNkltNTFiV0psY2lJN2N6b3hNRG9pVVhWaGNtRnVkR2x1WlNJN1lqb3dPM002TVRNNklrMWxkR0ZrWVhSaFFXeHNiM2NpTzJJNk1UdHpPakUyT2lKTlpYUmhaR0YwWVZWelpYSlBibXg1SWp0aU9qQTdjem94TVRvaVVHRm5hVzVuVkc5MFlXd2lPM002TVRvaU1TSTdmUT09IjtzOjg6ImJvb2ttYXJrIjtzOjY4OiJZVG95T250ek9qRXdPaUpFYVhOd2JHRjVRV1JrSWp0aU9qRTdjem8wT2lKV2FXVjNJanR6T2pRNkluTnZiRzhpTzMwPSI7czo0OiJsaXN0IjtzOjEwNDoiWVRvek9udHpPalU2SWs5eVpHVnlJanR6T2pVNkluUnBkR3hsSWp0ek9qYzZJa0Z6WTBSbGMyTWlPM002TkRvaUlFRlRReUk3Y3pvMk9pSkJiR3hKWkhNaU8zTTZNem9pWVd4c0lqdDkiO30=', 'N', 'N', 'N', 'N', NULL, NULL, 'N', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_user_bibliography`
--

CREATE TABLE `wkx_user_bibliography` (
  `userbibliographyId` int(11) NOT NULL,
  `userbibliographyUserId` int(11) DEFAULT NULL,
  `userbibliographyUserGroupId` int(11) DEFAULT NULL,
  `userbibliographyTitle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userbibliographyDescription` text COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_user_bibliography_resource`
--

CREATE TABLE `wkx_user_bibliography_resource` (
  `userbibliographyresourceId` int(11) NOT NULL,
  `userbibliographyresourceBibliographyId` int(11) DEFAULT NULL,
  `userbibliographyresourceResourceId` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_user_groups`
--

CREATE TABLE `wkx_user_groups` (
  `usergroupsId` int(11) NOT NULL,
  `usergroupsTitle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `usergroupsDescription` text COLLATE utf8_unicode_ci,
  `usergroupsAdminId` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_user_groups_users`
--

CREATE TABLE `wkx_user_groups_users` (
  `usergroupsusersId` int(11) NOT NULL,
  `usergroupsusersGroupId` int(11) DEFAULT NULL,
  `usergroupsusersUserId` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_user_register`
--

CREATE TABLE `wkx_user_register` (
  `userregisterId` int(11) NOT NULL,
  `userregisterHashKey` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `userregisterEmail` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `userregisterTimestamp` datetime DEFAULT NULL,
  `userregisterConfirmed` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `userregisterRequest` text COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wkx_user_tags`
--

CREATE TABLE `wkx_user_tags` (
  `usertagsId` int(11) NOT NULL,
  `usertagsUserId` int(11) DEFAULT NULL,
  `usertagsTag` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `wkx_bibtex_string`
--
ALTER TABLE `wkx_bibtex_string`
  ADD PRIMARY KEY (`bibtexstringId`);

--
-- Indices de la tabla `wkx_category`
--
ALTER TABLE `wkx_category`
  ADD PRIMARY KEY (`categoryId`),
  ADD KEY `categoryCategory` (`categoryCategory`);

--
-- Indices de la tabla `wkx_collection`
--
ALTER TABLE `wkx_collection`
  ADD PRIMARY KEY (`collectionId`),
  ADD KEY `collectionTitle` (`collectionTitle`);

--
-- Indices de la tabla `wkx_config`
--
ALTER TABLE `wkx_config`
  ADD PRIMARY KEY (`configId`),
  ADD KEY `configName` (`configName`);

--
-- Indices de la tabla `wkx_creator`
--
ALTER TABLE `wkx_creator`
  ADD PRIMARY KEY (`creatorId`),
  ADD KEY `creatorSurname` (`creatorSurname`),
  ADD KEY `creatorSameAs` (`creatorSameAs`);

--
-- Indices de la tabla `wkx_custom`
--
ALTER TABLE `wkx_custom`
  ADD PRIMARY KEY (`customId`);

--
-- Indices de la tabla `wkx_import_raw`
--
ALTER TABLE `wkx_import_raw`
  ADD PRIMARY KEY (`importrawId`);

--
-- Indices de la tabla `wkx_keyword`
--
ALTER TABLE `wkx_keyword`
  ADD PRIMARY KEY (`keywordId`),
  ADD KEY `keywordKeyword` (`keywordKeyword`);

--
-- Indices de la tabla `wkx_language`
--
ALTER TABLE `wkx_language`
  ADD PRIMARY KEY (`languageId`);

--
-- Indices de la tabla `wkx_news`
--
ALTER TABLE `wkx_news`
  ADD PRIMARY KEY (`newsId`);

--
-- Indices de la tabla `wkx_papers`
--
ALTER TABLE `wkx_papers`
  ADD PRIMARY KEY (`papersId`);

--
-- Indices de la tabla `wkx_publisher`
--
ALTER TABLE `wkx_publisher`
  ADD PRIMARY KEY (`publisherId`),
  ADD KEY `publisherName` (`publisherName`);

--
-- Indices de la tabla `wkx_resource`
--
ALTER TABLE `wkx_resource`
  ADD PRIMARY KEY (`resourceId`),
  ADD KEY `resourceType` (`resourceType`);

--
-- Indices de la tabla `wkx_resource_attachments`
--
ALTER TABLE `wkx_resource_attachments`
  ADD PRIMARY KEY (`resourceattachmentsId`),
  ADD KEY `resourceattachmentsResourceId` (`resourceattachmentsResourceId`);

--
-- Indices de la tabla `wkx_resource_category`
--
ALTER TABLE `wkx_resource_category`
  ADD PRIMARY KEY (`resourcecategoryId`),
  ADD KEY `resourcecategoryCategoryId` (`resourcecategoryCategoryId`),
  ADD KEY `resourcecategoryResourceId` (`resourcecategoryResourceId`);

--
-- Indices de la tabla `wkx_resource_creator`
--
ALTER TABLE `wkx_resource_creator`
  ADD PRIMARY KEY (`resourcecreatorId`),
  ADD KEY `resourcecreatorCreatorSurname` (`resourcecreatorCreatorSurname`),
  ADD KEY `resourcecreatorCreatorId` (`resourcecreatorCreatorId`),
  ADD KEY `resourcecreatorResourceId` (`resourcecreatorResourceId`);

--
-- Indices de la tabla `wkx_resource_custom`
--
ALTER TABLE `wkx_resource_custom`
  ADD PRIMARY KEY (`resourcecustomId`),
  ADD KEY `resourcecustomCustomId` (`resourcecustomCustomId`),
  ADD KEY `resourcecustomResourceId` (`resourcecustomResourceId`);

--
-- Indices de la tabla `wkx_resource_keyword`
--
ALTER TABLE `wkx_resource_keyword`
  ADD PRIMARY KEY (`resourcekeywordId`),
  ADD KEY `resourcekeywordResourceId` (`resourcekeywordResourceId`),
  ADD KEY `resourcekeywordKeywordId` (`resourcekeywordKeywordId`);

--
-- Indices de la tabla `wkx_resource_language`
--
ALTER TABLE `wkx_resource_language`
  ADD PRIMARY KEY (`resourcelanguageId`),
  ADD KEY `resourcelanguageResourceId` (`resourcelanguageResourceId`),
  ADD KEY `resourcelanguageLanguageId` (`resourcelanguageLanguageId`);

--
-- Indices de la tabla `wkx_resource_metadata`
--
ALTER TABLE `wkx_resource_metadata`
  ADD PRIMARY KEY (`resourcemetadataId`),
  ADD KEY `resourcemetadataResourceId` (`resourcemetadataResourceId`);

--
-- Indices de la tabla `wkx_resource_misc`
--
ALTER TABLE `wkx_resource_misc`
  ADD PRIMARY KEY (`resourcemiscId`),
  ADD KEY `resourcemiscCollection` (`resourcemiscCollection`),
  ADD KEY `resourcemiscPublisher` (`resourcemiscPublisher`);

--
-- Indices de la tabla `wkx_resource_page`
--
ALTER TABLE `wkx_resource_page`
  ADD PRIMARY KEY (`resourcepageId`);

--
-- Indices de la tabla `wkx_resource_summary`
--
ALTER TABLE `wkx_resource_summary`
  ADD PRIMARY KEY (`resourcesummaryId`);

--
-- Indices de la tabla `wkx_resource_text`
--
ALTER TABLE `wkx_resource_text`
  ADD PRIMARY KEY (`resourcetextId`);

--
-- Indices de la tabla `wkx_resource_timestamp`
--
ALTER TABLE `wkx_resource_timestamp`
  ADD PRIMARY KEY (`resourcetimestampId`),
  ADD KEY `resourcetimestampTimestampAdd` (`resourcetimestampTimestampAdd`),
  ADD KEY `resourcetimestampTimestamp` (`resourcetimestampTimestamp`);

--
-- Indices de la tabla `wkx_resource_user_tags`
--
ALTER TABLE `wkx_resource_user_tags`
  ADD PRIMARY KEY (`resourceusertagsId`),
  ADD KEY `resourceusertagsResourceId` (`resourceusertagsResourceId`);

--
-- Indices de la tabla `wkx_resource_year`
--
ALTER TABLE `wkx_resource_year`
  ADD PRIMARY KEY (`resourceyearId`),
  ADD KEY `resourceyearYear1` (`resourceyearYear1`);

--
-- Indices de la tabla `wkx_statistics`
--
ALTER TABLE `wkx_statistics`
  ADD PRIMARY KEY (`statisticsId`),
  ADD KEY `statisticsResourceId` (`statisticsResourceId`),
  ADD KEY `statisticsAttachmentId` (`statisticsAttachmentId`);

--
-- Indices de la tabla `wkx_subcategory`
--
ALTER TABLE `wkx_subcategory`
  ADD PRIMARY KEY (`subcategoryId`);

--
-- Indices de la tabla `wkx_tag`
--
ALTER TABLE `wkx_tag`
  ADD PRIMARY KEY (`tagId`);

--
-- Indices de la tabla `wkx_users`
--
ALTER TABLE `wkx_users`
  ADD PRIMARY KEY (`usersId`);

--
-- Indices de la tabla `wkx_user_bibliography`
--
ALTER TABLE `wkx_user_bibliography`
  ADD PRIMARY KEY (`userbibliographyId`),
  ADD KEY `userbibliographyTitle` (`userbibliographyTitle`);

--
-- Indices de la tabla `wkx_user_bibliography_resource`
--
ALTER TABLE `wkx_user_bibliography_resource`
  ADD PRIMARY KEY (`userbibliographyresourceId`),
  ADD KEY `userbibliographyresourceResourceId` (`userbibliographyresourceResourceId`);

--
-- Indices de la tabla `wkx_user_groups`
--
ALTER TABLE `wkx_user_groups`
  ADD PRIMARY KEY (`usergroupsId`);

--
-- Indices de la tabla `wkx_user_groups_users`
--
ALTER TABLE `wkx_user_groups_users`
  ADD PRIMARY KEY (`usergroupsusersId`);

--
-- Indices de la tabla `wkx_user_register`
--
ALTER TABLE `wkx_user_register`
  ADD PRIMARY KEY (`userregisterId`);

--
-- Indices de la tabla `wkx_user_tags`
--
ALTER TABLE `wkx_user_tags`
  ADD PRIMARY KEY (`usertagsId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `wkx_bibtex_string`
--
ALTER TABLE `wkx_bibtex_string`
  MODIFY `bibtexstringId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_category`
--
ALTER TABLE `wkx_category`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_collection`
--
ALTER TABLE `wkx_collection`
  MODIFY `collectionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_config`
--
ALTER TABLE `wkx_config`
  MODIFY `configId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;
--
-- AUTO_INCREMENT de la tabla `wkx_creator`
--
ALTER TABLE `wkx_creator`
  MODIFY `creatorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_custom`
--
ALTER TABLE `wkx_custom`
  MODIFY `customId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_keyword`
--
ALTER TABLE `wkx_keyword`
  MODIFY `keywordId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_language`
--
ALTER TABLE `wkx_language`
  MODIFY `languageId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_news`
--
ALTER TABLE `wkx_news`
  MODIFY `newsId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_papers`
--
ALTER TABLE `wkx_papers`
  MODIFY `papersId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_publisher`
--
ALTER TABLE `wkx_publisher`
  MODIFY `publisherId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_resource`
--
ALTER TABLE `wkx_resource`
  MODIFY `resourceId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_resource_attachments`
--
ALTER TABLE `wkx_resource_attachments`
  MODIFY `resourceattachmentsId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_resource_category`
--
ALTER TABLE `wkx_resource_category`
  MODIFY `resourcecategoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_resource_creator`
--
ALTER TABLE `wkx_resource_creator`
  MODIFY `resourcecreatorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_resource_custom`
--
ALTER TABLE `wkx_resource_custom`
  MODIFY `resourcecustomId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_resource_keyword`
--
ALTER TABLE `wkx_resource_keyword`
  MODIFY `resourcekeywordId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_resource_language`
--
ALTER TABLE `wkx_resource_language`
  MODIFY `resourcelanguageId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_resource_metadata`
--
ALTER TABLE `wkx_resource_metadata`
  MODIFY `resourcemetadataId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_resource_misc`
--
ALTER TABLE `wkx_resource_misc`
  MODIFY `resourcemiscId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_resource_user_tags`
--
ALTER TABLE `wkx_resource_user_tags`
  MODIFY `resourceusertagsId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_statistics`
--
ALTER TABLE `wkx_statistics`
  MODIFY `statisticsId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_subcategory`
--
ALTER TABLE `wkx_subcategory`
  MODIFY `subcategoryId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_tag`
--
ALTER TABLE `wkx_tag`
  MODIFY `tagId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_users`
--
ALTER TABLE `wkx_users`
  MODIFY `usersId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `wkx_user_bibliography`
--
ALTER TABLE `wkx_user_bibliography`
  MODIFY `userbibliographyId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_user_bibliography_resource`
--
ALTER TABLE `wkx_user_bibliography_resource`
  MODIFY `userbibliographyresourceId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_user_groups`
--
ALTER TABLE `wkx_user_groups`
  MODIFY `usergroupsId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_user_groups_users`
--
ALTER TABLE `wkx_user_groups_users`
  MODIFY `usergroupsusersId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_user_register`
--
ALTER TABLE `wkx_user_register`
  MODIFY `userregisterId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `wkx_user_tags`
--
ALTER TABLE `wkx_user_tags`
  MODIFY `usertagsId` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
