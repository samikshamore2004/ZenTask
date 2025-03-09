import { NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import {FormsModule} from '@angular/forms'
@NgModule({
    declarations: [
      AppComponent,
      TodoComponent // Declare TodoComponent here
    ],
    imports: [
        BrowserModule,
        FormsModule // Import FormsModule here
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }