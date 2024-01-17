import { Component } from '@angular/core';

@Component({
  selector: 'app-changing-block',
  templateUrl: './changing-block.component.html',
  styleUrls: ['./changing-block.component.css']
})
export class ChangingBlockComponent {
  width = 200;
  height = 200;
  rotation = 0;

  onWidthChange(newWidth: number) {
    this.width = newWidth;
  }

  onHeightChange(newHeight: number) {
    this.height = newHeight;
  }

  onRotationChange(newRotation: number) {
    this.rotation = newRotation;
  }
}
