-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Jan 2020 pada 05.50
-- Versi server: 10.1.38-MariaDB
-- Versi PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant-roni`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `created_at`, `updated_at`) VALUES
(5, 'Cake', '2020-01-20 00:28:40', '2020-01-20 00:28:40'),
(6, 'Drinks', '2020-01-20 00:28:40', '2020-01-20 00:28:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `created_at`) VALUES
(1, 1, '2020-01-20 14:07:52'),
(2, 1, '2020-01-20 14:15:36'),
(3, 1, '2020-01-20 14:16:01'),
(4, 1, '2020-01-20 14:16:11'),
(5, 1, '2020-01-20 14:17:05'),
(6, 1, '2020-01-20 14:19:09'),
(7, 1, '2020-01-20 14:20:07'),
(8, 1, '2020-01-20 14:21:39'),
(9, 1, '2020-01-20 14:23:12'),
(10, 1, '2020-01-20 14:27:17'),
(11, 1, '2020-01-20 14:32:53'),
(12, 1, '2020-01-20 14:33:49'),
(13, 1, '2020-01-20 14:36:49'),
(14, 1, '2020-01-20 14:37:19'),
(15, 1, '2020-01-20 15:03:05'),
(16, 1, '2020-01-20 15:20:59'),
(17, 1, '2020-01-20 15:22:03'),
(18, 1, '2020-01-20 15:23:49'),
(19, 1, '2020-01-20 15:24:46'),
(20, 1, '2020-01-20 15:27:28'),
(21, 1, '2020-01-20 15:27:49'),
(22, 1, '2020-01-20 15:28:37'),
(23, 1, '2020-01-20 15:33:39'),
(24, 1, '2020-01-20 15:35:36'),
(25, 1, '2020-01-20 15:37:23'),
(26, 1, '2020-01-20 15:41:47'),
(27, 1, '2020-01-21 00:58:57'),
(28, 1, '2020-01-21 00:59:43'),
(29, 1, '2020-01-21 01:00:38'),
(30, 1, '2020-01-21 01:16:46'),
(31, 1, '2020-01-21 01:17:35'),
(32, 1, '2020-01-21 01:18:26'),
(33, 1, '2020-01-21 01:20:10'),
(34, 1, '2020-01-21 01:21:06'),
(35, 1, '2020-01-21 01:22:08'),
(36, 1, '2020-01-21 01:25:35'),
(37, 1, '2020-01-21 01:26:05'),
(38, 1, '2020-01-21 01:31:29'),
(39, 1, '2020-01-21 01:34:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `order_detail`
--

CREATE TABLE `order_detail` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `order_detail`
--

INSERT INTO `order_detail` (`order_id`, `product_id`, `quantity`, `product_price`) VALUES
(1, 9, 23, 4444),
(38, 8, 5, 20000),
(38, 9, 9, 20000),
(39, 8, 5, 20000),
(39, 9, 9, 20000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_description` text NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `product_price` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`product_id`, `category_id`, `product_name`, `product_description`, `product_image`, `product_price`, `created_at`, `updated_at`) VALUES
(8, 6, 'Aqua', 'Ga dijual', 'assets\\images\\product_image-1579481707309.PNG', '8000', '2020-01-20 00:53:49', '2020-01-20 00:55:07'),
(9, 6, 'Air Cincau', 'dijual ja', 'assets\\images\\product_image-1579493739207.jpg', '800000', '2020-01-20 04:15:39', '2020-01-20 04:15:39'),
(10, 6, 'Air Zamzam', 'dijual ja', 'assets\\images\\product_image-1579493748132.jpg', '800000', '2020-01-20 04:15:48', '2020-01-20 04:15:48'),
(11, 6, 'Salad', 'dijual ja', 'assets\\images\\product_image-1579493757611.jpg', '800000', '2020-01-20 04:15:57', '2020-01-20 04:15:57'),
(13, 5, 'Kopi Hitam', 'dijual ja', 'assets\\images\\product_image-1579506230853.jpg', '800000', '2020-01-20 07:43:50', '2020-01-20 07:43:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `name`, `created_at`, `updated_at`) VALUES
(1, 'roni', 'roni', 'roni', '2020-01-20 13:04:23', '2020-01-20 13:04:23');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `order_detail`
--
ALTER TABLE `order_detail`
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
