import { Injectable } from "@angular/core";
import config from "../config/typewriter.config.json";
import { concat, concatMap, delay, from, ignoreElements, interval, map, of, repeat, take } from "rxjs";
import { ITypewriterModel } from "../app/homeModule/models/typewriter.model";

@Injectable({
    providedIn: 'root'
})
export class TypewriterService {
constructor() { }

    private type({word, speed, backwards}: ITypewriterModel) {
        return interval(speed).pipe(
            map(x => backwards ? word.substring(0, word.length - 1 - x) : word.substring(0, x + 1)),
            take(word.length)
        );
    }

    typeEffect(word: string) {
        return concat(
            this.type({ word, speed: 100, backwards: false }),
            of('').pipe(delay(3000), ignoreElements()),
            this.type({ word, speed: 85, backwards: true }),
            of('').pipe(delay(100), ignoreElements())
        );
    }

    getTypewriterEffect() {
        return from(config.typewriter).pipe(
            concatMap(title => this.typeEffect(title)),
            repeat()
        );
    }
}