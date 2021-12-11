import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { TodoService } from "./components/service/todo.service";
import { TodosComponent } from "./components/todos/todos.component";

const routes: Routes = [
    {
        path:'',
        component:TodosComponent
    }
]

@NgModule({
    declarations:[TodosComponent, HeaderComponent],
    imports:[RouterModule.forChild(routes)],
    providers: [TodoService]
})
export class TodoModule {}



