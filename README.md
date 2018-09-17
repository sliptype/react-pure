# react-pure

This is an example of using Purescript to handle business logic in a React + Redux application. It was created with `create-react-app`. It uses `purs-loader` to incorporate Purescript compilation into the webpack build.

# Advantages
* All the benefits of static-typing, purity, and controlled effects
* Redux debug tools
* JS ecosystem and tooling

# Setup
The actions, state, and reducers are written in Purescript. They can be found in the `state` directory.
Connecting this to Redux is done in `state/store.js`:
 * `reducer` catches the initialization case, where `state` is undefined, by calling the `rootReducer` with an `Initial` value.
 * `middleware` intercepts incoming actions to assign them a name (following "flux-standard-action")

# Dispatching
Each smart component has a corresponding `.purs` file that will handle mapping the state and dispatch to props. An example is `components/App.purs`, where the entire state is exposed as props and two actions are exposed to dispatch.
Action creators would be placed in their corresponding `actions.purs` file and they could be invoked inside `mapDispatchToProps`.
