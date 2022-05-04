/* Replace with your SQL commands */
CREATE TABLE `courses` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) ,
    `description` varchar(255) ,
    `imageUrl` varchar(255) ,
    `price` decimal(10,2) ,
    `status` varchar(255),
    `user_id` int(11),
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
)