install:
	npm install

build:
	gatsby build
	mv public/* docs
