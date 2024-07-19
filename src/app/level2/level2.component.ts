import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component {

  dragList = [
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" }
  ];

  dropList :any[] =  [];

  onDragStart(event: DragEvent, index: number) {
    event?.dataTransfer?.setData("text", index.toString());
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const index = parseInt(event?.dataTransfer?.getData("text") as any);
    console.log(index);
    this.dropList.push(this.dragList[index]);
    this.dragList.splice(index, 1);
  }



  onDragStart2(event: DragEvent, index: number) {

    event?.dataTransfer?.setData("text", index.toString());
  }

  onDragOver2(event: DragEvent) {
    event.preventDefault();
  }

  onDrop2(event: DragEvent) {
    event.preventDefault();
    const index = parseInt(event?.dataTransfer?.getData("text") as any);
    console.log(index);
    this.dragList.push(this.dropList[index]);
    this.dropList.splice(index, 1);
  }
}
