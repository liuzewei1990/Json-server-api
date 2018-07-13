
let Mock = require("mockjs");
module.exports = () => {
    return {
        //可以实现post get
        banks: [],
        banks2: (() => {
            let data = [];
            for (let i = 0; i < 5; i++) {
                let item = Mock.mock({
                    "uid": "@guid",
                    "name": "@cname",
                    "city": "@city(true)",
                    "county": "@county(true)",
                    "string|1-10": "★",
                    "title": "@ctitle(30, 50)",
                    "content": "@ctitle(100)",
                    "cparagraph": "@cparagraph()",
                    "image": "@image('200x100', '#4A7BF7', 'Hello')",
                    "number|+1": "@region",
                    "integer": "@integer(60, 100)",
                    'regexp|1-5': /\d{5,10}\-/,
                    "flag": "@boolean",
                    "range": "@range(10)",
                    "now": "@now('yyyy-MM-dd HH:mm:ss SS')",
                    //路径形式
                    "foo": "Hello",
                    "nested": {
                        "a": {
                            "b": {
                                "c": "Mock.js"
                            }
                        }
                    },
                    "absolutePath": "@/foo @/nested/a/b/c"
                })
                data.push(item)
            }
            return data;
        })(),
        customerAdmin: {
            customerInfo: (() => {
                let data = [];
                for (let i = 0; i < 5; i++) {
                    let item = Mock.mock({
                        "uid": "@guid",
                        "name": "@cname",
                        "city": "@city(true)",
                        "county": "@county(true)",
                        "string|1-10": "★",
                        "title": "@ctitle(30, 50)",
                        "content": "@ctitle(100)",
                        "cparagraph": "@cparagraph()",
                        "image": "@image('200x100', '#4A7BF7', 'Hello')",
                        "number|+1": "@region",
                        "integer": "@integer(60, 100)",
                        'regexp|1-5': /\d{5,10}\-/,
                        "flag": "@boolean",
                        "range": "@range(10)",
                        "now": "@now('yyyy-MM-dd HH:mm:ss SS')",
                        //路径形式
                        "foo": "Hello",
                        "nested": {
                            "a": {
                                "b": {
                                    "c": "Mock.js"
                                }
                            }
                        },
                        "absolutePath": "@/foo @/nested/a/b/c"
                    })
                    data.push(item)
                }
                return data;
            })(),
        }
    }
}