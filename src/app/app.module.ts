import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './list/article/article.component';
import { DetailComponent } from './list/detail/detail.component';
import { ArticleAdminComponent } from './admin/articleAdmin.component';
import { TruncatePipe } from './pipes/truncate.pipe';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ArticlesService } from './services/articles.service';


const routes: Routes = [
  { path: 'articles', component: ListComponent },
  { path: 'articles/:id', component: DetailComponent },
  { path: 'admin/articles/:id', component: ArticleAdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ArticleComponent,
    DetailComponent,
    ArticleAdminComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    ArticlesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
