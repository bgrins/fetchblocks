---
sidebar_position: 2
---

# Adding steps

So far what's been shown could be easily done with a call to `fetch`. Fetchblocks expect the first step will be either an external resource, or a link to another block. The subsequent steps are called "transforms". Each takes in the value from the previous step, does some kind of transformation, and passes it to the next one.

TODO - implement this: These run in a WASM-based JavaScript interpreter which doesn't have access to the outside world. So the environment is very constrained (i.e. it can't access the network, DOM, native APIs, etc). It basically can do object manipulation and math.

Because the steps are declarative, we can create a plan before running anything and know exactly what it is meant to do.