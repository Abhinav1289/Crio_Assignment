# Password Generator with Performance Optimization

This project demonstrates the concepts of performance optimization in React using hooks like useCallback and useMemo. The Password Generator application is designed to show how performance can be improved by reducing unnecessary re-renders and re-creations of functions. It is divided into distinct activities that highlight different aspects of React hooks and their real-world applications.

## Project Overview

The Password Generator app generates strong passwords based on user input. Through this project, I showcase how React hooks, specifically useCallback and useMemo, help in improving performance by preventing unnecessary re-renders and recalculations.

### Features:
- Password generation logic.
- Performance optimization using useCallback and useMemo.
- Visual indicators and console logs to track function re-creations and component renders.

## Activities Breakdown

### Activity 1: No useCallback Hook (Baseline)
In this activity, the password generator was implemented without using the useCallback hook. This demonstrates how every function call triggers a re-creation of the function, causing unnecessary re-renders of components.

- *Behavior*: 
  - Console Logs show that each function is re-created on every render.
  - A Green Light Indicator signals the function is being re-created each time.
- *Goal*: To show the importance of performance optimization in React by illustrating inefficient behavior.

### Activity 2: Using useCallback Hook Without Dependency Array
Here, the useCallback hook is introduced to prevent the unnecessary re-creation of functions. The hook does not have a dependency array, as the function does not rely on dynamic state or props.

- *Behavior*:
  - Green Light Indicator shows that the function is cached and reused between renders.
  - Console Logs reflect that the function is memoized and reused, preventing re-creation on each render.
- *Goal*: To demonstrate how useCallback improves performance by avoiding unnecessary function re-creations.

### Activity 3: Using useMemo and useCallback
In this activity, the performance optimization is further enhanced by introducing the useMemo hook. useMemo prevents unnecessary re-renders of child components when props or state values remain unchanged.

- *Behavior*:
  - Console Logs or React DevTools show how child components are prevented from re-rendering unless necessary.
  - useCallback is also used to memoize the function.
- *Goal*: To demonstrate the combined use of useMemo and useCallback to improve performance by memoizing both values and functions.

### Activity 4 & Activity 5: Demonstrating the Need for Dependency Array in useCallback
In these activities, I focus on the impact of the dependency array in useCallback and how it affects the function’s behavior.

- *Without the dependency array*: 
  - The function retains the initial values and does not re-create when state or props change.
  - This can cause stale values to be used in the function, resulting in incorrect behavior.
  
- *With the dependency array*:
  - The function will correctly respond to state and prop changes, ensuring the function uses the latest values.
  - The Bulb Indicator changes to show when the function is recreated due to state or prop changes.

- *Goal*: To emphasize the critical role of the dependency array in ensuring the function always uses the latest state and props, preventing stale closures.

