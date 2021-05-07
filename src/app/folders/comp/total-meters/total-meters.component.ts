import { Component, OnInit } from '@angular/core';
import {FoldersService} from '../../service/folders.service';

@Component({
  selector: 'app-total-meters',
  templateUrl: './total-meters.component.html',
  styleUrls: ['./total-meters.component.styl']
})
export class TotalMetersComponent implements OnInit {

  public nbMetersTotal!: number;
  public nbMetersTotalInvalid!: number;
  private nbMetersMonth!: number;

  constructor(private foldersService: FoldersService) { }

  ngOnInit(): void {
    console.log('starting fetching nbMeters');
    this.foldersService.getNbMetersPerMonth(5).subscribe((nbMeters) => {
      this.nbMetersMonth = nbMeters;
      console.log(nbMeters);
    });

    this.foldersService.getTotalNbMeters().subscribe((nbMeters) => {
      this.nbMetersTotal = nbMeters;
      console.log(nbMeters);
    });

    this.foldersService.getTotalNbMeters(false).subscribe((nbMeters) => {
      this.nbMetersTotalInvalid = nbMeters;
      console.log(nbMeters);
    });
  }

}
