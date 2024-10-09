import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ITimerModel } from '../../models/timer.model';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.less',
  animations: [
  ]
})
export class TimerComponent implements OnInit {
    protected timer$: Observable<any>;

    adjustTimeComponent(num: number): string {
        return ('0' + num).slice(-2);
    }

    ngOnInit(): void {
        this.timer$ = interval(1000)
            .pipe(
                map(() => {
                    const startDate = new Date("January 7, 2016 11:00:00").getTime();
                    const currentDate = new Date().getTime();
                    const totalSeconds = (currentDate - startDate) / 1000;
                    return {
                        years: this.adjustTimeComponent(Math.floor(totalSeconds / 3600 / 24 / 365)),
                        days: this.adjustTimeComponent(Math.floor(totalSeconds / 3600 / 24) % 365),
                        hours: this.adjustTimeComponent(Math.floor(totalSeconds / 3600) % 24),
                        minutes: this.adjustTimeComponent(Math.floor(totalSeconds / 60) % 60),
                        seconds: this.adjustTimeComponent(Math.floor(totalSeconds) % 60)
                    } as ITimerModel
                })
            )
    }
}
