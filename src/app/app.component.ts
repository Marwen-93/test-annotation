
  
import { Component, ViewChild } from '@angular/core';
import { Annotation, NgxAnnotateTextComponent } from 'ngx-annotate-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('annotateText') ngxAnnotateText: NgxAnnotateTextComponent | undefined;
  text!: string;
   values = '';
    file :any ={document:"", annotation:[]} ;

  onEnter(text: string) { this.text = text; }



  annotations: Annotation[]= [
  
  ];
  
  addAnnotation(label: string, color: string) {
    if (this.ngxAnnotateText) {
      const selection = this.ngxAnnotateText.getCurrentTextSelection();
      if (selection) {
        this.annotations = this.annotations.concat(
           new Annotation(
             selection.startIndex,
            selection.endIndex,
            label,
            color),       
        );
        
  this.file.document=this.text;
  //this.file.annotations.start=(this.annotations[1]);
  for (let i of this.annotations ){
    this.file.annotation.push({start: i.startIndex, end:i.endIndex, label:i.label, text: this.text.slice(i.startIndex,i.endIndex)})


  }
  console.log(this.file)

       
      }
    }
  }
};

