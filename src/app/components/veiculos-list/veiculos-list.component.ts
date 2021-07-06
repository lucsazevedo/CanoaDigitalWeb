import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo.model';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrls: ['./veiculos-list.component.css']
})
export class VeiculosListComponent implements OnInit {

  veiculos?: Veiculo[];
  currentVeiculo: Veiculo = {};
  currentIndex = -1;
  title = '';

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.retrieveVeiculos();
  }

  retrieveVeiculos(): void {
    this.veiculoService.getVeiculos()
      .subscribe(
        data => {
          this.veiculos = data.data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveVeiculos();
    this.currentVeiculo = {};
    this.currentIndex = -1;
  }

  setActiveVeiculo(veiculo: Veiculo, index: number): void {
    this.currentVeiculo = veiculo;
    this.currentIndex = index;
  }

}