FROM python:3.11-slim-bullseye
WORKDIR /book
RUN apt-get update && apt-get -y install git gcc
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
ENTRYPOINT ["./build-book.sh"]
CMD ["true"]                   # This gets appended to the ENTRYPOINT, but we can also override it by passing arguments to docker run
