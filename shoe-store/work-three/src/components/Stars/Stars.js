import React from 'react';
import {Star} from "../Star/Star";
import {times, uniqueId} from "lodash";

export const Stars = ({count}) => {
  return (
    <ul className="card-body-stars u-clearfix">
      {times(count, Number).map((item) => (
        <li key={uniqueId('star_')}>
          <Star />
        </li>
      ))}
    </ul>
  )
}
