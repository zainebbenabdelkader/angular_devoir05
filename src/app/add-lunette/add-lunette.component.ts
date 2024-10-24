import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Style } from '../model/style.model';
import { Lunette } from '../model/lunette.model';
import { LunetteService } from '../services/lunette.service';
import { style } from '@angular/animations';

@Component({
  selector: 'app-add-lunette',
  templateUrl: './add-lunette.component.html'
})
export class AddLunetteComponent implements OnInit {

  newLunette = new Lunette();
  styles! : Style[];
  newIdSty! : number;
  newStyle! : Style;
  
  constructor(private lunetteService: LunetteService,
              private router : Router) { }

  ngOnInit(): void {

    this.lunetteService.listeLunettes().
          subscribe((stys: { _embedded: { styles: Style[]; }; }) => {this.styles = stys._embedded.styles;
            console.log(stys);
        });
 
  }

  addLunette(){
    this.newLunette.style = this.styles.find(sty => sty.idSty == this.newIdSty)!;
    this.lunetteService.ajouterLunette(this.newLunette)
                      .subscribe(lun => {
                      console.log(lun);
                      this.router.navigate(['lunettes']);
                      }); 
    }
}
