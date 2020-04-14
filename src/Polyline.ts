export class Point {

    constructor(

        /**
         * X-coord of this point.
         */
        public x: number,

        /**
         * Y-coord of this point.
         */
        public y: number,
    ) {}

    /**
     * Returns tuple with X and Y coordinates.
     */
    public get coords(): [ number, number ] {
        return [ this.x, this.y ];
    }
}

export class Polyline {

    /**
     * List of points through which the line passes.
     */
    public points: Array<[ number, number ]> = [];

    constructor(

        /**
         * First point for this line.
         */
        public firstPoint: Point
    ) {
        this.points.push(firstPoint.coords)
    }

    /**
     * Adds new point for polyline.
    * 
     * @param point   Point.
     */
    public addPoint(point: Point) {
        this.points.push(point.coords);
    }
}

