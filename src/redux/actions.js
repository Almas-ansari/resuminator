/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

export function updateField(array, action) {
  return array.map((item, index) => {
    if (index === action.index) {
      return {
        ...item,
        ...action.payload,
      };
    }
    return item;
  });
}