module App.Reducers where

import Prelude ((+), (-))
import App.Actions (Action(..))
import App.Model (State)

rootReducer :: Action -> State -> State
rootReducer Initial _ = { count: 0 }
rootReducer (Increment x) s = s { count = s.count + x }
rootReducer (Decrement x) s = s { count = s.count - x }

