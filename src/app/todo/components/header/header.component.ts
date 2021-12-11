import { Component } from "@angular/core";
import { TodoService } from "../service/todo.service";

@Component({
    selector:'app-todos-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {
    text:string = '';

    constructor(private todoService: TodoService) {}

    changeText(event: Event){
        const target=event.target as HTMLInputElement
        this.text = target.value;
        console.log(target.value);
    }

    addTodo():void{
        this.todoService.addTodo(this.text)
        this.text=''
    }
}