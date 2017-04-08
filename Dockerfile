FROM node:latest

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/PostClipsFE
RUN mkdir $HOME
WORKDIR $HOME

RUN npm install -g @angular/cli@latest
COPY package.json $HOME/package.json
RUN npm install && npm cache clean
COPY . /PostClipsFE
#RUN chown -R nodejs:nodejs /PostClipsFE

EXPOSE 4200
EXPOSE 49153

CMD ["npm", "start", "--host=0.0.0.0"]
