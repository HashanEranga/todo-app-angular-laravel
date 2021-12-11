import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TodoInterface } from "../types/todo.interface";

@Injectable()

export class TodoService{
    todo$ = new BehaviorSubject<TodoInterface[]>([])

    addTodo(text: string): void{
        const newTodo: TodoInterface={
            text,
            isCompleted:false,
            id:Math.random().toString(16)
        }

        const updatedTodos = [...this.todo$.getValue(), newTodo]
        this.todo$.next(updatedTodos)
    }
}