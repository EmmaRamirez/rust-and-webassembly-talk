# Assembling the Web 

### 🦀 + 🕸

#### [@EmmaGRamirez](https://twitter.com/EmmaGRamirez) | [EmmaRamirez](https://github.com/EmmaRamirez)


---

![dog](./doggo.jpg)

---

# Follow Along!

### [Quality Link to Talk Repo](https://github.com/EmmaRamirez/rust-and-webassembly-talk)

---

# A Brief History of Trying to Embed Things in JavaScript

- Java Applets
- Asm.js

---

# Things to Know About JS

- JS is dynamic
- JS uses garbage collection
    - Eventually we'll have to use the host-binding proposal
- JS is incredibly optimized

---

# Why Wasm?

- Part of the [Open Web Platform](https://github.com/webassembly/design)
    - Designed by representatives from major browser vendors
    - Itself platform agnostic
- Memory Safe (sandboxed)
- Achieves high performance
- Small, portable size

---

# Contrived Canonical Example

```rust
(module
    (type $0 (func (param i32 i32) (result i32)))
    (export "add" $add)
    (func $add (type $0) (param $var$0 i32) (param $var$1 i32) (result i32)
        (i32.add
            (get_local $var$0)
            (get_local $var1)
        )
    )
)
```

---

# Is WASM going to replace JS?

----

<iframe src="https://giphy.com/embed/12XMGIWtrHBl5e" width="480" height="392" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-office-no-steve-carell-12XMGIWtrHBl5e"></p>

---

# Limitations of Wasm

Wasm modules can only call functions that deal with:

- i32
- i64
- f32
- f64

Wasm is supported in all major browsers, but the spec is still developing. (However new iterations will be fully backwards compatible!)

---

# Why Rust

```shell
cargo build --target wasm-unknown-unknown
```

- Fast, on par with C++
- Memory-safe
- Thread-safe

---

# In the Wild

<img src='./raytracer-wasm.png'>

---

# Vim


---

https://twitter.com/jxxf/status/1027358517462626304

---

# Tools & Ecosystem


---

# js-sys

Get access to API from the ECMAScript standard without having to write them by hand with bindgen.

```rust
extern crate js_sys;
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn timed(callback: &js_sys::Function) -> f64 {
    let then = js_sys::Date::now();
    callback.apply(JsValue::null(), &js_sys::Array::new()).unwrap();
    let now = js_sys::Date::now();
    now - then
}
```

---

# Things to Keep in Mind

- Glue Code
- Native Addons
- Ecosystem Maturity

---

# Other Possibilities

- C/C++
- Assemblyscript
- Turboscript
- Grain...and others!

--- 

# The Future

