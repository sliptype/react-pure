module App.Connect where

import Prelude (Unit, identity, ($))
import App.Actions (Action(..))
import App.Model (State)

type AppDispatch =
  { increment :: Int -> Unit
  , decrement :: Int -> Unit
  }

mapStateToProps :: State -> State
mapStateToProps = identity

mapDispatchToProps :: (Action -> Unit) -> AppDispatch
mapDispatchToProps dispatch =
  { increment: \x -> dispatch $ Increment x
  , decrement: \x -> dispatch $ Decrement x
  }

