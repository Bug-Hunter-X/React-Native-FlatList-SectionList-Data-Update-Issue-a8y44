# React Native FlatList/SectionList Data Update Issue

This repository demonstrates a common issue in React Native where FlatLists or SectionLists fail to update correctly after data changes. The problem is caused by either directly modifying the data array or using stale data references. The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected implementation.

## Problem
Directly mutating an array provided to a FlatList or SectionList often results in unexpected behavior.  Incorrect use of state updates can also lead to components not re-rendering after data changes.

## Solution
Create a new array with the updated data instead of modifying the original one.  Ensure proper state management to trigger re-rendering after data modifications.  Use the `keyExtractor` prop for optimal performance.