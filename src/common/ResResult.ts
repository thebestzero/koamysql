enum Code {
  Success = 200,
  SEVER_ERROR = 500,
}

class ResResult {
  static success(data: any = undefined, msg: any = '') {
    const code: Code = Code.Success
    return { data, msg, code }
  }
  static fail(msg: any = '') {
    const code: Code = Code.SEVER_ERROR
    return { msg, code }
  }
}

export let { success, fail } = ResResult
