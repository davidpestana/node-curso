start:
	docker compose up -d
logs:
	docker compose logs -f
cmd:
	docker compose run -it --rm -u 1000 -p 8080:8080 node bash
cmd-php:
	docker compose run -it --rm php bash
build:
	docker compose build