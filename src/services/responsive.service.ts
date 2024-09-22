import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Injectable()
export class ResponsiveService implements OnDestroy {
    private unsubscriber$: Subject<void> = new Subject();
    public screenWidth$: BehaviorSubject<number | null> = new BehaviorSubject(null);
    public mediaBreakpoint$: BehaviorSubject<string | null> = new BehaviorSubject(null);

    constructor() {
        this.init();
    }

    init() {
        this.setScreenWidth(window.innerWidth);
        this.setMediaBreakpoint(window.innerWidth);

        fromEvent(window, 'resize')
            .pipe(debounceTime(1000), takeUntil(this.unsubscriber$))
            .subscribe((evt: any) => {
                this.setScreenWidth(evt.target.innerWidth);
                this.setMediaBreakpoint(evt.target.innerWidth);
            });
    }

    ngOnDestroy() {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    private setScreenWidth(width: number): void {
        this.screenWidth$.next(width);
    }

    private setMediaBreakpoint(width: number): void {
        if (width > 3840) {
            this.mediaBreakpoint$.next('any');
        } else if (width > 2560) {
            this.mediaBreakpoint$.next('sub4k');
        } else if (width > 1920) {
            this.mediaBreakpoint$.next('sub1440p');
        } else if (width > 1280) {
            this.mediaBreakpoint$.next('sub1080p');
        } else if (width > 1024) {
            this.mediaBreakpoint$.next('sub720p');
        } else if (width > 768) {
            this.mediaBreakpoint$.next('subTablet');
        } else if (width > 430) {
            this.mediaBreakpoint$.next('subSmallTablet');
        } else {
            this.mediaBreakpoint$.next('subMobile');
        }
    }
}
