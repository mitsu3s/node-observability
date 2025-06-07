DOCKER=docker
COMPOSE=$(DOCKER) compose
BUILD=$(COMPOSE) build
UP=$(COMPOSE) up -d
STOP=$(COMPOSE) stop


docker/build: ## docker build
	$(BUILD)

docker/up: ## docker up
	$(UP)

docker/restart: ## docker build and up	
	$(BUILD)
	$(UP)

docker/logs: ## docker logs
	$(LOGS)

docker/stop: ## docker stop
	$(STOP)
