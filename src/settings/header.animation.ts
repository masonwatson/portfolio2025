import { trigger, state, style, transition, animate, animateChild, stagger, query } from "@angular/animations"; 

export const headerRendered = trigger('headerRendered', [
    state(
        'void',
        style({
            height: '0',
            opacity: '0'
        })
    ),
    state(
        '*',
        style({
            height: '*',
            opacity: '1'
        }),
    ),
    transition('void <=> *', [animate('500ms 300ms ease-in-out')]),
]);

export const topBarTransform = trigger('topBarTransform', [
    state(
        'flat',
        style({
            transform: 'none'
        })
    ),
    state(
        'angled',
        style({
            transform: 'translateY(9px) rotate(45deg)'
        })
    ),
    transition('flat <=> angled', [animate('300ms ease-in-out')])
]);

export const middleBarTransform = trigger('middleBarTransform', [
    state(
        'visible',
        style({
            opacity: '1'
        })
    ),
    state(
        'invisible',
        style({
            opacity: '0'
        })
    ),
    transition('visible <=> invisible', [animate('100ms ease-in-out')])
]);

export const bottomBarTransform = trigger('bottomBarTransform', [
    state(
        'flat',
        style({
            transform: 'none'
        })
    ),
    state(
        'angled',
        style({
            transform: 'translateY(-9px) rotate(-45deg)'
        })
    ),
    transition('flat <=> angled', [animate('300ms ease-in-out')])
]);