export class Point {
    constructor(
        public x: number,
        public y: number,
    ) {}

    public get coords(): [ number, number ] {
        return [ this.x, this.y ];
    }
}

export class Polyline {
    
    public points: Array<[ number, number ]> = [];

    constructor(
        public firstPoint: Point
    ) {
        this.points.push(firstPoint.coords)
    }

    public addPoint(point: Point) {
        this.points.push(point.coords);
    }
}

