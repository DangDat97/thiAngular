import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import * as path from "path";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { DraftsComponent } from './drafts/drafts.component';
import { DeletedComponent } from './deleted/deleted.component';
const appRoutes: Routes =[
  {path:'/', component:AppComponent},
  {path:'/inbox', component:InboxComponent},
  {path:'/drafts', component:DraftsComponent},
  {path:'/deleted', component:DeletedComponent},
  {path:'/sent', component:SentComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InboxComponent,
    SentComponent,
    DraftsComponent,
    DeletedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
