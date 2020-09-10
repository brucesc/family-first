import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 2, rows: 1 },
        { title: 'Card 4', cols: 4, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store) { }

  ngOnInit(): void {
    // this.store.pipe(select());
  }

  // TODO : Widgets for Donut Chart, Load Count by Queue, Load Assignment Table
}
