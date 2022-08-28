import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "../shared/models/card.model";

@Injectable()
export class SkillService{
    constructor(
        private _httpClient: HttpClient
    ){}

    getSkills(): Observable<Card[]>{
        return this._httpClient.get<Card[]>(`/api/skills`);
    }

    updateSkills(card: Card): Observable<Card>{
       return this._httpClient.put<Card>(`/api/skills/${card.id}`, card);
    }
}