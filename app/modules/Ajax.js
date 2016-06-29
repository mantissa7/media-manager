var Ajax = (function () {
    function Ajax() {
    }
    Ajax.ajax = function (type, url, data) {
        return new Promise(function (resolve, reject) {
            var a = new XMLHttpRequest();
            a.open(type, url);
            a.onload = function () {
                if (a.status !== 200)
                    reject();
                resolve(a.responseText);
            };
            a.send(data);
        });
    };
    Ajax.get = function (url) {
        return this.ajax("GET", url, null);
    };
    Ajax.post = function (url, data) {
        return this.ajax("POST", url, data);
    };
    return Ajax;
}());
Ajax = Ajax;
