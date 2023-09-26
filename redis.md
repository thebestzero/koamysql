## 一、基础命令
1. keys :查看当前数据库全部键信息
2. set 设置一个 key value 对数据 如果key已经存在 用新值value覆盖原来的值
3. get key 获取指定的key的value
4. setnx 首先判断key是否存在，如果存在就不覆盖值
5. msetnx key1 value1 key2 value2 ... keyn valuen 批量创建多个key，多个value
6. exists key 是否存在某个key的key-value对数据
7. del key 删除某个key的key-value对数据
8. save 人工发出的数据库持久化操作

## 二、存储Hash数据
1. hset 创建hash结构对象，但只能保存单个key-value键值对到hash对象中 hset 对象名 key1 value1
2. hmset 创建hash结构的对象，可以保存多个key-value键值对到hash对象中 hmest 对象名 key1 value1 key2 value2 ...
3. hgetall  取出hash对象名的所有key-value数据  hgetall 对象名
4. hget  取出hash对象指定key对应的value  hget 对象名 key名
5. hmget 取出hash对象多个key对应的多个value
6. hkeys 查看hash对象的所有key
7. hvals 查看hash对象的所有value

应用场景：保存一些不经常变的对象，登录后的用户对象，图书一级分类，地图的经纬度信息...

## 三、存储set数据【不重复元素的集合】
1. 创建set集合 sadd stunoSet 101 102 103 102
2. 获取set集合的元素 smembers stunoSet
3. 取出两个set的差值 sdiff stunoSet stunoSet2
4. 从set移除元素 srem stunoSet 102
5. 删除set元素 del stunoSet
6. 获取两个集合的交集 sinter stunoSet stunoSet2
7. 合并两个集合 sunion stunoSet stunoSet2

应用场景：学生编号，公民身份证等

## 四、zset【可以排序的set】
1. 添加
格式 zadd [key] [score] [value]
例： zadd salescount 1980 wangwu
    zadd salescount 980 kate
    zadd salescount 198 lisi
    zadd salescount 19 dd
合并：zadd salescount 1980 wangwu 980 kate 198 lisi 19 dd
2. 显示所有元素
    zrange salescount 0 -1 withscores 升序
    zrevrange salescount 0 -1 withscores 降序
3. 删除指定元素 zrem salescount kate

应用场景：学生成绩排名，音乐排行榜等

## 五、list数据结构
序号	命令及描述
1	BLPOP key1 [key2 ] timeout
移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
2	BRPOP key1 [key2 ] timeout
移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
3	BRPOPLPUSH source destination timeout
从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
4	LINDEX key index
通过索引获取列表中的元素
5	LINSERT key BEFORE|AFTER pivot value
在列表的元素前或者后插入元素
6	LLEN key
获取列表长度
7	LPOP key
移出并获取列表的第一个元素
8	LPUSH key value1 [value2]
将一个或多个值插入到列表头部
9	LPUSHX key value
将一个值插入到已存在的列表头部
10	LRANGE key start stop
获取列表指定范围内的元素
11	LREM key count value
移除列表元素
12	LSET key index value
通过索引设置列表元素的值
13	LTRIM key start stop
对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除。
14	RPOP key
移除列表的最后一个元素，返回值为移除的元素。
15	RPOPLPUSH source destination
移除列表的最后一个元素，并将该元素添加到另一个列表并返回
16	RPUSH key value1 [value2]
在列表中添加一个或多个值到列表尾部
17	RPUSHX key value
为已存在的列表添加值