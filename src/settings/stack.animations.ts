import { trigger, state, style, transition, animate, animateChild, stagger, query } from "@angular/animations"; 

export const stack = trigger('stack', [
    transition('void <=> *', [
        query(':enter', stagger(200, animateChild()), { optional: true }),
        query(':leave', stagger(200, animateChild()), { optional: true })
    ])
]);

export const techRendered = trigger('techRendered', [
    state(
        'void',
        style({
            // scale: '1.1',
            opacity: '0'
        })
    ),
    state(
        '*',
        style({
            // scale: '1',
            opacity: '1'
        })
    ),
    transition('void => *', [animate('400ms {{delay}}ms ease')],
        { params: { delay: 400 } }
    ),
]);