const Unsplash = require('unsplash-js').default;

export default class ImageService {
    constructor() {
        this.instance = this._init();
    }
    _init(){
        return new Unsplash({
            applicationId: "158c601e2e56a62543997168891510477984a4363544e67cfc3654903a8d71ce", //acc
            secret: "9ddbd23bd00dfe2c6cdc9b05a1c69b4f25fff2b1604334cd322b904a6047f6d0", //sec
        });
    }
    getImages = (keyword, page = 1) => {
         return this.instance.search.photos(keyword, page)
            .then(result => result.json())
            .then(result => {
                // const urls = [];
                // result.results.forEach(value => {
                //     urls.push(value.urls['small'])
                // });
                // console.log(urls)
                return result;
            });
    };
    getPopularCollections = () => {
        return this.instance.collections.listCollections(1, 10, "popular")
            .then(result => result.json())
            .then(result => {
                return result;
            });

    };
    getCollections = (keyword, page = 1) => {
        return this.instance.search.collections(keyword, page)
            .then(result => result.json())
            .then(result => {
                return result;
            });
    };
    getImageById = (id) => {
        return this.instance.photos.getPhoto(id)
            .then(result => result.json())
            .then(result => {
                return result;
            });
    };
}