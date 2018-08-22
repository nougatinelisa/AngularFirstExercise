import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ArticlesService {
    apiUrl = 'http://localhost:8080/rest';
    constructor(private httpClient: HttpClient) {}
    getArticles() {
        return this.httpClient.get(this.apiUrl + '/articles');
        // return [
        //     {
        //         title : 'hubert',
        //         content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        //         'Assumenda aut error eum excepturi illum itaque labore laboriosam nobis nostrum ' +
        //         'placeat quaerat quibusdam quidem, soluta temporibus ullam ut voluptates voluptatibus! Neque?',
        //         comments : [
        //             'yolo',
        //             'yolo'
        //         ]
        //     },
        //     {
        //         title : 'hubert',
        //         content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        //         'Assumenda aut error eum excepturi illum itaque labore laboriosam nobis nostrum ' +
        //         'placeat quaerat quibusdam quidem, soluta temporibus ullam ut voluptates voluptatibus! Neque?',
        //         comments : []
        //     }
        // ];
    }
}
