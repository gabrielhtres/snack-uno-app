import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CestaService } from '../cesta.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public quantidadeTotal: number

  constructor(
    private activatedRoute: ActivatedRoute,
    private cestaService: CestaService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.quantidadeTotal)

    this.cestaService.quantidadeTotal
      .subscribe({
        next(quantidade){ this.quantidadeTotal = quantidade }
      })
  }

}
