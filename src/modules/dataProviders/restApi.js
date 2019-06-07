import { trimChar, encodeQueryData } from 'services/utils'
import { defaults } from 'lodash'

export default class RestApi {
    constructor(url, defaultParams) {
        this._url = url;
        this._params = defaultParams || {
            headers: [
                ["Content-Type", "text/plain"],
            ],
        }
    }

    get(path, params) {
        return this._request(this._generateUrl(path, params), { method: 'GET' });
    }

    post(path, body) {
        return this._request(this._generateUrl(path), {
            method: 'POST',
            body: JSON.stringify(body)
        });
    }

    put(path, body) {
        return this._request(this._generateUrl(path), {
            method: 'PUT',
            body: JSON.stringify(body)
        });
    }

    delete(path, body) {
        return this._request(this._generateUrl(path), {
            method: 'DELETE',
            body: JSON.stringify(body)
        });
    }

    async _request(path, params) {
        try {
            return await fetch(path,
                defaults(params, this._params));
        } catch (ex) {
            console.error(ex);
        }
    }

    _generateUrl(path, params) {
        let paramsString = params && params.length ? '?' + encodeQueryData(params) : "";
        return `${trimChar(this._url, '/')}/${trimChar(path, '/')}${paramsString}`;
    }
}