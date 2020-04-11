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

}