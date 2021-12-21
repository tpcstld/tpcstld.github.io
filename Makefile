install:
	npm install

build:
	rm -rf docs public
	mkdir docs
	cp CNAME docs/CNAME
	touch docs/.nojekyll
	node_modules/gatsby/cli.js build
	mv public/* docs

develop:
	rm -rf public
	node_modules/gatsby/cli.js develop
