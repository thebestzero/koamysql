import { Column, Model, Table } from 'sequelize-typescript'
import Reply from '@/modules/decorateModel/reply'
@Table({
  tableName: 'evaluate',
})
export default class Evaluate extends Model<Evaluate> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  public evaluateid!: number
  @Column
  content!: string
  @Column
  evaluator!: string
  @Column
  isbn!: string
  @Column
  headportrait!: string
  @Column
  givealikenum!: string
  @Column
  evaluatedegree!: string
  @Column
  pubdate!: Date
  @Column
  isanonymous!: number

  replyid!: number
  replycontent!: string
  replydate!: Date
  evalid!: number
  replyor!: string
  replyLst: Pick<
    Reply,
    'replyid' | 'replycontent' | 'replydate' | 'replyor' | 'evalid'
  >[]=[]
}
/*
*
*
* 这段代码是使用 Sequelize 框架定义了一个名为 Evaluate 的模型类。这个模型类对应数据库中的 evaluate 表。
以下是对代码的解释：
- `@Table`注解指定了模型对应的数据库表名为 evaluate。
- `@Column`注解用于定义模型类的属性对应的数据库字段。可以看到，模型类中定义了与表中字段对应的属性，如 `evaluateid`、`content`、`evaluator` 等。
- `public evaluateid!: number` 定义了一个名为 evaluateid 的属性，类型为 number，表示该字段为主键。
- `replyid!: number`、`replycontent!: string` 等定义了模型类中与 reply 表关联的属性。
- `replyLst: Pick<...>[]=[]` 定义了一个 replyLst 属性，类型为一个 Reply 类型的数组。
需要注意的是，这段代码是使用 TypeScript 编写的，结合了 Sequelize 框架的注解语法，用于定义数据库模型。
*
*
* */