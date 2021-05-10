import {Component, Input, OnInit} from '@angular/core';
import {FoldersService} from '../../service/folders.service';

@Component({
  selector: 'app-total-meters',
  templateUrl: './total-meters.component.html',
  styleUrls: ['./total-meters.component.styl']
})
export class TotalMetersComponent implements OnInit {

  public nbMetersTotal!: number;
  public nbMetersTotalInvalid!: number;
  @Input() public nbMonth !: number;

  constructor(private foldersService: FoldersService) { }

  ngOnInit(): void {
    console.log('starting fetching nbMeters');
    if (this.nbMonth){
      this.foldersService.getNbMetersPerMonth(this.nbMonth).subscribe((nbMeters) => {
        this.nbMetersTotal = nbMeters;
        console.log(nbMeters);
      });

      this.foldersService.getNbMetersPerMonth(this.nbMonth, false).subscribe((nbMeters) => {
        this.nbMetersTotalInvalid = nbMeters;
        console.log(nbMeters);
      });
    }else{
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

}
