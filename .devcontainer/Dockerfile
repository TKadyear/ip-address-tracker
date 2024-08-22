FROM mcr.microsoft.com/azure-functions/node:4-node18-core-tools

# install some tools
RUN apt-get update && \
  apt-get install -y ca-certificates vim wget gnupg lsb-release curl openssl jq --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*
# Install git completion
RUN apt-get update && sudo apt-get install -y git bash-completion && \
  echo 'if [ -f /usr/share/bash-completion/completions/git ]; then . /usr/share/bash-completion/completions/git; fi' >> ~/.bashrc
RUN groupadd -g 1001 docker
RUN usermod -aG docker node
USER node
