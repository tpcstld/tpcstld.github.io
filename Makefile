install:
	npm install
	npm install -g gatsby

build:
	rm -rf docs public
	mkdir docs
	cp CNAME docs/CNAME
	touch docs/.nojekyll
	gatsby build
	mv public/* docs

develop:
	rm -rf public
	gatsby develop
