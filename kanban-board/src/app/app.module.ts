import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './login/login.component';

import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { routing, appRoutingProviders} from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UserService  } from './services/user/user.service';
import { TaskModule } from './task/task.module';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    routing,
    TaskModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
