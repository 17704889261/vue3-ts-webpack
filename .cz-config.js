module.exports = {
  types: [
    { value: 'feat', name: '新功能经过测试具备上线条件' },
    { value: 'fix', name: '修复已上线的环境上的Bug' },
    { value: 'docs', name: '项目工程的所有文档变动' },
    { value: 'style', name: '不影响代码含义的变化(空白、格式化、缺少分号等)，主要针对代码美观' },
    { value: 'refactor', name: '大范围重构业务代码，既不修复错误也不添加功能' },
    { value: 'perf', name: '小范围代码以及工程化等性能优化' },
    { value: 'test', name: '代码单元测试相关' },
    { value: 'build', name: '影响构建系统或外部依赖关系的更改，主要针对构建应用的依赖包的更改' },
    { value: 'ci', name: '更改持续集成文件和脚本，针对自动化部署' },
    { value: 'chore', name: '重新打包或更新依赖工具等杂活' },
    { value: 'revert', name: '回退代码' },
    { value: 'wip', name: '需求开发中提交' }
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',
  footerPrefix: 'footerPrefix',

  // override the messages, defaults are as follows
  messages: {
    type: '请选择 Commit 类型:',
    // scope: '请输入影响范围 (Scope) (可选):',
    customScope: '请输入影响范围 (Scope) (可选):',
    subject: '请提供一段简要的 Commit 信息:\n',
    body: '请提供一段详细的信息来描述此次更改 (可选). 使用 "\\n" 来另起一行:\n',
    breaking: '是否有任何 BREAKING CHANGES (可选):\n',
    footer: '是否有任何 ISSUE 可以被此次 Commit 关闭 (可选). E.g.: #31, #34:\n',
    confirmCommit: '是否确认提交上述 Commit 信息?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  // skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
}
