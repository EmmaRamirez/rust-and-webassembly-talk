SHELL := /bin/bash

all:
	cargo build --target=wasm32-unknown-emscripten --release
	find target/wasm32-unknown-emscripten/release/deps -type f -name "*.wasm" | xargs -I {} cp {} presentation/wasm_demo.wasm
	find target/wasm32-unknown-emscripten/release/deps -type f ! -name "*.asm.js" -name "*.js" | xargs -I {} cp {} presentation/presentation.js