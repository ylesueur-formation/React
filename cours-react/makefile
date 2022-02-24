NAME=cours-react

build:
	docker build -t $(NAME):react .
run:
	docker run -it --rm -v ${PWD}:/app  -p 3001:3000 -e CHOKIDAR_USEPOLLING=true $(NAME):react
