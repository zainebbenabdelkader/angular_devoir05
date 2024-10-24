import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Style } from '../model/style.model'; // Assuming you have a Style model
import { Lunette } from '../model/lunette.model'; // Assuming you have a Lunette model
import { LunetteService } from '../services/lunette.service';

@Component({
  selector: 'app-update-lunette',
  templateUrl: './update-lunette.component.html',
  styles: []
})
export class UpdateLunetteComponent implements OnInit {

  currentLunette = new Lunette();
  styles!: Style[]; // Assuming the list of categories is now styles
  updatedStyleId!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private lunetteService: LunetteService) { }

  ngOnInit(): void {
    this.lunetteService.listeCategories().subscribe(styles => {
      this.styles = styles._embedded.styles; // Update the variable name
      console.log(styles);
    });

    this.lunetteService.consulterLunette(this.activatedRoute.snapshot.params['id']).subscribe(prod => {
      this.currentLunette = prod;
      this.updatedStyleId = this.currentLunette.style.idSty; // Update the variable name
    });
  }

  updateLunette() {
    this.currentLunette.style = this.styles.find(style => style.idSty=== this.updatedStyleId)!; // Update the variable name
    this.lunetteService.updateLunette(this.currentLunette).subscribe(prod => {
      this.router.navigate(['lunettes']); // Update navigation path
    });
  }
}
