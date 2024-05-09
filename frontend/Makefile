# Variables
SRC_DIR = src
BUILD_DIR = build
NODE_MODULES_BIN = node_modules/.bin

# Commandes
install:
	npm install

dev:
	$(NODE_MODULES_BIN)/next dev

build:
	$(NODE_MODULES_BIN)/next build

start:
	$(NODE_MODULES_BIN)/next start

clean:
	rm -rf $(BUILD_DIR)

.PHONY: install dev build start clean