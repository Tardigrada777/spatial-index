import { Point } from '../Polyline';


export interface Line {
    start: Point
    end: Point
}


/**
 * Check if lines has intersection.
 *
 * @param firstLine    First line to check.
 * @param secondLine   Second line to check.
 * 
 * { @link https://acmp.ru/article.asp?id_text=170 }
 */
export function intersectionOfTwoLines(a: Line,b: Line): boolean {

    const { x: ax1, y: ay1 } = a.start;
    const { x: ax2, y: ay2 } = a.end;

    const { x: bx1, y: by1 } = b.start;
    const { x: bx2, y: by2 } = b.end;
    
    const v1 = (bx2 - bx1) * (ay1 - by1) - (by2 - by1) * (ax1 - bx1);
    const v2 = (bx2 - bx1) * (ay2 - by1) - (by2 - by1) * (ax2 - bx1);
    const v3 = (ax2 - ax1) * (by1 - ay1) - (ay2 - ay1) * (bx1 - ax1);
    const v4 = (ax2 - ax1) * (by2 - ay1) - (ay2 - ay1) * (bx2 - ax1);
    return (v1 * v2 < 0) && (v3 * v4 < 0);
}