import { Point } from './Polyline';

export class Extent {

    constructor(

        /**
         * X-coord of the left-bottom points of rect
         */
        public xmin: number,

        /**
         * Y-coord of the left-bottom points of rect
         */
        public ymin: number,

        /**
         * X-coord of the right-top points of rect
         */
        public xmax: number,

        /**
         * Y-coord of the right-top points of rect
         */
        public ymax: number

    ) {}

    /**
     * Returns coords of center for this extent.
     */
    public get center() {
        return [
            (this.xmax - this.xmin) / 2,
            (this.ymax - this.ymin) / 2
        ]
    }

    public get width() {
        return this.xmax - this.xmin;
    }

    public get height() {
        return this.ymax - this.ymin;
    }

    /**
     * Check if this extent contains passed point.
     *
     * @param point   Point.
     */
    public contains(point: Point) {
        const itInXSet = point.x >= this.xmin && point.x <= this.xmax;
        const itInYSet = point.y >= this.ymin && point.y <= this.ymax;
        return itInXSet && itInYSet;
    }

}