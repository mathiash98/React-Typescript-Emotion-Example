interface ApiParams {
    i?: string,
    t?: string,
    type?: string, // Change with enum
    y?: number,
    plot?: string,
    s?: string,
    page?: number,
};

const movieAPI = {
    APIurl: <string> "http://www.omdbapi.com/?apikey=fe96eb4b&",


    /**
     * Search for movies by freetext
     * @param {string} searchString What you wan't to search for
     * @returns {Promise<any>} Returns a fetch promise
     */
    search (searchString: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.fetch(this.APIurl, {'s': searchString})
            .then(res => {
                resolve(res.json());
            })
            .catch(err => {
                console.error(err);
                resolve({
                    response: "False",
                    error: err
                });
            });
        })
    },

    /**
     * Custom fetch method
     * @param {string} url Url for api
     * @param {ApiParams} params Query parameters
     * @returns {Promise<any>} Returns a fetch promise
     */
    fetch (url: string, params: ApiParams): Promise<any> {
        return window.fetch(this.urlBuilder(url, params), {
            "method": "GET"
        });
    },

    /**
     * Returns a complete url with query parameters inserted into url
     * @param {string} url Url to add params to
     * @param {[index: string]:any} params Query parameteres to add
     * @returns {string} Complete string with url and query params
     */
    urlBuilder (url: string, params: {[index: string]:any}): string {
        let outUrl: string = url;
        
        // Check if url already has a questionmark and is ready for params
        if (outUrl.indexOf('?') === -1) {
            if (outUrl.endsWith('/')) {
                outUrl += '?';
            } else {
                outUrl += '/?'
            }
        }

        return url + Object.keys(params).map(key => key + '=' + params[key]).join('&');
    }
}

export default movieAPI;