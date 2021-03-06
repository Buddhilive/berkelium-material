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
import { __extends } from "tslib";
import { MDCComponent } from '@material/base/component';
import { events } from './constants';
import { MDCTooltipFoundation } from './foundation';
var MDCTooltip = /** @class */ (function (_super) {
    __extends(MDCTooltip, _super);
    function MDCTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTooltip.attachTo = function (root) {
        return new MDCTooltip(root);
    };
    MDCTooltip.prototype.initialSyncWithDOM = function () {
        var _this = this;
        var tooltipId = this.root.getAttribute('id');
        if (!tooltipId) {
            throw new Error('MDCTooltip: Tooltip component must have an id.');
        }
        this.anchorElem = document.querySelector("[aria-describedby=\"" + tooltipId + "\"]") ||
            document.querySelector("[data-tooltip-id=\"" + tooltipId + "\"]");
        if (!this.anchorElem) {
            throw new Error('MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id] anchor element.');
        }
        this.handleMouseEnter = function () {
            _this.foundation.handleAnchorMouseEnter();
        };
        this.handleFocus = function () {
            _this.foundation.handleAnchorFocus();
        };
        this.handleMouseLeave = function () {
            _this.foundation.handleAnchorMouseLeave();
        };
        this.handleBlur = function () {
            _this.foundation.handleAnchorBlur();
        };
        this.handleTransitionEnd = function () {
            _this.foundation.handleTransitionEnd();
        };
        this.anchorElem.addEventListener('mouseenter', this.handleMouseEnter);
        // TODO(b/157075286): Listening for a 'focus' event is too broad.
        this.anchorElem.addEventListener('focus', this.handleFocus);
        this.anchorElem.addEventListener('mouseleave', this.handleMouseLeave);
        this.anchorElem.addEventListener('blur', this.handleBlur);
        this.listen('transitionend', this.handleTransitionEnd);
    };
    MDCTooltip.prototype.destroy = function () {
        if (this.anchorElem) {
            this.anchorElem.removeEventListener('mouseenter', this.handleMouseEnter);
            this.anchorElem.removeEventListener('focus', this.handleFocus);
            this.anchorElem.removeEventListener('mouseleave', this.handleMouseLeave);
            this.anchorElem.removeEventListener('blur', this.handleBlur);
        }
        this.unlisten('transitionend', this.handleTransitionEnd);
        _super.prototype.destroy.call(this);
    };
    MDCTooltip.prototype.setTooltipPosition = function (position) {
        this.foundation.setTooltipPosition(position);
    };
    MDCTooltip.prototype.setAnchorBoundaryType = function (type) {
        this.foundation.setAnchorBoundaryType(type);
    };
    MDCTooltip.prototype.getDefaultFoundation = function () {
        var _this = this;
        var adapter = {
            getAttribute: function (attr) { return _this.root.getAttribute(attr); },
            setAttribute: function (attr, value) {
                _this.root.setAttribute(attr, value);
            },
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            setStyleProperty: function (propertyName, value) {
                _this.root.style.setProperty(propertyName, value);
            },
            getViewportWidth: function () { return window.innerWidth; },
            getViewportHeight: function () { return window.innerHeight; },
            getTooltipSize: function () {
                return {
                    width: _this.root.offsetWidth,
                    height: _this.root.offsetHeight
                };
            },
            getAnchorBoundingRect: function () {
                return _this.anchorElem ? _this.anchorElem.getBoundingClientRect() : null;
            },
            getAnchorAttribute: function (attr) {
                return _this.anchorElem ? _this.anchorElem.getAttribute(attr) : null;
            },
            isRTL: function () { return getComputedStyle(_this.root).direction === 'rtl'; },
            registerDocumentEventHandler: function (evt, handler) {
                document.body.addEventListener(evt, handler);
            },
            deregisterDocumentEventHandler: function (evt, handler) {
                document.body.removeEventListener(evt, handler);
            },
            notifyHidden: function () {
                _this.emit(events.HIDDEN, {});
            },
        };
        //tslint:enable:object-literal-sort-keys
        return new MDCTooltipFoundation(adapter);
    };
    return MDCTooltip;
}(MDCComponent));
export { MDCTooltip };
//# sourceMappingURL=component.js.map