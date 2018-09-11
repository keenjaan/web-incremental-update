(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JsDiff"] = factory();
	else
		root["JsDiff"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.canonicalize = exports.convertChangesToXML = exports.convertChangesToDMP = exports.merge = exports.parsePatch = exports.applyPatches = exports.applyPatch = exports.createPatch = exports.createTwoFilesPatch = exports.structuredPatch = exports.diffArrays = exports.diffJson = exports.diffCss = exports.diffSentences = exports.diffTrimmedLines = exports.diffLines = exports.diffWordsWithSpace = exports.diffWords = exports.diffChars = exports.Diff = undefined;

	/*istanbul ignore end*/var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_character = __webpack_require__(2) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_word = __webpack_require__(3) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_sentence = __webpack_require__(6) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_css = __webpack_require__(7) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_json = __webpack_require__(8) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_array = __webpack_require__(9) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_apply = __webpack_require__(10) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_merge = __webpack_require__(13) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_create = __webpack_require__(14) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_dmp = __webpack_require__(16) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_xml = __webpack_require__(17) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/* See LICENSE file for terms of use */

	/*
	 * Text diff implementation.
	 *
	 * This library supports the following APIS:
	 * JsDiff.diffChars: Character by character diff
	 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
	 * JsDiff.diffLines: Line based diff
	 *
	 * JsDiff.diffCss: Diff targeted at CSS content
	 *
	 * These methods are based on the implementation proposed in
	 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
	 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
	 */
	exports. /*istanbul ignore end*/Diff = _base2['default'];
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffChars = _character.diffChars;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWords = _word.diffWords;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = _word.diffWordsWithSpace;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffLines = _line.diffLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = _line.diffTrimmedLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffSentences = _sentence.diffSentences;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffCss = _css.diffCss;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffJson = _json.diffJson;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffArrays = _array.diffArrays;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/structuredPatch = _create.structuredPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = _create.createTwoFilesPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = _create.createPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatch = _apply.applyPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = _apply.applyPatches;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/parsePatch = _parse.parsePatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/merge = _merge.merge;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToDMP = _dmp.convertChangesToDMP;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToXML = _xml.convertChangesToXML;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = _json.canonicalize;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEaWZmIiwiZGlmZkNoYXJzIiwiZGlmZldvcmRzIiwiZGlmZldvcmRzV2l0aFNwYWNlIiwiZGlmZkxpbmVzIiwiZGlmZlRyaW1tZWRMaW5lcyIsImRpZmZTZW50ZW5jZXMiLCJkaWZmQ3NzIiwiZGlmZkpzb24iLCJkaWZmQXJyYXlzIiwic3RydWN0dXJlZFBhdGNoIiwiY3JlYXRlVHdvRmlsZXNQYXRjaCIsImNyZWF0ZVBhdGNoIiwiYXBwbHlQYXRjaCIsImFwcGx5UGF0Y2hlcyIsInBhcnNlUGF0Y2giLCJtZXJnZSIsImNvbnZlcnRDaGFuZ2VzVG9ETVAiLCJjb252ZXJ0Q2hhbmdlc1RvWE1MIiwiY2Fub25pY2FsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3VCQWdCQTs7Ozt1QkFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQWpDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Z0NBa0NFQSxJO3lEQUVBQyxTO3lEQUNBQyxTO3lEQUNBQyxrQjt5REFDQUMsUzt5REFDQUMsZ0I7eURBQ0FDLGE7eURBRUFDLE87eURBQ0FDLFE7eURBRUFDLFU7eURBRUFDLGU7eURBQ0FDLG1CO3lEQUNBQyxXO3lEQUNBQyxVO3lEQUNBQyxZO3lEQUNBQyxVO3lEQUNBQyxLO3lEQUNBQyxtQjt5REFDQUMsbUI7eURBQ0FDLFkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZWUgTElDRU5TRSBmaWxlIGZvciB0ZXJtcyBvZiB1c2UgKi9cclxuXHJcbi8qXHJcbiAqIFRleHQgZGlmZiBpbXBsZW1lbnRhdGlvbi5cclxuICpcclxuICogVGhpcyBsaWJyYXJ5IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgQVBJUzpcclxuICogSnNEaWZmLmRpZmZDaGFyczogQ2hhcmFjdGVyIGJ5IGNoYXJhY3RlciBkaWZmXHJcbiAqIEpzRGlmZi5kaWZmV29yZHM6IFdvcmQgKGFzIGRlZmluZWQgYnkgXFxiIHJlZ2V4KSBkaWZmIHdoaWNoIGlnbm9yZXMgd2hpdGVzcGFjZVxyXG4gKiBKc0RpZmYuZGlmZkxpbmVzOiBMaW5lIGJhc2VkIGRpZmZcclxuICpcclxuICogSnNEaWZmLmRpZmZDc3M6IERpZmYgdGFyZ2V0ZWQgYXQgQ1NTIGNvbnRlbnRcclxuICpcclxuICogVGhlc2UgbWV0aG9kcyBhcmUgYmFzZWQgb24gdGhlIGltcGxlbWVudGF0aW9uIHByb3Bvc2VkIGluXHJcbiAqIFwiQW4gTyhORCkgRGlmZmVyZW5jZSBBbGdvcml0aG0gYW5kIGl0cyBWYXJpYXRpb25zXCIgKE15ZXJzLCAxOTg2KS5cclxuICogaHR0cDovL2NpdGVzZWVyeC5pc3QucHN1LmVkdS92aWV3ZG9jL3N1bW1hcnk/ZG9pPTEwLjEuMS40LjY5MjdcclxuICovXHJcbmltcG9ydCBEaWZmIGZyb20gJy4vZGlmZi9iYXNlJztcclxuaW1wb3J0IHtkaWZmQ2hhcnN9IGZyb20gJy4vZGlmZi9jaGFyYWN0ZXInO1xyXG5pbXBvcnQge2RpZmZXb3JkcywgZGlmZldvcmRzV2l0aFNwYWNlfSBmcm9tICcuL2RpZmYvd29yZCc7XHJcbmltcG9ydCB7ZGlmZkxpbmVzLCBkaWZmVHJpbW1lZExpbmVzfSBmcm9tICcuL2RpZmYvbGluZSc7XHJcbmltcG9ydCB7ZGlmZlNlbnRlbmNlc30gZnJvbSAnLi9kaWZmL3NlbnRlbmNlJztcclxuXHJcbmltcG9ydCB7ZGlmZkNzc30gZnJvbSAnLi9kaWZmL2Nzcyc7XHJcbmltcG9ydCB7ZGlmZkpzb24sIGNhbm9uaWNhbGl6ZX0gZnJvbSAnLi9kaWZmL2pzb24nO1xyXG5cclxuaW1wb3J0IHtkaWZmQXJyYXlzfSBmcm9tICcuL2RpZmYvYXJyYXknO1xyXG5cclxuaW1wb3J0IHthcHBseVBhdGNoLCBhcHBseVBhdGNoZXN9IGZyb20gJy4vcGF0Y2gvYXBwbHknO1xyXG5pbXBvcnQge3BhcnNlUGF0Y2h9IGZyb20gJy4vcGF0Y2gvcGFyc2UnO1xyXG5pbXBvcnQge21lcmdlfSBmcm9tICcuL3BhdGNoL21lcmdlJztcclxuaW1wb3J0IHtzdHJ1Y3R1cmVkUGF0Y2gsIGNyZWF0ZVR3b0ZpbGVzUGF0Y2gsIGNyZWF0ZVBhdGNofSBmcm9tICcuL3BhdGNoL2NyZWF0ZSc7XHJcblxyXG5pbXBvcnQge2NvbnZlcnRDaGFuZ2VzVG9ETVB9IGZyb20gJy4vY29udmVydC9kbXAnO1xyXG5pbXBvcnQge2NvbnZlcnRDaGFuZ2VzVG9YTUx9IGZyb20gJy4vY29udmVydC94bWwnO1xyXG5cclxuZXhwb3J0IHtcclxuICBEaWZmLFxyXG5cclxuICBkaWZmQ2hhcnMsXHJcbiAgZGlmZldvcmRzLFxyXG4gIGRpZmZXb3Jkc1dpdGhTcGFjZSxcclxuICBkaWZmTGluZXMsXHJcbiAgZGlmZlRyaW1tZWRMaW5lcyxcclxuICBkaWZmU2VudGVuY2VzLFxyXG5cclxuICBkaWZmQ3NzLFxyXG4gIGRpZmZKc29uLFxyXG5cclxuICBkaWZmQXJyYXlzLFxyXG5cclxuICBzdHJ1Y3R1cmVkUGF0Y2gsXHJcbiAgY3JlYXRlVHdvRmlsZXNQYXRjaCxcclxuICBjcmVhdGVQYXRjaCxcclxuICBhcHBseVBhdGNoLFxyXG4gIGFwcGx5UGF0Y2hlcyxcclxuICBwYXJzZVBhdGNoLFxyXG4gIG1lcmdlLFxyXG4gIGNvbnZlcnRDaGFuZ2VzVG9ETVAsXHJcbiAgY29udmVydENoYW5nZXNUb1hNTCxcclxuICBjYW5vbmljYWxpemVcclxufTtcclxuIl19


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = /*istanbul ignore end*/Diff;
	function Diff() {}

	Diff.prototype = {
	  /*istanbul ignore start*/ /*istanbul ignore end*/diff: function diff(oldString, newString) {
	    /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var callback = options.callback;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    this.options = options;

	    var self = this;

	    function done(value) {
	      if (callback) {
	        setTimeout(function () {
	          callback(undefined, value);
	        }, 0);
	        return true;
	      } else {
	        return value;
	      }
	    }

	    // Allow subclasses to massage the input prior to running
	    oldString = this.castInput(oldString);
	    newString = this.castInput(newString);

	    oldString = this.removeEmpty(this.tokenize(oldString));
	    newString = this.removeEmpty(this.tokenize(newString));

	    var newLen = newString.length,
	        oldLen = oldString.length;
	    var editLength = 1;
	    var maxEditLength = newLen + oldLen;
	    var bestPath = [{ newPos: -1, components: [] }];

	    // Seed editLength = 0, i.e. the content starts with the same values
	    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
	    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
	      // Identity per the equality and tokenizer
	      return done([{ value: this.join(newString), count: newString.length }]);
	    }

	    // Main worker method. checks all permutations of a given edit length for acceptance.
	    function execEditLength() {
	      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
	        var basePath = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	        var addPath = bestPath[diagonalPath - 1],
	            removePath = bestPath[diagonalPath + 1],
	            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
	        if (addPath) {
	          // No one else is going to attempt to use this value, clear it
	          bestPath[diagonalPath - 1] = undefined;
	        }

	        var canAdd = addPath && addPath.newPos + 1 < newLen,
	            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
	        if (!canAdd && !canRemove) {
	          // If this path is a terminal then prune
	          bestPath[diagonalPath] = undefined;
	          continue;
	        }

	        // Select the diagonal that we want to branch from. We select the prior
	        // path whose position in the new string is the farthest from the origin
	        // and does not pass the bounds of the diff graph
	        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
	          basePath = clonePath(removePath);
	          self.pushComponent(basePath.components, undefined, true);
	        } else {
	          basePath = addPath; // No need to clone, we've pulled it from the list
	          basePath.newPos++;
	          self.pushComponent(basePath.components, true, undefined);
	        }

	        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

	        // If we have hit the end of both strings, then we are done
	        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
	          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
	        } else {
	          // Otherwise track this path as a potential candidate and continue.
	          bestPath[diagonalPath] = basePath;
	        }
	      }

	      editLength++;
	    }

	    // Performs the length of edit iteration. Is a bit fugly as this has to support the
	    // sync and async mode which is never fun. Loops over execEditLength until a value
	    // is produced.
	    if (callback) {
	      (function exec() {
	        setTimeout(function () {
	          // This should not happen, but we want to be safe.
	          /* istanbul ignore next */
	          if (editLength > maxEditLength) {
	            return callback();
	          }

	          if (!execEditLength()) {
	            exec();
	          }
	        }, 0);
	      })();
	    } else {
	      while (editLength <= maxEditLength) {
	        var ret = execEditLength();
	        if (ret) {
	          return ret;
	        }
	      }
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/pushComponent: function pushComponent(components, added, removed) {
	    var last = components[components.length - 1];
	    if (last && last.added === added && last.removed === removed) {
	      // We need to clone here as the component clone operation is just
	      // as shallow array clone
	      components[components.length - 1] = { count: last.count + 1, added: added, removed: removed };
	    } else {
	      components.push({ count: 1, added: added, removed: removed });
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
	    var newLen = newString.length,
	        oldLen = oldString.length,
	        newPos = basePath.newPos,
	        oldPos = newPos - diagonalPath,
	        commonCount = 0;
	    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
	      newPos++;
	      oldPos++;
	      commonCount++;
	    }

	    if (commonCount) {
	      basePath.components.push({ count: commonCount });
	    }

	    basePath.newPos = newPos;
	    return oldPos;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/equals: function equals(left, right) {
	    if (this.options.comparator) {
	      return this.options.comparator(left, right);
	    } else {
	      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/removeEmpty: function removeEmpty(array) {
	    var ret = [];
	    for (var i = 0; i < array.length; i++) {
	      if (array[i]) {
	        ret.push(array[i]);
	      }
	    }
	    return ret;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/castInput: function castInput(value) {
	    return value;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/tokenize: function tokenize(value) {
	    return value.split('');
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/join: function join(chars) {
	    return chars.join('');
	  }
	};

	function buildValues(diff, components, newString, oldString, useLongestToken) {
	  var componentPos = 0,
	      componentLen = components.length,
	      newPos = 0,
	      oldPos = 0;

	  for (; componentPos < componentLen; componentPos++) {
	    var component = components[componentPos];
	    if (!component.removed) {
	      if (!component.added && useLongestToken) {
	        var value = newString.slice(newPos, newPos + component.count);
	        value = value.map(function (value, i) {
	          var oldValue = oldString[oldPos + i];
	          return oldValue.length > value.length ? oldValue : value;
	        });

	        component.value = diff.join(value);
	      } else {
	        component.value = diff.join(newString.slice(newPos, newPos + component.count));
	      }
	      newPos += component.count;

	      // Common case
	      if (!component.added) {
	        oldPos += component.count;
	      }
	    } else {
	      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
	      oldPos += component.count;

	      // Reverse add and remove so removes are output first to match common convention
	      // The diffing algorithm is tied to add then remove output and this is the simplest
	      // route to get the desired output with minimal overhead.
	      if (componentPos && components[componentPos - 1].added) {
	        var tmp = components[componentPos - 1];
	        components[componentPos - 1] = components[componentPos];
	        components[componentPos] = tmp;
	      }
	    }
	  }

	  // Special case handle for when one terminal is ignored (i.e. whitespace).
	  // For this case we merge the terminal into the prior string and drop the change.
	  // This is only available for string mode.
	  var lastComponent = components[componentLen - 1];
	  if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
	    components[componentLen - 2].value += lastComponent.value;
	    components.pop();
	  }

	  return components;
	}

	function clonePath(path) {
	  return { newPos: path.newPos, components: path.components.slice(0) };
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Jhc2UuanMiXSwibmFtZXMiOlsiRGlmZiIsInByb3RvdHlwZSIsImRpZmYiLCJvbGRTdHJpbmciLCJuZXdTdHJpbmciLCJvcHRpb25zIiwiY2FsbGJhY2siLCJzZWxmIiwiZG9uZSIsInZhbHVlIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImNhc3RJbnB1dCIsInJlbW92ZUVtcHR5IiwidG9rZW5pemUiLCJuZXdMZW4iLCJsZW5ndGgiLCJvbGRMZW4iLCJlZGl0TGVuZ3RoIiwibWF4RWRpdExlbmd0aCIsImJlc3RQYXRoIiwibmV3UG9zIiwiY29tcG9uZW50cyIsIm9sZFBvcyIsImV4dHJhY3RDb21tb24iLCJqb2luIiwiY291bnQiLCJleGVjRWRpdExlbmd0aCIsImRpYWdvbmFsUGF0aCIsImJhc2VQYXRoIiwiYWRkUGF0aCIsInJlbW92ZVBhdGgiLCJjYW5BZGQiLCJjYW5SZW1vdmUiLCJjbG9uZVBhdGgiLCJwdXNoQ29tcG9uZW50IiwiYnVpbGRWYWx1ZXMiLCJ1c2VMb25nZXN0VG9rZW4iLCJleGVjIiwicmV0IiwiYWRkZWQiLCJyZW1vdmVkIiwibGFzdCIsInB1c2giLCJjb21tb25Db3VudCIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsImNvbXBhcmF0b3IiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJhcnJheSIsImkiLCJzcGxpdCIsImNoYXJzIiwiY29tcG9uZW50UG9zIiwiY29tcG9uZW50TGVuIiwiY29tcG9uZW50Iiwic2xpY2UiLCJtYXAiLCJvbGRWYWx1ZSIsInRtcCIsImxhc3RDb21wb25lbnQiLCJwb3AiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs0Q0FBd0JBLEk7QUFBVCxTQUFTQSxJQUFULEdBQWdCLENBQUU7O0FBRWpDQSxLQUFLQyxTQUFMLEdBQWlCO0FBQUEsbURBQ2ZDLElBRGUsZ0JBQ1ZDLFNBRFUsRUFDQ0MsU0FERCxFQUMwQjtBQUFBLHdEQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FB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QixFQUF3QkEsU0FBU2tDLFVBQVUvQixLQUEzQyxDQUFWLENBQWxCO0FBQ0FILGdCQUFVa0MsVUFBVS9CLEtBQXBCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQUk2QixnQkFBZ0JqQyxXQUFXaUMsZUFBZSxDQUExQixFQUE2QmYsS0FBakQsRUFBd0Q7QUFDdEQsWUFBSXFCLE1BQU12QyxXQUFXaUMsZUFBZSxDQUExQixDQUFWO0FBQ0FqQyxtQkFBV2lDLGVBQWUsQ0FBMUIsSUFBK0JqQyxXQUFXaUMsWUFBWCxDQUEvQjtBQUNBakMsbUJBQVdpQyxZQUFYLElBQTJCTSxHQUEzQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxNQUFJQyxnQkFBZ0J4QyxXQUFXa0MsZUFBZSxDQUExQixDQUFwQjtBQUNBLE1BQUlBLGVBQWUsQ0FBZixJQUNHLE9BQU9NLGNBQWNyRCxLQUFyQixLQUErQixRQURsQyxLQUVJcUQsY0FBY3RCLEtBQWQsSUFBdUJzQixjQUFjckIsT0FGekMsS0FHR3ZDLEtBQUsyQyxNQUFMLENBQVksRUFBWixFQUFnQmlCLGNBQWNyRCxLQUE5QixDQUhQLEVBRzZDO0FBQzNDYSxlQUFXa0MsZUFBZSxDQUExQixFQUE2Qi9DLEtBQTdCLElBQXNDcUQsY0FBY3JELEtBQXBEO0FBQ0FhLGVBQVd5QyxHQUFYO0FBQ0Q7O0FBRUQsU0FBT3pDLFVBQVA7QUFDRDs7QUFFRCxTQUFTWSxTQUFULENBQW1COEIsSUFBbkIsRUFBeUI7QUFDdkIsU0FBTyxFQUFFM0MsUUFBUTJDLEtBQUszQyxNQUFmLEVBQXVCQyxZQUFZMEMsS0FBSzFDLFVBQUwsQ0FBZ0JvQyxLQUFoQixDQUFzQixDQUF0QixDQUFuQyxFQUFQO0FBQ0QiLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpZmYoKSB7fVxyXG5cclxuRGlmZi5wcm90b3R5cGUgPSB7XHJcbiAgZGlmZihvbGRTdHJpbmcsIG5ld1N0cmluZywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrO1xyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcclxuICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgZnVuY3Rpb24gZG9uZSh2YWx1ZSkge1xyXG4gICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayh1bmRlZmluZWQsIHZhbHVlKTsgfSwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWxsb3cgc3ViY2xhc3NlcyB0byBtYXNzYWdlIHRoZSBpbnB1dCBwcmlvciB0byBydW5uaW5nXHJcbiAgICBvbGRTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChvbGRTdHJpbmcpO1xyXG4gICAgbmV3U3RyaW5nID0gdGhpcy5jYXN0SW5wdXQobmV3U3RyaW5nKTtcclxuXHJcbiAgICBvbGRTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUob2xkU3RyaW5nKSk7XHJcbiAgICBuZXdTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUobmV3U3RyaW5nKSk7XHJcblxyXG4gICAgbGV0IG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGg7XHJcbiAgICBsZXQgZWRpdExlbmd0aCA9IDE7XHJcbiAgICBsZXQgbWF4RWRpdExlbmd0aCA9IG5ld0xlbiArIG9sZExlbjtcclxuICAgIGxldCBiZXN0UGF0aCA9IFt7IG5ld1BvczogLTEsIGNvbXBvbmVudHM6IFtdIH1dO1xyXG5cclxuICAgIC8vIFNlZWQgZWRpdExlbmd0aCA9IDAsIGkuZS4gdGhlIGNvbnRlbnQgc3RhcnRzIHdpdGggdGhlIHNhbWUgdmFsdWVzXHJcbiAgICBsZXQgb2xkUG9zID0gdGhpcy5leHRyYWN0Q29tbW9uKGJlc3RQYXRoWzBdLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgMCk7XHJcbiAgICBpZiAoYmVzdFBhdGhbMF0ubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgb2xkUG9zICsgMSA+PSBvbGRMZW4pIHtcclxuICAgICAgLy8gSWRlbnRpdHkgcGVyIHRoZSBlcXVhbGl0eSBhbmQgdG9rZW5pemVyXHJcbiAgICAgIHJldHVybiBkb25lKFt7dmFsdWU6IHRoaXMuam9pbihuZXdTdHJpbmcpLCBjb3VudDogbmV3U3RyaW5nLmxlbmd0aH1dKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIHdvcmtlciBtZXRob2QuIGNoZWNrcyBhbGwgcGVybXV0YXRpb25zIG9mIGEgZ2l2ZW4gZWRpdCBsZW5ndGggZm9yIGFjY2VwdGFuY2UuXHJcbiAgICBmdW5jdGlvbiBleGVjRWRpdExlbmd0aCgpIHtcclxuICAgICAgZm9yIChsZXQgZGlhZ29uYWxQYXRoID0gLTEgKiBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggPD0gZWRpdExlbmd0aDsgZGlhZ29uYWxQYXRoICs9IDIpIHtcclxuICAgICAgICBsZXQgYmFzZVBhdGg7XHJcbiAgICAgICAgbGV0IGFkZFBhdGggPSBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSxcclxuICAgICAgICAgICAgcmVtb3ZlUGF0aCA9IGJlc3RQYXRoW2RpYWdvbmFsUGF0aCArIDFdLFxyXG4gICAgICAgICAgICBvbGRQb3MgPSAocmVtb3ZlUGF0aCA/IHJlbW92ZVBhdGgubmV3UG9zIDogMCkgLSBkaWFnb25hbFBhdGg7XHJcbiAgICAgICAgaWYgKGFkZFBhdGgpIHtcclxuICAgICAgICAgIC8vIE5vIG9uZSBlbHNlIGlzIGdvaW5nIHRvIGF0dGVtcHQgdG8gdXNlIHRoaXMgdmFsdWUsIGNsZWFyIGl0XHJcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjYW5BZGQgPSBhZGRQYXRoICYmIGFkZFBhdGgubmV3UG9zICsgMSA8IG5ld0xlbixcclxuICAgICAgICAgICAgY2FuUmVtb3ZlID0gcmVtb3ZlUGF0aCAmJiAwIDw9IG9sZFBvcyAmJiBvbGRQb3MgPCBvbGRMZW47XHJcbiAgICAgICAgaWYgKCFjYW5BZGQgJiYgIWNhblJlbW92ZSkge1xyXG4gICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxyXG4gICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2VsZWN0IHRoZSBkaWFnb25hbCB0aGF0IHdlIHdhbnQgdG8gYnJhbmNoIGZyb20uIFdlIHNlbGVjdCB0aGUgcHJpb3JcclxuICAgICAgICAvLyBwYXRoIHdob3NlIHBvc2l0aW9uIGluIHRoZSBuZXcgc3RyaW5nIGlzIHRoZSBmYXJ0aGVzdCBmcm9tIHRoZSBvcmlnaW5cclxuICAgICAgICAvLyBhbmQgZG9lcyBub3QgcGFzcyB0aGUgYm91bmRzIG9mIHRoZSBkaWZmIGdyYXBoXHJcbiAgICAgICAgaWYgKCFjYW5BZGQgfHwgKGNhblJlbW92ZSAmJiBhZGRQYXRoLm5ld1BvcyA8IHJlbW92ZVBhdGgubmV3UG9zKSkge1xyXG4gICAgICAgICAgYmFzZVBhdGggPSBjbG9uZVBhdGgocmVtb3ZlUGF0aCk7XHJcbiAgICAgICAgICBzZWxmLnB1c2hDb21wb25lbnQoYmFzZVBhdGguY29tcG9uZW50cywgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYmFzZVBhdGggPSBhZGRQYXRoOyAgIC8vIE5vIG5lZWQgdG8gY2xvbmUsIHdlJ3ZlIHB1bGxlZCBpdCBmcm9tIHRoZSBsaXN0XHJcbiAgICAgICAgICBiYXNlUGF0aC5uZXdQb3MrKztcclxuICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB0cnVlLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2xkUG9zID0gc2VsZi5leHRyYWN0Q29tbW9uKGJhc2VQYXRoLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgZGlhZ29uYWxQYXRoKTtcclxuXHJcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBoaXQgdGhlIGVuZCBvZiBib3RoIHN0cmluZ3MsIHRoZW4gd2UgYXJlIGRvbmVcclxuICAgICAgICBpZiAoYmFzZVBhdGgubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgb2xkUG9zICsgMSA+PSBvbGRMZW4pIHtcclxuICAgICAgICAgIHJldHVybiBkb25lKGJ1aWxkVmFsdWVzKHNlbGYsIGJhc2VQYXRoLmNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBzZWxmLnVzZUxvbmdlc3RUb2tlbikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBPdGhlcndpc2UgdHJhY2sgdGhpcyBwYXRoIGFzIGEgcG90ZW50aWFsIGNhbmRpZGF0ZSBhbmQgY29udGludWUuXHJcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gYmFzZVBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBlZGl0TGVuZ3RoKys7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGVyZm9ybXMgdGhlIGxlbmd0aCBvZiBlZGl0IGl0ZXJhdGlvbi4gSXMgYSBiaXQgZnVnbHkgYXMgdGhpcyBoYXMgdG8gc3VwcG9ydCB0aGVcclxuICAgIC8vIHN5bmMgYW5kIGFzeW5jIG1vZGUgd2hpY2ggaXMgbmV2ZXIgZnVuLiBMb29wcyBvdmVyIGV4ZWNFZGl0TGVuZ3RoIHVudGlsIGEgdmFsdWVcclxuICAgIC8vIGlzIHByb2R1Y2VkLlxyXG4gICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgIChmdW5jdGlvbiBleGVjKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgd2Ugd2FudCB0byBiZSBzYWZlLlxyXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoIWV4ZWNFZGl0TGVuZ3RoKCkpIHtcclxuICAgICAgICAgICAgZXhlYygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICB9KCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2hpbGUgKGVkaXRMZW5ndGggPD0gbWF4RWRpdExlbmd0aCkge1xyXG4gICAgICAgIGxldCByZXQgPSBleGVjRWRpdExlbmd0aCgpO1xyXG4gICAgICAgIGlmIChyZXQpIHtcclxuICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcHVzaENvbXBvbmVudChjb21wb25lbnRzLCBhZGRlZCwgcmVtb3ZlZCkge1xyXG4gICAgbGV0IGxhc3QgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XHJcbiAgICBpZiAobGFzdCAmJiBsYXN0LmFkZGVkID09PSBhZGRlZCAmJiBsYXN0LnJlbW92ZWQgPT09IHJlbW92ZWQpIHtcclxuICAgICAgLy8gV2UgbmVlZCB0byBjbG9uZSBoZXJlIGFzIHRoZSBjb21wb25lbnQgY2xvbmUgb3BlcmF0aW9uIGlzIGp1c3RcclxuICAgICAgLy8gYXMgc2hhbGxvdyBhcnJheSBjbG9uZVxyXG4gICAgICBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV0gPSB7Y291bnQ6IGxhc3QuY291bnQgKyAxLCBhZGRlZDogYWRkZWQsIHJlbW92ZWQ6IHJlbW92ZWQgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbXBvbmVudHMucHVzaCh7Y291bnQ6IDEsIGFkZGVkOiBhZGRlZCwgcmVtb3ZlZDogcmVtb3ZlZCB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpIHtcclxuICAgIGxldCBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxyXG4gICAgICAgIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGgsXHJcbiAgICAgICAgbmV3UG9zID0gYmFzZVBhdGgubmV3UG9zLFxyXG4gICAgICAgIG9sZFBvcyA9IG5ld1BvcyAtIGRpYWdvbmFsUGF0aCxcclxuXHJcbiAgICAgICAgY29tbW9uQ291bnQgPSAwO1xyXG4gICAgd2hpbGUgKG5ld1BvcyArIDEgPCBuZXdMZW4gJiYgb2xkUG9zICsgMSA8IG9sZExlbiAmJiB0aGlzLmVxdWFscyhuZXdTdHJpbmdbbmV3UG9zICsgMV0sIG9sZFN0cmluZ1tvbGRQb3MgKyAxXSkpIHtcclxuICAgICAgbmV3UG9zKys7XHJcbiAgICAgIG9sZFBvcysrO1xyXG4gICAgICBjb21tb25Db3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb21tb25Db3VudCkge1xyXG4gICAgICBiYXNlUGF0aC5jb21wb25lbnRzLnB1c2goe2NvdW50OiBjb21tb25Db3VudH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJhc2VQYXRoLm5ld1BvcyA9IG5ld1BvcztcclxuICAgIHJldHVybiBvbGRQb3M7XHJcbiAgfSxcclxuXHJcbiAgZXF1YWxzKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhcmF0b3IpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb21wYXJhdG9yKGxlZnQsIHJpZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodFxyXG4gICAgICAgIHx8ICh0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSAmJiBsZWZ0LnRvTG93ZXJDYXNlKCkgPT09IHJpZ2h0LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlRW1wdHkoYXJyYXkpIHtcclxuICAgIGxldCByZXQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGFycmF5W2ldKSB7XHJcbiAgICAgICAgcmV0LnB1c2goYXJyYXlbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH0sXHJcbiAgY2FzdElucHV0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfSxcclxuICB0b2tlbml6ZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLnNwbGl0KCcnKTtcclxuICB9LFxyXG4gIGpvaW4oY2hhcnMpIHtcclxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBidWlsZFZhbHVlcyhkaWZmLCBjb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgdXNlTG9uZ2VzdFRva2VuKSB7XHJcbiAgbGV0IGNvbXBvbmVudFBvcyA9IDAsXHJcbiAgICAgIGNvbXBvbmVudExlbiA9IGNvbXBvbmVudHMubGVuZ3RoLFxyXG4gICAgICBuZXdQb3MgPSAwLFxyXG4gICAgICBvbGRQb3MgPSAwO1xyXG5cclxuICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcclxuICAgIGlmICghY29tcG9uZW50LnJlbW92ZWQpIHtcclxuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQgJiYgdXNlTG9uZ2VzdFRva2VuKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KTtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbih2YWx1ZSwgaSkge1xyXG4gICAgICAgICAgbGV0IG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xyXG4gICAgICAgICAgcmV0dXJuIG9sZFZhbHVlLmxlbmd0aCA+IHZhbHVlLmxlbmd0aCA/IG9sZFZhbHVlIDogdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbih2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1BvcyArPSBjb21wb25lbnQuY291bnQ7XHJcblxyXG4gICAgICAvLyBDb21tb24gY2FzZVxyXG4gICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCkge1xyXG4gICAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihvbGRTdHJpbmcuc2xpY2Uob2xkUG9zLCBvbGRQb3MgKyBjb21wb25lbnQuY291bnQpKTtcclxuICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcclxuXHJcbiAgICAgIC8vIFJldmVyc2UgYWRkIGFuZCByZW1vdmUgc28gcmVtb3ZlcyBhcmUgb3V0cHV0IGZpcnN0IHRvIG1hdGNoIGNvbW1vbiBjb252ZW50aW9uXHJcbiAgICAgIC8vIFRoZSBkaWZmaW5nIGFsZ29yaXRobSBpcyB0aWVkIHRvIGFkZCB0aGVuIHJlbW92ZSBvdXRwdXQgYW5kIHRoaXMgaXMgdGhlIHNpbXBsZXN0XHJcbiAgICAgIC8vIHJvdXRlIHRvIGdldCB0aGUgZGVzaXJlZCBvdXRwdXQgd2l0aCBtaW5pbWFsIG92ZXJoZWFkLlxyXG4gICAgICBpZiAoY29tcG9uZW50UG9zICYmIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0uYWRkZWQpIHtcclxuICAgICAgICBsZXQgdG1wID0gY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXTtcclxuICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdID0gY29tcG9uZW50c1tjb21wb25lbnRQb3NdO1xyXG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zXSA9IHRtcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU3BlY2lhbCBjYXNlIGhhbmRsZSBmb3Igd2hlbiBvbmUgdGVybWluYWwgaXMgaWdub3JlZCAoaS5lLiB3aGl0ZXNwYWNlKS5cclxuICAvLyBGb3IgdGhpcyBjYXNlIHdlIG1lcmdlIHRoZSB0ZXJtaW5hbCBpbnRvIHRoZSBwcmlvciBzdHJpbmcgYW5kIGRyb3AgdGhlIGNoYW5nZS5cclxuICAvLyBUaGlzIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBzdHJpbmcgbW9kZS5cclxuICBsZXQgbGFzdENvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50TGVuIC0gMV07XHJcbiAgaWYgKGNvbXBvbmVudExlbiA+IDFcclxuICAgICAgJiYgdHlwZW9mIGxhc3RDb21wb25lbnQudmFsdWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICYmIChsYXN0Q29tcG9uZW50LmFkZGVkIHx8IGxhc3RDb21wb25lbnQucmVtb3ZlZClcclxuICAgICAgJiYgZGlmZi5lcXVhbHMoJycsIGxhc3RDb21wb25lbnQudmFsdWUpKSB7XHJcbiAgICBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDJdLnZhbHVlICs9IGxhc3RDb21wb25lbnQudmFsdWU7XHJcbiAgICBjb21wb25lbnRzLnBvcCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb25lUGF0aChwYXRoKSB7XHJcbiAgcmV0dXJuIHsgbmV3UG9zOiBwYXRoLm5ld1BvcywgY29tcG9uZW50czogcGF0aC5jb21wb25lbnRzLnNsaWNlKDApIH07XHJcbn1cclxuIl19


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.characterDiff = undefined;
	exports. /*istanbul ignore end*/diffChars = diffChars;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var characterDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/characterDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	function diffChars(oldStr, newStr, options) {
	  return characterDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2NoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJkaWZmQ2hhcnMiLCJjaGFyYWN0ZXJEaWZmIiwib2xkU3RyIiwibmV3U3RyIiwib3B0aW9ucyIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7OztnQ0FHZ0JBLFMsR0FBQUEsUzs7QUFIaEI7Ozs7Ozt1QkFFTyxJQUFNQyx5RkFBZ0Isd0VBQXRCO0FBQ0EsU0FBU0QsU0FBVCxDQUFtQkUsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUFFLFNBQU9ILGNBQWNJLElBQWQsQ0FBbUJILE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ0MsT0FBbkMsQ0FBUDtBQUFxRCIsImZpbGUiOiJjaGFyYWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlmZiBmcm9tICcuL2Jhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYXJhY3RlckRpZmYgPSBuZXcgRGlmZigpO1xyXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoYXJzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7IHJldHVybiBjaGFyYWN0ZXJEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpOyB9XHJcbiJdfQ==


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wordDiff = undefined;
	exports. /*istanbul ignore end*/diffWords = diffWords;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = diffWordsWithSpace;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_params = __webpack_require__(4) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/ // Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
	//
	// Ranges and exceptions:
	// Latin-1 Supplement, 0080–00FF
	//  - U+00D7  × Multiplication sign
	//  - U+00F7  ÷ Division sign
	// Latin Extended-A, 0100–017F
	// Latin Extended-B, 0180–024F
	// IPA Extensions, 0250–02AF
	// Spacing Modifier Letters, 02B0–02FF
	//  - U+02C7  ˇ &#711;  Caron
	//  - U+02D8  ˘ &#728;  Breve
	//  - U+02D9  ˙ &#729;  Dot Above
	//  - U+02DA  ˚ &#730;  Ring Above
	//  - U+02DB  ˛ &#731;  Ogonek
	//  - U+02DC  ˜ &#732;  Small Tilde
	//  - U+02DD  ˝ &#733;  Double Acute Accent
	// Latin Extended Additional, 1E00–1EFF
	var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;

	var reWhitespace = /\S/;

	var wordDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/wordDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	wordDiff.equals = function (left, right) {
	  if (this.options.ignoreCase) {
	    left = left.toLowerCase();
	    right = right.toLowerCase();
	  }
	  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
	};
	wordDiff.tokenize = function (value) {
	  var tokens = value.split(/(\s+|\b)/);

	  // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.
	  for (var i = 0; i < tokens.length - 1; i++) {
	    // If we have an empty string in the next field and we have only word chars before and after, merge
	    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
	      tokens[i] += tokens[i + 2];
	      tokens.splice(i + 1, 2);
	      i--;
	    }
	  }

	  return tokens;
	};

	function diffWords(oldStr, newStr, options) {
	  options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(options, { ignoreWhitespace: true });
	  return wordDiff.diff(oldStr, newStr, options);
	}

	function diffWordsWithSpace(oldStr, newStr, options) {
	  return wordDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3dvcmQuanMiXSwibmFtZXMiOlsiZGlmZldvcmRzIiwiZGlmZldvcmRzV2l0aFNwYWNlIiwiZXh0ZW5kZWRXb3JkQ2hhcnMiLCJyZVdoaXRlc3BhY2UiLCJ3b3JkRGlmZiIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsIm9wdGlvbnMiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJpZ25vcmVXaGl0ZXNwYWNlIiwidGVzdCIsInRva2VuaXplIiwidmFsdWUiLCJ0b2tlbnMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJvbGRTdHIiLCJuZXdTdHIiLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Z0NBbURnQkEsUyxHQUFBQSxTO3lEQUtBQyxrQixHQUFBQSxrQjs7QUF4RGhCOzs7O3VCQUNBOzs7O3dCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLG9CQUFvQiwrREFBMUI7O0FBRUEsSUFBTUMsZUFBZSxJQUFyQjs7QUFFTyxJQUFNQywrRUFBVyx3RUFBakI7QUFDUEEsU0FBU0MsTUFBVCxHQUFrQixVQUFTQyxJQUFULEVBQWVDLEtBQWYsRUFBc0I7QUFDdEMsTUFBSSxLQUFLQyxPQUFMLENBQWFDLFVBQWpCLEVBQTZCO0FBQzNCSCxXQUFPQSxLQUFLSSxXQUFMLEVBQVA7QUFDQUgsWUFBUUEsTUFBTUcsV0FBTixFQUFSO0FBQ0Q7QUFDRCxTQUFPSixTQUFTQyxLQUFULElBQW1CLEtBQUtDLE9BQUwsQ0FBYUcsZ0JBQWIsSUFBaUMsQ0FBQ1IsYUFBYVMsSUFBYixDQUFrQk4sSUFBbEIsQ0FBbEMsSUFBNkQsQ0FBQ0gsYUFBYVMsSUFBYixDQUFrQkwsS0FBbEIsQ0FBeEY7QUFDRCxDQU5EO0FBT0FILFNBQVNTLFFBQVQsR0FBb0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNsQyxNQUFJQyxTQUFTRCxNQUFNRSxLQUFOLENBQVksVUFBWixDQUFiOztBQUVBO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE9BQU9HLE1BQVAsR0FBZ0IsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDO0FBQ0EsUUFBSSxDQUFDRixPQUFPRSxJQUFJLENBQVgsQ0FBRCxJQUFrQkYsT0FBT0UsSUFBSSxDQUFYLENBQWxCLElBQ0tmLGtCQUFrQlUsSUFBbEIsQ0FBdUJHLE9BQU9FLENBQVAsQ0FBdkIsQ0FETCxJQUVLZixrQkFBa0JVLElBQWxCLENBQXVCRyxPQUFPRSxJQUFJLENBQVgsQ0FBdkIsQ0FGVCxFQUVnRDtBQUM5Q0YsYUFBT0UsQ0FBUCxLQUFhRixPQUFPRSxJQUFJLENBQVgsQ0FBYjtBQUNBRixhQUFPSSxNQUFQLENBQWNGLElBQUksQ0FBbEIsRUFBcUIsQ0FBckI7QUFDQUE7QUFDRDtBQUNGOztBQUVELFNBQU9GLE1BQVA7QUFDRCxDQWhCRDs7QUFrQk8sU0FBU2YsU0FBVCxDQUFtQm9CLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ2IsT0FBbkMsRUFBNEM7QUFDakRBLFlBQVUsOEVBQWdCQSxPQUFoQixFQUF5QixFQUFDRyxrQkFBa0IsSUFBbkIsRUFBekIsQ0FBVjtBQUNBLFNBQU9QLFNBQVNrQixJQUFULENBQWNGLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCYixPQUE5QixDQUFQO0FBQ0Q7O0FBRU0sU0FBU1Asa0JBQVQsQ0FBNEJtQixNQUE1QixFQUFvQ0MsTUFBcEMsRUFBNENiLE9BQTVDLEVBQXFEO0FBQzFELFNBQU9KLFNBQVNrQixJQUFULENBQWNGLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCYixPQUE5QixDQUFQO0FBQ0QiLCJmaWxlIjoid29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7Z2VuZXJhdGVPcHRpb25zfSBmcm9tICcuLi91dGlsL3BhcmFtcyc7XHJcblxyXG4vLyBCYXNlZCBvbiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbl9zY3JpcHRfaW5fVW5pY29kZVxyXG4vL1xyXG4vLyBSYW5nZXMgYW5kIGV4Y2VwdGlvbnM6XHJcbi8vIExhdGluLTEgU3VwcGxlbWVudCwgMDA4MOKAkzAwRkZcclxuLy8gIC0gVSswMEQ3ICDDlyBNdWx0aXBsaWNhdGlvbiBzaWduXHJcbi8vICAtIFUrMDBGNyAgw7cgRGl2aXNpb24gc2lnblxyXG4vLyBMYXRpbiBFeHRlbmRlZC1BLCAwMTAw4oCTMDE3RlxyXG4vLyBMYXRpbiBFeHRlbmRlZC1CLCAwMTgw4oCTMDI0RlxyXG4vLyBJUEEgRXh0ZW5zaW9ucywgMDI1MOKAkzAyQUZcclxuLy8gU3BhY2luZyBNb2RpZmllciBMZXR0ZXJzLCAwMkIw4oCTMDJGRlxyXG4vLyAgLSBVKzAyQzcgIMuHICYjNzExOyAgQ2Fyb25cclxuLy8gIC0gVSswMkQ4ICDLmCAmIzcyODsgIEJyZXZlXHJcbi8vICAtIFUrMDJEOSAgy5kgJiM3Mjk7ICBEb3QgQWJvdmVcclxuLy8gIC0gVSswMkRBICDLmiAmIzczMDsgIFJpbmcgQWJvdmVcclxuLy8gIC0gVSswMkRCICDLmyAmIzczMTsgIE9nb25la1xyXG4vLyAgLSBVKzAyREMgIMucICYjNzMyOyAgU21hbGwgVGlsZGVcclxuLy8gIC0gVSswMkREICDLnSAmIzczMzsgIERvdWJsZSBBY3V0ZSBBY2NlbnRcclxuLy8gTGF0aW4gRXh0ZW5kZWQgQWRkaXRpb25hbCwgMUUwMOKAkzFFRkZcclxuY29uc3QgZXh0ZW5kZWRXb3JkQ2hhcnMgPSAvXlthLXpBLVpcXHV7QzB9LVxcdXtGRn1cXHV7RDh9LVxcdXtGNn1cXHV7Rjh9LVxcdXsyQzZ9XFx1ezJDOH0tXFx1ezJEN31cXHV7MkRFfS1cXHV7MkZGfVxcdXsxRTAwfS1cXHV7MUVGRn1dKyQvdTtcclxuXHJcbmNvbnN0IHJlV2hpdGVzcGFjZSA9IC9cXFMvO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdvcmREaWZmID0gbmV3IERpZmYoKTtcclxud29yZERpZmYuZXF1YWxzID0gZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcclxuICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZUNhc2UpIHtcclxuICAgIGxlZnQgPSBsZWZ0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICByaWdodCA9IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XHJcbiAgfVxyXG4gIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KGxlZnQpICYmICFyZVdoaXRlc3BhY2UudGVzdChyaWdodCkpO1xyXG59O1xyXG53b3JkRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgbGV0IHRva2VucyA9IHZhbHVlLnNwbGl0KC8oXFxzK3xcXGIpLyk7XHJcblxyXG4gIC8vIEpvaW4gdGhlIGJvdW5kYXJ5IHNwbGl0cyB0aGF0IHdlIGRvIG5vdCBjb25zaWRlciB0byBiZSBib3VuZGFyaWVzLiBUaGlzIGlzIHByaW1hcmlseSB0aGUgZXh0ZW5kZWQgTGF0aW4gY2hhcmFjdGVyIHNldC5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgIC8vIElmIHdlIGhhdmUgYW4gZW1wdHkgc3RyaW5nIGluIHRoZSBuZXh0IGZpZWxkIGFuZCB3ZSBoYXZlIG9ubHkgd29yZCBjaGFycyBiZWZvcmUgYW5kIGFmdGVyLCBtZXJnZVxyXG4gICAgaWYgKCF0b2tlbnNbaSArIDFdICYmIHRva2Vuc1tpICsgMl1cclxuICAgICAgICAgICYmIGV4dGVuZGVkV29yZENoYXJzLnRlc3QodG9rZW5zW2ldKVxyXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xyXG4gICAgICB0b2tlbnNbaV0gKz0gdG9rZW5zW2kgKyAyXTtcclxuICAgICAgdG9rZW5zLnNwbGljZShpICsgMSwgMik7XHJcbiAgICAgIGktLTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0b2tlbnM7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlmZldvcmRzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucyhvcHRpb25zLCB7aWdub3JlV2hpdGVzcGFjZTogdHJ1ZX0pO1xyXG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3Jkc1dpdGhTcGFjZShvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xyXG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcclxufVxyXG4iXX0=


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports. /*istanbul ignore end*/generateOptions = generateOptions;
	function generateOptions(options, defaults) {
	  if (typeof options === 'function') {
	    defaults.callback = options;
	  } else if (options) {
	    for (var name in options) {
	      /* istanbul ignore else */
	      if (options.hasOwnProperty(name)) {
	        defaults[name] = options[name];
	      }
	    }
	  }
	  return defaults;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3BhcmFtcy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZU9wdGlvbnMiLCJvcHRpb25zIiwiZGVmYXVsdHMiLCJjYWxsYmFjayIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Z0NBQWdCQSxlLEdBQUFBLGU7QUFBVCxTQUFTQSxlQUFULENBQXlCQyxPQUF6QixFQUFrQ0MsUUFBbEMsRUFBNEM7QUFDakQsTUFBSSxPQUFPRCxPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2pDQyxhQUFTQyxRQUFULEdBQW9CRixPQUFwQjtBQUNELEdBRkQsTUFFTyxJQUFJQSxPQUFKLEVBQWE7QUFDbEIsU0FBSyxJQUFJRyxJQUFULElBQWlCSCxPQUFqQixFQUEwQjtBQUN4QjtBQUNBLFVBQUlBLFFBQVFJLGNBQVIsQ0FBdUJELElBQXZCLENBQUosRUFBa0M7QUFDaENGLGlCQUFTRSxJQUFULElBQWlCSCxRQUFRRyxJQUFSLENBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsU0FBT0YsUUFBUDtBQUNEIiwiZmlsZSI6InBhcmFtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywgZGVmYXVsdHMpIHtcclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGRlZmF1bHRzLmNhbGxiYWNrID0gb3B0aW9ucztcclxuICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcclxuICAgIGZvciAobGV0IG5hbWUgaW4gb3B0aW9ucykge1xyXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgIGRlZmF1bHRzW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGVmYXVsdHM7XHJcbn1cclxuIl19


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.lineDiff = undefined;
	exports. /*istanbul ignore end*/diffLines = diffLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = diffTrimmedLines;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_params = __webpack_require__(4) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var lineDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/lineDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	lineDiff.tokenize = function (value) {
	  var retLines = [],
	      linesAndNewlines = value.split(/(\n|\r\n)/);

	  // Ignore the final empty token that occurs if the string ends with a new line
	  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
	    linesAndNewlines.pop();
	  }

	  // Merge the content and line separators into single tokens
	  for (var i = 0; i < linesAndNewlines.length; i++) {
	    var line = linesAndNewlines[i];

	    if (i % 2 && !this.options.newlineIsToken) {
	      retLines[retLines.length - 1] += line;
	    } else {
	      if (this.options.ignoreWhitespace) {
	        line = line.trim();
	      }
	      retLines.push(line);
	    }
	  }

	  return retLines;
	};

	function diffLines(oldStr, newStr, callback) {
	  return lineDiff.diff(oldStr, newStr, callback);
	}
	function diffTrimmedLines(oldStr, newStr, callback) {
	  var options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(callback, { ignoreWhitespace: true });
	  return lineDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2xpbmUuanMiXSwibmFtZXMiOlsiZGlmZkxpbmVzIiwiZGlmZlRyaW1tZWRMaW5lcyIsImxpbmVEaWZmIiwidG9rZW5pemUiLCJ2YWx1ZSIsInJldExpbmVzIiwibGluZXNBbmROZXdsaW5lcyIsInNwbGl0IiwibGVuZ3RoIiwicG9wIiwiaSIsImxpbmUiLCJvcHRpb25zIiwibmV3bGluZUlzVG9rZW4iLCJpZ25vcmVXaGl0ZXNwYWNlIiwidHJpbSIsInB1c2giLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7OztnQ0E4QmdCQSxTLEdBQUFBLFM7eURBQ0FDLGdCLEdBQUFBLGdCOztBQS9CaEI7Ozs7dUJBQ0E7Ozs7dUJBRU8sSUFBTUMsK0VBQVcsd0VBQWpCO0FBQ1BBLFNBQVNDLFFBQVQsR0FBb0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNsQyxNQUFJQyxXQUFXLEVBQWY7QUFBQSxNQUNJQyxtQkFBbUJGLE1BQU1HLEtBQU4sQ0FBWSxXQUFaLENBRHZCOztBQUdBO0FBQ0EsTUFBSSxDQUFDRCxpQkFBaUJBLGlCQUFpQkUsTUFBakIsR0FBMEIsQ0FBM0MsQ0FBTCxFQUFvRDtBQUNsREYscUJBQWlCRyxHQUFqQjtBQUNEOztBQUVEO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlKLGlCQUFpQkUsTUFBckMsRUFBNkNFLEdBQTdDLEVBQWtEO0FBQ2hELFFBQUlDLE9BQU9MLGlCQUFpQkksQ0FBakIsQ0FBWDs7QUFFQSxRQUFJQSxJQUFJLENBQUosSUFBUyxDQUFDLEtBQUtFLE9BQUwsQ0FBYUMsY0FBM0IsRUFBMkM7QUFDekNSLGVBQVNBLFNBQVNHLE1BQVQsR0FBa0IsQ0FBM0IsS0FBaUNHLElBQWpDO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSSxLQUFLQyxPQUFMLENBQWFFLGdCQUFqQixFQUFtQztBQUNqQ0gsZUFBT0EsS0FBS0ksSUFBTCxFQUFQO0FBQ0Q7QUFDRFYsZUFBU1csSUFBVCxDQUFjTCxJQUFkO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPTixRQUFQO0FBQ0QsQ0F4QkQ7O0FBMEJPLFNBQVNMLFNBQVQsQ0FBbUJpQixNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNDLFFBQW5DLEVBQTZDO0FBQUUsU0FBT2pCLFNBQVNrQixJQUFULENBQWNILE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCQyxRQUE5QixDQUFQO0FBQWlEO0FBQ2hHLFNBQVNsQixnQkFBVCxDQUEwQmdCLE1BQTFCLEVBQWtDQyxNQUFsQyxFQUEwQ0MsUUFBMUMsRUFBb0Q7QUFDekQsTUFBSVAsVUFBVSw4RUFBZ0JPLFFBQWhCLEVBQTBCLEVBQUNMLGtCQUFrQixJQUFuQixFQUExQixDQUFkO0FBQ0EsU0FBT1osU0FBU2tCLElBQVQsQ0FBY0gsTUFBZCxFQUFzQkMsTUFBdEIsRUFBOEJOLE9BQTlCLENBQVA7QUFDRCIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHtnZW5lcmF0ZU9wdGlvbnN9IGZyb20gJy4uL3V0aWwvcGFyYW1zJztcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5lRGlmZiA9IG5ldyBEaWZmKCk7XHJcbmxpbmVEaWZmLnRva2VuaXplID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICBsZXQgcmV0TGluZXMgPSBbXSxcclxuICAgICAgbGluZXNBbmROZXdsaW5lcyA9IHZhbHVlLnNwbGl0KC8oXFxufFxcclxcbikvKTtcclxuXHJcbiAgLy8gSWdub3JlIHRoZSBmaW5hbCBlbXB0eSB0b2tlbiB0aGF0IG9jY3VycyBpZiB0aGUgc3RyaW5nIGVuZHMgd2l0aCBhIG5ldyBsaW5lXHJcbiAgaWYgKCFsaW5lc0FuZE5ld2xpbmVzW2xpbmVzQW5kTmV3bGluZXMubGVuZ3RoIC0gMV0pIHtcclxuICAgIGxpbmVzQW5kTmV3bGluZXMucG9wKCk7XHJcbiAgfVxyXG5cclxuICAvLyBNZXJnZSB0aGUgY29udGVudCBhbmQgbGluZSBzZXBhcmF0b3JzIGludG8gc2luZ2xlIHRva2Vuc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNBbmROZXdsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGxpbmUgPSBsaW5lc0FuZE5ld2xpbmVzW2ldO1xyXG5cclxuICAgIGlmIChpICUgMiAmJiAhdGhpcy5vcHRpb25zLm5ld2xpbmVJc1Rva2VuKSB7XHJcbiAgICAgIHJldExpbmVzW3JldExpbmVzLmxlbmd0aCAtIDFdICs9IGxpbmU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpIHtcclxuICAgICAgICBsaW5lID0gbGluZS50cmltKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0TGluZXMucHVzaChsaW5lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXRMaW5lcztcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZUcmltbWVkTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XHJcbiAgbGV0IG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoY2FsbGJhY2ssIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XHJcbiAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xyXG59XHJcbiJdfQ==


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sentenceDiff = undefined;
	exports. /*istanbul ignore end*/diffSentences = diffSentences;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var sentenceDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/sentenceDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	sentenceDiff.tokenize = function (value) {
	  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
	};

	function diffSentences(oldStr, newStr, callback) {
	  return sentenceDiff.diff(oldStr, newStr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3NlbnRlbmNlLmpzIl0sIm5hbWVzIjpbImRpZmZTZW50ZW5jZXMiLCJzZW50ZW5jZURpZmYiLCJ0b2tlbml6ZSIsInZhbHVlIiwic3BsaXQiLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7OztnQ0FRZ0JBLGEsR0FBQUEsYTs7QUFSaEI7Ozs7Ozt1QkFHTyxJQUFNQyx1RkFBZSx3RUFBckI7QUFDUEEsYUFBYUMsUUFBYixHQUF3QixVQUFTQyxLQUFULEVBQWdCO0FBQ3RDLFNBQU9BLE1BQU1DLEtBQU4sQ0FBWSx1QkFBWixDQUFQO0FBQ0QsQ0FGRDs7QUFJTyxTQUFTSixhQUFULENBQXVCSyxNQUF2QixFQUErQkMsTUFBL0IsRUFBdUNDLFFBQXZDLEVBQWlEO0FBQUUsU0FBT04sYUFBYU8sSUFBYixDQUFrQkgsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDQyxRQUFsQyxDQUFQO0FBQXFEIiwiZmlsZSI6InNlbnRlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2VudGVuY2VEaWZmID0gbmV3IERpZmYoKTtcclxuc2VudGVuY2VEaWZmLnRva2VuaXplID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHsgcmV0dXJuIHNlbnRlbmNlRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cclxuIl19


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cssDiff = undefined;
	exports. /*istanbul ignore end*/diffCss = diffCss;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var cssDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/cssDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	cssDiff.tokenize = function (value) {
	  return value.split(/([{}:;,]|\s+)/);
	};

	function diffCss(oldStr, newStr, callback) {
	  return cssDiff.diff(oldStr, newStr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Nzcy5qcyJdLCJuYW1lcyI6WyJkaWZmQ3NzIiwiY3NzRGlmZiIsInRva2VuaXplIiwidmFsdWUiLCJzcGxpdCIsIm9sZFN0ciIsIm5ld1N0ciIsImNhbGxiYWNrIiwiZGlmZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2dDQU9nQkEsTyxHQUFBQSxPOztBQVBoQjs7Ozs7O3VCQUVPLElBQU1DLDZFQUFVLHdFQUFoQjtBQUNQQSxRQUFRQyxRQUFSLEdBQW1CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDakMsU0FBT0EsTUFBTUMsS0FBTixDQUFZLGVBQVosQ0FBUDtBQUNELENBRkQ7O0FBSU8sU0FBU0osT0FBVCxDQUFpQkssTUFBakIsRUFBeUJDLE1BQXpCLEVBQWlDQyxRQUFqQyxFQUEyQztBQUFFLFNBQU9OLFFBQVFPLElBQVIsQ0FBYUgsTUFBYixFQUFxQkMsTUFBckIsRUFBNkJDLFFBQTdCLENBQVA7QUFBZ0QiLCJmaWxlIjoiY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjc3NEaWZmID0gbmV3IERpZmYoKTtcclxuY3NzRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KC8oW3t9OjssXXxcXHMrKS8pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDc3Mob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBjc3NEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTsgfVxyXG4iXX0=


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.jsonDiff = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports. /*istanbul ignore end*/diffJson = diffJson;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = canonicalize;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var objectPrototypeToString = Object.prototype.toString;

	var jsonDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/jsonDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	// Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
	// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:
	jsonDiff.useLongestToken = true;

	jsonDiff.tokenize = /*istanbul ignore start*/_line.lineDiff /*istanbul ignore end*/.tokenize;
	jsonDiff.castInput = function (value) {
	  /*istanbul ignore start*/var _options = /*istanbul ignore end*/this.options,
	      undefinedReplacement = _options.undefinedReplacement,
	      _options$stringifyRep = _options.stringifyReplacer,
	      stringifyReplacer = _options$stringifyRep === undefined ? function (k, v) /*istanbul ignore start*/{
	    return (/*istanbul ignore end*/typeof v === 'undefined' ? undefinedReplacement : v
	    );
	  } : _options$stringifyRep;


	  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
	};
	jsonDiff.equals = function (left, right) {
	  return (/*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'))
	  );
	};

	function diffJson(oldObj, newObj, options) {
	  return jsonDiff.diff(oldObj, newObj, options);
	}

	// This function handles the presence of circular references by bailing out when encountering an
	// object that is already on the "stack" of items being processed. Accepts an optional replacer
	function canonicalize(obj, stack, replacementStack, replacer, key) {
	  stack = stack || [];
	  replacementStack = replacementStack || [];

	  if (replacer) {
	    obj = replacer(key, obj);
	  }

	  var i = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  for (i = 0; i < stack.length; i += 1) {
	    if (stack[i] === obj) {
	      return replacementStack[i];
	    }
	  }

	  var canonicalizedObj = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  if ('[object Array]' === objectPrototypeToString.call(obj)) {
	    stack.push(obj);
	    canonicalizedObj = new Array(obj.length);
	    replacementStack.push(canonicalizedObj);
	    for (i = 0; i < obj.length; i += 1) {
	      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
	    }
	    stack.pop();
	    replacementStack.pop();
	    return canonicalizedObj;
	  }

	  if (obj && obj.toJSON) {
	    obj = obj.toJSON();
	  }

	  if ( /*istanbul ignore start*/(typeof /*istanbul ignore end*/obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null) {
	    stack.push(obj);
	    canonicalizedObj = {};
	    replacementStack.push(canonicalizedObj);
	    var sortedKeys = [],
	        _key = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	    for (_key in obj) {
	      /* istanbul ignore else */
	      if (obj.hasOwnProperty(_key)) {
	        sortedKeys.push(_key);
	      }
	    }
	    sortedKeys.sort();
	    for (i = 0; i < sortedKeys.length; i += 1) {
	      _key = sortedKeys[i];
	      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
	    }
	    stack.pop();
	    replacementStack.pop();
	  } else {
	    canonicalizedObj = obj;
	  }
	  return canonicalizedObj;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2pzb24uanMiXSwibmFtZXMiOlsiZGlmZkpzb24iLCJjYW5vbmljYWxpemUiLCJvYmplY3RQcm90b3R5cGVUb1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwianNvbkRpZmYiLCJ1c2VMb25nZXN0VG9rZW4iLCJ0b2tlbml6ZSIsImNhc3RJbnB1dCIsInZhbHVlIiwib3B0aW9ucyIsInVuZGVmaW5lZFJlcGxhY2VtZW50Iiwic3RyaW5naWZ5UmVwbGFjZXIiLCJrIiwidiIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcXVhbHMiLCJsZWZ0IiwicmlnaHQiLCJjYWxsIiwicmVwbGFjZSIsIm9sZE9iaiIsIm5ld09iaiIsImRpZmYiLCJvYmoiLCJzdGFjayIsInJlcGxhY2VtZW50U3RhY2siLCJyZXBsYWNlciIsImtleSIsImkiLCJsZW5ndGgiLCJjYW5vbmljYWxpemVkT2JqIiwicHVzaCIsIkFycmF5IiwicG9wIiwidG9KU09OIiwic29ydGVkS2V5cyIsImhhc093blByb3BlcnR5Iiwic29ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2dDQXFCZ0JBLFEsR0FBQUEsUTt5REFJQUMsWSxHQUFBQSxZOztBQXpCaEI7Ozs7dUJBQ0E7Ozs7dUJBRUEsSUFBTUMsMEJBQTBCQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqRDs7QUFHTyxJQUFNQywrRUFBVyx3RUFBakI7QUFDUDtBQUNBO0FBQ0FBLFNBQVNDLGVBQVQsR0FBMkIsSUFBM0I7O0FBRUFELFNBQVNFLFFBQVQsR0FBb0IsZ0VBQVNBLFFBQTdCO0FBQ0FGLFNBQVNHLFNBQVQsR0FBcUIsVUFBU0MsS0FBVCxFQUFnQjtBQUFBLGlFQUMrRSxLQUFLQyxPQURwRjtBQUFBLE1BQzVCQyxvQkFENEIsWUFDNUJBLG9CQUQ0QjtBQUFBLHVDQUNOQyxpQkFETTtBQUFBLE1BQ05BLGlCQURNLHlDQUNjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLG1DQUFVLE9BQU9BLENB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LFNBQUtULElBQUksQ0FBVCxFQUFZQSxJQUFJTyxXQUFXTixNQUEzQixFQUFtQ0QsS0FBSyxDQUF4QyxFQUEyQztBQUN6Q0QsYUFBTVEsV0FBV1AsQ0FBWCxDQUFOO0FBQ0FFLHVCQUFpQkgsSUFBakIsSUFBd0I3QixhQUFheUIsSUFBSUksSUFBSixDQUFiLEVBQXVCSCxLQUF2QixFQUE4QkMsZ0JBQTlCLEVBQWdEQyxRQUFoRCxFQUEwREMsSUFBMUQsQ0FBeEI7QUFDRDtBQUNESCxVQUFNUyxHQUFOO0FBQ0FSLHFCQUFpQlEsR0FBakI7QUFDRCxHQW5CRCxNQW1CTztBQUNMSCx1QkFBbUJQLEdBQW5CO0FBQ0Q7QUFDRCxTQUFPTyxnQkFBUDtBQUNEIiwiZmlsZSI6Impzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlmZiBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQge2xpbmVEaWZmfSBmcm9tICcuL2xpbmUnO1xyXG5cclxuY29uc3Qgb2JqZWN0UHJvdG90eXBlVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBqc29uRGlmZiA9IG5ldyBEaWZmKCk7XHJcbi8vIERpc2NyaW1pbmF0ZSBiZXR3ZWVuIHR3byBsaW5lcyBvZiBwcmV0dHktcHJpbnRlZCwgc2VyaWFsaXplZCBKU09OIHdoZXJlIG9uZSBvZiB0aGVtIGhhcyBhXHJcbi8vIGRhbmdsaW5nIGNvbW1hIGFuZCB0aGUgb3RoZXIgZG9lc24ndC4gVHVybnMgb3V0IGluY2x1ZGluZyB0aGUgZGFuZ2xpbmcgY29tbWEgeWllbGRzIHRoZSBuaWNlc3Qgb3V0cHV0OlxyXG5qc29uRGlmZi51c2VMb25nZXN0VG9rZW4gPSB0cnVlO1xyXG5cclxuanNvbkRpZmYudG9rZW5pemUgPSBsaW5lRGlmZi50b2tlbml6ZTtcclxuanNvbkRpZmYuY2FzdElucHV0ID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICBjb25zdCB7dW5kZWZpbmVkUmVwbGFjZW1lbnQsIHN0cmluZ2lmeVJlcGxhY2VyID0gKGssIHYpID0+IHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZFJlcGxhY2VtZW50IDogdn0gPSB0aGlzLm9wdGlvbnM7XHJcblxyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeShjYW5vbmljYWxpemUodmFsdWUsIG51bGwsIG51bGwsIHN0cmluZ2lmeVJlcGxhY2VyKSwgc3RyaW5naWZ5UmVwbGFjZXIsICcgICcpO1xyXG59O1xyXG5qc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xyXG4gIHJldHVybiBEaWZmLnByb3RvdHlwZS5lcXVhbHMuY2FsbChqc29uRGlmZiwgbGVmdC5yZXBsYWNlKC8sKFtcXHJcXG5dKS9nLCAnJDEnKSwgcmlnaHQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJykpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZKc29uKG9sZE9iaiwgbmV3T2JqLCBvcHRpb25zKSB7IHJldHVybiBqc29uRGlmZi5kaWZmKG9sZE9iaiwgbmV3T2JqLCBvcHRpb25zKTsgfVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBwcmVzZW5jZSBvZiBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGJhaWxpbmcgb3V0IHdoZW4gZW5jb3VudGVyaW5nIGFuXHJcbi8vIG9iamVjdCB0aGF0IGlzIGFscmVhZHkgb24gdGhlIFwic3RhY2tcIiBvZiBpdGVtcyBiZWluZyBwcm9jZXNzZWQuIEFjY2VwdHMgYW4gb3B0aW9uYWwgcmVwbGFjZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGNhbm9uaWNhbGl6ZShvYmosIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwga2V5KSB7XHJcbiAgc3RhY2sgPSBzdGFjayB8fCBbXTtcclxuICByZXBsYWNlbWVudFN0YWNrID0gcmVwbGFjZW1lbnRTdGFjayB8fCBbXTtcclxuXHJcbiAgaWYgKHJlcGxhY2VyKSB7XHJcbiAgICBvYmogPSByZXBsYWNlcihrZXksIG9iaik7XHJcbiAgfVxyXG5cclxuICBsZXQgaTtcclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoc3RhY2tbaV0gPT09IG9iaikge1xyXG4gICAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGFja1tpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBjYW5vbmljYWxpemVkT2JqO1xyXG5cclxuICBpZiAoJ1tvYmplY3QgQXJyYXldJyA9PT0gb2JqZWN0UHJvdG90eXBlVG9TdHJpbmcuY2FsbChvYmopKSB7XHJcbiAgICBzdGFjay5wdXNoKG9iaik7XHJcbiAgICBjYW5vbmljYWxpemVkT2JqID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xyXG4gICAgcmVwbGFjZW1lbnRTdGFjay5wdXNoKGNhbm9uaWNhbGl6ZWRPYmopO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjYW5vbmljYWxpemVkT2JqW2ldID0gY2Fub25pY2FsaXplKG9ialtpXSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpO1xyXG4gICAgfVxyXG4gICAgc3RhY2sucG9wKCk7XHJcbiAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xyXG4gICAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqICYmIG9iai50b0pTT04pIHtcclxuICAgIG9iaiA9IG9iai50b0pTT04oKTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcclxuICAgIHN0YWNrLnB1c2gob2JqKTtcclxuICAgIGNhbm9uaWNhbGl6ZWRPYmogPSB7fTtcclxuICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcclxuICAgIGxldCBzb3J0ZWRLZXlzID0gW10sXHJcbiAgICAgICAga2V5O1xyXG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XHJcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHNvcnRlZEtleXMucHVzaChrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzb3J0ZWRLZXlzLnNvcnQoKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3J0ZWRLZXlzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGtleSA9IHNvcnRlZEtleXNbaV07XHJcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmpba2V5XSA9IGNhbm9uaWNhbGl6ZShvYmpba2V5XSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpO1xyXG4gICAgfVxyXG4gICAgc3RhY2sucG9wKCk7XHJcbiAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjYW5vbmljYWxpemVkT2JqID0gb2JqO1xyXG4gIH1cclxuICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcclxufVxyXG4iXX0=


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayDiff = undefined;
	exports. /*istanbul ignore end*/diffArrays = diffArrays;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var arrayDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/arrayDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	arrayDiff.tokenize = function (value) {
	  return value.slice();
	};
	arrayDiff.join = arrayDiff.removeEmpty = function (value) {
	  return value;
	};

	function diffArrays(oldArr, newArr, callback) {
	  return arrayDiff.diff(oldArr, newArr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2FycmF5LmpzIl0sIm5hbWVzIjpbImRpZmZBcnJheXMiLCJhcnJheURpZmYiLCJ0b2tlbml6ZSIsInZhbHVlIiwic2xpY2UiLCJqb2luIiwicmVtb3ZlRW1wdHkiLCJvbGRBcnIiLCJuZXdBcnIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7OztnQ0FVZ0JBLFUsR0FBQUEsVTs7QUFWaEI7Ozs7Ozt1QkFFTyxJQUFNQyxpRkFBWSx3RUFBbEI7QUFDUEEsVUFBVUMsUUFBVixHQUFxQixVQUFTQyxLQUFULEVBQWdCO0FBQ25DLFNBQU9BLE1BQU1DLEtBQU4sRUFBUDtBQUNELENBRkQ7QUFHQUgsVUFBVUksSUFBVixHQUFpQkosVUFBVUssV0FBVixHQUF3QixVQUFTSCxLQUFULEVBQWdCO0FBQ3ZELFNBQU9BLEtBQVA7QUFDRCxDQUZEOztBQUlPLFNBQVNILFVBQVQsQ0FBb0JPLE1BQXBCLEVBQTRCQyxNQUE1QixFQUFvQ0MsUUFBcEMsRUFBOEM7QUFBRSxTQUFPUixVQUFVUyxJQUFWLENBQWVILE1BQWYsRUFBdUJDLE1BQXZCLEVBQStCQyxRQUEvQixDQUFQO0FBQWtEIiwiZmlsZSI6ImFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcnJheURpZmYgPSBuZXcgRGlmZigpO1xyXG5hcnJheURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZS5zbGljZSgpO1xyXG59O1xyXG5hcnJheURpZmYuam9pbiA9IGFycmF5RGlmZi5yZW1vdmVFbXB0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZBcnJheXMob2xkQXJyLCBuZXdBcnIsIGNhbGxiYWNrKSB7IHJldHVybiBhcnJheURpZmYuZGlmZihvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spOyB9XHJcbiJdfQ==


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports. /*istanbul ignore end*/applyPatch = applyPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = applyPatches;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_distanceIterator = __webpack_require__(12) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _distanceIterator2 = _interopRequireDefault(_distanceIterator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/function applyPatch(source, uniDiff) {
	  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  if (typeof uniDiff === 'string') {
	    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
	  }

	  if (Array.isArray(uniDiff)) {
	    if (uniDiff.length > 1) {
	      throw new Error('applyPatch only works with a single input.');
	    }

	    uniDiff = uniDiff[0];
	  }

	  // Apply the diff to the input
	  var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
	      delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
	      hunks = uniDiff.hunks,
	      compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) /*istanbul ignore start*/{
	    return (/*istanbul ignore end*/line === patchContent
	    );
	  },
	      errorCount = 0,
	      fuzzFactor = options.fuzzFactor || 0,
	      minLine = 0,
	      offset = 0,
	      removeEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
	      addEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  /**
	   * Checks if the hunk exactly fits on the provided location
	   */
	  function hunkFits(hunk, toPos) {
	    for (var j = 0; j < hunk.lines.length; j++) {
	      var line = hunk.lines[j],
	          operation = line.length > 0 ? line[0] : ' ',
	          content = line.length > 0 ? line.substr(1) : line;

	      if (operation === ' ' || operation === '-') {
	        // Context sanity check
	        if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
	          errorCount++;

	          if (errorCount > fuzzFactor) {
	            return false;
	          }
	        }
	        toPos++;
	      }
	    }

	    return true;
	  }

	  // Search best fit offsets for each hunk based on the previous ones
	  for (var i = 0; i < hunks.length; i++) {
	    var hunk = hunks[i],
	        maxLine = lines.length - hunk.oldLines,
	        localOffset = 0,
	        toPos = offset + hunk.oldStart - 1;

	    var iterator = /*istanbul ignore start*/(0, _distanceIterator2['default']) /*istanbul ignore end*/(toPos, minLine, maxLine);

	    for (; localOffset !== undefined; localOffset = iterator()) {
	      if (hunkFits(hunk, toPos + localOffset)) {
	        hunk.offset = offset += localOffset;
	        break;
	      }
	    }

	    if (localOffset === undefined) {
	      return false;
	    }

	    // Set lower text limit to end of the current hunk, so next ones don't try
	    // to fit over already patched text
	    minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
	  }

	  // Apply patch hunks
	  var diffOffset = 0;
	  for (var _i = 0; _i < hunks.length; _i++) {
	    var _hunk = hunks[_i],
	        _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;
	    diffOffset += _hunk.newLines - _hunk.oldLines;

	    if (_toPos < 0) {
	      // Creating a new file
	      _toPos = 0;
	    }

	    for (var j = 0; j < _hunk.lines.length; j++) {
	      var line = _hunk.lines[j],
	          operation = line.length > 0 ? line[0] : ' ',
	          content = line.length > 0 ? line.substr(1) : line,
	          delimiter = _hunk.linedelimiters[j];

	      if (operation === ' ') {
	        _toPos++;
	      } else if (operation === '-') {
	        lines.splice(_toPos, 1);
	        delimiters.splice(_toPos, 1);
	        /* istanbul ignore else */
	      } else if (operation === '+') {
	        lines.splice(_toPos, 0, content);
	        delimiters.splice(_toPos, 0, delimiter);
	        _toPos++;
	      } else if (operation === '\\') {
	        var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
	        if (previousOperation === '+') {
	          removeEOFNL = true;
	        } else if (previousOperation === '-') {
	          addEOFNL = true;
	        }
	      }
	    }
	  }

	  // Handle EOFNL insertion/removal
	  if (removeEOFNL) {
	    while (!lines[lines.length - 1]) {
	      lines.pop();
	      delimiters.pop();
	    }
	  } else if (addEOFNL) {
	    lines.push('');
	    delimiters.push('\n');
	  }
	  for (var _k = 0; _k < lines.length - 1; _k++) {
	    lines[_k] = lines[_k] + delimiters[_k];
	  }
	  return lines.join('');
	}

	// Wrapper that supports multiple file patches via callbacks.
	function applyPatches(uniDiff, options) {
	  if (typeof uniDiff === 'string') {
	    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
	  }

	  var currentIndex = 0;
	  function processIndex() {
	    var index = uniDiff[currentIndex++];
	    if (!index) {
	      return options.complete();
	    }

	    options.loadFile(index, function (err, data) {
	      if (err) {
	        return options.complete(err);
	      }

	      var updatedContent = applyPatch(data, index, options);
	      options.patched(index, updatedContent, function (err) {
	        if (err) {
	          return options.complete(err);
	        }

	        processIndex();
	      });
	    });
	  }
	  processIndex();
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9hcHBseS5qcyJdLCJuYW1lcyI6WyJhcHBseVBhdGNoIiwiYXBwbHlQYXRjaGVzIiwic291cmNlIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJFcnJvciIsImxpbmVzIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJodW5rcyIsImNvbXBhcmVMaW5lIiwibGluZU51bWJlciIsImxpbmUiLCJvcGVyYXRpb24iLCJwYXRjaENvbnRlbnQiLCJlcnJvckNvdW50IiwiZnV6ekZhY3RvciIsIm1pbkxpbmUiLCJvZmZzZXQiLCJyZW1vdmVFT0ZOTCIsImFkZEVPRk5MIiwiaHVua0ZpdHMiLCJodW5rIiwidG9Qb3MiLCJqIiwiY29udGVudCIsInN1YnN0ciIsImkiLCJtYXhMaW5lIiwib2xkTGluZXMiLCJsb2NhbE9mZnNldCIsIm9sZFN0YXJ0IiwiaXRlcmF0b3IiLCJ1bmRlZmluZWQiLCJkaWZmT2Zmc2V0IiwibmV3TGluZXMiLCJkZWxpbWl0ZXIiLCJsaW5lZGVsaW1pdGVycyIsInNwbGljZSIsInByZXZpb3VzT3BlcmF0aW9uIiwicG9wIiwicHVzaCIsIl9rIiwiam9pbiIsImN1cnJlbnRJbmRleCIsInByb2Nlc3NJbmRleCIsImluZGV4IiwiY29tcGxldGUiLCJsb2FkRmlsZSIsImVyciIsImRhdGEiLCJ1cGRhdGVkQ29udGVudCIsInBhdGNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7O2dDQUdnQkEsVSxHQUFBQSxVO3lEQW9JQUMsWSxHQUFBQSxZOztBQXZJaEI7O0FBQ0E7Ozs7Ozt1QkFFTyxTQUFTRCxVQUFULENBQW9CRSxNQUFwQixFQUE0QkMsT0FBNUIsRUFBbUQ7QUFBQSxzREFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUN4RCxNQUFJLE9BQU9ELE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0JBLGNBQVUsd0VBQVdBLE9BQVgsQ0FBVjtBQUNEOztBQUVELE1BQUlFLE1BQU1D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LEVBQVk7QUFDVixhQUFPOUMsUUFBUStDLFFBQVIsRUFBUDtBQUNEOztBQUVEL0MsWUFBUWdELFFBQVIsQ0FBaUJGLEtBQWpCLEVBQXdCLFVBQVNHLEdBQVQsRUFBY0MsSUFBZCxFQUFvQjtBQUMxQyxVQUFJRCxHQUFKLEVBQVM7QUFDUCxlQUFPakQsUUFBUStDLFFBQVIsQ0FBaUJFLEdBQWpCLENBQVA7QUFDRDs7QUFFRCxVQUFJRSxpQkFBaUJ2RCxXQUFXc0QsSUFBWCxFQUFpQkosS0FBakIsRUFBd0I5QyxPQUF4QixDQUFyQjtBQUNBQSxjQUFRb0QsT0FBUixDQUFnQk4sS0FBaEIsRUFBdUJLLGNBQXZCLEVBQXVDLFVBQVNGLEdBQVQsRUFBYztBQUNuRCxZQUFJQSxHQUFKLEVBQVM7QUFDUCxpQkFBT2pELFFBQVErQyxRQUFSLENBQWlCRSxHQUFqQixDQUFQO0FBQ0Q7O0FBRURKO0FBQ0QsT0FORDtBQU9ELEtBYkQ7QUFjRDtBQUNEQTtBQUNEIiwiZmlsZSI6ImFwcGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwYXJzZVBhdGNofSBmcm9tICcuL3BhcnNlJztcclxuaW1wb3J0IGRpc3RhbmNlSXRlcmF0b3IgZnJvbSAnLi4vdXRpbC9kaXN0YW5jZS1pdGVyYXRvcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRjaChzb3VyY2UsIHVuaURpZmYsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcclxuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xyXG4gIH1cclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodW5pRGlmZikpIHtcclxuICAgIGlmICh1bmlEaWZmLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcHBseVBhdGNoIG9ubHkgd29ya3Mgd2l0aCBhIHNpbmdsZSBpbnB1dC4nKTtcclxuICAgIH1cclxuXHJcbiAgICB1bmlEaWZmID0gdW5pRGlmZlswXTtcclxuICB9XHJcblxyXG4gIC8vIEFwcGx5IHRoZSBkaWZmIHRvIHRoZSBpbnB1dFxyXG4gIGxldCBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcclxuICAgICAgZGVsaW1pdGVycyA9IHNvdXJjZS5tYXRjaCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vZykgfHwgW10sXHJcbiAgICAgIGh1bmtzID0gdW5pRGlmZi5odW5rcyxcclxuXHJcbiAgICAgIGNvbXBhcmVMaW5lID0gb3B0aW9ucy5jb21wYXJlTGluZSB8fCAoKGxpbmVOdW1iZXIsIGxpbmUsIG9wZXJhdGlvbiwgcGF0Y2hDb250ZW50KSA9PiBsaW5lID09PSBwYXRjaENvbnRlbnQpLFxyXG4gICAgICBlcnJvckNvdW50ID0gMCxcclxuICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxyXG4gICAgICBtaW5MaW5lID0gMCxcclxuICAgICAgb2Zmc2V0ID0gMCxcclxuXHJcbiAgICAgIHJlbW92ZUVPRk5MLFxyXG4gICAgICBhZGRFT0ZOTDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBodW5rIGV4YWN0bHkgZml0cyBvbiB0aGUgcHJvdmlkZWQgbG9jYXRpb25cclxuICAgKi9cclxuICBmdW5jdGlvbiBodW5rRml0cyhodW5rLCB0b1Bvcykge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBodW5rLmxpbmVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcclxuICAgICAgICAgIG9wZXJhdGlvbiA9IChsaW5lLmxlbmd0aCA+IDAgPyBsaW5lWzBdIDogJyAnKSxcclxuICAgICAgICAgIGNvbnRlbnQgPSAobGluZS5sZW5ndGggPiAwID8gbGluZS5zdWJzdHIoMSkgOiBsaW5lKTtcclxuXHJcbiAgICAgIGlmIChvcGVyYXRpb24gPT09ICcgJyB8fCBvcGVyYXRpb24gPT09ICctJykge1xyXG4gICAgICAgIC8vIENvbnRleHQgc2FuaXR5IGNoZWNrXHJcbiAgICAgICAgaWYgKCFjb21wYXJlTGluZSh0b1BvcyArIDEsIGxpbmVzW3RvUG9zXSwgb3BlcmF0aW9uLCBjb250ZW50KSkge1xyXG4gICAgICAgICAgZXJyb3JDb3VudCsrO1xyXG5cclxuICAgICAgICAgIGlmIChlcnJvckNvdW50ID4gZnV6ekZhY3Rvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvUG9zKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGh1bmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgaHVuayA9IGh1bmtzW2ldLFxyXG4gICAgICAgIG1heExpbmUgPSBsaW5lcy5sZW5ndGggLSBodW5rLm9sZExpbmVzLFxyXG4gICAgICAgIGxvY2FsT2Zmc2V0ID0gMCxcclxuICAgICAgICB0b1BvcyA9IG9mZnNldCArIGh1bmsub2xkU3RhcnQgLSAxO1xyXG5cclxuICAgIGxldCBpdGVyYXRvciA9IGRpc3RhbmNlSXRlcmF0b3IodG9Qb3MsIG1pbkxpbmUsIG1heExpbmUpO1xyXG5cclxuICAgIGZvciAoOyBsb2NhbE9mZnNldCAhPT0gdW5kZWZpbmVkOyBsb2NhbE9mZnNldCA9IGl0ZXJhdG9yKCkpIHtcclxuICAgICAgaWYgKGh1bmtGaXRzKGh1bmssIHRvUG9zICsgbG9jYWxPZmZzZXQpKSB7XHJcbiAgICAgICAgaHVuay5vZmZzZXQgPSBvZmZzZXQgKz0gbG9jYWxPZmZzZXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9jYWxPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IGxvd2VyIHRleHQgbGltaXQgdG8gZW5kIG9mIHRoZSBjdXJyZW50IGh1bmssIHNvIG5leHQgb25lcyBkb24ndCB0cnlcclxuICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XHJcbiAgICBtaW5MaW5lID0gaHVuay5vZmZzZXQgKyBodW5rLm9sZFN0YXJ0ICsgaHVuay5vbGRMaW5lcztcclxuICB9XHJcblxyXG4gIC8vIEFwcGx5IHBhdGNoIGh1bmtzXHJcbiAgbGV0IGRpZmZPZmZzZXQgPSAwO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaHVua3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBodW5rID0gaHVua3NbaV0sXHJcbiAgICAgICAgdG9Qb3MgPSBodW5rLm9sZFN0YXJ0ICsgaHVuay5vZmZzZXQgKyBkaWZmT2Zmc2V0IC0gMTtcclxuICAgIGRpZmZPZmZzZXQgKz0gaHVuay5uZXdMaW5lcyAtIGh1bmsub2xkTGluZXM7XHJcblxyXG4gICAgaWYgKHRvUG9zIDwgMCkgeyAvLyBDcmVhdGluZyBhIG5ldyBmaWxlXHJcbiAgICAgIHRvUG9zID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgbGV0IGxpbmUgPSBodW5rLmxpbmVzW2pdLFxyXG4gICAgICAgICAgb3BlcmF0aW9uID0gKGxpbmUubGVuZ3RoID4gMCA/IGxpbmVbMF0gOiAnICcpLFxyXG4gICAgICAgICAgY29udGVudCA9IChsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmUpLFxyXG4gICAgICAgICAgZGVsaW1pdGVyID0gaHVuay5saW5lZGVsaW1pdGVyc1tqXTtcclxuXHJcbiAgICAgIGlmIChvcGVyYXRpb24gPT09ICcgJykge1xyXG4gICAgICAgIHRvUG9zKys7XHJcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcclxuICAgICAgICBsaW5lcy5zcGxpY2UodG9Qb3MsIDEpO1xyXG4gICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKHRvUG9zLCAxKTtcclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xyXG4gICAgICAgIGxpbmVzLnNwbGljZSh0b1BvcywgMCwgY29udGVudCk7XHJcbiAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UodG9Qb3MsIDAsIGRlbGltaXRlcik7XHJcbiAgICAgICAgdG9Qb3MrKztcclxuICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdcXFxcJykge1xyXG4gICAgICAgIGxldCBwcmV2aW91c09wZXJhdGlvbiA9IGh1bmsubGluZXNbaiAtIDFdID8gaHVuay5saW5lc1tqIC0gMV1bMF0gOiBudWxsO1xyXG4gICAgICAgIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJysnKSB7XHJcbiAgICAgICAgICByZW1vdmVFT0ZOTCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJy0nKSB7XHJcbiAgICAgICAgICBhZGRFT0ZOTCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBIYW5kbGUgRU9GTkwgaW5zZXJ0aW9uL3JlbW92YWxcclxuICBpZiAocmVtb3ZlRU9GTkwpIHtcclxuICAgIHdoaWxlICghbGluZXNbbGluZXMubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgbGluZXMucG9wKCk7XHJcbiAgICAgIGRlbGltaXRlcnMucG9wKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChhZGRFT0ZOTCkge1xyXG4gICAgbGluZXMucHVzaCgnJyk7XHJcbiAgICBkZWxpbWl0ZXJzLnB1c2goJ1xcbicpO1xyXG4gIH1cclxuICBmb3IgKGxldCBfayA9IDA7IF9rIDwgbGluZXMubGVuZ3RoIC0gMTsgX2srKykge1xyXG4gICAgbGluZXNbX2tdID0gbGluZXNbX2tdICsgZGVsaW1pdGVyc1tfa107XHJcbiAgfVxyXG4gIHJldHVybiBsaW5lcy5qb2luKCcnKTtcclxufVxyXG5cclxuLy8gV3JhcHBlciB0aGF0IHN1cHBvcnRzIG11bHRpcGxlIGZpbGUgcGF0Y2hlcyB2aWEgY2FsbGJhY2tzLlxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRjaGVzKHVuaURpZmYsIG9wdGlvbnMpIHtcclxuICBpZiAodHlwZW9mIHVuaURpZmYgPT09ICdzdHJpbmcnKSB7XHJcbiAgICB1bmlEaWZmID0gcGFyc2VQYXRjaCh1bmlEaWZmKTtcclxuICB9XHJcblxyXG4gIGxldCBjdXJyZW50SW5kZXggPSAwO1xyXG4gIGZ1bmN0aW9uIHByb2Nlc3NJbmRleCgpIHtcclxuICAgIGxldCBpbmRleCA9IHVuaURpZmZbY3VycmVudEluZGV4KytdO1xyXG4gICAgaWYgKCFpbmRleCkge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnMubG9hZEZpbGUoaW5kZXgsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHVwZGF0ZWRDb250ZW50ID0gYXBwbHlQYXRjaChkYXRhLCBpbmRleCwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMucGF0Y2hlZChpbmRleCwgdXBkYXRlZENvbnRlbnQsIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKGVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9jZXNzSW5kZXgoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJvY2Vzc0luZGV4KCk7XHJcbn1cclxuIl19


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports. /*istanbul ignore end*/parsePatch = parsePatch;
	function parsePatch(uniDiff) {
	  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
	      delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
	      list = [],
	      i = 0;

	  function parseIndex() {
	    var index = {};
	    list.push(index);

	    // Parse diff metadata
	    while (i < diffstr.length) {
	      var line = diffstr[i];

	      // File header found, end parsing diff metadata
	      if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
	        break;
	      }

	      // Diff index
	      var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);
	      if (header) {
	        index.index = header[1];
	      }

	      i++;
	    }

	    // Parse file headers if they are defined. Unified diff requires them, but
	    // there's no technical issues to have an isolated hunk without file header
	    parseFileHeader(index);
	    parseFileHeader(index);

	    // Parse hunks
	    index.hunks = [];

	    while (i < diffstr.length) {
	      var _line = diffstr[i];

	      if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
	        break;
	      } else if (/^@@/.test(_line)) {
	        index.hunks.push(parseHunk());
	      } else if (_line && options.strict) {
	        // Ignore unexpected content unless in strict mode
	        throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
	      } else {
	        i++;
	      }
	    }
	  }

	  // Parses the --- and +++ headers, if none are found, no lines
	  // are consumed.
	  function parseFileHeader(index) {
	    var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);
	    if (fileHeader) {
	      var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
	      var data = fileHeader[2].split('\t', 2);
	      var fileName = data[0].replace(/\\\\/g, '\\');
	      if (/^".*"$/.test(fileName)) {
	        fileName = fileName.substr(1, fileName.length - 2);
	      }
	      index[keyPrefix + 'FileName'] = fileName;
	      index[keyPrefix + 'Header'] = (data[1] || '').trim();

	      i++;
	    }
	  }

	  // Parses a hunk
	  // This assumes that we are at the start of a hunk.
	  function parseHunk() {
	    var chunkHeaderIndex = i,
	        chunkHeaderLine = diffstr[i++],
	        chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);

	    var hunk = {
	      oldStart: +chunkHeader[1],
	      oldLines: +chunkHeader[2] || 1,
	      newStart: +chunkHeader[3],
	      newLines: +chunkHeader[4] || 1,
	      lines: [],
	      linedelimiters: []
	    };

	    var addCount = 0,
	        removeCount = 0;
	    for (; i < diffstr.length; i++) {
	      // Lines starting with '---' could be mistaken for the "remove line" operation
	      // But they could be the header for the next file. Therefore prune such cases out.
	      if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
	        break;
	      }
	      var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? ' ' : diffstr[i][0];

	      if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
	        hunk.lines.push(diffstr[i]);
	        hunk.linedelimiters.push(delimiters[i] || '\n');

	        if (operation === '+') {
	          addCount++;
	        } else if (operation === '-') {
	          removeCount++;
	        } else if (operation === ' ') {
	          addCount++;
	          removeCount++;
	        }
	      } else {
	        break;
	      }
	    }

	    // Handle the empty block count case
	    if (!addCount && hunk.newLines === 1) {
	      hunk.newLines = 0;
	    }
	    if (!removeCount && hunk.oldLines === 1) {
	      hunk.oldLines = 0;
	    }

	    // Perform optional sanity checking
	    if (options.strict) {
	      if (addCount !== hunk.newLines) {
	        throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
	      }
	      if (removeCount !== hunk.oldLines) {
	        throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
	      }
	    }

	    return hunk;
	  }

	  while (i < diffstr.length) {
	    parseIndex();
	  }

	  return list;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9wYXJzZS5qcyJdLCJuYW1lcyI6WyJwYXJzZVBhdGNoIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJkaWZmc3RyIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJsaXN0IiwiaSIsInBhcnNlSW5kZXgiLCJpbmRleCIsInB1c2giLCJsZW5ndGgiLCJsaW5lIiwidGVzdCIsImhlYWRlciIsImV4ZWMiLCJwYXJzZUZpbGVIZWFkZXIiLCJodW5rcyIsInBhcnNlSHVuayIsInN0cmljdCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbGVIZWFkZXIiLCJrZXlQcmVmaXgiLCJkYXRhIiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwic3Vic3RyIiwidHJpbSIsImNodW5rSGVhZGVySW5kZXgiLCJjaHVua0hlYWRlckxpbmUiLCJjaHVua0hlYWRlciIsImh1bmsiLCJvbGRTdGFydCIsIm9sZExpbmVzIiwibmV3U3RhcnQiLCJuZXdMaW5lcyIsImxpbmVzIiwibGluZWRlbGltaXRlcnMiLCJhZGRDb3VudCIsInJlbW92ZUNvdW50IiwiaW5kZXhPZiIsIm9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Z0NBQWdCQSxVLEdBQUFBLFU7QUFBVCxTQUFTQSxVQUFULENBQW9CQyxPQUFwQixFQUEyQztBQUFBLHNEQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQ2hELE1BQUlDLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxxQkFBZCxDQUFkO0FBQUEsTUFDSUMsYUFBYUosUUFBUUssS0FBUixDQUFjLHNCQUFkLEtBQXlDLEVBRDFEO0FBQUEsTUFFSUMsT0FBTyxFQUZYO0FBQUEsTUFHSUMsSUFBSSxDQUhSOztBQUtBLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEIsUUFBSUMsUUFBUSxFQUFaO0FBQ0FILFNBQUtJLElBQUwsQ0FBVUQsS0FBVjs7QUFFQTtBQUNBLFdBQU9GLElBQUlMLFFBQVFTLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQUlDLE9BQU9WLFFB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RUFBb0I7QUFDbEIsVUFBSXFCLGFBQWFQLEtBQUtJLFFBQXRCLEVBQWdDO0FBQzlCLGNBQU0sSUFBSWpCLEtBQUosQ0FBVSxzREFBc0RVLG1CQUFtQixDQUF6RSxDQUFWLENBQU47QUFDRDtBQUNELFVBQUlXLGdCQUFnQlIsS0FBS0UsUUFBekIsRUFBbUM7QUFDakMsY0FBTSxJQUFJZixLQUFKLENBQVUsd0RBQXdEVSxtQkFBbUIsQ0FBM0UsQ0FBVixDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPRyxJQUFQO0FBQ0Q7O0FBRUQsU0FBTzFCLElBQUlMLFFBQVFTLE1BQW5CLEVBQTJCO0FBQ3pCSDtBQUNEOztBQUVELFNBQU9GLElBQVA7QUFDRCIsImZpbGUiOiJwYXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhdGNoKHVuaURpZmYsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGxldCBkaWZmc3RyID0gdW5pRGlmZi5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcclxuICAgICAgZGVsaW1pdGVycyA9IHVuaURpZmYubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxyXG4gICAgICBsaXN0ID0gW10sXHJcbiAgICAgIGkgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBwYXJzZUluZGV4KCkge1xyXG4gICAgbGV0IGluZGV4ID0ge307XHJcbiAgICBsaXN0LnB1c2goaW5kZXgpO1xyXG5cclxuICAgIC8vIFBhcnNlIGRpZmYgbWV0YWRhdGFcclxuICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcclxuICAgICAgbGV0IGxpbmUgPSBkaWZmc3RyW2ldO1xyXG5cclxuICAgICAgLy8gRmlsZSBoZWFkZXIgZm91bmQsIGVuZCBwYXJzaW5nIGRpZmYgbWV0YWRhdGFcclxuICAgICAgaWYgKC9eKFxcLVxcLVxcLXxcXCtcXCtcXCt8QEApXFxzLy50ZXN0KGxpbmUpKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERpZmYgaW5kZXhcclxuICAgICAgbGV0IGhlYWRlciA9ICgvXig/OkluZGV4OnxkaWZmKD86IC1yIFxcdyspKylcXHMrKC4rPylcXHMqJC8pLmV4ZWMobGluZSk7XHJcbiAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICBpbmRleC5pbmRleCA9IGhlYWRlclsxXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIGZpbGUgaGVhZGVycyBpZiB0aGV5IGFyZSBkZWZpbmVkLiBVbmlmaWVkIGRpZmYgcmVxdWlyZXMgdGhlbSwgYnV0XHJcbiAgICAvLyB0aGVyZSdzIG5vIHRlY2huaWNhbCBpc3N1ZXMgdG8gaGF2ZSBhbiBpc29sYXRlZCBodW5rIHdpdGhvdXQgZmlsZSBoZWFkZXJcclxuICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7XHJcbiAgICBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpO1xyXG5cclxuICAgIC8vIFBhcnNlIGh1bmtzXHJcbiAgICBpbmRleC5odW5rcyA9IFtdO1xyXG5cclxuICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcclxuICAgICAgbGV0IGxpbmUgPSBkaWZmc3RyW2ldO1xyXG5cclxuICAgICAgaWYgKC9eKEluZGV4OnxkaWZmfFxcLVxcLVxcLXxcXCtcXCtcXCspXFxzLy50ZXN0KGxpbmUpKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH0gZWxzZSBpZiAoL15AQC8udGVzdChsaW5lKSkge1xyXG4gICAgICAgIGluZGV4Lmh1bmtzLnB1c2gocGFyc2VIdW5rKCkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxpbmUgJiYgb3B0aW9ucy5zdHJpY3QpIHtcclxuICAgICAgICAvLyBJZ25vcmUgdW5leHBlY3RlZCBjb250ZW50IHVubGVzcyBpbiBzdHJpY3QgbW9kZVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsaW5lICcgKyAoaSArIDEpICsgJyAnICsgSlNPTi5zdHJpbmdpZnkobGluZSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUGFyc2VzIHRoZSAtLS0gYW5kICsrKyBoZWFkZXJzLCBpZiBub25lIGFyZSBmb3VuZCwgbm8gbGluZXNcclxuICAvLyBhcmUgY29uc3VtZWQuXHJcbiAgZnVuY3Rpb24gcGFyc2VGaWxlSGVhZGVyKGluZGV4KSB7XHJcbiAgICBjb25zdCBmaWxlSGVhZGVyID0gKC9eKC0tLXxcXCtcXCtcXCspXFxzKyguKikkLykuZXhlYyhkaWZmc3RyW2ldKTtcclxuICAgIGlmIChmaWxlSGVhZGVyKSB7XHJcbiAgICAgIGxldCBrZXlQcmVmaXggPSBmaWxlSGVhZGVyWzFdID09PSAnLS0tJyA/ICdvbGQnIDogJ25ldyc7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBmaWxlSGVhZGVyWzJdLnNwbGl0KCdcXHQnLCAyKTtcclxuICAgICAgbGV0IGZpbGVOYW1lID0gZGF0YVswXS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpO1xyXG4gICAgICBpZiAoL15cIi4qXCIkLy50ZXN0KGZpbGVOYW1lKSkge1xyXG4gICAgICAgIGZpbGVOYW1lID0gZmlsZU5hbWUuc3Vic3RyKDEsIGZpbGVOYW1lLmxlbmd0aCAtIDIpO1xyXG4gICAgICB9XHJcbiAgICAgIGluZGV4W2tleVByZWZpeCArICdGaWxlTmFtZSddID0gZmlsZU5hbWU7XHJcbiAgICAgIGluZGV4W2tleVByZWZpeCArICdIZWFkZXInXSA9IChkYXRhWzFdIHx8ICcnKS50cmltKCk7XHJcblxyXG4gICAgICBpKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBQYXJzZXMgYSBodW5rXHJcbiAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgd2UgYXJlIGF0IHRoZSBzdGFydCBvZiBhIGh1bmsuXHJcbiAgZnVuY3Rpb24gcGFyc2VIdW5rKCkge1xyXG4gICAgbGV0IGNodW5rSGVhZGVySW5kZXggPSBpLFxyXG4gICAgICAgIGNodW5rSGVhZGVyTGluZSA9IGRpZmZzdHJbaSsrXSxcclxuICAgICAgICBjaHVua0hlYWRlciA9IGNodW5rSGVhZGVyTGluZS5zcGxpdCgvQEAgLShcXGQrKSg/OiwoXFxkKykpPyBcXCsoXFxkKykoPzosKFxcZCspKT8gQEAvKTtcclxuXHJcbiAgICBsZXQgaHVuayA9IHtcclxuICAgICAgb2xkU3RhcnQ6ICtjaHVua0hlYWRlclsxXSxcclxuICAgICAgb2xkTGluZXM6ICtjaHVua0hlYWRlclsyXSB8fCAxLFxyXG4gICAgICBuZXdTdGFydDogK2NodW5rSGVhZGVyWzNdLFxyXG4gICAgICBuZXdMaW5lczogK2NodW5rSGVhZGVyWzRdIHx8IDEsXHJcbiAgICAgIGxpbmVzOiBbXSxcclxuICAgICAgbGluZWRlbGltaXRlcnM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBhZGRDb3VudCA9IDAsXHJcbiAgICAgICAgcmVtb3ZlQ291bnQgPSAwO1xyXG4gICAgZm9yICg7IGkgPCBkaWZmc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vIExpbmVzIHN0YXJ0aW5nIHdpdGggJy0tLScgY291bGQgYmUgbWlzdGFrZW4gZm9yIHRoZSBcInJlbW92ZSBsaW5lXCIgb3BlcmF0aW9uXHJcbiAgICAgIC8vIEJ1dCB0aGV5IGNvdWxkIGJlIHRoZSBoZWFkZXIgZm9yIHRoZSBuZXh0IGZpbGUuIFRoZXJlZm9yZSBwcnVuZSBzdWNoIGNhc2VzIG91dC5cclxuICAgICAgaWYgKGRpZmZzdHJbaV0uaW5kZXhPZignLS0tICcpID09PSAwXHJcbiAgICAgICAgICAgICYmIChpICsgMiA8IGRpZmZzdHIubGVuZ3RoKVxyXG4gICAgICAgICAgICAmJiBkaWZmc3RyW2kgKyAxXS5pbmRleE9mKCcrKysgJykgPT09IDBcclxuICAgICAgICAgICAgJiYgZGlmZnN0cltpICsgMl0uaW5kZXhPZignQEAnKSA9PT0gMCkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG9wZXJhdGlvbiA9IChkaWZmc3RyW2ldLmxlbmd0aCA9PSAwICYmIGkgIT0gKGRpZmZzdHIubGVuZ3RoIC0gMSkpID8gJyAnIDogZGlmZnN0cltpXVswXTtcclxuXHJcbiAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJyB8fCBvcGVyYXRpb24gPT09ICctJyB8fCBvcGVyYXRpb24gPT09ICcgJyB8fCBvcGVyYXRpb24gPT09ICdcXFxcJykge1xyXG4gICAgICAgIGh1bmsubGluZXMucHVzaChkaWZmc3RyW2ldKTtcclxuICAgICAgICBodW5rLmxpbmVkZWxpbWl0ZXJzLnB1c2goZGVsaW1pdGVyc1tpXSB8fCAnXFxuJyk7XHJcblxyXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xyXG4gICAgICAgICAgYWRkQ291bnQrKztcclxuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJy0nKSB7XHJcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnICcpIHtcclxuICAgICAgICAgIGFkZENvdW50Kys7XHJcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSB0aGUgZW1wdHkgYmxvY2sgY291bnQgY2FzZVxyXG4gICAgaWYgKCFhZGRDb3VudCAmJiBodW5rLm5ld0xpbmVzID09PSAxKSB7XHJcbiAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZW1vdmVDb3VudCAmJiBodW5rLm9sZExpbmVzID09PSAxKSB7XHJcbiAgICAgIGh1bmsub2xkTGluZXMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXHJcbiAgICBpZiAob3B0aW9ucy5zdHJpY3QpIHtcclxuICAgICAgaWYgKGFkZENvdW50ICE9PSBodW5rLm5ld0xpbmVzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBZGRlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlbW92ZUNvdW50ICE9PSBodW5rLm9sZExpbmVzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBodW5rO1xyXG4gIH1cclxuXHJcbiAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xyXG4gICAgcGFyc2VJbmRleCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuIl19


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = /*istanbul ignore end*/function (start, minLine, maxLine) {
	  var wantForward = true,
	      backwardExhausted = false,
	      forwardExhausted = false,
	      localOffset = 1;

	  return function iterator() {
	    if (wantForward && !forwardExhausted) {
	      if (backwardExhausted) {
	        localOffset++;
	      } else {
	        wantForward = false;
	      }

	      // Check if trying to fit beyond text length, and if not, check it fits
	      // after offset location (or desired location on first iteration)
	      if (start + localOffset <= maxLine) {
	        return localOffset;
	      }

	      forwardExhausted = true;
	    }

	    if (!backwardExhausted) {
	      if (!forwardExhausted) {
	        wantForward = true;
	      }

	      // Check if trying to fit before text beginning, and if not, check it fits
	      // before offset location
	      if (minLine <= start - localOffset) {
	        return -localOffset++;
	      }

	      backwardExhausted = true;
	      return iterator();
	    }

	    // We tried to fit hunk before text beginning and beyond text length, then
	    // hunk can't fit on the text. Return undefined
	  };
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwibWluTGluZSIsIm1heExpbmUiLCJ3YW50Rm9yd2FyZCIsImJhY2t3YXJkRXhoYXVzdGVkIiwiZm9yd2FyZEV4aGF1c3RlZCIsImxvY2FsT2Zmc2V0IiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs0Q0FHZSxVQUFTQSxLQUFULEVBQWdCQyxPQUFoQixFQUF5QkMsT0FBekIsRUFBa0M7QUFDL0MsTUFBSUMsY0FBYyxJQUFsQjtBQUFBLE1BQ0lDLG9CQUFvQixLQUR4QjtBQUFBLE1BRUlDLG1CQUFtQixLQUZ2QjtBQUFBLE1BR0lDLGNBQWMsQ0FIbEI7O0FBS0EsU0FBTyxTQUFTQyxRQUFULEdBQW9CO0FBQ3pCLFFBQUlKLGVBQWUsQ0FBQ0UsZ0JBQXBCLEVBQXNDO0FBQ3BDLFVBQUlELGlCQUFKLEVBQXVCO0FBQ3JCRTtBQUNELE9BRkQsTUFFTztBQUNMSCxzQkFBYyxLQUFkO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLFVBQUlILFFBQVFNLFdBQVIsSUFBdUJKLE9BQTNCLEVBQW9DO0FBQ2xDLGVBQU9JLFdBQVA7QUFDRDs7QUFFREQseUJBQW1CLElBQW5CO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDRCxpQkFBTCxFQUF3QjtBQUN0QixVQUFJLENBQUNDLGdCQUFMLEVBQXVCO0FBQ3JCRixzQkFBYyxJQUFkO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLFVBQUlGLFdBQVdELFFBQVFNLFdBQXZCLEVBQW9DO0FBQ2xDLGVBQU8sQ0FBQ0EsYUFBUjtBQUNEOztBQUVERiwwQkFBb0IsSUFBcEI7QUFDQSxhQUFPRyxVQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNELEdBbENEO0FBbUNELEMiLCJmaWxlIjoiZGlzdGFuY2UtaXRlcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJdGVyYXRvciB0aGF0IHRyYXZlcnNlcyBpbiB0aGUgcmFuZ2Ugb2YgW21pbiwgbWF4XSwgc3RlcHBpbmdcclxuLy8gYnkgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0YXJ0IHBvc2l0aW9uLiBJLmUuIGZvciBbMCwgNF0sIHdpdGhcclxuLy8gc3RhcnQgb2YgMiwgdGhpcyB3aWxsIGl0ZXJhdGUgMiwgMywgMSwgNCwgMC5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhcnQsIG1pbkxpbmUsIG1heExpbmUpIHtcclxuICBsZXQgd2FudEZvcndhcmQgPSB0cnVlLFxyXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxyXG4gICAgICBmb3J3YXJkRXhoYXVzdGVkID0gZmFsc2UsXHJcbiAgICAgIGxvY2FsT2Zmc2V0ID0gMTtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGl0ZXJhdG9yKCkge1xyXG4gICAgaWYgKHdhbnRGb3J3YXJkICYmICFmb3J3YXJkRXhoYXVzdGVkKSB7XHJcbiAgICAgIGlmIChiYWNrd2FyZEV4aGF1c3RlZCkge1xyXG4gICAgICAgIGxvY2FsT2Zmc2V0Kys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2FudEZvcndhcmQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZXlvbmQgdGV4dCBsZW5ndGgsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcclxuICAgICAgLy8gYWZ0ZXIgb2Zmc2V0IGxvY2F0aW9uIChvciBkZXNpcmVkIGxvY2F0aW9uIG9uIGZpcnN0IGl0ZXJhdGlvbilcclxuICAgICAgaWYgKHN0YXJ0ICsgbG9jYWxPZmZzZXQgPD0gbWF4TGluZSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbE9mZnNldDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFiYWNrd2FyZEV4aGF1c3RlZCkge1xyXG4gICAgICBpZiAoIWZvcndhcmRFeGhhdXN0ZWQpIHtcclxuICAgICAgICB3YW50Rm9yd2FyZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmVmb3JlIHRleHQgYmVnaW5uaW5nLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXHJcbiAgICAgIC8vIGJlZm9yZSBvZmZzZXQgbG9jYXRpb25cclxuICAgICAgaWYgKG1pbkxpbmUgPD0gc3RhcnQgLSBsb2NhbE9mZnNldCkge1xyXG4gICAgICAgIHJldHVybiAtbG9jYWxPZmZzZXQrKztcclxuICAgICAgfVxyXG5cclxuICAgICAgYmFja3dhcmRFeGhhdXN0ZWQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gaXRlcmF0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBXZSB0cmllZCB0byBmaXQgaHVuayBiZWZvcmUgdGV4dCBiZWdpbm5pbmcgYW5kIGJleW9uZCB0ZXh0IGxlbmd0aCwgdGhlblxyXG4gICAgLy8gaHVuayBjYW4ndCBmaXQgb24gdGhlIHRleHQuIFJldHVybiB1bmRlZmluZWRcclxuICB9O1xyXG59XHJcbiJdfQ==


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports. /*istanbul ignore end*/calcLineCount = calcLineCount;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/merge = merge;

	var /*istanbul ignore start*/_create = __webpack_require__(14) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_array = __webpack_require__(15) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/*istanbul ignore end*/function calcLineCount(hunk) {
	  /*istanbul ignore start*/var _calcOldNewLineCount = /*istanbul ignore end*/calcOldNewLineCount(hunk.lines),
	      oldLines = _calcOldNewLineCount.oldLines,
	      newLines = _calcOldNewLineCount.newLines;

	  if (oldLines !== undefined) {
	    hunk.oldLines = oldLines;
	  } else {
	    delete hunk.oldLines;
	  }

	  if (newLines !== undefined) {
	    hunk.newLines = newLines;
	  } else {
	    delete hunk.newLines;
	  }
	}

	function merge(mine, theirs, base) {
	  mine = loadPatch(mine, base);
	  theirs = loadPatch(theirs, base);

	  var ret = {};

	  // For index we just let it pass through as it doesn't have any necessary meaning.
	  // Leaving sanity checks on this to the API consumer that may know more about the
	  // meaning in their own context.
	  if (mine.index || theirs.index) {
	    ret.index = mine.index || theirs.index;
	  }

	  if (mine.newFileName || theirs.newFileName) {
	    if (!fileNameChanged(mine)) {
	      // No header or no change in ours, use theirs (and ours if theirs does not exist)
	      ret.oldFileName = theirs.oldFileName || mine.oldFileName;
	      ret.newFileName = theirs.newFileName || mine.newFileName;
	      ret.oldHeader = theirs.oldHeader || mine.oldHeader;
	      ret.newHeader = theirs.newHeader || mine.newHeader;
	    } else if (!fileNameChanged(theirs)) {
	      // No header or no change in theirs, use ours
	      ret.oldFileName = mine.oldFileName;
	      ret.newFileName = mine.newFileName;
	      ret.oldHeader = mine.oldHeader;
	      ret.newHeader = mine.newHeader;
	    } else {
	      // Both changed... figure it out
	      ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
	      ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
	      ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
	      ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
	    }
	  }

	  ret.hunks = [];

	  var mineIndex = 0,
	      theirsIndex = 0,
	      mineOffset = 0,
	      theirsOffset = 0;

	  while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
	    var mineCurrent = mine.hunks[mineIndex] || { oldStart: Infinity },
	        theirsCurrent = theirs.hunks[theirsIndex] || { oldStart: Infinity };

	    if (hunkBefore(mineCurrent, theirsCurrent)) {
	      // This patch does not overlap with any of the others, yay.
	      ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
	      mineIndex++;
	      theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
	    } else if (hunkBefore(theirsCurrent, mineCurrent)) {
	      // This patch does not overlap with any of the others, yay.
	      ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
	      theirsIndex++;
	      mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
	    } else {
	      // Overlap, merge as best we can
	      var mergedHunk = {
	        oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
	        oldLines: 0,
	        newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
	        newLines: 0,
	        lines: []
	      };
	      mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
	      theirsIndex++;
	      mineIndex++;

	      ret.hunks.push(mergedHunk);
	    }
	  }

	  return ret;
	}

	function loadPatch(param, base) {
	  if (typeof param === 'string') {
	    if (/^@@/m.test(param) || /^Index:/m.test(param)) {
	      return (/*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(param)[0]
	      );
	    }

	    if (!base) {
	      throw new Error('Must provide a base reference or pass in a patch');
	    }
	    return (/*istanbul ignore start*/(0, _create.structuredPatch) /*istanbul ignore end*/(undefined, undefined, base, param)
	    );
	  }

	  return param;
	}

	function fileNameChanged(patch) {
	  return patch.newFileName && patch.newFileName !== patch.oldFileName;
	}

	function selectField(index, mine, theirs) {
	  if (mine === theirs) {
	    return mine;
	  } else {
	    index.conflict = true;
	    return { mine: mine, theirs: theirs };
	  }
	}

	function hunkBefore(test, check) {
	  return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
	}

	function cloneHunk(hunk, offset) {
	  return {
	    oldStart: hunk.oldStart, oldLines: hunk.oldLines,
	    newStart: hunk.newStart + offset, newLines: hunk.newLines,
	    lines: hunk.lines
	  };
	}

	function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
	  // This will generally result in a conflicted hunk, but there are cases where the context
	  // is the only overlap where we can successfully merge the content here.
	  var mine = { offset: mineOffset, lines: mineLines, index: 0 },
	      their = { offset: theirOffset, lines: theirLines, index: 0 };

	  // Handle any leading content
	  insertLeading(hunk, mine, their);
	  insertLeading(hunk, their, mine);

	  // Now in the overlap content. Scan through and select the best changes from each.
	  while (mine.index < mine.lines.length && their.index < their.lines.length) {
	    var mineCurrent = mine.lines[mine.index],
	        theirCurrent = their.lines[their.index];

	    if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
	      // Both modified ...
	      mutualChange(hunk, mine, their);
	    } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
	      /*istanbul ignore start*/var _hunk$lines;

	      /*istanbul ignore end*/ // Mine inserted
	      /*istanbul ignore start*/(_hunk$lines = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/collectChange(mine)));
	    } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
	      /*istanbul ignore start*/var _hunk$lines2;

	      /*istanbul ignore end*/ // Theirs inserted
	      /*istanbul ignore start*/(_hunk$lines2 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/collectChange(their)));
	    } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
	      // Mine removed or edited
	      removal(hunk, mine, their);
	    } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
	      // Their removed or edited
	      removal(hunk, their, mine, true);
	    } else if (mineCurrent === theirCurrent) {
	      // Context identity
	      hunk.lines.push(mineCurrent);
	      mine.index++;
	      their.index++;
	    } else {
	      // Context mismatch
	      conflict(hunk, collectChange(mine), collectChange(their));
	    }
	  }

	  // Now push anything that may be remaining
	  insertTrailing(hunk, mine);
	  insertTrailing(hunk, their);

	  calcLineCount(hunk);
	}

	function mutualChange(hunk, mine, their) {
	  var myChanges = collectChange(mine),
	      theirChanges = collectChange(their);

	  if (allRemoves(myChanges) && allRemoves(theirChanges)) {
	    // Special case for remove changes that are supersets of one another
	    if ( /*istanbul ignore start*/(0, _array.arrayStartsWith) /*istanbul ignore end*/(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
	      /*istanbul ignore start*/var _hunk$lines3;

	      /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines3 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/myChanges));
	      return;
	    } else if ( /*istanbul ignore start*/(0, _array.arrayStartsWith) /*istanbul ignore end*/(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
	      /*istanbul ignore start*/var _hunk$lines4;

	      /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines4 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines4 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/theirChanges));
	      return;
	    }
	  } else if ( /*istanbul ignore start*/(0, _array.arrayEqual) /*istanbul ignore end*/(myChanges, theirChanges)) {
	    /*istanbul ignore start*/var _hunk$lines5;

	    /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines5 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines5 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/myChanges));
	    return;
	  }

	  conflict(hunk, myChanges, theirChanges);
	}

	function removal(hunk, mine, their, swap) {
	  var myChanges = collectChange(mine),
	      theirChanges = collectContext(their, myChanges);
	  if (theirChanges.merged) {
	    /*istanbul ignore start*/var _hunk$lines6;

	    /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines6 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines6 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/theirChanges.merged));
	  } else {
	    conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
	  }
	}

	function conflict(hunk, mine, their) {
	  hunk.conflict = true;
	  hunk.lines.push({
	    conflict: true,
	    mine: mine,
	    theirs: their
	  });
	}

	function insertLeading(hunk, insert, their) {
	  while (insert.offset < their.offset && insert.index < insert.lines.length) {
	    var line = insert.lines[insert.index++];
	    hunk.lines.push(line);
	    insert.offset++;
	  }
	}
	function insertTrailing(hunk, insert) {
	  while (insert.index < insert.lines.length) {
	    var line = insert.lines[insert.index++];
	    hunk.lines.push(line);
	  }
	}

	function collectChange(state) {
	  var ret = [],
	      operation = state.lines[state.index][0];
	  while (state.index < state.lines.length) {
	    var line = state.lines[state.index];

	    // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.
	    if (operation === '-' && line[0] === '+') {
	      operation = '+';
	    }

	    if (operation === line[0]) {
	      ret.push(line);
	      state.index++;
	    } else {
	      break;
	    }
	  }

	  return ret;
	}
	function collectContext(state, matchChanges) {
	  var changes = [],
	      merged = [],
	      matchIndex = 0,
	      contextChanges = false,
	      conflicted = false;
	  while (matchIndex < matchChanges.length && state.index < state.lines.length) {
	    var change = state.lines[state.index],
	        match = matchChanges[matchIndex];

	    // Once we've hit our add, then we are done
	    if (match[0] === '+') {
	      break;
	    }

	    contextChanges = contextChanges || change[0] !== ' ';

	    merged.push(match);
	    matchIndex++;

	    // Consume any additions in the other block as a conflict to attempt
	    // to pull in the remaining context after this
	    if (change[0] === '+') {
	      conflicted = true;

	      while (change[0] === '+') {
	        changes.push(change);
	        change = state.lines[++state.index];
	      }
	    }

	    if (match.substr(1) === change.substr(1)) {
	      changes.push(change);
	      state.index++;
	    } else {
	      conflicted = true;
	    }
	  }

	  if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
	    conflicted = true;
	  }

	  if (conflicted) {
	    return changes;
	  }

	  while (matchIndex < matchChanges.length) {
	    merged.push(matchChanges[matchIndex++]);
	  }

	  return {
	    merged: merged,
	    changes: changes
	  };
	}

	function allRemoves(changes) {
	  return changes.reduce(function (prev, change) {
	    return prev && change[0] === '-';
	  }, true);
	}
	function skipRemoveSuperset(state, removeChanges, delta) {
	  for (var i = 0; i < delta; i++) {
	    var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
	    if (state.lines[state.index + i] !== ' ' + changeContent) {
	      return false;
	    }
	  }

	  state.index += delta;
	  return true;
	}

	function calcOldNewLineCount(lines) {
	  var oldLines = 0;
	  var newLines = 0;

	  lines.forEach(function (line) {
	    if (typeof line !== 'string') {
	      var myCount = calcOldNewLineCount(line.mine);
	      var theirCount = calcOldNewLineCount(line.theirs);

	      if (oldLines !== undefined) {
	        if (myCount.oldLines === theirCount.oldLines) {
	          oldLines += myCount.oldLines;
	        } else {
	          oldLines = undefined;
	        }
	      }

	      if (newLines !== undefined) {
	        if (myCount.newLines === theirCount.newLines) {
	          newLines += myCount.newLines;
	        } else {
	          newLines = undefined;
	        }
	      }
	    } else {
	      if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
	        newLines++;
	      }
	      if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
	        oldLines++;
	      }
	    }
	  });

	  return { oldLines: oldLines, newLines: newLines };
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9tZXJnZS5qcyJdLCJuYW1lcyI6WyJjYWxjTGluZUNvdW50IiwibWVyZ2UiLCJodW5rIiwiY2FsY09sZE5ld0xpbmVDb3VudCIsImxpbmVzIiwib2xkTGluZXMiLCJuZXdMaW5lcyIsInVuZGVmaW5lZCIsIm1pbmUiLCJ0aGVpcnMiLCJiYXNlIiwibG9hZFBhdGNoIiwicmV0IiwiaW5kZXgiLCJuZXdGaWxlTmFtZSIsImZpbGVOYW1lQ2hhbmdlZCIsIm9sZEZpbGVOYW1lIiwib2xkSGVhZGVyIiwibmV3SGVhZGVyIiwic2VsZWN0RmllbGQiLCJodW5rcyIsIm1pbmVJbmRleCIsInRoZWlyc0luZGV4IiwibWluZU9mZnNldCIsInRoZWlyc09mZnNldCIsImxlbmd0aCIsIm1pbmVDdXJyZW50Iiwib2xkU3RhcnQiLCJJbmZpbml0eSIsInRoZWlyc0N1cnJlbnQiLCJodW5rQmVmb3JlIiwicHVzaCIsImNsb25lSHVuayIsIm1lcmdlZEh1bmsiLCJNYXRoIiwibWluIiwibmV3U3RhcnQiLCJtZXJnZUxpbmVzIiwicGFyYW0iLCJ0ZXN0IiwiRXJyb3IiLCJwYXRjaCIsImNvbmZsaWN0IiwiY2hlY2siLCJvZmZzZXQiLCJtaW5lTGluZXMiLCJ0aGVpck9mZnNldCIsInRoZWlyTGluZXMiLCJ0aGVpciIsImluc2VydExlYWRpbmciLCJ0aGVpckN1cnJlbnQiLCJtdXR1YWxDaGFuZ2UiLCJjb2xsZWN0Q2hhbmdlIiwicmVtb3ZhbCIsImluc2VydFRyYWlsaW5nIiwibXlDaGFuZ2VzIiwidGhlaXJDaGFuZ2VzIiwiYWxsUmVtb3ZlcyIsInNraXBSZW1vdmVTdXBlcnNldCIsInN3YXAiLCJjb2xsZWN0Q29udGV4dCIsIm1lcmdlZCIsImluc2VydCIsImxpbmUiLCJzdGF0ZSIsIm9wZXJhdGlvbiIsIm1hdGNoQ2hhbmdlcyIsImNoYW5nZXMiLCJtYXRjaEluZGV4IiwiY29udGV4dENoYW5nZXMiLCJjb25mbGljdGVkIiwiY2hhbmdlIiwibWF0Y2giLCJzdWJzdHIiLCJyZWR1Y2UiLCJwcmV2IiwicmVtb3ZlQ2hhbmdlcyIsImRlbHRhIiwiaSIsImNoYW5nZUNvbnRlbnQiLCJmb3JFYWNoIiwibXlDb3VudCIsInRoZWlyQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7O2dDQUtnQkEsYSxHQUFBQSxhO3lEQWdCQUMsSyxHQUFBQSxLOztBQXJCaEI7O0FBQ0E7O0FBRUE7Ozs7dUJBRU8sU0FBU0QsYUFBVCxDQUF1QkUsSUFBdkIsRUFBNkI7QUFBQSw2RUFDTEMsb0JBQW9CRCxLQUFLRSxLQUF6QixDQURLO0FBQUEsTUFDM0JDLFFBRDJCLHdCQUMzQkEsUUFEMkI7QUFBQSxNQUNqQkMsUUFEaUIsd0JBQ2pCQSxRQURpQjs7QUFHbEMsTUFBSUQsYUFBYUUsU0FBakIsRUFBNEI7QUFDMUJMLFNBQUtHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT0gsS0FBS0csUUFBWjtBQUNEOztBQUVELE1BQUlDLGFBQWFDLFNBQWpCLEVBQTRCO0FBQzFCTCxTQUFLSSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9KLEtBQUtJLFFBQVo7QUFDRDtBQUNGOztBQUVNLFNBQVNMLEtBQVQsQ0FBZU8sSUFBZixFQUFxQkMsTUFBckIsRUFBNkJDLElBQTdCLEVBQW1DO0FBQ3hDRixTQUFPRyxVQUFVSCxJQUFWLEVBQWdCRSxJQUFoQixDQUFQO0FBQ0FELFdBQVNFLFVBQVVGLE1BQVYsRUFBa0JDLElBQWxCLENBQVQ7O0FBRUEsTUFBSUUsTUFBTSxFQUFWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUlKLEtBQUtLLEtBQUwsSUFBY0osT0FBT0ksS0FBekIsRUFBZ0M7QUFDOUJELFFBQUlDLEtBQUosR0FBWUwsS0FBS0ssS0FBTCxJQUFjSixPQUFPSSxLQUFqQztBQUNEOztBQUVELE1BQUlMLEtBQUtNLFdBQUwsSUFBb0JMLE9BQU9LLFdBQS9CLEVBQTRDO0FBQzFDLFFBQUksQ0FBQ0MsZ0JBQWdCUCxJQUFoQixDQUFM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QUFDRDtBQUNGOztBQUVELFVBQUlELGFBQWFDLFNBQWpCLEVBQTRCO0FBQzFCLFlBQUkwRSxRQUFRM0UsUUFBUixLQUFxQjRFLFdBQVc1RSxRQUFwQyxFQUE4QztBQUM1Q0Esc0JBQVkyRSxRQUFRM0UsUUFBcEI7QUFDRCxTQUZELE1BRU87QUFDTEEscUJBQVdDLFNBQVg7QUFDRDtBQUNGO0FBQ0YsS0FuQkQsTUFtQk87QUFDTCxVQUFJRCxhQUFhQyxTQUFiLEtBQTJCd0QsS0FBSyxDQUFMLE1BQVksR0FBWixJQUFtQkEsS0FBSyxDQUFMLE1BQVksR0FBMUQsQ0FBSixFQUFvRTtBQUNsRXpEO0FBQ0Q7QUFDRCxVQUFJRCxhQUFhRSxTQUFiLEtBQTJCd0QsS0FBSyxDQUFMLE1BQVksR0FBWixJQUFtQkEsS0FBSyxDQUFMLE1BQVksR0FBMUQsQ0FBSixFQUFvRTtBQUNsRTFEO0FBQ0Q7QUFDRjtBQUNGLEdBNUJEOztBQThCQSxTQUFPLEVBQUNBLGtCQUFELEVBQVdDLGtCQUFYLEVBQVA7QUFDRCIsImZpbGUiOiJtZXJnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c3RydWN0dXJlZFBhdGNofSBmcm9tICcuL2NyZWF0ZSc7XHJcbmltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XHJcblxyXG5pbXBvcnQge2FycmF5RXF1YWwsIGFycmF5U3RhcnRzV2l0aH0gZnJvbSAnLi4vdXRpbC9hcnJheSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY0xpbmVDb3VudChodW5rKSB7XHJcbiAgY29uc3Qge29sZExpbmVzLCBuZXdMaW5lc30gPSBjYWxjT2xkTmV3TGluZUNvdW50KGh1bmsubGluZXMpO1xyXG5cclxuICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgaHVuay5vbGRMaW5lcyA9IG9sZExpbmVzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZWxldGUgaHVuay5vbGRMaW5lcztcclxuICB9XHJcblxyXG4gIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBodW5rLm5ld0xpbmVzID0gbmV3TGluZXM7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlbGV0ZSBodW5rLm5ld0xpbmVzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKG1pbmUsIHRoZWlycywgYmFzZSkge1xyXG4gIG1pbmUgPSBsb2FkUGF0Y2gobWluZSwgYmFzZSk7XHJcbiAgdGhlaXJzID0gbG9hZFBhdGNoKHRoZWlycywgYmFzZSk7XHJcblxyXG4gIGxldCByZXQgPSB7fTtcclxuXHJcbiAgLy8gRm9yIGluZGV4IHdlIGp1c3QgbGV0IGl0IHBhc3MgdGhyb3VnaCBhcyBpdCBkb2Vzbid0IGhhdmUgYW55IG5lY2Vzc2FyeSBtZWFuaW5nLlxyXG4gIC8vIExlYXZpbmcgc2FuaXR5IGNoZWNrcyBvbiB0aGlzIHRvIHRoZSBBUEkgY29uc3VtZXIgdGhhdCBtYXkga25vdyBtb3JlIGFib3V0IHRoZVxyXG4gIC8vIG1lYW5pbmcgaW4gdGhlaXIgb3duIGNvbnRleHQuXHJcbiAgaWYgKG1pbmUuaW5kZXggfHwgdGhlaXJzLmluZGV4KSB7XHJcbiAgICByZXQuaW5kZXggPSBtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleDtcclxuICB9XHJcblxyXG4gIGlmIChtaW5lLm5ld0ZpbGVOYW1lIHx8IHRoZWlycy5uZXdGaWxlTmFtZSkge1xyXG4gICAgaWYgKCFmaWxlTmFtZUNoYW5nZWQobWluZSkpIHtcclxuICAgICAgLy8gTm8gaGVhZGVyIG9yIG5vIGNoYW5nZSBpbiBvdXJzLCB1c2UgdGhlaXJzIChhbmQgb3VycyBpZiB0aGVpcnMgZG9lcyBub3QgZXhpc3QpXHJcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHRoZWlycy5vbGRGaWxlTmFtZSB8fCBtaW5lLm9sZEZpbGVOYW1lO1xyXG4gICAgICByZXQubmV3RmlsZU5hbWUgPSB0aGVpcnMubmV3RmlsZU5hbWUgfHwgbWluZS5uZXdGaWxlTmFtZTtcclxuICAgICAgcmV0Lm9sZEhlYWRlciA9IHRoZWlycy5vbGRIZWFkZXIgfHwgbWluZS5vbGRIZWFkZXI7XHJcbiAgICAgIHJldC5uZXdIZWFkZXIgPSB0aGVpcnMubmV3SGVhZGVyIHx8IG1pbmUubmV3SGVhZGVyO1xyXG4gICAgfSBlbHNlIGlmICghZmlsZU5hbWVDaGFuZ2VkKHRoZWlycykpIHtcclxuICAgICAgLy8gTm8gaGVhZGVyIG9yIG5vIGNoYW5nZSBpbiB0aGVpcnMsIHVzZSBvdXJzXHJcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IG1pbmUub2xkRmlsZU5hbWU7XHJcbiAgICAgIHJldC5uZXdGaWxlTmFtZSA9IG1pbmUubmV3RmlsZU5hbWU7XHJcbiAgICAgIHJldC5vbGRIZWFkZXIgPSBtaW5lLm9sZEhlYWRlcjtcclxuICAgICAgcmV0Lm5ld0hlYWRlciA9IG1pbmUubmV3SGVhZGVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQm90aCBjaGFuZ2VkLi4uIGZpZ3VyZSBpdCBvdXRcclxuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEZpbGVOYW1lLCB0aGVpcnMub2xkRmlsZU5hbWUpO1xyXG4gICAgICByZXQubmV3RmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUubmV3RmlsZU5hbWUsIHRoZWlycy5uZXdGaWxlTmFtZSk7XHJcbiAgICAgIHJldC5vbGRIZWFkZXIgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUub2xkSGVhZGVyLCB0aGVpcnMub2xkSGVhZGVyKTtcclxuICAgICAgcmV0Lm5ld0hlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5uZXdIZWFkZXIsIHRoZWlycy5uZXdIZWFkZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0Lmh1bmtzID0gW107XHJcblxyXG4gIGxldCBtaW5lSW5kZXggPSAwLFxyXG4gICAgICB0aGVpcnNJbmRleCA9IDAsXHJcbiAgICAgIG1pbmVPZmZzZXQgPSAwLFxyXG4gICAgICB0aGVpcnNPZmZzZXQgPSAwO1xyXG5cclxuICB3aGlsZSAobWluZUluZGV4IDwgbWluZS5odW5rcy5sZW5ndGggfHwgdGhlaXJzSW5kZXggPCB0aGVpcnMuaHVua3MubGVuZ3RoKSB7XHJcbiAgICBsZXQgbWluZUN1cnJlbnQgPSBtaW5lLmh1bmtzW21pbmVJbmRleF0gfHwge29sZFN0YXJ0OiBJbmZpbml0eX0sXHJcbiAgICAgICAgdGhlaXJzQ3VycmVudCA9IHRoZWlycy5odW5rc1t0aGVpcnNJbmRleF0gfHwge29sZFN0YXJ0OiBJbmZpbml0eX07XHJcblxyXG4gICAgaWYgKGh1bmtCZWZvcmUobWluZUN1cnJlbnQsIHRoZWlyc0N1cnJlbnQpKSB7XHJcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXHJcbiAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayhtaW5lQ3VycmVudCwgbWluZU9mZnNldCkpO1xyXG4gICAgICBtaW5lSW5kZXgrKztcclxuICAgICAgdGhlaXJzT2Zmc2V0ICs9IG1pbmVDdXJyZW50Lm5ld0xpbmVzIC0gbWluZUN1cnJlbnQub2xkTGluZXM7XHJcbiAgICB9IGVsc2UgaWYgKGh1bmtCZWZvcmUodGhlaXJzQ3VycmVudCwgbWluZUN1cnJlbnQpKSB7XHJcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXHJcbiAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayh0aGVpcnNDdXJyZW50LCB0aGVpcnNPZmZzZXQpKTtcclxuICAgICAgdGhlaXJzSW5kZXgrKztcclxuICAgICAgbWluZU9mZnNldCArPSB0aGVpcnNDdXJyZW50Lm5ld0xpbmVzIC0gdGhlaXJzQ3VycmVudC5vbGRMaW5lcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE92ZXJsYXAsIG1lcmdlIGFzIGJlc3Qgd2UgY2FuXHJcbiAgICAgIGxldCBtZXJnZWRIdW5rID0ge1xyXG4gICAgICAgIG9sZFN0YXJ0OiBNYXRoLm1pbihtaW5lQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCksXHJcbiAgICAgICAgb2xkTGluZXM6IDAsXHJcbiAgICAgICAgbmV3U3RhcnQ6IE1hdGgubWluKG1pbmVDdXJyZW50Lm5ld1N0YXJ0ICsgbWluZU9mZnNldCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCArIHRoZWlyc09mZnNldCksXHJcbiAgICAgICAgbmV3TGluZXM6IDAsXHJcbiAgICAgICAgbGluZXM6IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIG1lcmdlTGluZXMobWVyZ2VkSHVuaywgbWluZUN1cnJlbnQub2xkU3RhcnQsIG1pbmVDdXJyZW50LmxpbmVzLCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0LCB0aGVpcnNDdXJyZW50LmxpbmVzKTtcclxuICAgICAgdGhlaXJzSW5kZXgrKztcclxuICAgICAgbWluZUluZGV4Kys7XHJcblxyXG4gICAgICByZXQuaHVua3MucHVzaChtZXJnZWRIdW5rKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQYXRjaChwYXJhbSwgYmFzZSkge1xyXG4gIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICBpZiAoL15AQC9tLnRlc3QocGFyYW0pIHx8ICgvXkluZGV4Oi9tLnRlc3QocGFyYW0pKSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VQYXRjaChwYXJhbSlbMF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFiYXNlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGEgYmFzZSByZWZlcmVuY2Ugb3IgcGFzcyBpbiBhIHBhdGNoJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RydWN0dXJlZFBhdGNoKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBiYXNlLCBwYXJhbSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyYW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGVOYW1lQ2hhbmdlZChwYXRjaCkge1xyXG4gIHJldHVybiBwYXRjaC5uZXdGaWxlTmFtZSAmJiBwYXRjaC5uZXdGaWxlTmFtZSAhPT0gcGF0Y2gub2xkRmlsZU5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdEZpZWxkKGluZGV4LCBtaW5lLCB0aGVpcnMpIHtcclxuICBpZiAobWluZSA9PT0gdGhlaXJzKSB7XHJcbiAgICByZXR1cm4gbWluZTtcclxuICB9IGVsc2Uge1xyXG4gICAgaW5kZXguY29uZmxpY3QgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHttaW5lLCB0aGVpcnN9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaHVua0JlZm9yZSh0ZXN0LCBjaGVjaykge1xyXG4gIHJldHVybiB0ZXN0Lm9sZFN0YXJ0IDwgY2hlY2sub2xkU3RhcnRcclxuICAgICYmICh0ZXN0Lm9sZFN0YXJ0ICsgdGVzdC5vbGRMaW5lcykgPCBjaGVjay5vbGRTdGFydDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVIdW5rKGh1bmssIG9mZnNldCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBvbGRTdGFydDogaHVuay5vbGRTdGFydCwgb2xkTGluZXM6IGh1bmsub2xkTGluZXMsXHJcbiAgICBuZXdTdGFydDogaHVuay5uZXdTdGFydCArIG9mZnNldCwgbmV3TGluZXM6IGh1bmsubmV3TGluZXMsXHJcbiAgICBsaW5lczogaHVuay5saW5lc1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlTGluZXMoaHVuaywgbWluZU9mZnNldCwgbWluZUxpbmVzLCB0aGVpck9mZnNldCwgdGhlaXJMaW5lcykge1xyXG4gIC8vIFRoaXMgd2lsbCBnZW5lcmFsbHkgcmVzdWx0IGluIGEgY29uZmxpY3RlZCBodW5rLCBidXQgdGhlcmUgYXJlIGNhc2VzIHdoZXJlIHRoZSBjb250ZXh0XHJcbiAgLy8gaXMgdGhlIG9ubHkgb3ZlcmxhcCB3aGVyZSB3ZSBjYW4gc3VjY2Vzc2Z1bGx5IG1lcmdlIHRoZSBjb250ZW50IGhlcmUuXHJcbiAgbGV0IG1pbmUgPSB7b2Zmc2V0OiBtaW5lT2Zmc2V0LCBsaW5lczogbWluZUxpbmVzLCBpbmRleDogMH0sXHJcbiAgICAgIHRoZWlyID0ge29mZnNldDogdGhlaXJPZmZzZXQsIGxpbmVzOiB0aGVpckxpbmVzLCBpbmRleDogMH07XHJcblxyXG4gIC8vIEhhbmRsZSBhbnkgbGVhZGluZyBjb250ZW50XHJcbiAgaW5zZXJ0TGVhZGluZyhodW5rLCBtaW5lLCB0aGVpcik7XHJcbiAgaW5zZXJ0TGVhZGluZyhodW5rLCB0aGVpciwgbWluZSk7XHJcblxyXG4gIC8vIE5vdyBpbiB0aGUgb3ZlcmxhcCBjb250ZW50LiBTY2FuIHRocm91Z2ggYW5kIHNlbGVjdCB0aGUgYmVzdCBjaGFuZ2VzIGZyb20gZWFjaC5cclxuICB3aGlsZSAobWluZS5pbmRleCA8IG1pbmUubGluZXMubGVuZ3RoICYmIHRoZWlyLmluZGV4IDwgdGhlaXIubGluZXMubGVuZ3RoKSB7XHJcbiAgICBsZXQgbWluZUN1cnJlbnQgPSBtaW5lLmxpbmVzW21pbmUuaW5kZXhdLFxyXG4gICAgICAgIHRoZWlyQ3VycmVudCA9IHRoZWlyLmxpbmVzW3RoZWlyLmluZGV4XTtcclxuXHJcbiAgICBpZiAoKG1pbmVDdXJyZW50WzBdID09PSAnLScgfHwgbWluZUN1cnJlbnRbMF0gPT09ICcrJylcclxuICAgICAgICAmJiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgfHwgdGhlaXJDdXJyZW50WzBdID09PSAnKycpKSB7XHJcbiAgICAgIC8vIEJvdGggbW9kaWZpZWQgLi4uXHJcbiAgICAgIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcik7XHJcbiAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnKycgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcclxuICAgICAgLy8gTWluZSBpbnNlcnRlZFxyXG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIGNvbGxlY3RDaGFuZ2UobWluZSkpO1xyXG4gICAgfSBlbHNlIGlmICh0aGVpckN1cnJlbnRbMF0gPT09ICcrJyAmJiBtaW5lQ3VycmVudFswXSA9PT0gJyAnKSB7XHJcbiAgICAgIC8vIFRoZWlycyBpbnNlcnRlZFxyXG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIGNvbGxlY3RDaGFuZ2UodGhlaXIpKTtcclxuICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICctJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xyXG4gICAgICAvLyBNaW5lIHJlbW92ZWQgb3IgZWRpdGVkXHJcbiAgICAgIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIpO1xyXG4gICAgfSBlbHNlIGlmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyAmJiBtaW5lQ3VycmVudFswXSA9PT0gJyAnKSB7XHJcbiAgICAgIC8vIFRoZWlyIHJlbW92ZWQgb3IgZWRpdGVkXHJcbiAgICAgIHJlbW92YWwoaHVuaywgdGhlaXIsIG1pbmUsIHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudCA9PT0gdGhlaXJDdXJyZW50KSB7XHJcbiAgICAgIC8vIENvbnRleHQgaWRlbnRpdHlcclxuICAgICAgaHVuay5saW5lcy5wdXNoKG1pbmVDdXJyZW50KTtcclxuICAgICAgbWluZS5pbmRleCsrO1xyXG4gICAgICB0aGVpci5pbmRleCsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ29udGV4dCBtaXNtYXRjaFxyXG4gICAgICBjb25mbGljdChodW5rLCBjb2xsZWN0Q2hhbmdlKG1pbmUpLCBjb2xsZWN0Q2hhbmdlKHRoZWlyKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBOb3cgcHVzaCBhbnl0aGluZyB0aGF0IG1heSBiZSByZW1haW5pbmdcclxuICBpbnNlcnRUcmFpbGluZyhodW5rLCBtaW5lKTtcclxuICBpbnNlcnRUcmFpbGluZyhodW5rLCB0aGVpcik7XHJcblxyXG4gIGNhbGNMaW5lQ291bnQoaHVuayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcikge1xyXG4gIGxldCBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxyXG4gICAgICB0aGVpckNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKHRoZWlyKTtcclxuXHJcbiAgaWYgKGFsbFJlbW92ZXMobXlDaGFuZ2VzKSAmJiBhbGxSZW1vdmVzKHRoZWlyQ2hhbmdlcykpIHtcclxuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgcmVtb3ZlIGNoYW5nZXMgdGhhdCBhcmUgc3VwZXJzZXRzIG9mIG9uZSBhbm90aGVyXHJcbiAgICBpZiAoYXJyYXlTdGFydHNXaXRoKG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKVxyXG4gICAgICAgICYmIHNraXBSZW1vdmVTdXBlcnNldCh0aGVpciwgbXlDaGFuZ2VzLCBteUNoYW5nZXMubGVuZ3RoIC0gdGhlaXJDaGFuZ2VzLmxlbmd0aCkpIHtcclxuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBteUNoYW5nZXMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGFycmF5U3RhcnRzV2l0aCh0aGVpckNoYW5nZXMsIG15Q2hhbmdlcylcclxuICAgICAgICAmJiBza2lwUmVtb3ZlU3VwZXJzZXQobWluZSwgdGhlaXJDaGFuZ2VzLCB0aGVpckNoYW5nZXMubGVuZ3RoIC0gbXlDaGFuZ2VzLmxlbmd0aCkpIHtcclxuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiB0aGVpckNoYW5nZXMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChhcnJheUVxdWFsKG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKSkge1xyXG4gICAgaHVuay5saW5lcy5wdXNoKC4uLiBteUNoYW5nZXMpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uZmxpY3QoaHVuaywgbXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyLCBzd2FwKSB7XHJcbiAgbGV0IG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXHJcbiAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDb250ZXh0KHRoZWlyLCBteUNoYW5nZXMpO1xyXG4gIGlmICh0aGVpckNoYW5nZXMubWVyZ2VkKSB7XHJcbiAgICBodW5rLmxpbmVzLnB1c2goLi4uIHRoZWlyQ2hhbmdlcy5tZXJnZWQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25mbGljdChodW5rLCBzd2FwID8gdGhlaXJDaGFuZ2VzIDogbXlDaGFuZ2VzLCBzd2FwID8gbXlDaGFuZ2VzIDogdGhlaXJDaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmZsaWN0KGh1bmssIG1pbmUsIHRoZWlyKSB7XHJcbiAgaHVuay5jb25mbGljdCA9IHRydWU7XHJcbiAgaHVuay5saW5lcy5wdXNoKHtcclxuICAgIGNvbmZsaWN0OiB0cnVlLFxyXG4gICAgbWluZTogbWluZSxcclxuICAgIHRoZWlyczogdGhlaXJcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0TGVhZGluZyhodW5rLCBpbnNlcnQsIHRoZWlyKSB7XHJcbiAgd2hpbGUgKGluc2VydC5vZmZzZXQgPCB0aGVpci5vZmZzZXQgJiYgaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xyXG4gICAgbGV0IGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xyXG4gICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xyXG4gICAgaW5zZXJ0Lm9mZnNldCsrO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBpbnNlcnRUcmFpbGluZyhodW5rLCBpbnNlcnQpIHtcclxuICB3aGlsZSAoaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xyXG4gICAgbGV0IGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xyXG4gICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGVjdENoYW5nZShzdGF0ZSkge1xyXG4gIGxldCByZXQgPSBbXSxcclxuICAgICAgb3BlcmF0aW9uID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdWzBdO1xyXG4gIHdoaWxlIChzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xyXG4gICAgbGV0IGxpbmUgPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF07XHJcblxyXG4gICAgLy8gR3JvdXAgYWRkaXRpb25zIHRoYXQgYXJlIGltbWVkaWF0ZWx5IGFmdGVyIHN1YnRyYWN0aW9ucyBhbmQgdHJlYXQgdGhlbSBhcyBvbmUgXCJhdG9taWNcIiBtb2RpZnkgY2hhbmdlLlxyXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gJy0nICYmIGxpbmVbMF0gPT09ICcrJykge1xyXG4gICAgICBvcGVyYXRpb24gPSAnKyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gbGluZVswXSkge1xyXG4gICAgICByZXQucHVzaChsaW5lKTtcclxuICAgICAgc3RhdGUuaW5kZXgrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5mdW5jdGlvbiBjb2xsZWN0Q29udGV4dChzdGF0ZSwgbWF0Y2hDaGFuZ2VzKSB7XHJcbiAgbGV0IGNoYW5nZXMgPSBbXSxcclxuICAgICAgbWVyZ2VkID0gW10sXHJcbiAgICAgIG1hdGNoSW5kZXggPSAwLFxyXG4gICAgICBjb250ZXh0Q2hhbmdlcyA9IGZhbHNlLFxyXG4gICAgICBjb25mbGljdGVkID0gZmFsc2U7XHJcbiAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoXHJcbiAgICAgICAgJiYgc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcclxuICAgIGxldCBjaGFuZ2UgPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF0sXHJcbiAgICAgICAgbWF0Y2ggPSBtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF07XHJcblxyXG4gICAgLy8gT25jZSB3ZSd2ZSBoaXQgb3VyIGFkZCwgdGhlbiB3ZSBhcmUgZG9uZVxyXG4gICAgaWYgKG1hdGNoWzBdID09PSAnKycpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGV4dENoYW5nZXMgPSBjb250ZXh0Q2hhbmdlcyB8fCBjaGFuZ2VbMF0gIT09ICcgJztcclxuXHJcbiAgICBtZXJnZWQucHVzaChtYXRjaCk7XHJcbiAgICBtYXRjaEluZGV4Kys7XHJcblxyXG4gICAgLy8gQ29uc3VtZSBhbnkgYWRkaXRpb25zIGluIHRoZSBvdGhlciBibG9jayBhcyBhIGNvbmZsaWN0IHRvIGF0dGVtcHRcclxuICAgIC8vIHRvIHB1bGwgaW4gdGhlIHJlbWFpbmluZyBjb250ZXh0IGFmdGVyIHRoaXNcclxuICAgIGlmIChjaGFuZ2VbMF0gPT09ICcrJykge1xyXG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHdoaWxlIChjaGFuZ2VbMF0gPT09ICcrJykge1xyXG4gICAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xyXG4gICAgICAgIGNoYW5nZSA9IHN0YXRlLmxpbmVzWysrc3RhdGUuaW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1hdGNoLnN1YnN0cigxKSA9PT0gY2hhbmdlLnN1YnN0cigxKSkge1xyXG4gICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcclxuICAgICAgc3RhdGUuaW5kZXgrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF0gfHwgJycpWzBdID09PSAnKydcclxuICAgICAgJiYgY29udGV4dENoYW5nZXMpIHtcclxuICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbmZsaWN0ZWQpIHtcclxuICAgIHJldHVybiBjaGFuZ2VzO1xyXG4gIH1cclxuXHJcbiAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoKSB7XHJcbiAgICBtZXJnZWQucHVzaChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleCsrXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbWVyZ2VkLFxyXG4gICAgY2hhbmdlc1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbFJlbW92ZXMoY2hhbmdlcykge1xyXG4gIHJldHVybiBjaGFuZ2VzLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjaGFuZ2UpIHtcclxuICAgIHJldHVybiBwcmV2ICYmIGNoYW5nZVswXSA9PT0gJy0nO1xyXG4gIH0sIHRydWUpO1xyXG59XHJcbmZ1bmN0aW9uIHNraXBSZW1vdmVTdXBlcnNldChzdGF0ZSwgcmVtb3ZlQ2hhbmdlcywgZGVsdGEpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbHRhOyBpKyspIHtcclxuICAgIGxldCBjaGFuZ2VDb250ZW50ID0gcmVtb3ZlQ2hhbmdlc1tyZW1vdmVDaGFuZ2VzLmxlbmd0aCAtIGRlbHRhICsgaV0uc3Vic3RyKDEpO1xyXG4gICAgaWYgKHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4ICsgaV0gIT09ICcgJyArIGNoYW5nZUNvbnRlbnQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGUuaW5kZXggKz0gZGVsdGE7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNPbGROZXdMaW5lQ291bnQobGluZXMpIHtcclxuICBsZXQgb2xkTGluZXMgPSAwO1xyXG4gIGxldCBuZXdMaW5lcyA9IDA7XHJcblxyXG4gIGxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xyXG4gICAgaWYgKHR5cGVvZiBsaW5lICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBsZXQgbXlDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQobGluZS5taW5lKTtcclxuICAgICAgbGV0IHRoZWlyQ291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUudGhlaXJzKTtcclxuXHJcbiAgICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKG15Q291bnQub2xkTGluZXMgPT09IHRoZWlyQ291bnQub2xkTGluZXMpIHtcclxuICAgICAgICAgIG9sZExpbmVzICs9IG15Q291bnQub2xkTGluZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9sZExpbmVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAobXlDb3VudC5uZXdMaW5lcyA9PT0gdGhlaXJDb3VudC5uZXdMaW5lcykge1xyXG4gICAgICAgICAgbmV3TGluZXMgKz0gbXlDb3VudC5uZXdMaW5lcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3TGluZXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCAmJiAobGluZVswXSA9PT0gJysnIHx8IGxpbmVbMF0gPT09ICcgJykpIHtcclxuICAgICAgICBuZXdMaW5lcysrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnLScgfHwgbGluZVswXSA9PT0gJyAnKSkge1xyXG4gICAgICAgIG9sZExpbmVzKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtvbGRMaW5lcywgbmV3TGluZXN9O1xyXG59XHJcbiJdfQ==


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports. /*istanbul ignore end*/structuredPatch = structuredPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = createTwoFilesPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = createPatch;

	var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/*istanbul ignore end*/function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
	  if (!options) {
	    options = {};
	  }
	  if (typeof options.context === 'undefined') {
	    options.context = 4;
	  }

	  var diff = /*istanbul ignore start*/(0, _line.diffLines) /*istanbul ignore end*/(oldStr, newStr, options);
	  diff.push({ value: '', lines: [] }); // Append an empty value to make cleanup easier

	  function contextLines(lines) {
	    return lines.map(function (entry) {
	      return ' ' + entry;
	    });
	  }

	  var hunks = [];
	  var oldRangeStart = 0,
	      newRangeStart = 0,
	      curRange = [],
	      oldLine = 1,
	      newLine = 1;

	  /*istanbul ignore start*/var _loop = function _loop( /*istanbul ignore end*/i) {
	    var current = diff[i],
	        lines = current.lines || current.value.replace(/\n$/, '').split('\n');
	    current.lines = lines;

	    if (current.added || current.removed) {
	      /*istanbul ignore start*/var _curRange;

	      /*istanbul ignore end*/ // If we have previous context, start with that
	      if (!oldRangeStart) {
	        var prev = diff[i - 1];
	        oldRangeStart = oldLine;
	        newRangeStart = newLine;

	        if (prev) {
	          curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
	          oldRangeStart -= curRange.length;
	          newRangeStart -= curRange.length;
	        }
	      }

	      // Output our changes
	      /*istanbul ignore start*/(_curRange = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/lines.map(function (entry) {
	        return (current.added ? '+' : '-') + entry;
	      })));

	      // Track the updated file position
	      if (current.added) {
	        newLine += lines.length;
	      } else {
	        oldLine += lines.length;
	      }
	    } else {
	      // Identical context lines. Track line changes
	      if (oldRangeStart) {
	        // Close out any changes that have been output (or join overlapping)
	        if (lines.length <= options.context * 2 && i < diff.length - 2) {
	          /*istanbul ignore start*/var _curRange2;

	          /*istanbul ignore end*/ // Overlapping
	          /*istanbul ignore start*/(_curRange2 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines)));
	        } else {
	          /*istanbul ignore start*/var _curRange3;

	          /*istanbul ignore end*/ // end the range and output
	          var contextSize = Math.min(lines.length, options.context);
	          /*istanbul ignore start*/(_curRange3 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines.slice(0, contextSize))));

	          var hunk = {
	            oldStart: oldRangeStart,
	            oldLines: oldLine - oldRangeStart + contextSize,
	            newStart: newRangeStart,
	            newLines: newLine - newRangeStart + contextSize,
	            lines: curRange
	          };
	          if (i >= diff.length - 2 && lines.length <= options.context) {
	            // EOF is inside this hunk
	            var oldEOFNewline = /\n$/.test(oldStr);
	            var newEOFNewline = /\n$/.test(newStr);
	            if (lines.length == 0 && !oldEOFNewline) {
	              // special case: old has no eol and no trailing context; no-nl can end up before adds
	              curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
	            } else if (!oldEOFNewline || !newEOFNewline) {
	              curRange.push('\\ No newline at end of file');
	            }
	          }
	          hunks.push(hunk);

	          oldRangeStart = 0;
	          newRangeStart = 0;
	          curRange = [];
	        }
	      }
	      oldLine += lines.length;
	      newLine += lines.length;
	    }
	  };

	  for (var i = 0; i < diff.length; i++) {
	    /*istanbul ignore start*/_loop( /*istanbul ignore end*/i);
	  }

	  return {
	    oldFileName: oldFileName, newFileName: newFileName,
	    oldHeader: oldHeader, newHeader: newHeader,
	    hunks: hunks
	  };
	}

	function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
	  var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);

	  var ret = [];
	  if (oldFileName == newFileName) {
	    ret.push('Index: ' + oldFileName);
	  }
	  ret.push('===================================================================');
	  ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
	  ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

	  for (var i = 0; i < diff.hunks.length; i++) {
	    var hunk = diff.hunks[i];
	    ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
	    ret.push.apply(ret, hunk.lines);
	  }

	  return ret.join('\n') + '\n';
	}

	function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
	  return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9jcmVhdGUuanMiXSwibmFtZXMiOlsic3RydWN0dXJlZFBhdGNoIiwiY3JlYXRlVHdvRmlsZXNQYXRjaCIsImNyZWF0ZVBhdGNoIiwib2xkRmlsZU5hbWUiLCJuZXdGaWxlTmFtZSIsIm9sZFN0ciIsIm5ld1N0ciIsIm9sZEhlYWRlciIsIm5ld0hlYWRlciIsIm9wdGlvbnMiLCJjb250ZXh0IiwiZGlmZiIsInB1c2giLCJ2YWx1ZSIsImxpbmVzIiwiY29udGV4dExpbmVzIiwibWFwIiwiZW50cnkiLCJodW5rcyIsIm9sZFJhbmdlU3RhcnQiLCJuZXdSYW5nZVN0YXJ0IiwiY3VyUmFuZ2UiLCJvbGRMaW5lIiwibmV3TGluZSIsImkiLCJjdXJyZW50IiwicmVwbGFjZSIsInNwbGl0IiwiYWRkZWQiLCJyZW1vdmVkIiwicHJldiIsInNsaWNlIiwibGVuZ3RoIiwiY29udGV4dFNpemUiLCJNYXRoIiwibWluIiwiaHVuayIsIm9sZFN0YXJ0Iiwib2xkTGluZXMiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwib2xkRU9GTmV3bGluZSIsInRlc3QiLCJuZXdFT0ZOZXdsaW5lIiwic3BsaWNlIiwicmV0IiwiYXBwbHkiLCJqb2luIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7O2dDQUVnQkEsZSxHQUFBQSxlO3lEQWlHQUMsbUIsR0FBQUEsbUI7eURBd0JBQyxXLEdBQUFBLFc7O0FBM0hoQjs7Ozt1QkFFTyxTQUFTRixlQUFULENBQXlCRyxXQUF6QixFQUFzQ0MsV0FBdEMsRUFBbURDLE1BQW5ELEVBQTJEQyxNQUEzRCxFQUFtRUMsU0FBbkUsRUFBOEVDLFNBQTlFLEVBQXlGQyxPQUF6RixFQUFrRztBQUN2RyxNQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaQSxjQUFVLEVBQVY7QUFDRDtBQUNELE1BQUksT0FBT0EsUUFBUUMsT0FBZixLQUEyQixXQUEvQixFQUE0QztBQUMxQ0QsWUFBUUMsT0FBUixHQUFrQixDQUFsQjtBQUNEOztBQUVE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LFNBQS9DLEVBQTBEQyxTQUExRCxFQUFxRUMsT0FBckUsRUFBOEU7QUFDbkYsU0FBT1Isb0JBQW9CK0MsUUFBcEIsRUFBOEJBLFFBQTlCLEVBQXdDM0MsTUFBeEMsRUFBZ0RDLE1BQWhELEVBQXdEQyxTQUF4RCxFQUFtRUMsU0FBbkUsRUFBOEVDLE9BQTlFLENBQVA7QUFDRCIsImZpbGUiOiJjcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RpZmZMaW5lc30gZnJvbSAnLi4vZGlmZi9saW5lJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcclxuICBpZiAoIW9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSB7fTtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRleHQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBvcHRpb25zLmNvbnRleHQgPSA0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlmZiA9IGRpZmZMaW5lcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XHJcbiAgZGlmZi5wdXNoKHt2YWx1ZTogJycsIGxpbmVzOiBbXX0pOyAgIC8vIEFwcGVuZCBhbiBlbXB0eSB2YWx1ZSB0byBtYWtlIGNsZWFudXAgZWFzaWVyXHJcblxyXG4gIGZ1bmN0aW9uIGNvbnRleHRMaW5lcyhsaW5lcykge1xyXG4gICAgcmV0dXJuIGxpbmVzLm1hcChmdW5jdGlvbihlbnRyeSkgeyByZXR1cm4gJyAnICsgZW50cnk7IH0pO1xyXG4gIH1cclxuXHJcbiAgbGV0IGh1bmtzID0gW107XHJcbiAgbGV0IG9sZFJhbmdlU3RhcnQgPSAwLCBuZXdSYW5nZVN0YXJ0ID0gMCwgY3VyUmFuZ2UgPSBbXSxcclxuICAgICAgb2xkTGluZSA9IDEsIG5ld0xpbmUgPSAxO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY3VycmVudCA9IGRpZmZbaV0sXHJcbiAgICAgICAgICBsaW5lcyA9IGN1cnJlbnQubGluZXMgfHwgY3VycmVudC52YWx1ZS5yZXBsYWNlKC9cXG4kLywgJycpLnNwbGl0KCdcXG4nKTtcclxuICAgIGN1cnJlbnQubGluZXMgPSBsaW5lcztcclxuXHJcbiAgICBpZiAoY3VycmVudC5hZGRlZCB8fCBjdXJyZW50LnJlbW92ZWQpIHtcclxuICAgICAgLy8gSWYgd2UgaGF2ZSBwcmV2aW91cyBjb250ZXh0LCBzdGFydCB3aXRoIHRoYXRcclxuICAgICAgaWYgKCFvbGRSYW5nZVN0YXJ0KSB7XHJcbiAgICAgICAgY29uc3QgcHJldiA9IGRpZmZbaSAtIDFdO1xyXG4gICAgICAgIG9sZFJhbmdlU3RhcnQgPSBvbGRMaW5lO1xyXG4gICAgICAgIG5ld1JhbmdlU3RhcnQgPSBuZXdMaW5lO1xyXG5cclxuICAgICAgICBpZiAocHJldikge1xyXG4gICAgICAgICAgY3VyUmFuZ2UgPSBvcHRpb25zLmNvbnRleHQgPiAwID8gY29udGV4dExpbmVzKHByZXYubGluZXMuc2xpY2UoLW9wdGlvbnMuY29udGV4dCkpIDogW107XHJcbiAgICAgICAgICBvbGRSYW5nZVN0YXJ0IC09IGN1clJhbmdlLmxlbmd0aDtcclxuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT3V0cHV0IG91ciBjaGFuZ2VzXHJcbiAgICAgIGN1clJhbmdlLnB1c2goLi4uIGxpbmVzLm1hcChmdW5jdGlvbihlbnRyeSkge1xyXG4gICAgICAgIHJldHVybiAoY3VycmVudC5hZGRlZCA/ICcrJyA6ICctJykgKyBlbnRyeTtcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgLy8gVHJhY2sgdGhlIHVwZGF0ZWQgZmlsZSBwb3NpdGlvblxyXG4gICAgICBpZiAoY3VycmVudC5hZGRlZCkge1xyXG4gICAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJZGVudGljYWwgY29udGV4dCBsaW5lcy4gVHJhY2sgbGluZSBjaGFuZ2VzXHJcbiAgICAgIGlmIChvbGRSYW5nZVN0YXJ0KSB7XHJcbiAgICAgICAgLy8gQ2xvc2Ugb3V0IGFueSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIG91dHB1dCAob3Igam9pbiBvdmVybGFwcGluZylcclxuICAgICAgICBpZiAobGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCAqIDIgJiYgaSA8IGRpZmYubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgLy8gT3ZlcmxhcHBpbmdcclxuICAgICAgICAgIGN1clJhbmdlLnB1c2goLi4uIGNvbnRleHRMaW5lcyhsaW5lcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBlbmQgdGhlIHJhbmdlIGFuZCBvdXRwdXRcclxuICAgICAgICAgIGxldCBjb250ZXh0U2l6ZSA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgb3B0aW9ucy5jb250ZXh0KTtcclxuICAgICAgICAgIGN1clJhbmdlLnB1c2goLi4uIGNvbnRleHRMaW5lcyhsaW5lcy5zbGljZSgwLCBjb250ZXh0U2l6ZSkpKTtcclxuXHJcbiAgICAgICAgICBsZXQgaHVuayA9IHtcclxuICAgICAgICAgICAgb2xkU3RhcnQ6IG9sZFJhbmdlU3RhcnQsXHJcbiAgICAgICAgICAgIG9sZExpbmVzOiAob2xkTGluZSAtIG9sZFJhbmdlU3RhcnQgKyBjb250ZXh0U2l6ZSksXHJcbiAgICAgICAgICAgIG5ld1N0YXJ0OiBuZXdSYW5nZVN0YXJ0LFxyXG4gICAgICAgICAgICBuZXdMaW5lczogKG5ld0xpbmUgLSBuZXdSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUpLFxyXG4gICAgICAgICAgICBsaW5lczogY3VyUmFuZ2VcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAoaSA+PSBkaWZmLmxlbmd0aCAtIDIgJiYgbGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCkge1xyXG4gICAgICAgICAgICAvLyBFT0YgaXMgaW5zaWRlIHRoaXMgaHVua1xyXG4gICAgICAgICAgICBsZXQgb2xkRU9GTmV3bGluZSA9ICgvXFxuJC8udGVzdChvbGRTdHIpKTtcclxuICAgICAgICAgICAgbGV0IG5ld0VPRk5ld2xpbmUgPSAoL1xcbiQvLnRlc3QobmV3U3RyKSk7XHJcbiAgICAgICAgICAgIGlmIChsaW5lcy5sZW5ndGggPT0gMCAmJiAhb2xkRU9GTmV3bGluZSkge1xyXG4gICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogb2xkIGhhcyBubyBlb2wgYW5kIG5vIHRyYWlsaW5nIGNvbnRleHQ7IG5vLW5sIGNhbiBlbmQgdXAgYmVmb3JlIGFkZHNcclxuICAgICAgICAgICAgICBjdXJSYW5nZS5zcGxpY2UoaHVuay5vbGRMaW5lcywgMCwgJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFvbGRFT0ZOZXdsaW5lIHx8ICFuZXdFT0ZOZXdsaW5lKSB7XHJcbiAgICAgICAgICAgICAgY3VyUmFuZ2UucHVzaCgnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGh1bmtzLnB1c2goaHVuayk7XHJcblxyXG4gICAgICAgICAgb2xkUmFuZ2VTdGFydCA9IDA7XHJcbiAgICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gMDtcclxuICAgICAgICAgIGN1clJhbmdlID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xyXG4gICAgICBuZXdMaW5lICs9IGxpbmVzLmxlbmd0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBvbGRGaWxlTmFtZTogb2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lOiBuZXdGaWxlTmFtZSxcclxuICAgIG9sZEhlYWRlcjogb2xkSGVhZGVyLCBuZXdIZWFkZXI6IG5ld0hlYWRlcixcclxuICAgIGh1bmtzOiBodW5rc1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUd29GaWxlc1BhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XHJcbiAgY29uc3QgZGlmZiA9IHN0cnVjdHVyZWRQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucyk7XHJcblxyXG4gIGNvbnN0IHJldCA9IFtdO1xyXG4gIGlmIChvbGRGaWxlTmFtZSA9PSBuZXdGaWxlTmFtZSkge1xyXG4gICAgcmV0LnB1c2goJ0luZGV4OiAnICsgb2xkRmlsZU5hbWUpO1xyXG4gIH1cclxuICByZXQucHVzaCgnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xyXG4gIHJldC5wdXNoKCctLS0gJyArIGRpZmYub2xkRmlsZU5hbWUgKyAodHlwZW9mIGRpZmYub2xkSGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm9sZEhlYWRlcikpO1xyXG4gIHJldC5wdXNoKCcrKysgJyArIGRpZmYubmV3RmlsZU5hbWUgKyAodHlwZW9mIGRpZmYubmV3SGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm5ld0hlYWRlcikpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmYuaHVua3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGh1bmsgPSBkaWZmLmh1bmtzW2ldO1xyXG4gICAgcmV0LnB1c2goXHJcbiAgICAgICdAQCAtJyArIGh1bmsub2xkU3RhcnQgKyAnLCcgKyBodW5rLm9sZExpbmVzXHJcbiAgICAgICsgJyArJyArIGh1bmsubmV3U3RhcnQgKyAnLCcgKyBodW5rLm5ld0xpbmVzXHJcbiAgICAgICsgJyBAQCdcclxuICAgICk7XHJcbiAgICByZXQucHVzaC5hcHBseShyZXQsIGh1bmsubGluZXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldC5qb2luKCdcXG4nKSArICdcXG4nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGF0Y2goZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xyXG4gIHJldHVybiBjcmVhdGVUd29GaWxlc1BhdGNoKGZpbGVOYW1lLCBmaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKTtcclxufVxyXG4iXX0=


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports. /*istanbul ignore end*/arrayEqual = arrayEqual;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/arrayStartsWith = arrayStartsWith;
	function arrayEqual(a, b) {
	  if (a.length !== b.length) {
	    return false;
	  }

	  return arrayStartsWith(a, b);
	}

	function arrayStartsWith(array, start) {
	  if (start.length > array.length) {
	    return false;
	  }

	  for (var i = 0; i < start.length; i++) {
	    if (start[i] !== array[i]) {
	      return false;
	    }
	  }

	  return true;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5RXF1YWwiLCJhcnJheVN0YXJ0c1dpdGgiLCJhIiwiYiIsImxlbmd0aCIsImFycmF5Iiwic3RhcnQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7OztnQ0FBZ0JBLFUsR0FBQUEsVTt5REFRQUMsZSxHQUFBQSxlO0FBUlQsU0FBU0QsVUFBVCxDQUFvQkUsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCO0FBQy9CLE1BQUlELEVBQUVFLE1BQUYsS0FBYUQsRUFBRUMsTUFBbkIsRUFBMkI7QUFDekIsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBT0gsZ0JBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsQ0FBUDtBQUNEOztBQUVNLFNBQVNGLGVBQVQsQ0FBeUJJLEtBQXpCLEVBQWdDQyxLQUFoQyxFQUF1QztBQUM1QyxNQUFJQSxNQUFNRixNQUFOLEdBQWVDLE1BQU1ELE1BQXpCLEVBQWlDO0FBQy9CLFdBQU8sS0FBUDtBQUNEOztBQUVELE9BQUssSUFBSUcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxNQUFNRixNQUExQixFQUFrQ0csR0FBbEMsRUFBdUM7QUFDckMsUUFBSUQsTUFBTUMsQ0FBTixNQUFhRixNQUFNRSxDQUFOLENBQWpCLEVBQTJCO0FBQ3pCLGFBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxJQUFQO0FBQ0QiLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbChhLCBiKSB7XHJcbiAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFycmF5U3RhcnRzV2l0aChhLCBiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5U3RhcnRzV2l0aChhcnJheSwgc3RhcnQpIHtcclxuICBpZiAoc3RhcnQubGVuZ3RoID4gYXJyYXkubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3RhcnRbaV0gIT09IGFycmF5W2ldKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcbiJdfQ==


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports. /*istanbul ignore end*/convertChangesToDMP = convertChangesToDMP;
	// See: http://code.google.com/p/google-diff-match-patch/wiki/API
	function convertChangesToDMP(changes) {
	  var ret = [],
	      change = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
	      operation = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	  for (var i = 0; i < changes.length; i++) {
	    change = changes[i];
	    if (change.added) {
	      operation = 1;
	    } else if (change.removed) {
	      operation = -1;
	    } else {
	      operation = 0;
	    }

	    ret.push([operation, change.value]);
	  }
	  return ret;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L2RtcC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvRE1QIiwiY2hhbmdlcyIsInJldCIsImNoYW5nZSIsIm9wZXJhdGlvbiIsImkiLCJsZW5ndGgiLCJhZGRlZCIsInJlbW92ZWQiLCJwdXNoIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O2dDQUNnQkEsbUIsR0FBQUEsbUI7QUFEaEI7QUFDTyxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFDM0MsTUFBSUMsTUFBTSxFQUFWO0FBQUEsTUFDSUMsd0NBREo7QUFBQSxNQUVJQywyQ0FGSjtBQUdBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixRQUFRSyxNQUE1QixFQUFvQ0QsR0FBcEMsRUFBeUM7QUFDdkNGLGFBQVNGLFFBQVFJLENBQVIsQ0FBVDtBQUNBLFFBQUlGLE9BQU9JLEtBQVgsRUFBa0I7QUFDaEJILGtCQUFZLENBQVo7QUFDRCxLQUZELE1BRU8sSUFBSUQsT0FBT0ssT0FBWCxFQUFvQjtBQUN6Qkosa0JBQVksQ0FBQyxDQUFiO0FBQ0QsS0FGTSxNQUVBO0FBQ0xBLGtCQUFZLENBQVo7QUFDRDs7QUFFREYsUUFBSU8sSUFBSixDQUFTLENBQUNMLFNBQUQsRUFBWUQsT0FBT08sS0FBbkIsQ0FBVDtBQUNEO0FBQ0QsU0FBT1IsR0FBUDtBQUNEIiwiZmlsZSI6ImRtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNlZTogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL3dpa2kvQVBJXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q2hhbmdlc1RvRE1QKGNoYW5nZXMpIHtcclxuICBsZXQgcmV0ID0gW10sXHJcbiAgICAgIGNoYW5nZSxcclxuICAgICAgb3BlcmF0aW9uO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2hhbmdlID0gY2hhbmdlc1tpXTtcclxuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcclxuICAgICAgb3BlcmF0aW9uID0gMTtcclxuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcclxuICAgICAgb3BlcmF0aW9uID0gLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVyYXRpb24gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldC5wdXNoKFtvcGVyYXRpb24sIGNoYW5nZS52YWx1ZV0pO1xyXG4gIH1cclxuICByZXR1cm4gcmV0O1xyXG59XHJcbiJdfQ==


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports. /*istanbul ignore end*/convertChangesToXML = convertChangesToXML;
	function convertChangesToXML(changes) {
	  var ret = [];
	  for (var i = 0; i < changes.length; i++) {
	    var change = changes[i];
	    if (change.added) {
	      ret.push('<ins>');
	    } else if (change.removed) {
	      ret.push('<del>');
	    }

	    ret.push(escapeHTML(change.value));

	    if (change.added) {
	      ret.push('</ins>');
	    } else if (change.removed) {
	      ret.push('</del>');
	    }
	  }
	  return ret.join('');
	}

	function escapeHTML(s) {
	  var n = s;
	  n = n.replace(/&/g, '&amp;');
	  n = n.replace(/</g, '&lt;');
	  n = n.replace(/>/g, '&gt;');
	  n = n.replace(/"/g, '&quot;');

	  return n;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L3htbC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvWE1MIiwiY2hhbmdlcyIsInJldCIsImkiLCJsZW5ndGgiLCJjaGFuZ2UiLCJhZGRlZCIsInB1c2giLCJyZW1vdmVkIiwiZXNjYXBlSFRNTCIsInZhbHVlIiwiam9pbiIsInMiLCJuIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Z0NBQWdCQSxtQixHQUFBQSxtQjtBQUFULFNBQVNBLG1CQUFULENBQTZCQyxPQUE3QixFQUFzQztBQUMzQyxNQUFJQyxNQUFNLEVBQVY7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsUUFBUUcsTUFBNUIsRUFBb0NELEdBQXBDLEVBQXlDO0FBQ3ZDLFFBQUlFLFNBQVNKLFFBQVFFLENBQVIsQ0FBYjtBQUNBLFFBQUlFLE9BQU9DLEtBQVgsRUFBa0I7QUFDaEJKLFVBQUlLLElBQUosQ0FBUyxPQUFUO0FBQ0QsS0FGRCxNQUVPLElBQUlGLE9BQU9HLE9BQVgsRUFBb0I7QUFDekJOLFVBQUlLLElBQUosQ0FBUyxPQUFUO0FBQ0Q7O0FBRURMLFFBQUlLLElBQUosQ0FBU0UsV0FBV0osT0FBT0ssS0FBbEIsQ0FBVDs7QUFFQSxRQUFJTCxPQUFPQyxLQUFYLEVBQWtCO0FBQ2hCSixVQUFJSyxJQUFKLENBQVMsUUFBVDtBQUNELEtBRkQsTUFFTyxJQUFJRixPQUFPRyxPQUFYLEVBQW9CO0FBQ3pCTixVQUFJSyxJQUFKLENBQVMsUUFBVDtBQUNEO0FBQ0Y7QUFDRCxTQUFPTCxJQUFJUyxJQUFKLENBQVMsRUFBVCxDQUFQO0FBQ0Q7O0FBRUQsU0FBU0YsVUFBVCxDQUFvQkcsQ0FBcEIsRUFBdUI7QUFDckIsTUFBSUMsSUFBSUQsQ0FBUjtBQUNBQyxNQUFJQSxFQUFFQyxPQUFGLENBQVUsSUFBVixFQUFnQixPQUFoQixDQUFKO0FBQ0FELE1BQUlBLEVBQUVDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLE1BQWhCLENBQUo7QUFDQUQsTUFBSUEsRUFBRUMsT0FBRixDQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FBSjtBQUNBRCxNQUFJQSxFQUFFQyxPQUFGLENBQVUsSUFBVixFQUFnQixRQUFoQixDQUFKOztBQUVBLFNBQU9ELENBQVA7QUFDRCIsImZpbGUiOiJ4bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb1hNTChjaGFuZ2VzKSB7XHJcbiAgbGV0IHJldCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGNoYW5nZSA9IGNoYW5nZXNbaV07XHJcbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XHJcbiAgICAgIHJldC5wdXNoKCc8aW5zPicpO1xyXG4gICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xyXG4gICAgICByZXQucHVzaCgnPGRlbD4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXQucHVzaChlc2NhcGVIVE1MKGNoYW5nZS52YWx1ZSkpO1xyXG5cclxuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcclxuICAgICAgcmV0LnB1c2goJzwvaW5zPicpO1xyXG4gICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xyXG4gICAgICByZXQucHVzaCgnPC9kZWw+Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXQuam9pbignJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVzY2FwZUhUTUwocykge1xyXG4gIGxldCBuID0gcztcclxuICBuID0gbi5yZXBsYWNlKC8mL2csICcmYW1wOycpO1xyXG4gIG4gPSBuLnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcclxuICBuID0gbi5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XHJcbiAgbiA9IG4ucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xyXG5cclxuICByZXR1cm4gbjtcclxufVxyXG4iXX0=


/***/ })
/******/ ])
});
;