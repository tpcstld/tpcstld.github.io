install:
	npm install
	brew install node@18

tsc:
	node_modules/typescript/bin/tsc

build:
	rm -rf docs public
	mkdir docs
	cp CNAME docs/CNAME
	touch docs/.nojekyll
	/usr/local/opt/node@18/bin/node node_modules/gatsby/cli.js build
	mv public/* docs
	cp -r static/. docs

develop:
	rm -rf public
	/usr/local/opt/node@18/bin/node node_modules/gatsby/cli.js develop
