# React Custom Hooks

This repository contains a collection of custom React hooks that you can use in your projects to enhance functionality and streamline development.

## Included Hooks

- [React Custom Hooks](#react-custom-hooks)
  - [Included Hooks](#included-hooks)
    - [1. useAsync](#1--useasync)
    - [2. useIdle](#2--useidle)
    - [3. useFocus](#3--usefocus)
    - [4. usePrevious](#4--useprevious)
    - [5. useLocalStorage](#5--uselocalstorage)
    - [6. useDebounce](#6--usedebounce)
    - [7. useCopyToClipboard](#7--usecopytoclipboard)
    - [8. useFetch](#8--usefetch)
    - [9. useToggle](#9--usetoggle)

### 1. <a name="useAsync"></a> useAsync

The useAsync hook simplifies asynchronous operations in React by providing loading, error, and value states, useful for various tasks like fetching data from an API or handling form submissions.

### 2. <a name="useIdle"></a> useIdle

The useIdle hook in React detects user inactivity within a web application and returns a boolean value based on a defined amount of time, useful for implementing features like automatic logout or displaying notifications.

### 3. <a name="useFocus"></a> useFocus

The useFocus hook tracks the focus state of a DOM element in React components.

### 4. <a name="usePrevious"></a> usePrevious

The usePrevious hook stores and persists the previous state between re-renders, useful for scenarios requiring comparison between current and previous values.

### 5. <a name="useLocalStorage"></a> useLocalStorage

The useLocalStorage hook synchronizes component state with local storage, facilitating data persistence such as storing theme preferences.

### 6. <a name="useDebounce"></a> useDebounce

The useDebounce hook adds debounce functionality to React components, delaying function execution to limit frequency, useful for scenarios like searching with input elements.

### 7. <a name="useCopyToClipboard"></a> useCopyToClipboard

The useCopyToClipboard hook efficiently copies text to the clipboard, utilizing the modern navigator.clipboard.writeText method when available.

### 8. <a name="useFetch"></a> useFetch

The useFetch hook simplifies data fetching and state management in React components, providing a consistent pattern for handling loading, success, and error states with fetch or axios.

### 9. <a name="useToggle"></a> useToggle

The useToggle hook efficiently toggles between two states, facilitating actions like showing/hiding modals, expanding/collapsing text, or toggling checkboxes.
