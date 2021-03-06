/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { MDCFoundation } from '@material/base/foundation';
import { MDCTooltipAdapter } from './adapter';
import { AnchorBoundaryType, XPosition, YPosition } from './constants';
export declare class MDCTooltipFoundation extends MDCFoundation<MDCTooltipAdapter> {
    static get defaultAdapter(): MDCTooltipAdapter;
    private isShown;
    private anchorGap;
    private xTooltipPos;
    private yTooltipPos;
    private readonly minViewportTooltipThreshold;
    private readonly hideDelayMs;
    private readonly showDelayMs;
    private frameId;
    private hideTimeout;
    private showTimeout;
    private readonly documentClickHandler;
    private readonly documentKeydownHandler;
    constructor(adapter?: Partial<MDCTooltipAdapter>);
    handleAnchorMouseEnter(): void;
    handleAnchorFocus(): void;
    handleAnchorMouseLeave(): void;
    handleAnchorBlur(): void;
    handleClick(): void;
    handleKeydown(evt: KeyboardEvent): void;
    show(): void;
    hide(): void;
    handleTransitionEnd(): void;
    private clearAllAnimationClasses;
    setTooltipPosition(position: {
        xPos?: XPosition;
        yPos?: YPosition;
    }): void;
    setAnchorBoundaryType(type: AnchorBoundaryType): void;
    private parseShowTooltipOptions;
    private isTooltipMultiline;
    /**
     * Calculates the position of the tooltip. A tooltip will be placed beneath
     * the anchor element and aligned either with the 'start'/'end' edge of the
     * anchor element or the 'center'.
     *
     * Tooltip alignment is selected such that the tooltip maintains a threshold
     * distance away from the viewport (defaulting to 'center' alignment). If the
     * placement of the anchor prevents this threshold distance from being
     * maintained, the tooltip is positioned so that it does not collide with the
     * viewport.
     *
     * Users can specify an alignment, however, if this alignment results in the
     * tooltip colliding with the viewport, this specification is overwritten.
     */
    private calculateTooltipDistance;
    /**
     * Calculates the `left` distance for the tooltip.
     */
    private calculateXTooltipDistance;
    /**
     * Given the values for center/start/end alignment of the tooltip, calculates
     * which of these options would result in the tooltip maintaining the required
     * threshold distance vs which would result in the tooltip staying within the
     * viewport.
     *
     * A Set of values is returned holding the distances that would honor the
     * above requirements. Following the logic for determining the tooltip
     * position, if all three alignments violate the threshold, then the returned
     * Set contains values that keep the tooltip within the viewport.
     */
    private determineValidPositionOptions;
    private positionHonorsViewportThreshold;
    private positionDoesntCollideWithViewport;
    /**
     * Calculates the `top` distance for the tooltip.
     */
    private calculateYTooltipDistance;
    /**
     * Given the values for above/below alignment of the tooltip, calculates
     * which of these options would result in the tooltip maintaining the required
     * threshold distance vs which would result in the tooltip staying within the
     * viewport.
     *
     * A Set of values is returned holding the distances that would honor the
     * above requirements. Following the logic for determining the tooltip
     * position, if all possible alignments violate the threshold, then the
     * returned Set contains values that keep the tooltip within the viewport.
     */
    private determineValidYPositionOptions;
    private yPositionHonorsViewportThreshold;
    private yPositionDoesntCollideWithViewport;
    private clearShowTimeout;
    private clearHideTimeout;
    destroy(): void;
}
export default MDCTooltipFoundation;
