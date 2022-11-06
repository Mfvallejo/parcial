import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Array<Planta> = [];
  cInterior: number = 0;
  cExterior: number = 0;


  constructor(private plantaService: PlantaService) { }

  getPlants(): void {
    this.plantaService.getPlants().subscribe((plantas) => {
      this.plantas = plantas;
      plantas.forEach((p) => {
        if(p.tipo === 'Interior')
          this.cInterior += 1;
        else
          this.cExterior += 1;
      })
    });
  }

  ngOnInit() {
    this.getPlants();
  }
}
