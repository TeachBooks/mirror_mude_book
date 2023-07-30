FROM python:3.11-slim-bullseye
WORKDIR /book
RUN apt-get update && apt-get -y install git
COPY requirements.txt requirements.txt
COPY ./book ./book
COPY ./code ./code
COPY ./README.md ./README.md
COPY ./build-lite.sh ./build-lite.sh
COPY ./docker.sh ./docker.sh
RUN pip install -r requirements.txt
CMD ["sh", "./build-lite.sh"]
