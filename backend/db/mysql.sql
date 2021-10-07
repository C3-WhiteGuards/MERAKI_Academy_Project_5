-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ajtraiz4_MERAKI_Academy_Project_5
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ajtraiz4_MERAKI_Academy_Project_5
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `ajtraiz4_MERAKI_Academy_Project_5` ;

-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`cart` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `products_id` INT(11) NOT NULL,
  `user_id` INT(11) NOT NULL,
  `id_deleted` INT(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) ,
  INDEX `products_id` (`products_id` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`trainers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`trainers` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(30) NOT NULL,
  `phoneNumber` INT(11) NOT NULL,
  `rate` INT(11) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `image` LONGBLOB NOT NULL,
  `sport` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`dateTrainer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`dateTrainer` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `firstClass` TIME NOT NULL,
  `secondClass` TIME NOT NULL,
  `thirdClass` TIME NOT NULL,
  `trainers_id` INT(11) NOT NULL,
  `trainers_id1` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `trainers_id1`),
  INDEX `trainers_id` (`trainers_id` ASC) ,
  INDEX `fk_dateTrainer_trainers1_idx` (`trainers_id1` ASC) ,
  CONSTRAINT `fk_dateTrainer_trainers1`
    FOREIGN KEY (`trainers_id1`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`trainers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`feedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`feedback` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `comment` LONGBLOB NOT NULL,
  `is_delete` INT(11) NOT NULL DEFAULT '0',
  `user_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`gym`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`gym` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `phoneNumber` INT(11) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `image` LONGBLOB NOT NULL,
  `priceMonthly` INT(11) NOT NULL,
  `rate_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `phoneNumber` (`phoneNumber` ASC) ,
  INDEX `rate_id` (`rate_id` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` INT(11) NOT NULL,
  `description` LONGBLOB NOT NULL,
  `image` LONGBLOB NOT NULL,
  `is_deleted` INT(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`rate_gym`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`rate_gym` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `rate` INT(11) NOT NULL,
  `gym_id` INT(11) NOT NULL,
  `gym_id1` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `gym_id1`),
  INDEX `fk_rate_gym_gym1_idx` (`gym_id1` ASC) ,
  CONSTRAINT `fk_rate_gym_gym1`
    FOREIGN KEY (`gym_id1`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`gym` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`resturant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`resturant` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `image` LONGBLOB NOT NULL,
  `monthlyPrice` INT(11) NOT NULL,
  `rate` INT(11) NOT NULL,
  `is_deleted` INT(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`rate_resturant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`rate_resturant` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `rate` INT(11) NOT NULL,
  `resturant_id` INT(11) NOT NULL,
  `resturant_id1` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `resturant_id1`),
  INDEX `fk_rate_resturant_resturant1_idx` (`resturant_id1` ASC) ,
  CONSTRAINT `fk_rate_resturant_resturant1`
    FOREIGN KEY (`resturant_id1`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`resturant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`rate_trainer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`rate_trainer` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `rate` INT(11) NOT NULL,
  `trainer_id` INT(11) NOT NULL,
  `trainers_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `trainers_id`),
  INDEX `fk_rate_trainer_trainers1_idx` (`trainers_id` ASC) ,
  CONSTRAINT `fk_rate_trainer_trainers1`
    FOREIGN KEY (`trainers_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`trainers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`subscriptions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`subscriptions` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NOT NULL,
  `restaurant` VARCHAR(255) NOT NULL,
  `gym` VARCHAR(255) NOT NULL,
  `trainer` VARCHAR(255) NOT NULL,
  `date_from` DATETIME NOT NULL,
  `date_to` DATETIME NOT NULL,
  `id_deleted` INT(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `age` INT(11) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `phoneNumber` INT(11) NOT NULL,
  `country` VARCHAR(255) NOT NULL,
  `is_deleted` INT(11) NOT NULL DEFAULT '0',
  `role` VARCHAR(255) NOT NULL DEFAULT '0',
  `image` LONGBLOB NOT NULL,
  `weight` INT(11) NOT NULL,
  `height` INT(11) NOT NULL,
  `diseases` INT(11) NOT NULL,
  `gym_id` INT(11) NOT NULL,
  `cart_id` INT(11) NOT NULL,
  `feedback_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `gym_id`, `cart_id`, `feedback_id`),
  UNIQUE INDEX `email` (`email` ASC) ,
  INDEX `fk_users_gym1_idx` (`gym_id` ASC) ,
  INDEX `fk_users_cart1_idx` (`cart_id` ASC) ,
  INDEX `fk_users_feedback1_idx` (`feedback_id` ASC) ,
  CONSTRAINT `fk_users_gym1`
    FOREIGN KEY (`gym_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`gym` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_feedback1`
    FOREIGN KEY (`feedback_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`feedback` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`users_has_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`users_has_products` (
  `users_id` INT(11) NOT NULL,
  `products_id` INT(11) NOT NULL,
  PRIMARY KEY (`users_id`, `products_id`),
  INDEX `fk_users_has_products_products1_idx` (`products_id` ASC) ,
  INDEX `fk_users_has_products_users_idx` (`users_id` ASC) ,
  CONSTRAINT `fk_users_has_products_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`cart_has_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`cart_has_products` (
  `cart_id` INT(11) NOT NULL,
  `products_id` INT(11) NOT NULL,
  PRIMARY KEY (`cart_id`, `products_id`),
  INDEX `fk_cart_has_products_products1_idx` (`products_id` ASC) ,
  INDEX `fk_cart_has_products_cart1_idx` (`cart_id` ASC) ,
  CONSTRAINT `fk_cart_has_products_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_has_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`users_has_trainers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`users_has_trainers` (
  `users_id` INT(11) NOT NULL,
  `trainers_id` INT(11) NOT NULL,
  PRIMARY KEY (`users_id`, `trainers_id`),
  INDEX `fk_users_has_trainers_trainers1_idx` (`trainers_id` ASC) ,
  INDEX `fk_users_has_trainers_users1_idx` (`users_id` ASC) ,
  CONSTRAINT `fk_users_has_trainers_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_trainers_trainers1`
    FOREIGN KEY (`trainers_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`trainers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`users_has_resturant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`users_has_resturant` (
  `users_id` INT(11) NOT NULL,
  `users_gym_id` INT(11) NOT NULL,
  `resturant_id` INT(11) NOT NULL,
  PRIMARY KEY (`users_id`, `users_gym_id`, `resturant_id`),
  INDEX `fk_users_has_resturant_resturant1_idx` (`resturant_id` ASC) ,
  INDEX `fk_users_has_resturant_users1_idx` (`users_id` ASC, `users_gym_id` ASC) ,
  CONSTRAINT `fk_users_has_resturant_users1`
    FOREIGN KEY (`users_id` , `users_gym_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`users` (`id` , `gym_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_resturant_resturant1`
    FOREIGN KEY (`resturant_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`resturant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`users_has_subscriptions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ajtraiz4_MERAKI_Academy_Project_5`.`users_has_subscriptions` (
  `users_id` INT(11) NOT NULL,
  `users_gym_id` INT(11) NOT NULL,
  `users_cart_id` INT(11) NOT NULL,
  `users_feedback_id` INT(11) NOT NULL,
  `subscriptions_id` INT(11) NOT NULL,
  PRIMARY KEY (`users_id`, `users_gym_id`, `users_cart_id`, `users_feedback_id`, `subscriptions_id`),
  INDEX `fk_users_has_subscriptions_subscriptions1_idx` (`subscriptions_id` ASC) ,
  INDEX `fk_users_has_subscriptions_users1_idx` (`users_id` ASC, `users_gym_id` ASC, `users_cart_id` ASC, `users_feedback_id` ASC) ,
  CONSTRAINT `fk_users_has_subscriptions_users1`
    FOREIGN KEY (`users_id` , `users_gym_id` , `users_cart_id` , `users_feedback_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`users` (`id` , `gym_id` , `cart_id` , `feedback_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_subscriptions_subscriptions1`
    FOREIGN KEY (`subscriptions_id`)
    REFERENCES `ajtraiz4_MERAKI_Academy_Project_5`.`subscriptions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
