const request = require('request');

module.exports = function (options) {
    const { loginUrl } = options;

    this.bindHook('third_login', (ctx) => {
        let token = ctx.request.body.sid || ctx.request.query.sid;
        return new Promise((resolve, reject) => {
            request(loginUrl + token, function (error, response, body) {
                if (!error && response.statusCode == 200 && body != "None") {
                    let result = JSON.parse(body);
                    if (result && result) {
                        let ret = {
                            email: result.mail,
                            username: result.user + "(" + result.display + ")"
                        };
                        const next = ctx.request.body.next;
                        if (next) {
                            ret.next = next;
                        }
                        resolve(ret);
                    } else {
                        reject(result);
                    }
                }
                reject(error);
            });
        });
    });
};
