import { Extent } from './Extent';
import { Point } from './Polyline';


export class QuadTree {

    private northeast: QuadTree;
    private northwest: QuadTree;
    private southeast: QuadTree;
    private southwest: QuadTree;

    /**
     * Is this q-tree divided or not.
     */
    private divided: boolean = false;

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

    ) {}

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
        this.northeast = new QuadTree(ne, this.capacity);

        let nw = new Extent(
            xcenter - width / 2,
            ycenter,
            xcenter,
            ycenter + height / 2
        );
        this.northwest = new QuadTree(nw, this.capacity);

        let se = new Extent(
            xcenter,
            ycenter - height / 2,
            xcenter + width / 2,
            ycenter
        );
        this.southeast = new QuadTree(se, this.capacity);
        
        let sw = new Extent(
            xcenter - width / 2,
            ycenter - height / 2,
            xcenter,
            ycenter
        );
        this.southwest = new QuadTree(sw, this.capacity);

        this.divided = true;

    }

    public insert() {}
    public insertLine() {}
}
