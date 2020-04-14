import { Polyline, Point } from './Polyline';
import Victor from 'victor';
import { QuadTree } from './QuadTree';
import { Extent } from './Extent';
import { intersectionOfTwoLines, Line } from './utils/intersectionOfTwoLines';

const ext = new Extent(0, 0, 10, 10);
const qtree = new QuadTree(ext, 15);

const line = new Polyline(new Point(0, 4));
line.addPoint(new Point(5, 9));

/** ==================================== */
const A: Line = {
    start: new Point(3, 4),
    end: new Point(3, 5)
};

const B: Line = {
    start: new Point(1, 7),
    end: new Point(5, 3)
};

console.log('INTERSECTION', intersectionOfTwoLines(A, B))