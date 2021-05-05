-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-05-01 16:42:28
-- 伺服器版本： 10.4.14-MariaDB
-- PHP 版本： 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `mining`
--

-- --------------------------------------------------------

--
-- 資料表結構 `fri`
--

CREATE TABLE `fri` (
  `id` int(11) NOT NULL,
  `friName` varchar(60) NOT NULL,
  `senName` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `fri`
--

INSERT INTO `fri` (`id`, `friName`, `senName`) VALUES
(1, 'may', 'jolin');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `username` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `friends` varchar(60) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  `coin` decimal(7,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`username`, `password`, `friends`, `time`, `coin`) VALUES
('krtek', '2021', '1', '2021-05-01 14:35:41', '48.25');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `fri`
--
ALTER TABLE `fri`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `fri`
--
ALTER TABLE `fri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
