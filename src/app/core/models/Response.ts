export class Response<T> {
    constructor(
        public count: number,
        public next: string,
        public previous: string,
        public results: T[],
    ){}
}