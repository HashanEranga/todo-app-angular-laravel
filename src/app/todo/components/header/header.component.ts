import { Component } from "@angular/core";

@Component({
    selector:'app-todos-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {
    text:string = '';
    changeText(event: Event){
        const target=event.target as HTMLInputElement
        this.text = target.value;
        console.log(target.value);
    }

    addTodo():void{
        console.log('addTodo', this.text)
    }
}