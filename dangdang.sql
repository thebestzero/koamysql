/*
 Navicat Premium Data Transfer

 Source Server         : myproject
 Source Server Type    : MySQL
 Source Server Version : 80034 (8.0.34)
 Source Host           : localhost:3306
 Source Schema         : dangdang

 Target Server Type    : MySQL
 Target Server Version : 80034 (8.0.34)
 File Encoding         : 65001

 Date: 27/08/2023 19:21:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for firstctgy
-- ----------------------------
DROP TABLE IF EXISTS `firstctgy`;
CREATE TABLE `firstctgy`  (
  `firstCtgyId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`firstCtgyId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of firstctgy
-- ----------------------------
INSERT INTO `firstctgy` VALUES (1, '童书');
INSERT INTO `firstctgy` VALUES (2, '电子书');
INSERT INTO `firstctgy` VALUES (3, '女装');
INSERT INTO `firstctgy` VALUES (4, '食品');
INSERT INTO `firstctgy` VALUES (5, '男装');
INSERT INTO `firstctgy` VALUES (6, '数码相机');
INSERT INTO `firstctgy` VALUES (7, '创意文具');
INSERT INTO `firstctgy` VALUES (8, '童装童鞋');

-- ----------------------------
-- Table structure for secondctgy
-- ----------------------------
DROP TABLE IF EXISTS `secondctgy`;
CREATE TABLE `secondctgy`  (
  `secondctgyId` int NOT NULL AUTO_INCREMENT,
  `secctgyname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `firstctgyId` int NOT NULL,
  PRIMARY KEY (`secondctgyId`) USING BTREE,
  INDEX `fk_firstctgyId`(`firstctgyId` ASC) USING BTREE,
  CONSTRAINT `fk_firstctgyId` FOREIGN KEY (`firstctgyId`) REFERENCES `firstctgy` (`firstCtgyId`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of secondctgy
-- ----------------------------
INSERT INTO `secondctgy` VALUES (1, '0-2岁', 1);
INSERT INTO `secondctgy` VALUES (2, '3-6岁', 1);
INSERT INTO `secondctgy` VALUES (3, '7-10岁', 1);
INSERT INTO `secondctgy` VALUES (4, '11-14岁', 1);
INSERT INTO `secondctgy` VALUES (5, '文艺', 2);
INSERT INTO `secondctgy` VALUES (6, '人文社科', 2);
INSERT INTO `secondctgy` VALUES (7, '教育', 2);

-- ----------------------------
-- Table structure for thirdctgy
-- ----------------------------
DROP TABLE IF EXISTS `thirdctgy`;
CREATE TABLE `thirdctgy`  (
  `thirdctgyId` int NOT NULL AUTO_INCREMENT,
  `thirdname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `secctgyId` int NULL DEFAULT NULL,
  PRIMARY KEY (`thirdctgyId`) USING BTREE,
  INDEX `fk_secctgyId`(`secctgyId` ASC) USING BTREE,
  CONSTRAINT `fk_secctgyId` FOREIGN KEY (`secctgyId`) REFERENCES `secondctgy` (`secondctgyId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 46 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thirdctgy
-- ----------------------------
INSERT INTO `thirdctgy` VALUES (1, '图画故事', 1);
INSERT INTO `thirdctgy` VALUES (2, '认知', 1);
INSERT INTO `thirdctgy` VALUES (3, '益智游戏', 1);
INSERT INTO `thirdctgy` VALUES (4, '纸板书', 1);
INSERT INTO `thirdctgy` VALUES (5, '艺术课堂', 1);
INSERT INTO `thirdctgy` VALUES (6, '入园准备', 1);
INSERT INTO `thirdctgy` VALUES (7, '绘本', 2);
INSERT INTO `thirdctgy` VALUES (8, '科普百科', 2);
INSERT INTO `thirdctgy` VALUES (9, '少儿英语', 2);
INSERT INTO `thirdctgy` VALUES (10, '乐高学习', 2);
INSERT INTO `thirdctgy` VALUES (11, '入学准备', 2);
INSERT INTO `thirdctgy` VALUES (12, '文学', 3);
INSERT INTO `thirdctgy` VALUES (13, '科普百科', 3);
INSERT INTO `thirdctgy` VALUES (14, '卡通动漫', 3);
INSERT INTO `thirdctgy` VALUES (15, '童话', 3);
INSERT INTO `thirdctgy` VALUES (16, '少儿英语', 3);
INSERT INTO `thirdctgy` VALUES (17, '励志', 4);
INSERT INTO `thirdctgy` VALUES (18, '地理', 4);
INSERT INTO `thirdctgy` VALUES (19, '政治', 4);
INSERT INTO `thirdctgy` VALUES (20, '趣味幽默', 4);
INSERT INTO `thirdctgy` VALUES (21, '少儿英语', 4);
INSERT INTO `thirdctgy` VALUES (22, '益智游戏', 4);
INSERT INTO `thirdctgy` VALUES (23, '艺术课堂', 4);
INSERT INTO `thirdctgy` VALUES (24, '游戏/手工', 4);
INSERT INTO `thirdctgy` VALUES (25, '绘画', 4);
INSERT INTO `thirdctgy` VALUES (26, '小说', 5);
INSERT INTO `thirdctgy` VALUES (27, '哲理文学', 5);
INSERT INTO `thirdctgy` VALUES (28, '传记', 5);
INSERT INTO `thirdctgy` VALUES (29, '青春文学', 5);
INSERT INTO `thirdctgy` VALUES (30, '动漫/幽默', 5);
INSERT INTO `thirdctgy` VALUES (31, '艺术', 5);
INSERT INTO `thirdctgy` VALUES (32, '古籍', 5);
INSERT INTO `thirdctgy` VALUES (33, '法律', 5);
INSERT INTO `thirdctgy` VALUES (34, '经济', 5);
INSERT INTO `thirdctgy` VALUES (35, '宗教哲学', 6);
INSERT INTO `thirdctgy` VALUES (36, '历史', 6);
INSERT INTO `thirdctgy` VALUES (37, '传记', 6);
INSERT INTO `thirdctgy` VALUES (38, '教育', 6);
INSERT INTO `thirdctgy` VALUES (39, '社会科学', 6);
INSERT INTO `thirdctgy` VALUES (40, '艺术', 6);
INSERT INTO `thirdctgy` VALUES (41, '工具书', 6);
INSERT INTO `thirdctgy` VALUES (42, '教师用书', 6);
INSERT INTO `thirdctgy` VALUES (43, '考研', 6);
INSERT INTO `thirdctgy` VALUES (44, '公务员', 6);
INSERT INTO `thirdctgy` VALUES (45, '图书100', NULL);

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo`  (
  `userid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '没有填写地址',
  `valid` tinyint NULL DEFAULT 1,
  `birth` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES (1, 'admin', '123', 'beijing', 1, NULL);
INSERT INTO `userinfo` VALUES (2, '王五', '123', 'beijing', 1, NULL);
INSERT INTO `userinfo` VALUES (3, '程订单', '123', 'shanghai', 1, NULL);
INSERT INTO `userinfo` VALUES (4, '电动阀', '123', 'shanghai', 1, NULL);
INSERT INTO `userinfo` VALUES (5, '成果', '123', 'shanghai', 1, NULL);
INSERT INTO `userinfo` VALUES (6, '毛毛', '123', 'pudong', 1, NULL);
INSERT INTO `userinfo` VALUES (7, '李四', '123', 'pudong', 1, NULL);
INSERT INTO `userinfo` VALUES (8, '王海', '123', 'nanshan', 1, NULL);
INSERT INTO `userinfo` VALUES (9, '海哥', '123', 'nanshan', 1, NULL);

SET FOREIGN_KEY_CHECKS = 1;
