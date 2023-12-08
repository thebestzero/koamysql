import Evaluate from '@/modules/decorateModel/evaluate'
import Reply from '@/modules/decorateModel/reply'
import {
  getSubItemsFrmArr,
  getNoReptItem,
  combine,
} from '@/modules/commontypes'

function getEvalLst(evalLst: Evaluate[]) {
  return getSubItemsFrmArr(
    evalLst,
    'evaluateid',
    'content',
    'evaluator',
    'isbn',
    'headportrait',
    'givealikenum',
    'evaluatedegree',
    'pubdate',
    'isanonymous',
  )
}
function getRplLst(evalReplyLst: Evaluate[]) {
  return getSubItemsFrmArr(
    evalReplyLst,
    'replyid',
    'replycontent',
    'replydate',
    'replyor',
    'evalid',
  )
}

type EvalKeysUnion =  "evaluateid" | "content" | "evaluator" | "isbn" | "headportrait" | "givealikenum" | "evaluatedegree" | "pubdate" | "isanonymous"
type EvalReplyLstUnion =  EvalKeysUnion | 'replyLst'
type EvalReplyItem = Pick<Evaluate, EvalReplyLstUnion>
type EvalReplyLastLst = EvalReplyItem[]
type ReplyItem = Pick<Reply, 'evalid' | 'replyid' | 'replycontent' | 'replydate' | 'replyor'>
type ReplyLst = ReplyItem[]

export default function convert(evalReplyLst:Evaluate[]){
    //1.获取评论列表数组
    let evalLst = getEvalLst(evalReplyLst)
    //2.去重
    let noRepeatEvalLst = getNoReptItem(evalLst,'evaluateid')
    let replyLst = getRplLst(evalReplyLst)
    const evalReplyLastLst:EvalReplyLastLst = []
    noRepeatEvalLst.forEach((noRepeatEval) => {
        const lastRplLst:ReplyLst = []
        replyLst.forEach((reply) => {
            if (noRepeatEval.evaluateid === reply.evalid){
                lastRplLst.push(reply)
            }
        })
        const evalRplItemComb: EvalReplyItem = combine(noRepeatEval,{replyLst:lastRplLst})
        evalReplyLastLst.push(evalRplItemComb)
    })
}