# Variables
PYTHON = python3
PIP = pip3
DJANGO_MANAGE = $(PYTHON) manage.py
DJANGO_SETTINGS_MODULE = your_project.settings

# Commandes
install:
	$(PIP) install -r requirements.txt

migrate:
	$(DJANGO_MANAGE) makemigrations
	$(DJANGO_MANAGE) migrate

runserver:
	$(DJANGO_MANAGE) runserver

createsuperuser:
	$(DJANGO_MANAGE) createsuperuser

test:
	$(DJANGO_MANAGE) test

lint:
	$(PYTHON) -m pylint your_project

# Cibles
.PHONY: install migrate runserver createsuperuser test lint

