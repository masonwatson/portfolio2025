import { trigger, state, style, transition, animate, animateChild, stagger, query } from "@angular/animations"; 

export const projects = trigger('projects', [
    transition('* => *', [
        query(':enter', stagger(100, animateChild())),
        // query(':leave', stagger(100, animateChild()), { optional: true })
    ])
]);

export const projectRendered = trigger('projectRendered', [
    state(
        'void',
        style({
            transform: 'rotate3d(0, 1, 0, -135deg) translateZ(0) scale(1)'
        })
    ),
    state(
        '*',
        style({
            transform: 'rotate3d(0, 1, 0, -{{degree}}deg) translateZ(0) scale(1)'
        }), { params: { degree: '45' } }
    ),
    transition('void => *', [animate('500ms ease-in-out')]),
]);

export const projectCeded = trigger('projectCeded', [
    state(
        '*',
        style({
            transform: 'rotate3d(0, 1, 0, -{{degree}}deg) translateZ(0) scale(1)'
        }), { params: { degree: '45' } }
    ),
    state(
        'void',
        style({
            height: '0',
            transform: 'rotate3d(0, 1, 0, -135deg) translateZ(0) scale(1)'
        })
    ),
    transition('* => void', [animate('500ms ease-in-out')]),
]);