import { ItemImage } from "./item-image";
import { ItemList } from "./item-list";
import { ItemUrl } from "./item-url";

export interface Character {
    id?: number;
    name?: string;
    description?: string;
    modified?: Date;
    resourceURI?: string;
    urls?: ItemUrl[];
    thumbnail?: ItemImage;
    comics?: ItemList;
    stories?: ItemList;
    events?: ItemList;
    series?: ItemList;
}
