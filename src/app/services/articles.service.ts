import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ArticlesService {
    apiUrl = 'http://localhost:8080/rest';
    constructor(private httpClient: HttpClient) {}
    getArticles() {
        return this.httpClient.get(this.apiUrl + '/articles');
    }

    getArticlesById(id) {
        return this.httpClient.get(this.apiUrl + '/articles/' + id);
    }

    updateArticle(article) {
        return this.httpClient.put(this.apiUrl + '/articles/' + article.id, article);
    }
}
