FROM node:13

# Create app directory
WORKDIR /usr/src/app

# Copy the package files into the WORKDIR
# Install all the dependencies from the package file
COPY package*.json ./
RUN npm install

# Put all the non-installed files in the directory
COPY . ./

# Expose the port you are running the express application and start running it
EXPOSE 8080

CMD ["node", "server.js"]
