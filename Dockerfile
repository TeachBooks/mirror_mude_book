FROM python:3.11-slim-bullseye
WORKDIR /book
RUN apt-get update && apt-get -y install git
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
CMD ["./docker.sh"]
