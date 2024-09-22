import { Injectable } from "@angular/core";
import { IProjectsModel } from "../app/homeModule/models/projects.model";
import config from "../config/projects.config.json";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    constructor() { }

    getProjects(): Observable<IProjectsModel[]> {
        return of(config.projects as IProjectsModel[]);
    }
}