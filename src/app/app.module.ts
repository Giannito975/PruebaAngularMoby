import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './main/post-list/post-list.component';
import { PostDetailComponent } from './main/post-detail/post-detail.component';
import { ComentariosComponent } from './main/post-detail/comentarios/comentarios.component'
import { ErrorViewComponent } from './main/error-view/error-view.component';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    ErrorViewComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
