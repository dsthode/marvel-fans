import { Character } from "./character";

export interface Container {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results?: Character[]
}
