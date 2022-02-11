module.exports = {
    mode: 'none',
    entry: {
        main: './index.js'
    },
    output: {
        filename: '[name].js',
        library: 'Cul', // 指定包导出的名称
        libraryTarget: 'window',  // 会匹配所有的cjs, es6, script 
        libraryExport: 'add'   // 默认导出default，设置此属性之前外部调用为Cul.add(1, 2) 之后直接为Cul(1, 2)
    }
}