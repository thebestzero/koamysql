## koa + ts 项目配置别名alias
1. `npm install tsconfig-paths --save-dev`
2. 在项目的根目录中创建一个tsconfig.paths.json文件，并添加以下内容：
   {
     "compilerOptions": {
     "baseUrl": ".",
     "paths": {
     "@alias/*": ["src/*"] // 这里的@alias是你的别名，"src/*"是对应的实际路径
       }
    }
   }
3. 修改package.json文件中的scripts字段，以在构建项目时使用tsconfig-paths库来解析别名。修改scripts字段如下：
   "scripts": {
   "build": "tsc",
   "start": "ts-node -r tsconfig-paths/register src/index.ts"
   }
## service层存在的意义
1. 当一个业务功能需要执行一个dao类中的多个方法才能完成时；
2. 当一个业务功能需要执行多个个dao类中的方法才能完成时；
3. 当一个业务功能需要对dao类中取出的数据进行处理才能完成时；

create table `dangdang`.`firstctgy`(
`firstCtgyId` int not null auto_increment,
`name` varchar(20) null,
primary key(`firstCtgyId`));

INSERT INTO dangdang.firstctgy (firstCtgyId, name) VALUES
(1, '童书'),
(2, '电子书'),
(3, '女装'),
(4, '食品'),
(5, '男装'),
(6, '数码相机'),
(7, '创意文具'),
(8, '童装童鞋');

create table `dangdang`.`secondctgy`(
`secondctgyId` int not null auto_increment,
`secctgyname` varchar(20) not null,
`firstctgyId` int not null,
primary key(`secondctgyId`),
constraint `fk_firstctgyId` foreign key(`firstctgyId`) references `dangdang`.`firstctgy`(`firstCtgyId`) on update cascade);
INSERT INTO dangdang.secondctgy (secondctgyId, secctgyname,firstctgyId) VALUES
(1, '0-2岁',1),
(2, '3-6岁',1),
(3, '7-10岁',1),
(4, '11-14岁',1),
(5, '文艺',2),
(6, '人文社科',2),
(7, '教育',2);

create table `dangdang`.`thirdctgy`(
`thirdctgyId` int not null auto_increment,
`thirdname` varchar(20) not null,
`secctgyId` int not null,
primary key(`thirdctgyId`),
constraint `fk_secctgyId` foreign key(`secctgyId`) references `dangdang`.`secondctgy`(`secondctgyId`));

/ 0-2 岁/
INSERT INTO dangdang.thirdctgy (thirdctgyId, thirdname,secctgyId) VALUES
(1, '图画故事',1),
(2, '认知',1),
(3, '益智游戏',1),
(4, '纸板书',1),
(5, '艺术课堂',1),
(6, '入园准备',1) ;
/ 3-6 岁/
INSERT INTO dangdang.thirdctgy (thirdctgyId, thirdname,secctgyId) VALUES
(7, '绘本',2),
(8, '科普百科',2),
(9, '少儿英语',2),
(10, '乐高学习',2),
(11, '入学准备',2);
/ 7-10 岁/
INSERT INTO dangdang.thirdctgy (thirdname,secctgyId) VALUES
('文学',3),
('科普百科',3),
('卡通动漫',3),
('童话',3),
('少儿英语',3);

/ 11-14 岁/
INSERT INTO dangdang.thirdctgy (thirdname,secctgyId) VALUES
('励志',4),
('地理',4),
('政治',4),
('趣味幽默',4),
('少儿英语',4),
('益智游戏',4),
('艺术课堂',4),
('游戏/手工',4),
('绘画',4);

/ 文学/
INSERT INTO dangdang.thirdctgy (thirdname,secctgyId) VALUES
('小说',5),
('哲理文学',5),
('传记',5),
('青春文学',5),
('动漫/幽默',5),
('艺术',5),
('古籍',5),
('法律',5),
('经济',5);

/ 人文社科/
INSERT INTO dangdang.thirdctgy (thirdname,secctgyId) VALUES
('宗教哲学',6),
('历史',6),
('传记',6),
('教育',6),
('社会科学',6),
('艺术',6),
('工具书',6),
('教师用书',6),
('考研',6),
('公务员',6);

外表内连接 内连接（Inner Join）：内连接返回两个表中满足联接条件的行。它只返回两个表中共有的行，即两个表中连接列的值相等的行。内连接使用 JOIN 关键字来实现。
select * from A表,B表 where A表.主键id=B表.外键id
select * from B表 inner join B表 on A表.主键id=B表.外键id
select * from B表 inner join B表 on A表.主键id=B表.外键id

select * from secondctgy sc ,thirdctgy tc where sc.secondctgyId=tc.secctgyId;
select * from secondctgy sc inner join thirdctgy tc on sc.secondctgyId=tc.secctgyId;

多表左外连 外连接返回两个表中满足联接条件的行以及没有匹配的行。它会返回左表（或右表）中的所有行，并将右表（或左表）中与之匹配的行进行联接。如果没有匹配的行，则使用 NULL 值填充。外连接有左外连接（Left Outer Join）和右外连接（Right Outer Join）两种类型。
select tc.thirdctgyId,tc.thirdname,tc.secctgyId,sc.secctgyname from thirdctgy tc left outer join secondctgy sc on sc.secondctgyId=tc.secctgyId;

这个语句是一个 SQL 查询语句，用于从两个表 thirdctgy 和 secondctgy 中联接查询数据。以下是对该语句的解析：
select tc.thirdctgyId, tc.thirdname, tc.secctgyId, sc.secctgyname: 表示查询结果返回的列，即返回 thirdctgy 表中的 thirdctgyId 和 thirdname 列，以及 secondctgy 表中的 secctgyId 和 secctgyname 列。
from thirdctgy tc: 指定查询的主表为 thirdctgy，并为其设置别名为 tc，以便在查询中引用。
left outer join secondctgy sc: 使用左外连接 (LEFT OUTER JOIN) ，将 thirdctgy 表和 secondctgy 表进行联接。在联接过程中，以 sc 作为 secondctgy 表的别名。
on sc.secondctgyId=tc.secctgyId: 指定联接条件，即 secondctgy 表中的 secondctgyId 列与 thirdctgy 表中的 secctgyId 列进行匹配。
;: 表示语句结束。
根据以上解析，该查询语句的目的是联接两个表，并返回满足联接条件的列，其中左表 thirdctgy 中的数据行将会全部显示，右表 secondctgy 中的数据行只会显示与左表中匹配的行，如果没有匹配的行，则以 NULL 值填充

左连接返回的结果集包含左边表的所有行，而右连接返回的结果集包含右边表的所有行。
左连接以左边表为基础，右连接以右边表为基础。
左连接以左边表的列为准，右连接以右边表的列为准。

一二三级联查
SELECT secondctgy.*, thirdctgy.*
FROM firstctgy
LEFT JOIN secondctgy ON firstctgy.firstCtgyId = secondctgy.firstctgyId
LEFT JOIN thirdctgy ON secondctgy.secondctgyId = thirdctgy.secctgyId
WHERE firstctgy.firstCtgyId = 1;




