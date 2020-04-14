import { Extent } from './Extent';
import { Point } from './Polyline';
import { getUniqueId } from './utils/uniqueId';


export class QuadTree {

    private northeast: QuadTree;
    private northwest: QuadTree;
    private southeast: QuadTree;
    private southwest: QuadTree;

    /**
     * Is this q-tree divided or not.
     */
    private divided: boolean = false;

    private maxLevel: number = 10;
    private id: string;

    /**
     * Points array, that contains this q-tree segment.
     */
    private points: Array<Point> = [];

    constructor(

        /**
         * Boundary of this q-tree (q-tree's segment).
         */
        public boundary: Extent,

        /**
         * Maximum capacity of one concrete segment of tree.
         */
        public capacity: number,

        /**
         * Level for this segment.
         */
        private level: number = 1

    ) {
        this.id = getUniqueId();
    }

    /**
     * Subdivides this segment to 4 quadrants.
     */
    public subdivide() {

        const [ xcenter, ycenter ] = this.boundary.center;
        const width = this.boundary.width;
        const height = this.boundary.height;

        let ne = new Extent(
           xcenter,
           ycenter,
           xcenter + width / 2,
           ycenter + height / 2
        );
        this.northeast = new QuadTree(ne, this.capacity, this.level + 1);

        let nw = new Extent(
            xcenter - width / 2,
            ycenter,
            xcenter,
            ycenter + height / 2
        );
        this.northwest = new QuadTree(nw, this.capacity, this.level + 1);

        let se = new Extent(
            xcenter,
            ycenter - height / 2,
            xcenter + width / 2,
            ycenter
        );
        this.southeast = new QuadTree(se, this.capacity, this.level + 1);
        
        let sw = new Extent(
            xcenter - width / 2,
            ycenter - height / 2,
            xcenter,
            ycenter
        );
        this.southwest = new QuadTree(sw, this.capacity, this.level + 1);

        this.divided = true;

    }

    /**
     * Inserts point to correct segment.
    * 
     * @param point   Point.
     */
    public insert(point: Point): string | undefined {
        
        if (!this.boundary.contains(point)) {
            return;
        }

        if (this.points.length < this.capacity) {

            this.points.push(point);
            return this.id;

        } else {

            if (!this.divided) {
                this.subdivide();
            }

            this.northeast.insert(point);
            this.northwest.insert(point);
            this.southeast.insert(point);
            this.southwest.insert(point);

        }
    }

    public insertLine() {}
}
