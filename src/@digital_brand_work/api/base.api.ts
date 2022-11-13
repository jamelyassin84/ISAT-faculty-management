import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Inject, Injectable, Optional} from '@angular/core'
import {environment} from 'environments/environment'
import {Observable} from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class API {
    constructor(
        @Optional() public http: HttpClient,
        @Inject('url') public url: String = '',
    ) {}

    token: string | undefined | unknown = undefined

    headers() {
        const token = localStorage.getItem('access_token')

        const headers: any = {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + token,
        }

        if (token === undefined) {
            delete headers['Authorization']
        }

        return {
            headers: new HttpHeaders(headers),
        }
    }

    paginate<T>(url: string, param: string = ''): Observable<T> {
        return this.http.get<T>(url + param, this.headers())
    }

    get<T>(): Observable<T> {
        const url = `${environment.api}${this.url}`

        return this.http.get<T>(url, this.headers())
    }

    custom<T>(param: string): Observable<T[] | T> {
        const url = `${environment.api}${this.url}${param}`

        return this.http.get<T>(url, this.headers())
    }

    query<T>(queryStringParam: {[key: string]: string}): Observable<T[] | T> {
        const url = `${environment.api}${this.url}?${new URLSearchParams(
            queryStringParam,
        )}`

        return this.http.get<T>(url, this.headers())
    }

    redirect<T>(param: string): Observable<T | T> {
        const url = `${environment.api}${this.url}${param}`

        return this.http.get<T>(url, this.headers())
    }

    postCustom<T>(param: string, data: Object): Observable<T> {
        const url = `${environment.api}${this.url}${param}`

        return this.http.post<T>(url, data, this.headers())
    }

    findOne<T>(id: string | number): Observable<T> {
        const url = `${environment.api}${this.url}/${id}`

        return this.http.get<T>(url, this.headers())
    }

    postWithFile<T>(data: Object): Observable<T> {
        const url = `${environment.api}${this.url}`

        let form = new FormData()

        for (const key in data) {
            form.append(key, data[key])
        }

        return this.http.post<T>(url, form, this.headers())
    }

    post<T>(data: Object): Observable<T> {
        const url = `${environment.api}${this.url}`
        return this.http.post<T>(url, data, this.headers())
    }

    put<T>(data: Object): Observable<T> {
        const url = `${environment.api}${this.url}`

        return this.http.put<T>(url, data, this.headers())
    }

    updateWithFileNode<T>(
        id: string | number | false,
        data: FormData | any,
    ): Observable<T> {
        const url = `${environment.api}${this.url}${
            id !== false ? `/${id}` : ''
        }`

        let form = new FormData()

        for (const key in data) {
            form.append(key, data[key])
        }

        return this.http.put<T>(url, form, this.headers())
    }

    updateWithFilePHP<T>(
        id: string | number | false,
        data: FormData | any,
    ): Observable<T> {
        const url = `${environment.api}${this.url}${
            id !== false ? `/${id}` : ''
        }`

        let form = new FormData()

        for (const key in data) {
            form.append(key, data[key])
        }

        form.append('_method', 'PUT')

        return this.http.post<T>(url, form, this.headers())
    }

    update<T>(id: string | number | false, data: Object): Observable<T> {
        const url = `${environment.api}${this.url}${
            id !== false ? `/${id}` : ''
        }`

        return this.http.put<T>(url, data, this.headers())
    }

    remove<T>(id: string | number): Observable<T> {
        const url = `${environment.api}${this.url}/${id}`

        return this.http.delete<T>(url, this.headers())
    }
}
