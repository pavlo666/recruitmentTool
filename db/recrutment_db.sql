/*
MySQL Data Transfer
Source Host: localhost
Source Database: recrutment_db
Target Host: localhost
Target Database: recrutment_db
Date: 20.10.2015 23:54:33
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for actions
-- ----------------------------
DROP TABLE IF EXISTS `actions`;
CREATE TABLE `actions` (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for actions_access
-- ----------------------------
DROP TABLE IF EXISTS `actions_access`;
CREATE TABLE `actions_access` (
  `aid` int(11) NOT NULL DEFAULT '0',
  `rid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`aid`,`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for assigned_candidats
-- ----------------------------
DROP TABLE IF EXISTS `assigned_candidats`;
CREATE TABLE `assigned_candidats` (
  `cid` int(11) NOT NULL DEFAULT '0',
  `vid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`cid`,`vid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for candidate_emails
-- ----------------------------
DROP TABLE IF EXISTS `candidate_emails`;
CREATE TABLE `candidate_emails` (
  `id` int(11) NOT NULL DEFAULT '0',
  `cid` int(11) NOT NULL,
  `email` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for candidate_ims
-- ----------------------------
DROP TABLE IF EXISTS `candidate_ims`;
CREATE TABLE `candidate_ims` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `im_type` enum('qip','icq','skype') NOT NULL,
  `im` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for candidate_phones
-- ----------------------------
DROP TABLE IF EXISTS `candidate_phones`;
CREATE TABLE `candidate_phones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `phone` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for candidate_skills
-- ----------------------------
DROP TABLE IF EXISTS `candidate_skills`;
CREATE TABLE `candidate_skills` (
  `cid` int(11) NOT NULL DEFAULT '0',
  `sid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`cid`,`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for candidates
-- ----------------------------
DROP TABLE IF EXISTS `candidates`;
CREATE TABLE `candidates` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `secondname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `expect_salary` int(11) DEFAULT NULL,
  `current_position` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `ready_to_join_in` int(11) DEFAULT NULL,
  `ready_to_join_in_type` enum('week(s)','day(s)') DEFAULT NULL,
  `carrent_start_date` datetime DEFAULT NULL,
  `no_it_experience` bit(1) DEFAULT b'0',
  `summery` text,
  `attachment_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for employees
-- ----------------------------
DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `cid` int(11) NOT NULL DEFAULT '0',
  `birthday` date DEFAULT NULL,
  `address` text,
  `postal_code` int(11) DEFAULT NULL,
  `url_linkedin` varchar(255) DEFAULT NULL,
  `url_social_network` varchar(255) DEFAULT NULL,
  `photo_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for feedback_files
-- ----------------------------
DROP TABLE IF EXISTS `feedback_files`;
CREATE TABLE `feedback_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fid` int(11) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for feedbacks
-- ----------------------------
DROP TABLE IF EXISTS `feedbacks`;
CREATE TABLE `feedbacks` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `content` text,
  `is_private` bit(1) NOT NULL DEFAULT b'0',
  `resolution` varchar(255) DEFAULT NULL,
  `date_create` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`fid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user_roles
-- ----------------------------
DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles` (
  `uid` int(11) NOT NULL DEFAULT '0',
  `rid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`,`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `second_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for vacancies
-- ----------------------------
DROP TABLE IF EXISTS `vacancies`;
CREATE TABLE `vacancies` (
  `vid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `start_date` date DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `specialty` varchar(255) DEFAULT NULL,
  `candidate_state` enum('shadow','forecasted','billed') DEFAULT NULL,
  `custome_name` varchar(255) DEFAULT NULL,
  `confidential` bit(1) NOT NULL DEFAULT b'0',
  `grade` varchar(255) DEFAULT NULL,
  `status` enum('cloned','postponed','invalid','active') NOT NULL DEFAULT 'active',
  PRIMARY KEY (`vid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for vacancy_interviewers
-- ----------------------------
DROP TABLE IF EXISTS `vacancy_interviewers`;
CREATE TABLE `vacancy_interviewers` (
  `uid` int(11) NOT NULL DEFAULT '0',
  `vid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`,`vid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for vacancy_spms
-- ----------------------------
DROP TABLE IF EXISTS `vacancy_spms`;
CREATE TABLE `vacancy_spms` (
  `vid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`vid`,`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `candidates` VALUES ('1', 'Pylat', 'Taras', 'Romanovich', '1000', 'Webdev', 'Lviv', '1', 'day(s)', '2015-10-18 20:42:58', '', null, null);
INSERT INTO `candidates` VALUES ('2', 'Halan', 'Pavlo', null, '2000', 'WebDev', 'Lviv', '0', 'day(s)', '2015-10-20 22:41:33', '', null, null);
INSERT INTO `users` VALUES ('1', 'admin', 'admin', 'Admin', null);
INSERT INTO `users` VALUES ('2', 'user', 'user', 'User', null);
