import { ComicSummary } from "./comic-summary";
import { EventSummary } from "./event-summary";
import { SeriesSummary } from "./series-summary";
import { StorySummary } from "./story-summary";

export interface ItemList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items: ComicSummary[] | StorySummary[] | EventSummary[] | SeriesSummary[];
}
