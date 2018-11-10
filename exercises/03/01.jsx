/*
  eslint react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  max-len: off,
*/
import React from 'react';
import PropTypes from 'prop-types';

import DataColumn from 'scenes/components/DataTable/DataTableRow/DataRowColumn';

// Exercise 03/01
// ===========
//
// It's about the render. JS is not a strongly typed language, and so
// we need to be defensive; all the time. That means, we need to make
// sure our UIs can handle all possible branching with the incoming data.
//
// Here, we'll play around with JS and JSX expresions and how we can
// conditionally render different UIs depending on our data.
//
// Tasks
// --------
// ✅    Your component should accept a `team` prop, with type `string`
// ✅    Your component should render the `team` prop inside its own `DataColumn` component
// ✅    This `DataColumn` component should be given an `id` attribute, with the value `team`
// ✅    Your component should render the `team` prop if provided, and `Unknown Team` if absent
// ✅    Your component should accept a `functions` prop, with type `string[]` (Array of strings)
// ✅    Your component should render the `funtions` prop inside its own `DataColumn` component, as a comma+space separated list
//        e.g. `foo, bar, baz` [no trailing comma]
// ✅    This `DataColumn` component should be given an `id` attribute, with the value `functions`
// ✅    Your component should render the `funtions` prop if provided, and the string `-` if absent, or the array is empty
// ✅    Your component should render nothing if both `functions` and `team` props are missing
//
// Tips
// ------
// 🐨  Use JS Date object for accessing current time, e.g. `new Date()`.
// 🐨  Use the JS Date object's `.toLocaleTimeString()` function for displaying human timestamp inside your `render()` method
// 🐨  Don't forget to clear your intervals!!! (e.g. `clearInterval(id)`)
// 🐨  You can initialise state and class properties using any of the valid syntax options; this project is setup
//     to support "all" of the currently popular appraoches.
class Row extends React.Component {
  render() {
    return (
      <div className="flex">
        Update HERE
      </div>
    );
  }
}

// Add runtime prop validation
Row.propTypes = {
  team: PropTypes.string,
  functions: PropTypes.arrayOf(PropTypes.string),
};

export default Row;
