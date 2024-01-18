import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ColorService } from '../../services/color.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit{

    colors:Color[]=[];
    currentColor:Color | null = null;

    constructor(private colorService:ColorService){}

    ngOnInit(): void {
      this.getColors();
    }

    getColors(){
      this.colorService.getColors().subscribe(response=>{
        this.colors=response.data
      })
    }
    setCurrentColor(color:Color){
      this.currentColor=color;
    }
  
    getCurrentColorClass(color:Color){
      if(color==this.currentColor){
        return "list-group-item active"
      }else{
        return "list-group-item"
      }
    }
  
    getAllColorClass(){
      if(!this.currentColor){
        return "list-group-item active"
      }
      else{
        return "list-group-item"
      }
    }
  
    clearCurrentColor(){ this.currentColor = null }
}
