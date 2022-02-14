module.exports = {
    mode: 'none',
    entry: {
        main: './index.js'
    },
    output: {
        filename: '[name].js',
        library: 'Cul', // 指定包导出的名称
        libraryTarget: 'umd',  // 会匹配所有的cjs, es6, script 
        // libraryExport: 'default'   // 默认导出default，设置此属性之前外部调用为Cul.add(1, 2) 之后直接为Cul(1, 2)
        globalObject: 'typeof self !== \'undefined\' ? self : this', // 不同宿主环境下全局对象
        umdNamedDefine: true,
        // library: {
        //     name: 'CUl',
        //     type: 'umd'
        // }
    }
}