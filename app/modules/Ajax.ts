export class Ajax{
    
    public constructor(){}

    public static ajax(type: string, url: string, data: FormData){
        return new Promise(function(resolve, reject) {
            var a = new XMLHttpRequest();
            a.open(type, url);
            a.onload = function () {
                if (a.status !== 200) reject();
                
                resolve(a.responseText);
            };
            a.send(data);
        });
    }

    public static get(url: string){
        return this.ajax("GET", url, null);
    }

    public static post(url: string, data: FormData){
        return this.ajax("POST", url, data);
    }

}