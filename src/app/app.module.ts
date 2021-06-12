import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { NavigatorComponent } from './components/navigator/navigator.component';

import {TodoService} from './services/todo.service'
import {AngularFireModule} from '@angular/fire'
import {environment} from '../environments/environment'
import {AngularFireDatabaseModule} from '@angular/fire/database'


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
