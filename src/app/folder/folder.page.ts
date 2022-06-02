import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CestaService } from '../cesta.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, OnChanges {
  public folder: string;
  public quantidadeCesta: number

  constructor(
    private activatedRoute: ActivatedRoute,
    private cestaService: CestaService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.cestaService.quantidadeTotal
      .subscribe({
        next(quantidade){
          this.quantidadeCesta = quantidade
          console.log(this.quantidadeCesta)
        }
      })

      console.log(this.quantidadeCesta)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cestaService.quantidadeTotal
    .subscribe({
      next(quantidade){
        this.quantidadeCesta = quantidade
        console.log(this.quantidadeCesta)
      }
    })
  }

}
