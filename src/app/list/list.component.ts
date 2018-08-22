import {Component, OnInit} from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['../app.component.css']
})

export class ListComponent implements OnInit {
    articles;
    constructor(private articleService: ArticlesService) {}
    ngOnInit() {
       this.articleService.getArticles().subscribe(articlesFromServer => {
           this.articles = articlesFromServer;
       });
    }
}
