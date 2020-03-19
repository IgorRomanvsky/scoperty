import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class NodeTreeService {
    public analyzeNewTextInTreeSub: Subject<string> = new Subject<string>();

    constructor() { }
}
