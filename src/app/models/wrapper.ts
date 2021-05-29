import { Container } from "./container";

export interface Wrapper {
    code?: number;
    status?: string;
    copyright?: string;
    attributionText?: string;
    attributionHTML?: string;
    data?: Container;
    etag?: string;
}
