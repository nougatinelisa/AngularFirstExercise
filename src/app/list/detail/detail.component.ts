import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['../../app.component.css']
})

export class DetailComponent implements OnInit {
    article = {};
    constructor(private articleService: ArticlesService, private route: ActivatedRoute) {}
    ngOnInit() {
        const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
        const id = Number(snapshot.params.id);
        this.articleService.getArticlesById(id).subscribe(articleFromServer => {
            this.article = articleFromServer;
        });
    }
}
