all: clean deps

clean:
	rm -rf node_modules

deps:
	npm install -i

run:
	npm start
