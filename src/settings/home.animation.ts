import { trigger, state, style, transition, animate } from "@angular/animations"; 

export const footerCedeed = trigger('footerCedeed', [
    state(
        'void',
        style({
            opacity: '0'
        })
    ),
    state(
        '*',
        style({
            opacity: '1'
        }),
    ),
    transition('void <=> *', [animate('300ms ease-in-out')]),
]);