IMAGE_NAME=dfa_pec5
DOCKER_RUN=docker run -it --rm --network=bridge -p 4200:4200 --user `id -u`:`id -g` -v $(PWD):/usr/src/pec -w /usr/src/pec $(IMAGE_NAME)

build:
	docker build -t $(IMAGE_NAME) .
	$(DOCKER_RUN) npm i

destroy:
	docker rmi $(IMAGE_NAME)

start:
	$(DOCKER_RUN) npm start
	
exec:
	$(DOCKER_RUN) $(ARGS)

run-docker:
	$(DOCKER_RUN) npm run docker
