.PHONY: install
install:
	(cd client && npm install)
	cd server && npm install


.PHONY: start
start:
	(cd client && npm start) & (cd server && npm start)
	