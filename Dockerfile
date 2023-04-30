FROM ubuntu
WORKDIR /app
VOLUME /root/.ssh

RUN apt update -y
RUN apt upgrade -y
RUN apt install git -y
RUN apt install curl -y
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh |  bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install 18

